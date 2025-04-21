<template>
    <v-navigation-drawer
      v-if="$vuetify.breakpoint.mdAndUp"
      app
      permanent
      width="80"
      class="sidebar"
    >
      <!-- Logo Section -->
      <div class="logo-container">
        <v-img src="/logo.png" contain width="40" height="40" @click="$router.push('/')" style="cursor: pointer;"/>
      </div>
  
      <!-- Middle Icons -->
      <v-list dense class="icon-list">
        <v-list-item
          v-for="(item, i) in menuItems"
          :key="i"
          link
          @click="handleClick(item)"
          class="icon-item"
        >
          <div class="icon-wrapper">
            <v-icon>{{ item.icon }}</v-icon>
          </div>
        </v-list-item>
      </v-list>
  
      <!-- Bottom Icons -->
      <div class="bottom-container">
        <v-list dense class="bottom-icons">
          <v-list-item-group>
            <v-list-item
              v-for="(item, i) in bottomItems"
              :key="i"
              link
              @click="handleClick(item)"
              class="icon-item"
            >
              <div class="icon-wrapper">
                <v-icon>{{ item.icon }}</v-icon>
              </div>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </v-navigation-drawer>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "Sidebar",
    data() {
      return {
        menuItems: [
          { icon: "mdi-home", route: "/" },
          { icon: "mdi-magnify", route: "/search" },
          { icon: "mdi-plus-box", action: "addPost" },
          { icon: "mdi-heart", route: "/notifications" },
          { icon: "mdi-account", route: "/profile" },
        ],
        bottomItems: [
          { icon: "mdi-pin", route: "/saved" },
          { icon: "mdi-dots-horizontal", action: "openMoreMenu" },
        ],
      };
    },
    methods: {
        ...mapActions("dialog", ["openLoginDialog", "openSignupDialog"]),

      handleClick(item) {
        this.openSignupDialog()
        return
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
  
  <style scoped>
  .sidebar {
    background: white;
    border-right: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    justify-content: space-evenly;
  }
  
  /* Logo Section - 1/7 */
  .logo-container {
    height: 25%;
    display: flex;
    justify-content: center;padding-top: 35px;
  }
  
  /* Middle Icons Section - 4/7 */
  .icon-list {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  
  /* Bottom Icons Section - 2/7 */
  .bottom-container {
    height: 25%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    padding-bottom:10px;
  }
  
  .bottom-icons {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    padding-bottom: 20px;
  }
  
  /* Icon hover effects */
  .icon-item {
    width: 50px; 
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in-out;
  }
  
  .icon-wrapper {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px; /* Squared background */
    transition: background 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
  
  .icon-wrapper:hover {
    transform: scale(1.4);
  }
  </style>
  