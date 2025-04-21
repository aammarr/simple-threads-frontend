<template>
  <div class="main-container-new">
    <div
      class="py-16 mid-container"
      :class="
        ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && 'text-center'
      "
    >
      <img
        src="/emergency1.jpg"
        alt="Emergency Service"
        style="
          width: 100%;
          border-radius: 12px;
          height: 500px;
          object-fit: cover;
          object-position: 100% 40%;
        "
      />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Emergency Services
      </h1>

      <p>
        In case of emergencies, prompt and professional medical care is crucial.
        Our emergency services are designed to provide immediate and
        comprehensive care for life-threatening conditions and severe injuries.
        Here's why you should rely on our emergency services:
        <br />
        <strong>Rapid Response:</strong> Our team is equipped to respond quickly
        and efficiently to emergencies.
        <br />
        <strong>Advanced Care:</strong> We offer advanced medical care and
        life-saving treatments.
        <br />
        <br />
        At Express Emergency, we understand that emergencies require immediate
        attention. Our facilities are equipped with state-of-the-art technology
        and staffed by highly trained medical professionals to ensure you
        receive the best possible care when you need it most.
      </p>
      <DoctorsAppointement :clickAble="true" orientation="horizontal" />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Why Choose Our Emergency Services?
      </h1>
      <div>
        <ul>
          <li>
            <span style="font-weight: bold"> 24/7 Availability: </span> Our
            emergency services are available around the clock, ensuring you have
            access to care at any time of day or night.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Immediate Attention: </span> We
            prioritize emergency cases to provide immediate medical attention.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Comprehensive Care:</span> Our team
            is trained to handle a wide range of medical emergencies, from
            cardiac arrests to severe trauma.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> State-of-the-Art Facilities:</span>
            Our emergency rooms are equipped with the latest medical technology
            to provide advanced care.
          </li>
        </ul>
      </div>

      <v-container class="py-16">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="pa-4">
            <img
              src="/emergency2.jpg"
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
              <div class="list-text">Trauma Care</div>
            </div>
            <p class="pl-7 pb-1">
              Our trauma care unit is equipped to handle severe injuries and
              provide life-saving treatments.
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
              <div class="list-text">Cardiac Emergency Care</div>
            </div>
            <p class="pl-7 pb-1">
              We offer specialized care for cardiac emergencies, including heart
              attacks and arrhythmias.
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
              <div class="list-text">Stroke Management</div>
            </div>
            <p class="pl-7 pb-1">
              Our team is trained in the latest protocols for stroke management
              to ensure prompt and effective treatment.
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
              <div class="list-text">Pediatric Emergency Care</div>
            </div>
            <p class="pl-7 pb-1">
              We provide specialized emergency care for children, ensuring they
              receive the best possible treatment.
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
