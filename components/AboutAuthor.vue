<template>
    <div class="auth-main-container">
      <div class="auth-text">About the Author</div>
      <div class="auth-img-style">
        <v-img
          :src="image"
          :lazy-src="image"
          style="width: 100%; height: 100%; object-fit: cover;"
        />
      </div>
      <h1 class="text-3xl font-bold text-indigo-600 mb-4 small-heading-blog" :style="$vuetify.breakpoint.xs && {textAlign:'center'}">
        {{ name }}
      </h1>
      <div>{{ designation }}</div>
      <p class="text-style" v-html="description" style="text-align: center;"></p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      designation: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>

  .auth-main-container {
    box-shadow: -7px 7px 0px 0px #C0C9E7;
border-radius: 10px;
      min-height: 682px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      padding: 0 15px;
      .auth-img-style {
          width: 142px; height: 142px; border: 5px solid #df232f; border-radius: 50%; overflow: hidden;
      }
      .auth-text {
        color: $primary-color;
        font-size: 18px;
        font-weight: bold;
      }
  }
  
  
  </style>
    
    
  