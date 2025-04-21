<template>
  <v-app dark fixed>
    <Loader :loading="appLoader" />

    <Sidebar />
    <Header/>
    

    <!-- <v-container>
      <v-btn color="primary" @click="openLoginDialog">Login</v-btn>
      <v-btn color="secondary" @click="openSignupDialog">Sign Up</v-btn>
    </v-container> -->
    <LoginDialog />
    <SignUpDialog />
    <v-main style="padding: 0 !important; background-color: #FAFAFA;" class="mb-10 "   
    
    >
      <v-container
        class="h-full mt-3"
        fluid
        style="padding: 0 !important; margin-bottom: 30px;"
        :style="!$route.path.includes('settings') && 'max-width: 600px;'"
        :class="{ 'mt-16': $vuetify.breakpoint.smAndDown }"
      >
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed"  class="flex justify-center footer-main">
      <div class="mid-container">
        <div class="footer-bottom">
          <div class="copyright" style="text-align: center">
            <div style="display: flex; justify-content: center; align-items: center;">
            <div>
            <span style="color: #e11f27; font-weight: bold; font-size: 14px"
              >©</span
            >2025 Islamic.</div>
         
            <div class="footer-nav-items">
          
              <div
                @click="handleRouteChange('/terms')"
                :class="
                  ($route.path === '/terms' ||
                    $route.path.includes('template')) &&
                  'active-button'
                "
                class="nav-button"
              >
Terms              </div>
            
         
              <div
                @click="handleRouteChange('/privacy-policy')"
                :class="$route.path.includes('privacy-policy') && 'active-button'"
                class="nav-button"
              >
                Privacy Policy
              </div>
          
          
            </div>
          </div>
            <small style="font-size: 10px" class="black--text pa-1">
              Designed and developed by
              <a
                href="https://adateck.com"
                style="color: black; text-decoration: underline; font-size: 10px;"
                target="_blank"
                >Adateck.</a
              >
              <!-- {{ `Version: ${AppVersion?.app_version}` }} -->
            </small>
          </div>
          <div>
            <!-- <div class="footer-icons">
              <div class="footer-icon">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.00631 0.0724514C1.05282 0.303639 0.297668 1.06344 0.072668 2.01795C0.0101367 2.28317 0.00146484 3.50403 0.00146484 11.9998C0.00146484 20.4957 0.0101367 21.7165 0.072668 21.9817C0.300199 22.9471 1.05634 23.7004 2.02764 23.9294C2.47689 24.0354 21.5321 24.0333 21.9819 23.9272C22.9166 23.7069 23.7051 22.9395 23.9062 22.0545C23.9355 21.9256 23.9791 21.7835 24.0032 21.7388C24.0574 21.6378 24.0634 2.18726 24.0091 2.22078C23.9883 2.23362 23.9471 2.12867 23.9175 1.98753C23.7775 1.32022 23.2112 0.596842 22.5913 0.293842C21.9517 -0.0188142 22.6754 0.000920174 11.9766 0.0044358C3.88736 0.00710767 2.22906 0.0184514 2.00631 0.0724514ZM0.0230742 11.9998C0.0230742 17.3752 0.0285117 19.5742 0.0352148 16.8866C0.041918 14.1988 0.041918 9.8008 0.0352148 7.11312C0.0285117 4.4254 0.0230742 6.62445 0.0230742 11.9998ZM3.92692 3.785C3.97614 3.85592 5.40484 5.93623 7.10186 8.4079C9.87259 12.4435 10.1814 12.9114 10.1294 12.9947C10.0838 13.0678 4.30154 19.8151 3.92209 20.2381L3.82745 20.3436H4.5505H5.2735L8.05947 17.1042C10.299 14.5001 10.8552 13.8782 10.8954 13.9338C10.9229 13.9719 11.9253 15.4296 13.1231 17.1733L15.3009 20.3436H17.7286C19.0638 20.3436 20.1563 20.338 20.1563 20.3311C20.1563 20.3242 18.6707 18.1568 16.8551 15.5147L13.5539 10.7108L13.6607 10.5936C13.8959 10.3354 19.5306 3.76925 19.5637 3.71469C19.5917 3.66875 19.4442 3.6568 18.8817 3.65933L18.1641 3.66261L15.5626 6.70273C14.1317 8.37481 12.9418 9.73803 12.9184 9.73212C12.8949 9.72626 11.9379 8.35672 10.7918 6.68876L8.70779 3.65609H6.27259H3.83743L3.92692 3.785ZM5.84242 4.79281C5.92764 4.9339 15.9056 19.2012 15.9564 19.2546C15.9997 19.3001 16.2691 19.3111 17.0987 19.3015L18.1845 19.2889L13.0963 12.0116L8.00809 4.73422H6.90756C6.03953 4.73422 5.81448 4.74659 5.84242 4.79281Z"
                      fill="#302E2E"
                    />
                  </svg>
                </a>
              </div>
              <div class="footer-icon">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                      fill="#302E2E"
                    />
                  </svg>
                </a>
              </div>
              <div class="footer-icon">
                <a href="#">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                      fill="#302E2E"
                    />
                  </svg>
                </a>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import version from "../versions";
