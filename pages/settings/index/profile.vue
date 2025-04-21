<template>

<EditProfile :user="user" @save="handleProfileSave" />
</template>

<script>
import EditProfile from '@/components/EditProfileModal.vue';
import Verification from '@/components/VerificationModal.vue';

export default {
  components: { EditProfile, Verification },
  data() {
    return {
      activeTab: 0,
      user: {
        // Same user data structure as before
        accountType: 'Alim', // or 'User'
        name: "John Doe",
        username: "johndoe",
        avatar: "doc.jpg",
        bio: "Tech enthusiast | Web Developer",
        posts: 120,
        followers: "1.2K",
        following: 356,
        email: "john@example.com",
        accountType: "User",
        firstName: "John",
        lastName: "Doe",
        city: "New York",
        state: "NY",
        country: "USA",
        phone: "+1 555-123-4567",      }
    };
  },

  methods: {
    handleProfileSave(updatedUser) {
      this.user = { ...this.user, ...updatedUser };
    }
  },
  mounted() {

console.log(this.$route.path);
},
};
</script>