<template>
  <div
    class="main-container"
    :style="{ minHeight: $vuetify.breakpoint.lgAndUp ? '30vh' : '70vh' }"
  >
    <div
      :style="{ padding: $vuetify.breakpoint.lgAndUp ? '50px' : '20px' }"
      class="mid-container mb-8"
    >
      <template>
        <div style="display: flex; justify-content: center">
          <div
            flat
            class="ma-3 text-center"
            style="background-color: #e8f6fc; width: 95%"
            :style="{
              padding: $vuetify.breakpoint.mdAndUp
                ? '20px 45px !important'
                : '10px 5px !important',
            }"
          >
            <div class="mb-4 top-title">
              Form Submitted Successfully. Now you can visit our parent
              portal or submit a new form.
            </div>
            <div style="display: flex; gap: 14px; justify-content: center">
              <button @click="handleLogin" class="subscribe-button">
                Previsit Review
              </button>
              <button @click="$router.push('/find-care')" class="back-button">
                Submit New Form
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    handleLogin() {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You are being redirected to Previsit Review, the parent company of Express Triage, to gather all necessary insurance and clinical information for submission to our network providers.",
          icon: "info",
          showCancelButton: true,
          confirmButtonText: "Yes",
          cancelButtonText: "No",
          reverseButtons: true,
        })
        .then((result) => {
      if (result.isConfirmed) {
        // Get the token from Axios headers
        const token = this.$axios?.defaults?.headers?.common["x-auth-token"];
        
        // Construct the redirect URL
        const baseUrl = process.env.FE_BASE_URL;
        const redirectUrl = token ? `${baseUrl}redirect-express?token=${token}` : baseUrl;

        console.log(redirectUrl)
        
        // Redirect the user
        window.location.href = redirectUrl;
      }
    });
    },
  },
};
</script>