import { mapGetters, mapActions } from "vuex";
import Sidebar from "@/components/Sidebar.vue";
import Header from "@/components/Header.vue";

export default {
  components: {
    Sidebar,
    Header,
  },
  name: "DefaultLayout",
  data() {
    return {

      clipped: false,
      drawer: false,
      fixed: false,
      dropdownItems: [
        { text: "Patients", route: "/patients" },
        {
          text: "Healthcare Professionals",
          route: "/healthcare-professionals",
        },
      ],
      headerMenu: [
        // {
        //   name: "Home",
        //   to: "/",
        // },

        {
          name: "Find Care",
          to: "/find-care",
        },
        {
          name: "Products",
          to: "#products",
        },
        {
          name: "Previsit Review",
          to: "parent",
        },
        {
          name: "Patients",
          to: "/patients",
        },
        {
          name: "Healthcare Professionals",
          to: "/healthcare-professionals",
        },
        {
          name: "Blogs",
          to: "/blogs",
        },
        {
          name: "Login",
          to: "/login",
        },
        // {
        //   name: "Register as a Practice",
        //   to: "/login",
        // },
      ],
      miniVariant: false,
    };
  },
  mounted() {
    console.log(this.$auth.user);

    // get token from local storage
    const expressData = localStorage.getItem("expressData");
    // if token is available
    if (expressData) {
      // parse the token
      let data = JSON.parse(expressData);
      // set in store
      this.$store.commit("setExpressData", data);
      // set the token
      this.$axios.setHeader("X-Auth-Token", data?.token || "");
    }

    // find expressUserData from local Storage
    const expressUserData = localStorage.getItem("expressUserData");
    if (expressUserData) {
      let data = JSON.parse(expressUserData);
      this.$store.commit("setUser", data);
    }

    // find chiefComplaint from local storage
    const chiefComplaint = localStorage.getItem("chiefComplaint");
    if (chiefComplaint) {
      let data = JSON.parse(chiefComplaint);
      this.$store.commit("setSelectedComplaint", data);
    }

    // this.$api.authService.fetchUser().then((response) => {
    //   if (response?.data) {
    //     this.$store.commit("setUser", response.data);
    //     localStorage.setItem("expressUserData", JSON.stringify(response.data));
    //   }
    // });

    this.$store.dispatch("fetchAgeRanges");
  },
  computed: {
    ...mapGetters(["expressId", "appLoader"]),
    AppVersion() {
      return version;
    },
    filteredHeaderMenu() {
      return this.headerMenu.filter(
        (item) => item.to !== "/login" || !this.$auth?.user
      );
    },
    userImage() {
      if (this.$auth?.user?.profile_image) {
        return this.$auth?.user.profile_image;
      } else if (this.$auth?.user?.account_type === "patient") {
        return "https://previsit.s3.amazonaws.com/279035391124904831690874747436patient.jpeg";
      }
    },
    isProductsActive() {
      // Check if the current route matches "products", "patients", or "healthcare-professionals"
      return (
        this.$route.path.includes("products") ||
        this.$route.path.includes("patients") ||
        this.$route.path.includes("healthcare-professionals")
      );
    },
  },
  methods: {
    ...mapActions("dialog", ["openLoginDialog", "openSignupDialog"]),

    openLogin() {
      this.$store.commit("toggleLoginDialog", true);
    },
    openSignUp() {
      this.$store.commit("toggleSignUpDialog", true);
    },
    registerPractice() {
      window.location.href = `${process.env.FE_BASE_URL}register-as-a-practice`;
    },
    async logout() {
      await this.$auth.logout().then(() => {
        // this.$store.commit("setDemographicDetailsCompleted", true);
        // this.$store.commit("setInsuranceDetailsCompleted", true);
        this.$store.commit("resetExpressData");

        this.$router.push("/login");
      });
    },

    scrollToSection(targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    },
    handleRouteChange(href) {
      console.log(this.$route.path, href, this.expressId);
      if (this.expressId) {
        if (
          this.$route.path === "/template" ||
          this.$route.path === "/template/history-of-present-illness" ||
          this.$route.path === "/template/past-medical-family-social-history" ||
          this.$route.path === "/template/review-of-systems" ||
          this.$route.path === "/template/health-maintenance-and-screenings"
        ) {
          this.$swal
            .fire({
              title: "Are you sure?",
              text: "You want to quit the form?",
              icon: "info",
              showCancelButton: true,
              confirmButtonText: "Yes",
              cancelButtonText: "No",
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                localStorage.clear();
                // Reset the expressData
                this.$store.commit("resetExpressData");
                // take to find care page
                this.$router.push(href);
              } else {
                return;
              }
            });
        } else this.$router.push(href);
      } else this.$router.push(href);
    },
    handleLogin() {
      console.log(this.$axios?.defaults?.headers?.common);
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You are being redirected to Previsit Review, the parent company of Express Triage, to gather all necessary insurance and clinical information for submission to our network providers.",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            // Get the token from Axios headers
            const token =
              this.$axios?.defaults?.headers?.common["x-auth-token"];

            // Construct the redirect URL
            const baseUrl = process.env.FE_BASE_URL;
            const redirectUrl = token
              ? `${baseUrl}redirect-express?token=${token}`
              : baseUrl;

            console.log(redirectUrl);

            // Redirect the user
            window.location.href = redirectUrl;
          }
        });
    },
  },
};
</script>

