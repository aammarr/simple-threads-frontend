<template>
  <div>
    <h1 class="text-center mb-10" style="font-weight: bold; font-size: 15px;">Feed</h1>

    <div class="feed-container">
      <!-- Skeleton Loader State -->
      <template v-if="isLoading">
        <!-- New Post Skeleton -->
        <v-skeleton-loader
          type="avatar, text, button"
          class="new-post-skeleton pa-4"
          elevation="0"
        ></v-skeleton-loader>

        <!-- Post Skeletons -->
        <div v-for="n in 3" :key="n">
          <v-skeleton-loader
            type="avatar, heading, text, image"
            class="post-skeleton pa-4 mb-4"
            elevation="0"
          ></v-skeleton-loader>
        </div>
      </template>

      <!-- Loaded Content -->
      <template v-else>
        <!-- New Post Box -->
        <div class="new-post-box" @click="openNewPost">
          <img :src="userAvatar" alt="User Avatar" class="user-avatar" />
          <span class="whats-new">What's new?</span>
          <v-btn color="primary" class="post-btn">Post</v-btn>
        </div>

        <!-- Posts -->
        <div v-for="post in posts" :key="post.id">
          <PostItem :post="post" />
        </div>
      </template>

      <!-- New Post Dialog -->
      <NewPost ref="newPostDialog" @postCreated="addNewPost" />
    </div>
  </div>
</template>

<script>
import NewPost from "@/components/NewPost.vue";
import PostItem from "@/components/PostItem.vue";

export default {
  components: { NewPost, PostItem },
  data() {
    return {
      isLoading: true,
      userAvatar: "/doc.jpg",
      posts: []
    };
  },
  created() {
    // Simulate API call with 3 second delay
    setTimeout(() => {
      this.posts = [
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
              media: ["/emergency2.jpg"],
              createdAt: "2025-02-05T12:15:30Z" 
            }
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
              media: [],
              createdAt: "2025-02-05T13:00:10Z" 
            }
          ],
          retweets: 3,
          shares: 2,
          createdAt: "2025-02-05T12:55:00Z"
        }
      ];
      this.isLoading = false;
    }, 3000);
  },
  methods: {
    openNewPost() {
      this.$refs.newPostDialog.openDialog();
    },
    addNewPost(newPost) {
      this.posts.unshift(newPost);
    }
  }
};
</script>

<style scoped>
.feed-container {
  max-width: 600px;
  width: 100%;
  margin: auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.new-post-box {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 15px;
  cursor: pointer;
  transition: 0.3s;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
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

/* Skeleton Loader Customization */
.new-post-skeleton {
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
}

.post-skeleton {
  border-bottom: 1px solid rgba(128, 128, 128, 0.3);
}

.v-skeleton-loader__avatar {
  width: 40px !important;
  height: 40px !important;
}

.v-skeleton-loader__button {
  width: 80px !important;
  height: 36px !important;
  margin-left: auto;
}

@media (max-width: 768px) {
  .feed-container {
    width: 95%;
  }

  .user-avatar {
    width: 35px;
    height: 35px;
  }

  .v-skeleton-loader__avatar {
    width: 35px !important;
    height: 35px !important;
  }

  .v-skeleton-loader__button {
    width: 70px !important;
    height: 32px !important;
  }
}
</style>