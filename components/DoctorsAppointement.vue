<template>
  <v-card
    :max-width="orientation === 'horizontal' ? '100%' : '420px'"
    outlined
    rounded="0"
  >
    <v-card-text class="d-flex flex-column pt-0">
      <h4 class="mb-2 text-left" style="font-size: 18px">Featured Providers</h4>
      <hr class="hr" />
      <div
        :class="`${
          orientation === 'horizontal' ? 'd-flex align-center flex-row' : ''
        }`"
        :style="`${
          orientation === 'horizontal'
            ? 'overflow-x: auto;'
            : `overflow: auto; max-height: ${height}`
        }`"
        class="mt-5"
      >
        <template v-for="(doctor, index) in displayedDoctors">
          <section
            class="d-flex align-center justify-center"
            :key="`doctor-${index + 1}`"
          >
            <div
              @click="moveToService(doctor)"
              :class="
                orientation === 'horizontal'
                  ? 'tw-min-h-[180px] tw-min-w-[350px]'
                  : ''
              "
              class="cursor-pointer"
            >
              <div class="doctor__details">
                <v-img
                  v-if="doctor?.profile_image"
                  :src="doctor.profile_image"
                  :alt="doctor?.profile_image_key"
                  class="doctor_image"
                  contain
                />
                <v-img
                  v-else
                  src="https://www.freepnglogos.com/uploads/doctor-png/doctor-bulk-billing-doctors-chapel-hill-health-care-medical-3.png"
                  alt="doctor_image"
                  class="doctor_image"
                  contain
                />
                <section class="doctor__details__content tw-w-[200px]">
                  <div
                    class="d-flex speciality__section align-center justify-space-between"
                  >
                    <p class="mb-0 tw-font-semibold">
                      {{
                        customFunction.textTruncate(
                          `${doctor?.first_name} ${doctor?.last_name}`,
                          14
                        )
                      }}
                    </p>
                    <p class="d-flex align-center mb-0 top-chip  px-1">Top 10</p>
                  </div>
                  <h4 class="name red--text">
                    {{
                      customFunction.textTruncate(doctor?.speciality_name, 22)
                    }}
                  </h4>
                  <p class="description mt-1">
                    {{ doctor?.practice_name }}
                  </p>
                </section>
              </div>
              <hr
                style="border: 1px solid #ececf0; height: 1px"
                v-if="
                  index !== displayedDoctors.length - 1 &&
                  orientation === 'vertical'
                "
              />
            </div>
            <v-divider
              v-if="
                orientation === 'horizontal' &&
                index < displayedDoctors?.length - 1
              "
              class="mx-3"
              inset
              vertical
            ></v-divider>
          </section>
        </template>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import customFunction from "@/helper/customFunction";
export default {
  props: {
    orientation: {
      type: String,
      default: "vertical",
    },
    clickAble: {
      type: Boolean,
      default: false,
    },
    height: {
      type: String,
      default: "auto",
    },
  },
  data() {
    return {
      doctorsList: [],
    };
  },
  computed: {
    customFunction() {
      return customFunction;
    },
    displayedDoctors() {
      return this.orientation === "horizontal"
        ? this.doctorsList.slice(0, 4)
        : this.doctorsList;
    },
  },
  mounted() {
    this.fetchDoctors();
  },
  methods: {
    async fetchDoctors() {
      await this.$api.expressService.getFeaturedDoctors().then((res) => {
        if (res?.status) {
          this.doctorsList = res.data;
        }
      });
    },
    moveToService() {
      if (this.clickAble) {
        this.$router.push("/find-care");
      }
    },
  },
};
</script>

<style lang="scss">
.hr {
  max-width: 70px;
  border: 1.6px solid red;
}

.doctor__details {
  display: flex;
  align-items: center;
  margin: 20px 0;

  .doctor_image {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    object-fit: contain;
  }

  .doctor__details__content {
    text-align: left;
    padding: 0 5px;

    .name {
      color: #0e2b8f;
      font-size: 16px;
      text-transform: capitalize;
    }

    .description {
      line-height: 20px;
      font-size: 11px;
      margin-bottom: 0;
    }

    .discount-btn {
      line-height: 15px;
      border: 1px solid red !important;
      border-radius: 5px;
    }
  }

  .speciality__section {
    p {
      font-size: 10px;
    }

    .top-chip {
      background-color: #be2600;
      cursor: pointer;
      color: white;
      font-size: 10px;
    }
  }
}
</style>
