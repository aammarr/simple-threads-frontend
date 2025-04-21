<template>
  <div class="main-container-new">
    <div
      class="py-16 mid-container"
      :class="
        ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && 'text-center'
      "
    >
      <img
        src="/urgent-care.png"
        alt=""
        style="
          width: 100%;
          border-radius: 12px;
          height: 500px;
          object-fit: cover;
          object-position: 100% 0;
        "
      />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Urgent Care Centres
      </h1>

      <p>
        Before your visit, we collect essential information about you, including
        demographic details, insurance coverage, and medical history. Our
        advanced algorithms analyse this data to efficiently triage patients.
        Based on urgency and severity, Our network of urgent care centers is
        equipped to handle a wide range of medical issues. Here’s why you should
        consider urgent care: Prompt Service: <br />
        Urgent care centres prioritize patients with non-life-threatening
        conditions. You’ll receive attention quickly, often without the long
        wait associated with emergency rooms. Diagnostic Services: Urgent care
        facilities offer on-site diagnostic services, including X-rays, blood
        tests, and rapid strep tests. You’ll get answers promptly. <br />
        <br />
        At Express Triage, our Urgent Care Centres are designed to provide you
        with immediate medical attention for non-life-threatening conditions. We
        understand that illnesses and injuries can occur at any time, and you
        may need prompt, professional medical care without the long wait times
        associated with emergency rooms. Our Urgent Care Centres are equipped to
        handle a wide range of medical issues, ensuring you receive the care you
        need when you need it most.
      </p>

      <DoctorsAppointement :clickAble="true" orientation="horizontal" />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Why you should choose our urgent care centres?
      </h1>
      <div>
        <ul>
          <li>
            <span style="font-weight: bold"> Convenient Hours: </span>We are
            open extended hours, including evenings and weekends, to accommodate
            your busy schedule and provide care when your primary care physician
            may not be available.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> No Appointments Needed: </span
            >Walk-ins are always welcome. You don’t need an appointment to be
            seen by our healthcare professionals We understand that illnesses
            and injuries can occur at any time, and you may need prompt.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Short Wait Times:</span> Our
            streamlined processes and dedicated staff work to ensure you are
            seen quickly, minimizing your wait time. Our Urgent Care Centres are
            equipped to handle a wide range of medical issues, ensuring you
            receive the care.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Comprehensive Care:</span> We offer
            a wide range of services to address your urgent medical needs, from
            minor injuries to sudden illnesses. For your convenience, our
            centres are equipped with on-site labs and imaging services,
            allowing for quick diagnosis and treatment.
          </li>
        </ul>
      </div>
      <v-container class="py-16">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="pa-4">
            <img
              src="/urgent-care-two.png"
              style="
                border-radius: 20px;
                height: 520px;
                object-fit: cover;
                object-position: 80% 0;
              "
              :style="
                $vuetify.breakpoint.sm ? 'width: 100%' : 'width:85%'
              " /></v-col
          ><v-col cols="12" md="6" class="custom-class">
            <h3 class="bottom-title pb-3">Services That We Provide You</h3>

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
              <div class="list-text">Experienced Healthcare Professionals</div>
            </div>
            <p class="pl-7 pb-1">
              Our team of experienced healthcare professionals, including
              board-certified physicians, nurse practitioners.
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
              <div class="list-text">Affordable Care</div>
            </div>
            <p class="pl-7 pb-1">
              We strive to make healthcare accessible and affordable. Our clinic
              accepts most major insurance plans.
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
              <div class="list-text">Child-Friendly Services</div>
            </div>
            <p class="pl-7 pb-1">
              We understand that children require special care. Our urgent care
              centres are equipped to handle paediatric emergencies.
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
              <div class="list-text">Travel Medicine</div>
            </div>
            <p class="pl-7 pb-1">
              Our urgent care centres offer comprehensive travel medicine
              services, including vaccinations and travel health consultations.
            </p>
          </v-col></v-row
        >
      </v-container>
      <div class="text-center py-8">
        <span @click="$router.push('/services')" class="subscribe-button"
          >Back to Services</span
        >
      </div>
    </div>
  </div>
</template>
