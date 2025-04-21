<template>
    <v-dialog v-model="signupDialog" max-width="600px" content-class="custom-dialog">
      <v-card class="pa-2 rounded-lg">
        <!-- Close Button -->
        <v-btn icon class="close-btn" @click="closeDialogs">
          <v-icon>mdi-close</v-icon>
        </v-btn>
  
        <!-- Title -->
        <v-card-title class="text-h6 text-center font-weight-bold justify-center">
          Create Your Account 🚀
        </v-card-title>
  
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="First Name" v-model="firstName" outlined dense class="custom-input"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Last Name" v-model="lastName" outlined dense class="custom-input"></v-text-field>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Username" v-model="username" outlined dense class="custom-input"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Phone" v-model="phone" outlined dense class="custom-input"></v-text-field>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="City" v-model="city" outlined dense class="custom-input"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="State" v-model="state" outlined dense class="custom-input"></v-text-field>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Country" v-model="country" outlined dense class="custom-input"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-select label="Account Type" v-model="accountType" :items="['User', 'Aalim']" outlined dense class="custom-input"></v-select>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Email" v-model="email" outlined dense class="custom-input"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" class="py-1">
                <v-text-field label="Password" v-model="password" outlined dense type="password" class="custom-input"></v-text-field>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col cols="12" class="py-1">
                <v-text-field label="Confirm Password" v-model="confirmPassword" outlined dense type="password" class="custom-input"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
  
        <v-card-actions class="d-flex flex-column py-1">
          <v-btn block color="primary" class="custom-btn" @click="handleSignup">
            Sign Up
          </v-btn>
          <v-btn text class="custom-link mt-4" @click="switchToLogin">
            Already have an account? <span class="text-primary">Login</span>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { mapState, mapActions } from "vuex";
  
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        username: "",
        phone: "",
        city: "",
        state: "",
        country: "",
        accountType: "User",
        email: "",
        password: "",
        confirmPassword: "",
      };
    },
    computed: {
      ...mapState("dialog", ["signupDialog"]),
    },
    methods: {
      ...mapActions("dialog", ["closeDialogs", "openLoginDialog"]),
      handleSignup() {
        console.log("Signing up with", this.email, this.password);
        this.closeDialogs();
      },
      switchToLogin() {
        this.openLoginDialog();
      },
    },
  };
  </script>
  
  <style scoped>
  .custom-dialog {
    border-radius: 12px;
  }
  
  /* Close Button Styling */
  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 10;
  }
  
  /* Input Styling */
  .custom-input ::v-deep(input) {
    border-radius: 8px;
  }
  
  /* Button Styling */
  .custom-btn {
    font-weight: bold;
    border-radius: 8px;
    height: 44px;
    transition: 0.3s;
  }
  
  .custom-btn:hover {
    background-color: #0044cc;
    color: white;
  }
  
  /* Sign Up Link */
  .custom-link {
    font-size: 14px;
    text-transform: none;
  }
  
  .custom-link span {
    font-weight: bold;
  }
  
  @media (max-width: 600px) {
    .v-card {
      padding: 16px !important;
    }
  }
  </style>
  