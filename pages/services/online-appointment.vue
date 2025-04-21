<template>
  <div class="main-container-new">
    <div
      class="py-16 mid-container"
      :class="
        ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && 'text-center'
      "
    >
      <img
        src="/online-appointment-1.jpg"
        alt="Online Appointment"
        style="
          width: 100%;
          border-radius: 12px;
          height: 500px;
          object-fit: cover;
          object-position: 100% 60%;
        "
      />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Online Appointments
      </h1>

      <p>
        Our online appointment services provide you with a convenient way to
        schedule and manage your medical appointments. Whether you need a
        routine check-up or a consultation with a specialist, our online
        platform allows you to book appointments easily from the comfort of your
        home. Here’s why you should consider our online appointment services:
        <br />
        <strong>Convenience:</strong> Book appointments anytime, anywhere,
        without the need to call or visit the clinic.<br />
        <strong>Flexibility:</strong> Choose appointment times that fit your
        schedule, including evenings and weekends.<br />
        <br />
        At Express Appointments, we are dedicated to making healthcare more
        accessible and convenient for you. Our online appointment system is
        designed to simplify the process of booking and managing your medical
        appointments.
      </p>
      <DoctorsAppointement :clickAble="true" orientation="horizontal" />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Why Choose Our Online Appointment Services?
      </h1>
      <div>
        <ul>
          <li>
            <span style="font-weight: bold"> Easy Booking: </span> Our
            user-friendly platform makes it simple to book and manage your
            appointments online.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> No Waiting Time: </span> Avoid
            waiting on the phone or in line by scheduling your appointments
            online at your convenience.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Reminders and Notifications:</span>
            Receive email and SMS reminders to ensure you never miss an
            appointment.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Secure Platform:</span> Your
            personal information and appointment details are securely stored and
            protected.
          </li>
        </ul>
      </div>

      <v-container class="py-16">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="pa-4">
            <img
              src="/online-appointment-2.jpg"
              style="
                border-radius: 20px;
                height: 520px;
                object-fit: cover;
                object-position: 100% 100%;
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
              <div class="list-text">General Appointments</div>
            </div>
            <p class="pl-7 pb-1">
              Schedule appointments with general practitioners for routine
              check-ups and medical advice.
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
              <div class="list-text">Specialist Appointments</div>
            </div>
            <p class="pl-7 pb-1">
              Book consultations with specialists for specific medical
              conditions and expert care.
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
              <div class="list-text">Telemedicine Appointments</div>
            </div>
            <p class="pl-7 pb-1">
              Schedule virtual consultations with our healthcare professionals
              from the comfort of your home.
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
              <div class="list-text">Follow-Up Appointments</div>
            </div>
            <p class="pl-7 pb-1">
              Book follow-up appointments to ensure continuous care and monitor
              your health progress.
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
