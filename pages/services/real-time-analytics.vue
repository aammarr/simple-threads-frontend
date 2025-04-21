<template>
  <div class="main-container-new">
    <div
      class="py-16 mid-container"
      :class="
        ($vuetify.breakpoint.sm || $vuetify.breakpoint.xs) && 'text-center'
      "
    >
      <img
        src="/real-time-analytics-1.jpg"
        alt="Real-Time Analytics"
        style="
          width: 100%;
          border-radius: 12px;
          height: 500px;
          object-fit: cover;
          object-position: 100% 0;
        "
      />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Real-Time Analytics
      </h1>

      <p>
        In today's fast-paced digital landscape, real-time analytics is
        essential for businesses to make informed decisions. Our advanced
        platform collects and analyzes data in real-time, enabling you to gain
        insights into customer behavior, operational performance, and market
        trends. Here’s why you should consider real-time analytics: <br />
        <strong>Instant Insights:</strong> Our analytics solutions provide
        immediate access to critical data, allowing you to react swiftly to
        changes in your environment.<br />
        <strong>Data-Driven Decisions:</strong> Make informed business decisions
        backed by real-time data, leading to enhanced efficiency and
        competitiveness.<br />
        <br />
        At Express Analytics, we empower businesses with real-time analytics
        solutions designed to enhance operational efficiency and customer
        satisfaction. With our tools, you can monitor key metrics, identify
        trends, and optimize your strategies in real-time, ensuring you stay
        ahead of the competition.
      </p>
      <DoctorsAppointement :clickAble="true" orientation="horizontal" />

      <h1 class="py-12" style="font-family: Ubuntu !important">
        Why Choose Our Real-Time Analytics Solutions?
      </h1>
      <div>
        <ul>
          <li>
            <span style="font-weight: bold">
              Comprehensive Data Visualization:
            </span>
            Our platform offers interactive dashboards and visualizations to
            help you understand your data at a glance.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Seamless Integration: </span>
            Easily integrate our analytics solutions with your existing systems
            and tools for a streamlined experience.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Scalable Solutions:</span> Whether
            you are a small business or a large enterprise, our solutions are
            designed to grow with you and adapt to your needs.
          </li>
          <li class="pt-6">
            <span style="font-weight: bold"> Expert Support:</span> Our team of
            experts is always available to assist you, ensuring you make the
            most of your analytics tools.
          </li>
        </ul>
      </div>

      <v-container class="py-16">
        <v-row justify="center" align="center">
          <v-col cols="12" md="6" class="pa-4">
            <img
              src="/real-time-analytics-2.jpg"
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
              <div class="list-text">Customizable Dashboards</div>
            </div>
            <p class="pl-7 pb-1">
              Create personalized dashboards tailored to your specific business
              needs, ensuring you focus on what matters most.
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
              <div class="list-text">Predictive Analytics</div>
            </div>
            <p class="pl-7 pb-1">
              Utilize advanced algorithms to forecast trends and make proactive
              business decisions.
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
              <div class="list-text">Real-Time Monitoring</div>
            </div>
            <p class="pl-7 pb-1">
              Monitor your business metrics in real time, allowing for immediate
              action and intervention when necessary.
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
              <div class="list-text">Comprehensive Reporting</div>
            </div>
            <p class="pl-7 pb-1">
              Generate detailed reports that provide deep insights into your
              data, helping you make informed decisions.
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
