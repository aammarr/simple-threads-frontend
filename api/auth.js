import nuxtConfig from "@/nuxt.config";

export default ($axios, store, ctx, router) => ({
  async register(data) {
    return ctx.$request.post("/express/register", data);
  },

  async fetchUser() {
    return ctx.$request.get("/user");
  },

  async forgotPassword(data) {
    return ctx.$request.post("/express/resend-otp", data);
  },
});
