<template>
    <div class="main-container-new">
      <div class="py-16 mid-container">
        <h1
          class="text-3xl font-bold text-indigo-600 mb-4 small-heading"
          :class="title==='Related Articles' && 'text-center'
          "
          :style="{ fontSize: titleFontSize,  }"
          v-if="filteredBlogs.length"
        >
          {{ title }}
        </h1>
        <v-row :class="$vuetify.breakpoint.xs ? 'pb-8' : 'pb-12'">
          <v-col
            v-for="blog in filteredBlogs"
            :key="blog.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card
              class="feature-card p-8 card-style"
              @mouseover="hover = blog.id"
              @mouseleave="hover = null"
              :class="{ 'feature-card-hover': hover === blog.id }"
            >
              <div style="display: flex; justify-content: center;">
                <div class="text-center" style="width: 94%;">
                  <img
                    :src="blog.image"
                    alt="Blog Image"
                    width="100%"
                    style="border-radius: 15px"
                  />
                </div>
              </div>
              <div
                style="display: flex; justify-content: space-between; padding: 0 20px; align-items: center;"
              >
                <div
                  style="
                    font-family: Ubuntu !important;
                    font-size: 20px;
                    font-weight: bold;
                    color: #DF232F;
                  "
                >
                  {{ blog.title }}
                </div>
                <div>
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="$router.push(blog.href)"
                    style="color: #DF232F; cursor: pointer;"
                  >
                    <path
                      d="M17.6778 17.6777L12.021 23.3345L10.6067 21.9203L16.2636 16.2635L11.3138 11.3137H22.6276V22.6274L17.6778 17.6777Z"
                      fill="#8969B4"
                    />
                  </svg>
                </div>
              </div>
              <v-card-text style="color: black;">
                {{ blog.description }}
              </v-card-text>
              <div class="text-center pb-2">
                <span
                  @click="$router.push(blog.href)"
                  style="color: #DF232F; cursor: pointer;"
                >
                  Read More
                </span>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
   
      currentUrl: {
        type: String,
        default: null, // Pass the current blog URL if needed for exclusion
      },
      titleFontSize: {
        type: String,
        default: "46px", // Default font size
      },
    },
    data() {
      return {
        hover: null,
        blogs: [
          {
            id: 0,
            image: "/blogs/maximizing-your-doctors-visit.jpg",
            title: "Maximizing Your Doctor’s Visit",
            description:
              "Visiting your doctor can be a crucial step in maintaining or improving your health, but how you prepare for that visit can make all the difference.",
            href: "/blogs/maximizing-your-doctors-visit",
          },
        //   {
        //     id: 1,
        //     image: "/services-two.png",
        //     title: "Real-Time Analytics",
        //     description:
        //       "Our platform leverages real-time analytics from in-network healthcare facilities.",
        //     href: "/services/real-time-analytics",
        //   },
        //   {
        //     id: 2,
        //     image: "/services-three.png",
        //     title: "Health Records",
        //     description:
        //       "Express Triage acts as your personal health records system.",
        //     href: "/services/health-records",
        //   },
        //   {
        //     id: 3,
        //     image: "/services-four.png",
        //     title: "Diagnostic Test",
        //     description:
        //       "Express Triage recommends appropriate diagnostic tests.",
        //     href: "/services/diagnostic-test",
        //   },
        //   {
        //     id: 4,
        //     image: "/services-five.png",
        //     title: "Consultations",
        //     description:
        //       "Our consultation services are designed to provide you with thorough and personalized.",
        //     href: "/services/consultations",
        //   },
        //   {
        //     id: 5,
        //     image: "/services-six.png",
        //     title: "Online Appointment",
        //     description:
        //       "We strive to make accessing healthcare as convenient and stress-free as possible.",
        //     // href: "#",
        //     href: "/services/online-appointment",
        //   },
        //   {
        //     id: 6,
        //     image: "/services-seven.png",
        //     title: "Health Insurance",
        //     description:
        //       "We understand the importance of health insurance in providing you.",
        //     // href: "#",
        //     href: "/services/health-insurance",
        //   },
        //   {
        //     id: 7,
        //     image: "/services-eight.png",
        //     title: "Emergency Service",
        //     description:
        //       "We understand that medical emergencies can happen unexpectedly.",
        //     // href: "#",
        //     href: "/services/emergency-service",
        //   },
        ],
      };
    },
    computed: {
      filteredBlogs() {
        // Exclude the current blog if `currentUrl` is provided

        return this.currentUrl
          ? this.blogs.filter((blog) => blog.href !== this.currentUrl)
          : this.blogs;
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .feature-card {
    min-height: 450px !important;
    display: flex !important;
    flex-direction: column !important;
    justify-content: space-evenly !important;
    border-radius: 10px !important;
    border: $primary-color 1px solid !important;
  }
  .feature-card-hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
  </style>
  