<template>
  <div class="settings-container">
    <!-- Tabs Navigation -->
    <v-tabs v-model="activeTab" >
      <v-tab @click="$router.push('/settings/profile')">Profile</v-tab>
      <v-tab @click="$router.push('/settings/verify-account')">Verification</v-tab>
    </v-tabs>

    <!-- Tabs Content -->
    <!-- <v-tabs-items v-model="activeTab">
      <v-tab-item>
        <EditProfile :user="user" @save="handleProfileSave" />
      </v-tab-item>

      <v-tab-item v-if="user.accountType === 'Alim'">
        <Verification />
      </v-tab-item>
    </v-tabs-items> -->
    <router-view/>
  </div>
</template>

<script>


export default {
  data() {
    return {
      activeTab: 0,
  
    };
  },

  methods: {
    handleProfileSave(updatedUser) {
      this.user = { ...this.user, ...updatedUser };
    }
  },
  mounted() {

   if (this.$route.path==='/settings/verify-account')
    
 {   this.activeTab=1;}

 else if (this.$route.path==='/settings/profile') 
 {
  this.activeTab=0
 }
  },
};
</script>

<style scoped>
.settings-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.v-tabs {
  margin-bottom: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.v-tab {
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
}

.v-item-group {
  background: transparent;
}
</style>