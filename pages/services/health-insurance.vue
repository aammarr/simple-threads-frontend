<template>
  <div class="main-container-new">
    <div
      class="py-16 mid-container"
      :class="
        ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && 'text-center'
      "
    >
      <img
        src="/health-insurance-1.jpg"
        alt="Health Insurance"
        style="
          width: 100%;
          border-radius: 12px;
          height: 500px;
          object-fit: cover;
          object-position: 100% 80%;
        "
      />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Health Insurance Plans
      </h1>

      <p>
        Navigating health insurance can be complex, but we are here to make it
        easier for you. Our team provides comprehensive information on various
        health insurance plans, helping you choose the one that best fits your
        needs. Here's why you should consider our health insurance services:
        <br />
        <strong>Expert Guidance:</strong> Get professional advice on selecting
        the right health insurance plan.
        <br />
        <strong>Comprehensive Coverage:</strong> We offer plans that cover a
        wide range of medical services and treatments.
        <br />
        <br />
        At Express Health, our goal is to help you find the best health
        insurance plan for you and your family. Our experts are dedicated to
        providing you with the support and information you need to make an
        informed decision.
      </p>
      <DoctorsAppointement :clickAble="true" orientation="horizontal" />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Why Choose Our Health Insurance Services?
      </h1>
      <div>
        <ul>
          <li>
            <span style="font-weight: bold">
              Personalized Recommendations:
            </span>
            We provide tailored health insurance recommendations based on your
            individual needs and budget.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Easy Enrollment: </span> Our
            streamlined process makes it easy to enroll in a health insurance
            plan.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Continuous Support:</span> We offer
            ongoing support to help you understand and manage your health
            insurance benefits.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Wide Range of Options:</span>
            Choose from a variety of health insurance plans to find the one that
            best fits your needs.
          </li>
        </ul>
      </div>

      <v-container class="py-16">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="pa-4">
            <img
              src="/health-insurance-2.jpg"
              style="
                border-radius: 20px;
                height: 520px;
                object-fit: cover;
                object-position: 80% 0;
              "
              :style="$vuetify.breakpoint.sm ? 'width: 100%' : 'width:85%'"
            />
          </v-col>
          <v-col cols="12" md="6" class="custom-class">
            <h3 class="bottom-title pb-3">Services We Provide</h3>

            <div class="list">
              <div class="icon">
                <div
                  style="
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                    background-color: #df232f;
                  "
                ></div>
              </div>
              <div class="list-text">Health Insurance Consultation</div>
            </div>
            <p class="pl-7 pb-1">
              Speak with our experts to understand your health insurance options
              and find the best plan for you.
            </p>
            <div class="list">
              <div class="icon">
                <div
                  style="
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                    background-color: #df232f;
                  "
                ></div>
              </div>
              <div class="list-text">Enrollment Assistance</div>
            </div>
            <p class="pl-7 pb-1">
              Get help with the enrollment process to ensure you are covered
              quickly and efficiently.
            </p>
            <div class="list">
              <div class="icon">
                <div
                  style="
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                    background-color: #df232f;
                  "
                ></div>
              </div>
              <div class="list-text">Claims Support</div>
            </div>
            <p class="pl-7 pb-1">
              Our team provides assistance with filing claims and understanding
              your coverage.
            </p>
            <div class="list">
              <div class="icon">
                <div
                  style="
                    height: 15px;
                    width: 15px;
                    border-radius: 50%;
                    background-color: #df232f;
                  "
                ></div>
              </div>
              <div class="list-text">Policy Management</div>
            </div>
            <p class="pl-7 pb-1">
              We help you manage your policy and ensure you understand your
              benefits and coverage.
            </p>
          </v-col>
        </v-row>
      </v-container>

      <div class="text-center py-8">
        <span @click="$router.push('/services')" class="subscribe-button"
          >Back to Services</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
.mid-container {
  max-width: 1200px;
  margin: 0 auto;
}

.subscribe-button {
  cursor: pointer;
  padding: 10px 20px;
  background-color: #df232f;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.subscribe-button:hover {
  background-color: #c0202c;
}

.list {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.icon {
  margin-right: 10px;
}

.bottom-title {
  font-weight: bold;
  font-size: 1.5em;
}
</style>
