<template>
  <section class="lg:t-w-[1136px] mx-auto py-16" style="min-height: 90vh;margin-bottom: 130px;"">
    <v-row class="full-h" no-gutters>
      <v-col
        v-if="!$vuetify.breakpoint.mobile"
        align="center"
        align-self="center"
        cols="12"
        md="6"
        lg="6"
        xl="6"
      >
      <section
  class="pa-4 t-rounded-[20px] t-max-w-[494px] login-background"
  style="overflow: hidden; border-radius: 20px;"
>
  <v-img
    src="/images/login-banner.jpg"
    lazy-src="/images/login-banner.jpg"
    height="570"
    width="100%"
    style="object-fit: cover; width: 100%; border-radius: 10px;"
    cover
  >
  </v-img>
</section>

      </v-col>

      <v-col
        class="d-flex flex-column align-center justify-center"
        cols="12"
        :md="$vuetify.breakpoint.mobile ? 12 : 6"
        :lg="$vuetify.breakpoint.mobile ? 12 : 6"
        :xl="$vuetify.breakpoint.mobile ? 12 : 6"
      >
        <v-card
          color="transparent"
          flat
          :max-width="$vuetify.breakpoint.mobile ? 360 : 477"
        >
          <v-form ref="LoginForm">
            <section class="d-flex flex-column align-start mb-5">
              <!-- <v-img
                src="/express-connect-3.png"
                lazy-src="/express-connect-3.png"
                height="68"
                width="240"
                class="mb-5 mt-2"
                contain
              /> -->

              <h1 class="t-font-bold t-text-[46px] t-text-black">
                Welcome Back!
              </h1>

              <span
                class="t-text-[#302E2E] t-font-light t-text-xl max-w-[477px]"
              >
                Please enter your email and phone number to access your account.
              </span>
            </section>

            <v-text-field
              v-model="loginData.email"
              required
              single-line
              placeholder="Email"
              :rules="emailRules"
              @keyup.enter="initLogin"
              type="email"
              outlined
              height="43"
              dense
              class="login-input-fields"
            ></v-text-field>

            <vue-tel-input
              class="custom_intl_selector"
              mode="international"
              :autoFormat="true"
              v-model="loginData.phone"
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

            <!-- OTP Selection -->
            <section class="d-flex flex-column align-start my-4">
              <h3 class="t-font-medium t-text-lg t-text-black mb-2">
                Where would you like to receive OTP (One-Time Password)?
              </h3>
              <v-radio-group
                v-model="otpPreference"
                :rules="[(v) => !!v || 'Please select one option.']"
              >
                <v-radio
                  label="Phone"
                  value="phone"
                  class="t-text-[#302E2E] t-font-light"
                ></v-radio>
                <v-radio
                  label="Email"
                  value="email"
                  class="t-text-[#302E2E] t-font-light"
                ></v-radio>
                <v-radio
                  label="Both Phone and Email"
                  value="both"
                  class="t-text-[#302E2E] t-font-light"
                ></v-radio>
              </v-radio-group>
            </section>

            <v-btn
              depressed
              block
              height="43"
              style="border-radius: 10px"
              class="secondary text-capitalize my-5"
              :loading="loading"
              @click="initLogin"
            >
              Login
            </v-btn>

            <div
              class="d-flex flex-column white--text align-center justify-center"
            >
              <small
                class="t-text-[#302E2E] lg:t-text-xl t-text-base t-font-light"
                >Don't have an account?
                <nuxt-link class="black--text t-font-[450]" to="/register"
                  >Register Now!</nuxt-link
                >
              </small>
            </div>
          </v-form>
        </v-card>
        <small style="font-size: 10px" class="black--text ligthen-5 pa-1">
          {{ `Version: ${AppVersion?.app_version}` }}
        </small>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapState } from "vuex";
