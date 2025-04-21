<template>
  <v-app dark>
    <v-card flat height="100vh" width="100%" class="error-page">
      <v-card-text>
        <v-row class="fill-height" align="center" justify="center">
          <v-col cols="12" md="8" lg="6" align="center">
            <div class="error-content">
              <v-icon class="error-icon animate__animated animate__shakeX" color="primary" size="160">
                mdi-alert-octagon-outline
              </v-icon>
              
              <h1 class="display-1 font-weight-bold mb-4">
                {{ errorTitle }}
              </h1>
              
              <p class="subheading mb-6">
                {{ errorDescription }}
              </p>

              <div class="actions">
                <v-btn
                  large
                  color="primary"
                  class="mr-3 animate__animated animate__pulse animate__infinite px-2"
                  @click="moveToMainRoute"
                >
                  <v-icon medium>mdi-home</v-icon>
                  Return Home
                </v-btn>
                
                <!-- <v-btn
                  x-large
                  outlined
                  color="secondary"
                  @click="reloadPage"
                  class="pl-2"
                >
                  <v-icon left>mdi-reload</v-icon>
                  Refresh Page
                </v-btn> -->
              </div>

              <div class="mt-8">
                <p class="caption">
                  Need help? 
                  <a href="/contact" class="secondary--text">Contact support</a> 
                  or 
                  <a href="/search" class="secondary--text">try searching</a>
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: 'ErrorLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  computed: {
    errorTitle() {
      return this.error.statusCode === 404 
        ? "Oops! Page Not Found" 
        : "Something Went Wrong"
    },
    errorDescription() {
      return this.error.statusCode === 404
        ? "The page you're looking for might have been removed or temporarily unavailable."
        : "We're experiencing technical difficulties. Please try again later."
    },
  },
  methods: {
    moveToMainRoute() {
      this.$router.push('/')
    },
    reloadPage() {
      window.location.reload()
    },
  },
  head() {
    return {
      title: this.errorTitle,
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex, nofollow',
        },
      ],
    }
  },
}
</script>

<style scoped>


.error-content {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.error-icon {
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
}

.error-icon:hover {
  transform: scale(1.1);
}

.display-1 {
  font-size: 2.5rem !important;
  line-height: 1.2;
  margin-bottom: 1rem;
  /* color: #ffffff; */
}

.subheading {
  font-size: 1.1rem;
  line-height: 1.6;
  color: #b0b0b0;
  max-width: 500px;
  margin: 0 auto;
}

.actions {
  margin-top: 2.5rem;
  /* display: flex; */
}

.caption {
  color: #888888;
}

a {
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #777777 !important;
}

@media (max-width: 600px) {
  .error-icon {
    font-size: 100px !important;
  }
  
  .display-1 {
    font-size: 1.75rem !important;
  }
  
  .subheading {
    font-size: 1rem;
  }
  
  .v-btn {
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .actions {
    flex-direction: column;
  }
}
</style>