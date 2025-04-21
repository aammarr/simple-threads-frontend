<template>
  <v-card
    flat
    color="transparent"
    width="350"
    class="my-10 d-flex flex-column align-center justify-center mx-auto pb-16"
    style="padding-bottom: 150px !important"
  >
    <h1 class="mb-5 font-weight-bold">Verify User</h1>
    <v-text-field
      solo
      v-model="email"
      required
      disabled
      single-line
      placeholder="Email"
      style="width: 100%"
      height="55"
      :rules="emailRules"
      autocomplete="off"
    ></v-text-field>
    <vue-tel-input
      class="custom_intl_selector"
      mode="international"
      disabled
      :autoFormat="true"
      v-model="phone"
      :autoDefaultCountry="true"
      :inputOptions="{
        type: 'tel',
        placeholder: 'Phone Number',
      }"
      :dropdownOptions="{
        showDialCodeInSelection: true,
        showSearchBox: true,
        showDialCodeInList: true,
        showFlags: true,
      }"
      :validCharactersOnly="true"
      @input="setPhoneNumber"
    ></vue-tel-input>

    <span class="my-2">Enter OTP</span>
    <v-text-field
      v-model="otp"
      type="text"
      maxlength="6"
      placeholder="Enter 6-digit OTP"
      style="width: 100%"
      height="55"
      solo
      autocomplete="off"
      @keydown="handleKeyDown"
      @paste="handlePaste"
      @input="handleOtpInput"
    ></v-text-field>

    <div class="d-flex align-center mt-5">
      <span class="black--text" v-if="timerActive"
        >Resend OTP in {{ formattedTime(remainingTime) }}
      </span>
      <v-btn
        v-else
        @click="reInitiateOTP"
        text
        class="ml-2 secondary--text font-weight-bold"
      >
        Resend OTP
      </v-btn>
    </div>
    <v-btn
      @click="checkOTP()"
      block
      height="55"
      class="text-capitalize mt-10"
      depressed
      color="secondary"
      :loading="loading"
    >
      Verify User
    </v-btn>
  </v-card>
