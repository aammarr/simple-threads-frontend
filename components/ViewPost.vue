<template>

  
    <div class="post" :class="{ 'no-border': isLastPost }">
      <!-- User Info -->
      <div class="post-header">
        <img :src="post.avatar" class="avatar" />
        <div class="user-info">
          <span class="user-name">{{ post.user }}</span>
          <span class="post-time">{{ formatDate(post.createdAt) }}</span>
        </div>
      </div>
  

      <div class="post-container">
      <!-- Post Content -->
      <p v-if="post.content">{{ post.content }}</p>
  
      <!-- Media Display -->
      <div class="media-container" v-if="post.media.length">
        <img
          v-for="(img, index) in post.media"
          v-if="isImage(img)"
          :src="img"
          :key="'img-' + index"
          class="post-image"
        />
        <video
          v-for="(vid, index) in post.media"
          v-if="isVideo(vid)"
          :src="vid"
          controls
          :key="'vid-' + index"
          class="post-video"
        ></video>
      </div>
  
      <!-- Actions -->
      <div class="actions">
        <v-btn icon @click="toggleLike">
          <v-icon :color="liked ? 'red' : 'black'">{{ liked ? "mdi-heart" : "mdi-heart-outline" }}</v-icon>
        </v-btn>
        <span class="count">{{ post.likes }}</span>
  
        <v-btn icon @click="toggleComments">
          <v-icon>mdi-comment-outline</v-icon>
        </v-btn>
        <span class="count">{{ post.comments.length }}</span>
  
        <v-btn icon>
          <v-icon>mdi-repeat</v-icon>
        </v-btn>
        <span class="count">{{ post.retweets }}</span>
  
        <v-btn icon>
          <v-icon>mdi-share-outline</v-icon>
        </v-btn>
        <span class="count">{{ post.shares }}</span>
      </div>
    </div>
      <!-- Comments Section -->
      <div v-if="showComments" class="comments-section">
        <div v-for="(comment, index) in post.comments" :key="'comment-' + index" class="comment">
          <img :src="comment.avatar" class="comment-avatar" />
          <div class="comment-content">
            <div class="comment-header">
              <span class="comment-user">{{ comment.user }}</span>
              <span class="comment-time">{{ formatDate(comment.createdAt) }}</span>
            </div>
            <p v-if="comment.text">{{ comment.text }}</p>
            <img 
  v-if="comment.media" 
  :src="comment.media" 
  class="comment-image" 
  @click="openImageDialog(comment.media)" 
  style="cursor: pointer"
/>          </div>
        </div>
  
        <!-- New Comment Input -->
        <div class="new-comment">
          <!-- Hidden File Input -->
          <input type="file" ref="fileInput" accept="image/*" hidden @change="handleImageUpload" />
  
          <v-text-field
            v-model="newComment"
            label="Write a comment..."
            dense
            filled
            class="comment-input"
            prepend-inner-icon="mdi-camera"
            append-icon="mdi-send"
            @click:prepend-inner="triggerFileInput"
            @click:append="addComment"
          ></v-text-field>
        </div>
  
        <!-- Image Preview -->
        <div v-if="selectedImage" class="comment-preview">
          <img :src="selectedImage" class="preview-image" />
          <v-btn icon small @click="removeImage"><v-icon>mdi-close</v-icon></v-btn>
        </div>
      </div>
      <v-dialog v-model="isDialogOpen" max-width="450px" max-height="90vh">
  <v-card>
    <div class="d-flex justify-end">
      <v-btn icon @click="isDialogOpen = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-card-text class="d-flex justify-center">
      <img :src="selectedCommentImage" class="dialog-image" />
    </v-card-text>
  </v-card>
</v-dialog>

    </div>
  </template>
  
  
  
  <script>
export default {
  props: {
    post: Object,
  },
  data() {
    return {
      liked: false,
      showComments: true,
      newComment: "",
      selectedImage: null,
    selectedCommentImage: null,
    isDialogOpen: false,
    };
  },
  computed: {
    isLastPost() {
      return this.$parent.posts?.indexOf(this.post) === this.$parent.posts.length - 1;
    },
  },
  methods: {
    openImageDialog(image) {
    this.selectedCommentImage = image;
    this.isDialogOpen = true;
  },
    toggleLike() {
      this.liked = !this.liked;
      this.post.likes += this.liked ? 1 : -1;
    },
 
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.selectedImage = reader.result;
        };
        reader.readAsDataURL(file);
      }
    },
    removeImage() {
      this.selectedImage = null;
    },
    addComment() {
      if (!this.newComment.trim() && !this.selectedImage) return;

      this.post.comments.push({
        user: "You",
        avatar: "/your-avatar.jpg",
        text: this.newComment,
        image: this.selectedImage,
        createdAt: new Date().toISOString(),
      });

      this.newComment = "";
      this.selectedImage = null;
    },
    formatDate(createdAt) {
      if (!createdAt) return "";
      const date = new Date(createdAt);
      return date
        .toLocaleString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
        .replace(",", " |");
    },
    isImage(file) {
      return file.includes(".jpg") || file.includes(".jpeg") || file.includes(".png") || file.includes(".gif");
    },
    isVideo(file) {
      return file.includes(".mp4") || file.includes(".mov") || file.includes(".avi");
    },
  },
};
</script>

  
  
  <style scoped>
  .post-container {
    padding-left: 45px;
  }
  .post {
    background: #fff;
    margin-bottom: 2px;
    padding: 22px;
  }
  .no-border {
    border-bottom: none;
  }
  
  .post-header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .user-info {
    display: flex;
    flex-direction: column;
  }
  
  .post-time {
    font-size: 12px;
    color: gray;
  }
  
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 8px;
  }
  
  .user-name {
    font-weight: bold;
  }
  
  .media-container {
    margin-top: 8px;
  }
  
  .post-image {
    width: 100%;
    border-radius: 8px;
  }
  
  .post-video,
  .post-audio {
    width: 100%;
    border-radius: 8px;
  }
  
  .actions {
    display: flex;
    align-items: center;
    margin-top: 8px;
    gap: 2px;
  }
  
  .count {
    font-size: 14px;
    color: #555;
    min-width: 20px;
  }
  
  .comments-section {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #ddd;
  }
  
  .comment {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .comment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  
  .comment-avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 8px;
  }
  
  .comment-content {
    background: #f5f5f5;
    padding: 8px;
    border-radius: 8px;
    flex: 1;
  }
  
  .comment-user {
    font-weight: bold;
    display: block;
  }
  
  .comment-time {
    font-size: 12px;
    color: gray;
    margin-left: auto;
  }
  
  .comment-image {
  width: 100px;
  height: auto;
  border-radius: 8px;
  margin-top: 5px;
}

.comment-preview {
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 5px;
}

.preview-image {
  width: 50px;
  height: 50px;
  border-radius: 8px;
  object-fit: cover;
}

.new-comment {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
}

.comment-input {
  flex: 1;
}

.dialog-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

  
  </style>
  