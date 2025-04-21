<template>
    <div class="question-container">
      <div 
        class="question-header" 
        @click="toggleExpand"
      >
        <!-- Left Icon -->
        <div class="icon-container">
          <img 
            v-if="iconPath" 
            :src="iconPath" 
            :alt="question" 
            class="png-icon" 
          />
        </div>
  
        <!-- Question -->
        <div class="question-text">
          {{ question }}
        </div>
  
        <!-- Right Arrow Icon -->
        <div class="arrow-icon">
          <v-icon color="red">{{ isExpanded ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </div>
      </div>
  
      <!-- Expanded Content -->
      <div 
        v-if="isExpanded" 
        class="expanded-content"
      >
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      iconPath: {
        type: String,
        required: true, // Pass the PNG image path dynamically
      },
      question: {
        type: String,
        required: true, // Ensure the question text is provided
      },
      arrowUpImage: {
        type: String,
        default: "/images/arrow-up.png", // Default path for the up arrow PNG
      },
      arrowDownImage: {
        type: String,
        default: "/images/arrow-down.png", // Default path for the down arrow PNG
      },
    },
    data() {
      return {
        isExpanded: false, // Tracks the expanded state
      };
    },
    methods: {
      toggleExpand() {
        this.isExpanded = !this.isExpanded;
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .question-container {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .question-header {
    display: flex;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    background-color: #f8f9fe;
    transition: background-color 0.2s ease;
    height: 110px;
  }
  
  .question-header:hover {
    background-color: #f1f1f1;
  }
  
  .icon-container {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
  }
  
  .question-text {
    flex: 1;
    font-family: Ubuntu;
    font-size: 22px;
    font-weight: 500;
    line-height: 25.28px;
    text-align: left;
    color: #8969b4;
    margin-left: 40px;
  }
  
  .arrow-icon {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .png-icon {
    width: 60px;
    height: 60px;
    object-fit: contain; /* Ensures the image scales correctly */
  }
  
  .expanded-content {
    padding: 12px;
    background-color: white;
    animation: fadeIn 0.3s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  </style>
  