<template>
  <div class="main-container-new">
    <div
      class="py-16 mid-container"
      :class="
        ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && 'text-center'
      "
    >
      <img
        src="/consultations-1.jpg"
        alt="Consultations"
        style="
          width: 100%;
          border-radius: 12px;
          height: 500px;
          object-fit: cover;
          object-position: 100% 20%;
        "
      />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Medical Consultations
      </h1>

      <p>
        Our consultation services connect you with experienced healthcare
        professionals for personalized medical advice and treatment plans.
        Whether you need a routine check-up or a specialist consultation, we are
        here to provide you with the best care possible. Here’s why you should
        consider our consultation services: <br />
        <strong>Personalized Care:</strong> Receive tailored medical advice and
        treatment plans based on your individual health needs.<br />
        <strong>Expert Professionals:</strong> Our network includes highly
        qualified doctors and specialists to address a wide range of medical
        issues.<br />
        <br />
        At Express Consultations, we are committed to delivering high-quality,
        patient-centered care. Our consultation services are designed to provide
        you with the medical attention you need, when you need it.
      </p>
      <DoctorsAppointement :clickAble="true" orientation="horizontal" />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Why Choose Our Consultation Services?
      </h1>
      <div>
        <ul>
          <li>
            <span style="font-weight: bold"> Comprehensive Care: </span> Our
            consultations cover a wide range of medical conditions, ensuring you
            receive the comprehensive care you need.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Experienced Specialists: </span>
            Our team includes specialists across various fields, providing
            expert care for complex medical issues.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Convenient Scheduling:</span> We
            offer flexible scheduling options, including evening and weekend
            appointments, to fit your busy lifestyle.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Telemedicine Options:</span> Access
            our consultation services from the comfort of your home with our
            telemedicine options.
          </li>
        </ul>
      </div>

      <v-container class="py-16">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="pa-4">
            <img
              src="/consultations-2.jpg"
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
              <div class="list-text">General Consultations</div>
            </div>
            <p class="pl-7 pb-1">
              Schedule an appointment with our general practitioners for routine
              check-ups and general medical advice.
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
              <div class="list-text">Specialist Consultations</div>
            </div>
            <p class="pl-7 pb-1">
              Access a wide range of specialists for specific medical conditions
              and receive expert care.
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
              <div class="list-text">Telemedicine Services</div>
            </div>
            <p class="pl-7 pb-1">
              Consult with our healthcare professionals from the comfort of your
              home using our telemedicine services.
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
              <div class="list-text">Follow-Up Care</div>
            </div>
            <p class="pl-7 pb-1">
              Ensure continuous care with follow-up consultations to monitor
              your health and adjust treatment plans as needed.
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
