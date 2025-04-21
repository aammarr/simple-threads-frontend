<template>
  <div class="profile-container">

    <!-- Header -->
    <div class="profile-header">
      <div class="header-left">
        <v-btn icon @click="$router.back()">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
        <div class="header-titles">
          <h2>{{ user.name }}</h2>
          <span class="post-count">{{ user.posts }} posts</span>
        </div>
      </div>
      <v-btn icon>
        <v-icon>mdi-dots-horizontal</v-icon>
      </v-btn>
    </div>

    <!-- Profile Info -->
    <div class="profile-info">
      <div class="avatar-section">
        <div
          class="avatar-upload"
          @mouseover="hoverAvatar = true"
          @mouseleave="hoverAvatar = false"
          @click="$refs.avatarInput.click()"
        >
          <img :src="user.avatar" class="profile-avatar" />
          <div class="avatar-overlay" v-show="hoverAvatar">
            {{ user.avatar ? "Update Photo" : "Upload Photo" }}
          </div>
          <input
            type="file"
            ref="avatarInput"
            accept="image/*"
            @change="handleAvatarUpload"
            hidden
          />
        </div>
        <div class="profile-stats">
          <div class="stat-item">
            <strong>{{ user.posts }}</strong>
            <span>posts</span>
          </div>
          <div class="stat-item">
            <strong>{{ user.followers }}</strong>
            <span>followers</span>
          </div>
          <div class="stat-item">
            <strong>{{ user.following }}</strong>
            <span>following</span>
          </div>
        </div>
      </div>
      <h2 class="profile-name">{{ user.name }}</h2>
      <p class="profile-username">@{{ user.username }}</p>
      <p class="profile-bio">{{ user.bio }}</p>
      <div class="profile-actions mb-2">
        <v-btn
          outlined
          small
          class="edit-profile-btn"
          @click="$router.push('/settings/profile')"
        >
          Edit profile
        </v-btn>
    
        <v-btn icon class="share-btn">
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
      </div>
      <div class="profile-actions">

      <v-btn
        outlined
        small
        class="verify-btn"
        @click="$router.push('/settings/verify-account')"
        >
        Verify Account
      </v-btn>
      </div>
    </div>

    <!-- Tabs -->
    <v-tabs v-model="activeTab" class="profile-tabs">
      <v-tab>Threads</v-tab>
      <v-tab>Replies</v-tab>
    </v-tabs>

    <!-- Tab Content -->
    <v-tabs-items v-model="activeTab">
      <v-tab-item>
        <!-- "Start a thread" Section (NewPost Component) -->
        <div class="new-post-box" @click="openNewPost">
          <img :src="user.avatar" alt="User Avatar" class="user-avatar" />
          <span class="whats-new">What's new?</span>
          <v-btn color="primary" class="post-btn">Post</v-btn>
        </div>

        <!-- Posts List -->
        <div v-for="(post, index) in posts" :key="index">
          <PostItem :post="post" />
        </div>
        <NewPost ref="newPostDialog" @postCreated="addNewPost" />
      </v-tab-item>
      <v-tab-item>
        <div v-for="(reply, index) in replies" :key="index">
          <PostItem :post="reply" />
        </div>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
import NewPost from "@/components/NewPost.vue"; // Now properly used
import EditProfileModal from "@/components/EditProfileModal.vue";
import VerificationModal from '@/components/VerificationModal.vue';


