<template>
    <v-app-bar v-if="$vuetify.breakpoint.smAndDown" app >
      <v-btn icon>
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-img src="/logo.png" contain width="40" height="40" />
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: "Header",
    data() {
      return {

      };
    },
    methods: {
      handleClick(item) {
        if (item.route) {
          this.$router.push(item.route);
        } else if (item.action) {
          this[item.action]();
        }
      },
      addPost() {
        console.log("Open Add Post Modal");
      },
      openMoreMenu() {
        console.log("Open More Menu");
      },
    },
  };
  </script>