<style lang="scss">
.h-full {
  height: 100% !important;
}

.w-full {
  width: 100% !important;
}

.pointer {
  cursor: pointer;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;

  // @media (min-width: 1264px) {
  //   width: 1300px;
  // }
  .app-bar-icon {
    display: none;
  }

  .header-nav-items {
    display: flex;
    font-size: 16px;
    gap: 20px;
    color: black;
    align-items: center;
    .active-button {
      color: $primary-color !important;
      font-weight: 500;

    }

    .nav-button {
      cursor: pointer;
      color: black;

      &:hover {
        color: $primary-color;
        font-weight: 500;
        border-radius: 40px 0px 0px 0px;
      }
    }
  }
}

// @media (min-width: 900px) and (max-width: 1264px) {
//   .header-container {
//     width: 850px;
//   }
// }

@media (max-width: 753px) {
  .header-container {
    // justify-content: flex-start;
    /* Change justify-content to flex-start for left alignment */
    padding: 0 20px;
    gap: 60px;

    .header-nav-items {
      display: none;
    }

    .app-bar-icon {
      display: block;
    }
  }
}

@media (max-width: 753px) {
  .header-container {
    // justify-content: flex-start;
    /* Change justify-content to flex-start for left alignment */
    padding: 0 5px;
    gap: 5px;
  }
}

p {
  font-size: 15px !important;
}

.footer-main {
  background-color: #f2eff8 !important;
  margin-top: 200px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;

  .footer-top-left {
    font-family: Ubuntu !important;
    font-size: 30px;
    font-weight: bold;
  }

  .footer-top-right {
    display: flex;
    align-items: center;
    gap: 15px;

    .email-field {
      background: white;
      color: black;
      padding: 10px 8px;
      border-radius: 15px;
      width: 300px;
    }

    .subscribe-button {
      padding: 10px 12px;
      font-size: 16px;
      background: #df232f;
      color: white;

      border-radius: 10px;

      &:hover {
        cursor: pointer;
        background: #c21f2a;
      }
    }
  }
}

// .footer-second-container {
//   display: flex;
//   justify-content: space-between;
//   padding-bottom: 30px;

//   .footer-image {
//     width: 60%;
//   }

//   .footer-nav-items {
//     display: flex;
//     gap: 20px;
//     padding-top: 20px;

//     .active-button {
//       color: #df232f;
//       font-weight: 500;
//     }

//     .nav-button {
//       cursor: pointer;

//       &:hover {
//         color: #df232f;
//         font-weight: 500;
//       }
//     }
//   }
// }

.footer-nav-items {
  display: flex;
  align-items: center;
  gap: 2px !important;
  font-size: 12px;
  flex-wrap: wrap;
  margin-top: 2px;

  .active-button {
    color: $primary-color;
    font-weight: 500;
  }

  .nav-button {
    cursor: pointer;

    &:hover {
      color: $primary-color;
      font-weight: 500;
    }
  }
}

.footer-bottom {
  padding: 5px 0;
  display: flex;
  justify-content: center;

  .footer-icons {
    display: flex;
    gap: 15px;
  }
}

@media (max-width: 1200px) {
  .footer-main {
    margin-top: 250;
  }
}

@media (max-width: 619px) {
  .footer-top {
    flex-direction: column;

    .footer-top-left {
      padding-bottom: 10px;
    }

    .footer-top-right {
      .email-field {
        width: 230px;
      }
    }
  }

  .footer-nav-items {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .footer-icons {
      justify-content: center;
      margin-top: 20px;
    }
  }

  .footer-main {
    margin-top: 280px;
  }
}
</style>
<style scoped>
.sidebar {
  background-color: white;
  border-right: 1px solid #ddd;
}
.sidebar-text {
  font-weight: 500;
  font-size: 16px;
}
</style>