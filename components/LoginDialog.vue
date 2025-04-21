<template>
    <v-dialog v-model="loginDialog" max-width="380px" content-class="custom-dialog">
      <v-card class="pa-5 rounded-lg">
        <!-- Close Button -->
        <v-btn icon class="close-btn" @click="closeDialogs">
          <v-icon>mdi-close</v-icon>
        </v-btn>
  
        <!-- Title -->
        <v-card-title class="text-h6 text-center font-weight-bold justify-center">
          Welcome Back 👋
        </v-card-title>
  
        <v-card-text>
          <v-text-field 
            label="Email" 
            v-model="email" 
            outlined 
            dense 
            class="custom-input"
          ></v-text-field>
  
          <v-text-field 
            label="Password" 
            v-model="password" 
            outlined 
            dense 
            type="password"
            class="custom-input"
          ></v-text-field>
        </v-card-text>
  
        <v-card-actions class="d-flex flex-column">
          <v-btn block color="primary" class="custom-btn" @click="handleLogin">
            Login
          </v-btn>
  
          <v-btn text class="forgot-password mt-2" @click="forgotPassword">
            Forgot Password?
          </v-btn>
  
          <v-btn text class="custom-link mt-4" @click="switchToSignup">
            Don't have an account? <span class="text-primary">Sign Up</span>
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
        email: "",
        password: "",
      };
    },
    computed: {
      ...mapState("dialog", ["loginDialog"]),
    },
    methods: {
      ...mapActions("dialog", ["closeDialogs", "openSignupDialog"]),
      handleLogin() {
        console.log("Logging in with", this.email, this.password);
        this.closeDialogs();
      },
      switchToSignup() {
        this.openSignupDialog();
      },
      forgotPassword() {
        console.log("Redirecting to forgot password...");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Dialog Styling */
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
  
  /* Forgot Password Link */
  .forgot-password {
    font-size: 14px;
    color: gray;
    text-transform: none;
  }
  
  .forgot-password:hover {
    text-decoration: underline;
  }
  
  /* Sign Up Link */
  .custom-link {
    font-size: 14px;
    text-transform: none;
  }
  
  .custom-link span {
    font-weight: bold;
  }
  </style>
  