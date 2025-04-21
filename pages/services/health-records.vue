<template>
  <div class="main-container-new">
    <div
      class="py-16 mid-container"
      :class="
        ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && 'text-center'
      "
    >
      <img
        src="/health-records1.jpg"
        alt="Health Records"
        style="
          width: 100%;
          border-radius: 12px;
          height: 500px;
          object-fit: cover;
          object-position: 100% 40%;
        "
      />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Health Records
      </h1>

      <p>
        Our comprehensive health records system ensures that your medical
        information is accurately maintained and easily accessible. With
        advanced security measures and user-friendly interfaces, managing your
        health records has never been easier. Here's why you should consider our
        health records system: <br />
        <strong>Secure Access:</strong> Your health data is stored securely and
        can be accessed only by authorized personnel.<br />
        <strong>Comprehensive Information:</strong> Keep all your health
        information, including medical history, prescriptions, and test results,
        in one place.<br />
        <br />
        At Express Health, we prioritize the security and accessibility of your
        medical information. Our Health Records system is designed to provide
        you with a seamless experience, ensuring you have all the information
        you need at your fingertips.
      </p>
      <DoctorsAppointement :clickAble="true" orientation="horizontal" />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Why Choose Our Health Records System?
      </h1>
      <div>
        <ul>
          <li>
            <span style="font-weight: bold"> User-Friendly Interface: </span>
            Our platform is designed to be intuitive, making it easy for you to
            manage and access your health records.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Secure and Private: </span> We use
            the latest encryption technologies to ensure your data remains
            confidential and secure.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Easy Sharing:</span> Share your
            health records with healthcare providers easily, ensuring seamless
            coordination of care.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Comprehensive Management:</span>
            From medical history to test results, manage all aspects of your
            health information in one place.
          </li>
        </ul>
      </div>

      <v-container class="py-16">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="pa-4">
            <img
              src="/health-records2.jpg"
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
              <div class="list-text">Comprehensive Medical History</div>
            </div>
            <p class="pl-7 pb-1">
              Maintain a detailed record of your medical history, including
              diagnoses, treatments, and procedures.
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
              <div class="list-text">Prescription Management</div>
            </div>
            <p class="pl-7 pb-1">
              Keep track of your prescriptions, dosage information, and refill
              dates in one convenient place.
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
              <div class="list-text">Test Results Tracking</div>
            </div>
            <p class="pl-7 pb-1">
              View and manage your lab test results, ensuring you always have
              access to important health information.
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
              <div class="list-text">Appointment Scheduling</div>
            </div>
            <p class="pl-7 pb-1">
              Schedule and manage your medical appointments directly through our
              platform.
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