export default {
  components: { PostItem, NewPost, EditProfileModal,VerificationModal },
  data() {
    return {
      activeTab: 0,
      editModalVisible: false,
      verifyModalVisible: false,

      hoverAvatar: false,
      user: {
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
        phone: "+1 555-123-4567",
      },
      posts: [
  {
    id: 1,
    user: "John Doe",
    avatar: "/doc.jpg",
    content: "This is a text-only post!",
    media: [],
    type: "text",
    likes: 10,
    comments: [
      { 
        user: "Alice", 
        avatar: "/doc.jpg", 
        text: "Nice post!", 
        media: ["/emergency2.jpg"], // Added an image to this comment
        createdAt: "2025-02-05T12:15:30Z" 
      },
      { 
        user: "Bob", 
        avatar: "/doc2.jpg", 
        text: "I agree!",
        media: [], // No image here
        createdAt: "2025-02-05T12:18:45Z" 
      },
    ],
    retweets: 2,
    shares: 1,
    createdAt: "2025-02-05T12:10:00Z"
  },
  {
    id: 2,
    user: "Jane Smith",
    avatar: "/doc2.jpg",
    content: "Check out this beautiful view! 🌄",
    media: ["/emergency1.jpg"],
    type: "image",
    likes: 20,
    comments: [
      { 
        user: "Charlie", 
        avatar: "/doc2.jpg", 
        text: "Wow, stunning view!",
        media: [], // No image here
        createdAt: "2025-02-05T13:00:10Z" 
      },
      { 
        user: "Dave", 
        avatar: "/doc3.jpg", 
        text: "Where was this taken?", 
        media: ["/emergency1.jpg"], 
        createdAt: "2025-02-05T13:05:22Z" 
      },
    ],
    retweets: 3,
    shares: 2,
    createdAt: "2025-02-05T12:55:00Z"
  },
  {
    id: 3,
    user: "Mike Ross",
    avatar: "/doc3.jpg",
    content: "Watch this crazy video!",
    media: ["/video.mp4"],
    type: "video",
    likes: 30,
    comments: [
      { 
        user: "Eve", 
        avatar: "/doc3.jpg", 
        text: "This is insane!",
        media: ["/emergency2.jpg"], // Another comment with an image
        createdAt: "2025-02-05T14:30:05Z" 
      },
      { 
        user: "Frank", 
        avatar: "/doc1.jpg", 
        text: "Hilarious 😂", 
        media: [], // No image here
        createdAt: "2025-02-05T14:35:12Z" 
      },
    ],
    retweets: 5,
    shares: 4,
    createdAt: "2025-02-05T14:25:00Z"
  },
],
      replies: [
        {
          user: "John Doe",
          content: "Replying to @someone",
          avatar: "doc.jpg",
          likes: 5,
          comments: [],
        },
      ],
    };
  },
  methods: {
    openNewPost() {
      this.$refs.newPostDialog.openDialog(); // Open the dialog from child component
    },
    addNewPost(newPost) {
      this.posts.unshift(newPost);
    },
    handleProfileSave(updatedUser) {
      this.user = { ...this.user, ...updatedUser };
    },
    handleAvatarUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.user.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>

.verify-btn {
  text-transform: none;
  border-radius: 8px;
  margin-left: 8px;
  border-color: #4CAF50 !important;
  color: #4CAF50 !important;
  flex-grow: 1;
}

.loader {
  animation: spin 1s linear infinite;
  border: 2px solid #f3f3f3;
  border-top: 2px solid #3498db;
  border-radius: 50%;
  width: 20px;
  height: 20px;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.avatar-upload {
  position: relative;
  cursor: pointer;
  border-radius: 50%;
  display: inline-block;
}

.avatar-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 500;
  opacity: 0;
  transition: opacity 0.3s;
}

.avatar-upload:hover .avatar-overlay {
  opacity: 1;
}

/* Threads-Specific Styling */
.profile-container {
  max-width: 600px;
  margin: 0 auto;
}

.profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #e0e0e0;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-titles h2 {
  font-size: 20px;
  margin: 0;
}

.post-count {
  font-size: 13px;
  color: #666;
}

.profile-info {
  padding: 16px;
}

.avatar-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.profile-avatar {
  width: 84px;
  height: 84px;
  border-radius: 50%;
  border: 2px solid #000;
  object-fit: cover;
}

.profile-stats {
  display: flex;
  gap: 24px;
}

.stat-item {
  text-align: center;
}

.stat-item strong {
  display: block;
  font-size: 16px;
}

.stat-item span {
  font-size: 14px;
  color: #666;
}

.profile-name {
  margin: 8px 0 4px 0;
  font-size: 20px;
}

.profile-username {
  margin: 0 0 12px 0;
  color: #666;
}

.profile-bio {
  margin: 0 0 16px 0;
  font-size: 14px;
}

.profile-actions {
  display: flex;
  gap: 8px;
  align-items: center;
}

.edit-profile-btn {
  text-transform: none;
  border-radius: 8px;
  flex-grow: 1;
}

.share-btn {
  border: 1px solid #ddd;
  border-radius: 8px;
}

/* Tabs */
.profile-tabs {
  border-bottom: 1px solid #e0e0e0;
}

.v-tab {
  text-transform: none !important;
  font-weight: 600 !important;
  flex: 1;
}
.new-post-box {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3); /* Grey with 30% opacity */
}

.new-post-box:hover {
  background: #f5f5f5;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.whats-new {
  flex-grow: 1;
  color: #777;
  font-size: 16px;
}

.post-btn {
  font-weight: bold;
  text-transform: none;
  border-radius: 20px;
  padding: 6px 12px;
}
</style>
