<template>
    <div class="container" >
      <!-- Thread Header (Separate but same width as feed-container) -->
      <div class="thread-header">
        <v-btn icon class="back-button" @click="$router.back()" small>
          <v-icon small>mdi-arrow-left</v-icon>
        </v-btn>
        <span class="thread-title">Thread</span>
      </div>
  
      <!-- Feed Container -->
      <div class="feed-container">
        <ViewPost v-if="filteredPost" :post="filteredPost" />
        <p v-else>No post found.</p>
      </div>
    </div>
  </template>
  
  <script>
  import ViewPost from "~/components/ViewPost.vue";
  
  export default {
    components: { ViewPost },
    data() {
      return {
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
                media: ["/emergency2.jpg"],
                createdAt: "2025-02-05T12:15:30Z",
              },
              {
                user: "Bob",
                avatar: "/doc2.jpg",
                text: "I agree!",
                media: [],
                createdAt: "2025-02-05T12:18:45Z",
              },
            ],
            retweets: 2,
            shares: 1,
            createdAt: "2025-02-05T12:10:00Z",
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
                createdAt: "2025-02-05T13:00:10Z",
              },
              {
                user: "Dave",
                avatar: "/doc3.jpg",
                text: "Where was this taken?",
                media: ["/emergency1.jpg"],
                createdAt: "2025-02-05T13:05:22Z",
              },
            ],
            retweets: 3,
            shares: 2,
            createdAt: "2025-02-05T12:55:00Z",
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
                media: ["/emergency2.jpg"],
                createdAt: "2025-02-05T14:30:05Z",
              },
              {
                user: "Frank",
                avatar: "/doc1.jpg",
                text: "Hilarious 😂",
                media: [],
                createdAt: "2025-02-05T14:35:12Z",
              },
            ],
            retweets: 5,
            shares: 4,
            createdAt: "2025-02-05T14:25:00Z",
          },
        ],
      };
    },
    computed: {
      filteredPost() {
        const postId = parseInt(this.$route.query.id);
        return this.posts.find((post) => post.id === postId) || null;
      },
    },
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
  

  
  

  
  /* Ensure post items are also responsive */
  .post-item {
    word-wrap: break-word;
    overflow-wrap: break-word;
    max-width: 100%;
  }
  
  /* Adjustments for small screens */
  @media (max-width: 768px) {
    .feed-container {
      width: 95%;
    }
  

  

  

    
  }

  .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Thread Header - Same width as Feed Container */
.thread-header {
  max-width: 600px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 12px;
  margin-bottom:20px
}



/* Back Button - Stays on the left */
.back-button {
  position: absolute;
  left: 0;
}

/* Title Centering */
.thread-title {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  font-weight: bold;
}
  </style>
  