</template>
<script>
import helper from "@/helper/customFunction";
export default {
  components: {
    Loader: () => import("@/components/Loader"),
  },
  layout: "authLayout",
  data() {
    return {
      loading: false,
      email: localStorage.getItem("email"),
      phone: localStorage.getItem("phone"),
      type: localStorage.getItem("type"),
      otp: "", // Single OTP input field
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      timerActive: false,
      remainingTime: 3 * 60,
      timerInterval: null,
    };
  },
  mounted() {
    this.startTimer();

    if (this.$route.params.email) {
      this.email = this.$route.params?.email;
    }
    if (this.$route.params.phone) {
      this.phone = this.$route.params?.phone;
    }
  },
  methods: {
    setPhoneNumber(number, phoneObj) {
      if (phoneObj?.number) {
        this.phone = phoneObj?.number;
        if (!phoneObj?.number?.startsWith("+")) {
          this.phone = `+${phoneObj?.number}`;
        }
      }
    },
    formattedTime(time) {
      return helper.formatSecondsToMinutes(time);
    },
    async reInitiateOTP() {
      if (!this.email) {
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          text: "Please enter email",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });
        return;
      }

      this.loading = true;
      this.$store.dispatch("initLoader", true);

      await this.$api.authService
        .forgotPassword({
          email: this.email,
          phone: this.phone,
          type: this.type,
        })
        .then((res) => {
          if (res?.status) {
            this.$swal.fire({
              toast: true,
              timerProgressBar: true,
              position: "top-end",
              icon: "info",
              text: res?.message,
              showConfirmButton: false,
              timer: 2000,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", this.$swal.stopTimer);
                toast.addEventListener("mouseleave", this.$swal.resumeTimer);
              },
            });
            this.startTimer();
          }
        })
        .finally(() => {
          this.loading = false;
          this.$store.dispatch("initLoader", false);
        });
    },
    startTimer() {
      this.timerActive = true;
      this.timerInterval = setInterval(this.updateTimer, 1000);
    },
    updateTimer() {
      if (this.remainingTime > 0) {
        this.remainingTime--;
      } else {
        this.stopTimer();
      }
    },
    stopTimer() {
      clearInterval(this.timerInterval);
      this.timerActive = false;
      this.remainingTime = 3 * 60; // Reset the timer
    },
    handleKeyDown(event) {
      // Allow only numeric keys (0-9), backspace, delete, arrow keys, and Ctrl/Command + V
      const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
      ];
      const isNumber = /^\d$/.test(event.key);
      const isPaste = (event.ctrlKey || event.metaKey) && event.key === "v";
      const isSelecting = (event.ctrlKey || event.metaKey) && event.key === "a";
      const isCopying = (event.ctrlKey || event.metaKey) && event.key === "c";



      if (!isNumber && !allowedKeys.includes(event.key) && !isPaste && !isCopying && !isSelecting) {
        event.preventDefault(); // Block non-numeric input
      }
    },
    handlePaste(event) {
      const pastedText = (event.clipboardData || window.clipboardData).getData("text");
      const numericText = pastedText.replace(/\D/g, ""); // Remove non-numeric characters
      this.otp = numericText.slice(0, 6); // Limit to 6 digits
      event.preventDefault(); // Prevent default paste behavior
    },
    handleOtpInput() {
      // Ensure only numeric input
      this.otp = this.otp.replace(/\D/g, "").slice(0, 6); // Limit to 6 digits
    },
    async checkOTP() {
      if (!this.email || !this.otp || this.otp.length !== 6) {
        this.$store.dispatch("initLoader", false);
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          title: "Error",
          timer: 2000,
          text: "Please enter a valid 6-digit OTP",
        });
        return;
      }

      const payload = {
        email: this.email,
        phone: this.phone,
        code: this.otp,
      };

      try {
        this.$store.dispatch("initLoader", true);
        this.$auth
          .loginWith("local", {
            data: payload,
          })
          .then((res) => {
            if (res?.data?.status) {
              this.$store.dispatch("initLoader", false);

              this.$swal.fire({
                toast: true,
                timerProgressBar: true,
                position: "top-end",
                icon: "success",
                text: "OTP Verified.",
                showConfirmButton: false,
                timer: 2000,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", this.$swal.stopTimer);
                  toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                },
              });
              localStorage.removeItem("email");
              localStorage.removeItem("phone");
              localStorage.removeItem("type");

              this.$router.push("/find-care");
            } else {
              this.$store.dispatch("initLoader", false);
              this.$swal.fire({
                toast: true,
                timerProgressBar: true,
                position: "top-end",
                icon: "error",
                text: "Incorrect OTP!",
                showConfirmButton: false,
                timer: 2000,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", this.$swal.stopTimer);
                  toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                },
              });
            }
          });
      } catch (error) {
        console.log(error.response.data);
        this.$store.dispatch("initLoader", false);
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          text: error.response.data,
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.create__user__btn {
  background: #e7e7e7;
  border: 2px solid #999999 !important;
}

.cursor-pointer {
  cursor: pointer;
}
</style>

<style>
.digit-group input {
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  line-height: 50px;
  text-align: center;
  font-size: 24px;
  font-family: "Raleway", sans-serif;
  font-weight: 200;
  color: black;
  margin: 0 2px;
  border: 1px solid gray;
  border-radius: 5px;

  /* Prevent text selection */
  user-select: none;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */

  /* Prevent long-press options on mobile */
  pointer-events: auto;
  touch-action: manipulation;
  -webkit-touch-callout: none; /* iOS */
}


.splitter {
  padding: 0 5px;
  color: rgb(94, 94, 94);
  font-size: 24px;
}
</style>

<style lang="scss" scoped>
.custom_intl_selector {
  padding: 0 12px;
  // box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
  //   0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background: #fff;
  border-radius: 4px;

  cursor: text;
  height: 54px;
  align-items: center;
  display: flex;

  min-height: inherit;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition-property: height, min-height;
  width: 100%;
  border-color: rgba(229, 231, 235, var(1));
}
</style>
