<template>
  <div class="main-container-new">
    <div class="py-16 mid-container">
      <h1 class="text-center pb-8" style="font-size: 23px; font-weight: bold">
        Our Services
      </h1>
      <v-row :class="$vuetify.breakpoint.xs ? 'pb-8' : 'pb-12'">
        <v-col
          v-for="service in services"
          :key="service.id"
          cols="12"
          sm="6"
          md="3"
        >
          <v-card
            class="py-4 feature-card p-8"
            style="
              min-height: 450px;
              display: flex;
              flex-direction: column;
              justify-content: space-evenly;
            "
            @mouseover="hover = service.id"
            @mouseleave="hover = null"
            :class="{ 'feature-card-hover': hover === service.id }"
          >
            <div class="text-center py-4">
              <img
                :src="service.image"
                alt="Service Image"
                width="90%"
                style="border-radius: 15px"
              />
            </div>

            <div
              class="text-center"
              style="
                font-family: Ubuntu !important;
                font-size: 20px;
                font-weight: bold;
              "
            >
              {{ service.title }}
            </div>
            <v-card-text class="text-center">
              {{ service.description }}
            </v-card-text>
            <div class="text-center pb-2">
              <span @click="$router.push(service.href)" class="subscribe-button"
                >Read More</span
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
      <hr style="border: 1px solid #ececf0; height: 1px" class="mb-9" />
      <DoctorsAppointement :clickAble="true" orientation="horizontal" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: null,
      services: [
        {
          id: 0,
          image: "/services-one.png",
          title: "Urgent Care Centres",
          description:
            "Before your visit, we collect essential information about you.",
          href: "/services/urgent-care-centres",
        },
        {
          id: 1,
          image: "/services-two.png",
          title: "Real-Time Analytics",
          description:
            "Our platform leverages real-time analytics from in-network healthcare facilities.",
          href: "/services/real-time-analytics",
        },
        {
          id: 2,
          image: "/services-three.png",
          title: "Health Records",
          description:
            "Express Triage acts as your personal health records system.",
          href: "/services/health-records",
        },
        {
          id: 3,
          image: "/services-four.png",
          title: "Diagnostic Test",
          description:
            "Express Triage recommends appropriate diagnostic tests.",
          href: "/services/diagnostic-test",
        },
        {
          id: 4,
          image: "/services-five.png",
          title: "Consultations",
          description:
            "Our consultation services are designed to provide you with thorough and personalized.",
          href: "/services/consultations",
        },
        {
          id: 5,
          image: "/services-six.png",
          title: "Online Appointment",
          description:
            "We strive to make accessing healthcare as convenient and stress-free as possible.",
          // href: "#",
          href: "/services/online-appointment",
        },
        {
          id: 6,
          image: "/services-seven.png",
          title: "Health Insurance",
          description:
            "We understand the importance of health insurance in providing you.",
          // href: "#",
          href: "/services/health-insurance",
        },
        {
          id: 7,
          image: "/services-eight.png",
          title: "Emergency Service",
          description:
            "We understand that medical emergencies can happen unexpectedly.",
          // href: "#",
          href: "/services/emergency-service",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.feature-card {
  /* Add any custom styles for the feature card here */
}
.feature-card-hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.subscribe-button {
  padding: 10px 12px;
  font-size: 16px;
  background: #df232f;
  color: white;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: #c21f2a;
  }
}
</style>
