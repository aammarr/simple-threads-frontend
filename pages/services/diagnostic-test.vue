<template>
  <div class="main-container-new">
    <div
      class="py-16 mid-container"
      :class="
        ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && 'text-center'
      "
    >
      <img
        src="/diagnostic-test1.jpg"
        alt="Diagnostic Tests"
        style="
          width: 100%;
          border-radius: 12px;
          height: 500px;
          object-fit: cover;
          object-position: 100% 0;
        "
      />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Diagnostic Tests
      </h1>

      <p>
        Our state-of-the-art diagnostic test facilities ensure accurate and
        timely results to help you make informed decisions about your health.
        With a comprehensive range of tests and advanced technology, we provide
        reliable diagnostic services for various medical conditions. Here’s why
        you should consider our diagnostic tests: <br />
        <strong>Accurate Results:</strong> Our advanced diagnostic equipment and
        experienced professionals ensure precise and reliable test results.<br />
        <strong>Comprehensive Testing:</strong> From blood tests to imaging, we
        offer a wide range of diagnostic services to meet your healthcare
        needs.<br />
        <br />
        At Express Diagnostics, we are committed to providing you with the
        highest quality diagnostic services. Our facilities are equipped with
        the latest technology, and our skilled staff is dedicated to delivering
        accurate and timely results.
      </p>
      <DoctorsAppointement :clickAble="true" orientation="horizontal" />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Why Choose Our Diagnostic Test Services?
      </h1>
      <div>
        <ul>
          <li>
            <span style="font-weight: bold"> Advanced Technology: </span> Our
            diagnostic facilities are equipped with the latest technology to
            ensure precise and reliable results.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Experienced Professionals: </span>
            Our team of healthcare professionals is highly trained and
            experienced in performing a wide range of diagnostic tests.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Convenient Locations:</span> Our
            diagnostic centers are conveniently located, making it easy for you
            to access our services.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Quick Turnaround:</span> We
            understand the importance of timely results, and our processes are
            designed to ensure quick turnaround times.
          </li>
        </ul>
      </div>

      <v-container class="py-16">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="pa-4">
            <img
              src="/diagnostic-test2.jpg"
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
              <div class="list-text">Comprehensive Blood Tests</div>
            </div>
            <p class="pl-7 pb-1">
              From routine blood work to specialized tests, we offer a wide
              range of blood tests to diagnose various conditions.
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
              <div class="list-text">Imaging Services</div>
            </div>
            <p class="pl-7 pb-1">
              Our diagnostic centers are equipped with advanced imaging
              technology, including X-rays, MRI, and CT scans.
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
              <div class="list-text">Pathology Services</div>
            </div>
            <p class="pl-7 pb-1">
              We offer a full range of pathology services to diagnose and
              monitor various medical conditions.
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
              <div class="list-text">Specialized Tests</div>
            </div>
            <p class="pl-7 pb-1">
              Our facilities provide specialized diagnostic tests for specific
              conditions, ensuring you receive the care you need.
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
