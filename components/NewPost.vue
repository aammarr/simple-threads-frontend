<template>
  <v-dialog v-model="dialog" max-width="500px">
    <v-card elevation="0" rounded="xl">
      <!-- HEADER -->
      <v-card-title class="header">
        <v-btn text @click="closeDialog">
Cancel        </v-btn>
        <span class="title">New Thread</span>
        <v-btn icon>
          <v-icon>mdi-dots-horizontal</v-icon>
        </v-btn>
      </v-card-title>

      <!-- Bottom border for header -->
      <div class="header-border"></div>

      <v-card-text>
        <div class="post-container">
          <!-- Profile Image -->
          <img :src="userAvatar" class="avatar" />

          <!-- Post Content -->
          <div class="post-content">
            <div class="username">{{ userName }}</div>

            <!-- Input Field (No Border) -->
            <textarea
              v-model="content"
              placeholder="What's new?"
              class="post-input"
            ></textarea>
          </div>
        </div>
      </v-card-text>

      <!-- ACTIONS -->
      <v-card-actions class="actions">
        <v-spacer></v-spacer>
        <v-btn color="primary" class="post-btn" @click="postThread">Post</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false, // Controls dialog visibility
      content: "",
      userName: "John Doe", // Replace with dynamic user data
      userAvatar: "/doc.jpg", // Replace with actual user avatar
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
    postThread() {
      if (!this.content.trim()) return;

      const newPost = {
        id: Date.now(),
        user: this.userName,
        avatar: this.userAvatar,
        content: this.content,
        type: "text",
        likes: 0,
        comments: 0,
        retweets: 0,
      };

      this.$emit("postCreated", newPost);
      this.closeDialog();
      this.content = "";
    },
  },
};
</script>

<style scoped>
/* HEADER */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
}

.title {
  font-size: 13px !important;
  font-weight: bold;
}

.header-border {
  width: 100%;
  height: 1px;
  background: rgba(128, 128, 128, 0.3); /* Faded border */
}

/* MAIN POST CONTENT */
.post-container {
  display: flex;
  align-items: flex-start;
  padding: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
}

.post-content {
  flex: 1;
}

.username {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 1px;
}

/* INPUT FIELD */
.post-input {
  width: 100%;
  font-size: 12px;
  border: none;
  outline: none;
  resize: none;
  background: transparent;
}

/* ACTIONS */
.actions {
  padding: 12px;
}

.post-btn {
  font-size: 12px;
  text-transform: none;
}
</style>
