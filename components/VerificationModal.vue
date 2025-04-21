<template>
    <v-card>
      <v-card-title class="headline justify-center">Verify Account</v-card-title>
      <v-card-text>
        <div v-if="!successMessage">
          <p class="mb-4">Upload educational documents (1-3 files, PDF/JPG/PNG):</p>
          
          <div v-for="(file, index) in selectedFiles" :key="index" class="mb-4">
            <v-file-input
              v-model="selectedFiles[index]"
              :label="`Document ${index + 1}${index > 0 ? ' (Optional)' : ''}`"
              accept=".pdf,.jpg,.png"
              outlined
              :disabled="loading"
              prepend-icon=""
              prepend-inner-icon="mdi-paperclip"
              clearable
            ></v-file-input>
          </div>
  
          <v-progress-linear
            v-if="loading"
            indeterminate
            color="primary"
            class="mb-4"
          ></v-progress-linear>
        </div>
        
        <div v-else class="success-message">
          <v-icon color="success" large>mdi-check-circle</v-icon>
          <p class="mt-2">{{ successMessage }}</p>
        </div>
      </v-card-text>
      
      <v-card-actions>
        <v-btn 
          text 
          @click="close"
          :disabled="loading"
        >
          {{ successMessage ? 'Close' : 'Cancel' }}
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn 
          color="primary" 
          @click="submitVerification"
          v-if="!successMessage"
          :disabled="!hasFilesSelected || loading"
        >
          Submit
        </v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    props: {
      value: Boolean
    },
    data() {
      return {
        selectedFiles: [null, null, null],
        loading: false,
        successMessage: ''
      }
    },
    computed: {
      dialog: {
        get() { return this.value },
        set(val) { this.$emit('input', val) }
      },
      hasFilesSelected() {
        return this.selectedFiles.some(file => file !== null)
      }
    },
    methods: {
      close() {
        this.$router.push('/profile')
        this.resetForm()
      },
      async submitVerification() {
        this.loading = true
        try {
          const formData = new FormData()
          
          // Add only selected files
          this.selectedFiles
            .filter(file => file !== null)
            .forEach((file, index) => {
              formData.append(`document-${index + 1}`, file)
            })
  
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2000))
          
          this.successMessage = 'Verification submitted! We will review your documents shortly.'
        } catch (error) {
          console.error('Upload failed:', error)
        } finally {
          this.loading = false
        }
      },
      resetForm() {
        this.selectedFiles = [null, null, null]
        this.loading = false
        this.successMessage = ''
      }
    }
  }
  </script>
  
  <style scoped>
  .success-message {
    text-align: center;
    color: #4CAF50;
    padding: 20px;
  }
  
  .document-upload + .document-upload {
    margin-top: 1rem;
  }
  </style>