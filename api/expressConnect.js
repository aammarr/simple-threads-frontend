import nuxtConfig from "@/nuxt.config";

export default ($axios, store, ctx, router) => ({
  async postExpress(params) {
    return ctx.$request.post("/express", params);
  },

  async addBms(params) {
    return ctx.$request.post("/express/bms", params);
  },

  async getBms(params) {
    return ctx.$request.get("/express/bms", params);
  },

  async getRos(params) {
    return ctx.$request.get("/express/ros", params);
  },

  async getHms(params) {
    return ctx.$request.get("/express/hms", params);
  },

  async getTemplates(params) {
    return ctx.$request.get("/express/templates", params);
  },

  async postTemplate(params) {
    return ctx.$request.post("/express/answer", params);
  },

  async checkRos(params) {
    return ctx.$request.post("/express/ros/check", params);
  },

  async unCheckRos(params) {
    return ctx.$request.post("/express/ros/uncheck", params);
  },

  async checkHms(params) {
    return ctx.$request.post("/express/hms/check", params);
  },

  async unCheckHms(params) {
    return ctx.$request.post("/express/hms/uncheck", params);
  },

  async getComplaints() {
    return ctx.$request.get("/super/complaint");
  },

  async verifyOtp(params) {
    return ctx.$request.post("/express/verify-otp", params);
  },
  async resendOtp(params) {
    return ctx.$request.post("/express/resend-otp", params);
  },
  async getRosResponses(params) {
    return ctx.$request.get("/express/ros/response", params);
  },
  async getHmsResponses(params) {
    return ctx.$request.get("/express/hms/response", params);
  },
  async getBmsResponses(params) {
    return ctx.$request.get("/express/bms/response", params);
  },

  async getTemplateAnswers(params) {
    return ctx.$request.get("/express/answer/response", params);
  },
  async confirmConnectRequest(body) {
    return ctx.$request.post("/express/confirm", body);
  },
  async getServices() {
    return ctx.$request.get("/express/services");
  },

  async getAgeRange(params) {
    return ctx.$request.get(`/express/age-range`, params);
  },
  async sendOtp(data) {
    return ctx.$request.post("/express/send-otp", data);
  },

  async deleteTemplateAnswer(express_connect_id, params) {
    return ctx.$request.deleteReq(
      `/express/answer/${express_connect_id}`,
      params
    );
  },

  async getFeaturedDoctors(params) {
    return ctx.$request.get("/user/featured_doctors", params);
  },

  async getAllInsurances() {
    return ctx.$request.get("practice/insurance/all");
  },

  async getFamilyMembers(params) {
    return ctx.$request.get("/express/family", params);
  },
  async updateFamilyMember(id, data) {
    return ctx.$request.put(`express/family/${id}`, data);
  },
  async updateProfile(data) {
    return ctx.$request.put(`express/me`, data);
  },

  async addFamilyMember(data) {
    return ctx.$request.post("/express/family", data);
  },

  async createConnectRequest(data) {
    return ctx.$request.post("/express/add", data);
  },
});