import version from "../versions";
export default {
  name: "LoginPage",
  layout: "authLayout",
  auth: "guest",
  data() {
    return {
      loading: false,
      loginData: {
        email: null,
        phone: null,
      },
      otpPreference: null, // For OTP preference selection
      showPassword: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      loginResponse: null,
    };
  },
  methods: {
    setPhoneNumber(number, phoneObj) {
      if (phoneObj?.number) {
        this.loginData.phone = phoneObj?.number;
        if (!phoneObj?.number?.startsWith("+")) {
          this.loginData.phone = `+${phoneObj?.number}`;
        }
      }
    },
    async sendOtp(e) {
      e.preventDefault();
      if (!this.loginData?.email) {
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          text: "Please Enter Email.",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });
        return; // Abort saving data
      }
      this.$store.dispatch("initLoader", true);

      this.$api.expressService
        .sendOtp({ email: this.loginData.email })
        .then((response) => {
          if (response.status) this.activeTab = "otp";
          this.$store.dispatch("initLoader", false);
        });
    },
    async initLogin(e) {
      e.preventDefault();

      if (this.$refs.LoginForm.validate()) {
        if (!this.otpPreference) {
          this.$swal.fire({
            icon: "warning",
            title: "Please select an OTP preference",
            timer: 2000,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
          });
          return;
        }

        if (!this.loginData?.email) {
          this.$swal.fire({
            toast: true,
            timerProgressBar: true,
            position: "top-end",
            icon: "error",
            text: "Please Enter Email.",
            showConfirmButton: false,
            timer: 2000,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", this.$swal.stopTimer);
              toast.addEventListener("mouseleave", this.$swal.resumeTimer);
            },
          });
          return;
        }

        if (!this.loginData?.phone) {
          this.$swal.fire({
            toast: true,
            timerProgressBar: true,
            position: "top-end",
            icon: "error",
            text: "Please Enter Your Phone.",
            showConfirmButton: false,
            timer: 2000,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", this.$swal.stopTimer);
              toast.addEventListener("mouseleave", this.$swal.resumeTimer);
            },
          });
          return;
        }

        this.$store.dispatch("initLoader", true);

        try {
          const response = await this.$api.expressService.sendOtp({
            email: this.loginData.email,
            phone: this.loginData.phone,
            type: this.otpPreference,
            flow: "login",
          });

          if (response?.message === "Invalid details.") {
            this.$swal.fire({
              toast: true,
              timerProgressBar: true,
              position: "top-end",
              icon: "error",
              text: "Account not Found!",
              showConfirmButton: false,
              timer: 2000,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", this.$swal.stopTimer);
                toast.addEventListener("mouseleave", this.$swal.resumeTimer);
              },
            });
            return;
          }
          if (response.status) {
            localStorage.setItem("phone", this.loginData.phone);
            localStorage.setItem("email", this.loginData.email);
            localStorage.setItem("type", this.otpPreference);

            this.$router.push("/verify-user");

            this.$swal.fire({
              toast: true,
              timerProgressBar: true,
              position: "top-end",
              icon: "success",
              text: "OTP sent successfully.",
              showConfirmButton: false,
              timer: 2000,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", this.$swal.stopTimer);
                toast.addEventListener("mouseleave", this.$swal.resumeTimer);
              },
            });
          }
        } catch (error) {
          // console.log(error);

          this.$swal.fire({
            toast: true,
            timerProgressBar: true,
            position: "top-end",
            icon: "error",
            text: "Phone Number is not associated with this email.",
            showConfirmButton: false,
            timer: 2000,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", this.$swal.stopTimer);
              toast.addEventListener("mouseleave", this.$swal.resumeTimer);
            },
          });
        } finally {
          this.$store.dispatch("initLoader", false);
        }
      }
    },
  },
  computed: {
    AppVersion() {
      return version;
    },
  },
};
</script>

<style lang="scss" scoped>
.login-input-fields {
  .v-input__control {
    .v-input__slot {
      padding: 16px 20px 16px 20px !important;
      border-radius: 8px !important;
      border: solid 1px #d0d5dd !important;
      opacity: 0px;
      box-shadow: 0 !important;
    }
  }
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
  height: 40px;
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
