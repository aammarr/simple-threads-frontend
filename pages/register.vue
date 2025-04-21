<template>
  <section class="lg:t-w-[1136px] mx-auto py-16" style="min-height: 100vh; margin-bottom: 130px;">
    <v-row class="full-h" no-gutters>
      <v-col
        v-if="!$vuetify.breakpoint.mobile"
        align="center"
        align-self="start"
        cols="12"
        md="6"
        lg="6"
        xl="6"
      >
        <section class="pa-4 primary t-rounded-[20px] t-max-w-[494px]">
          <v-img
  src="/images/doctor-img.png"
  lazy-src="/images/doctor-img.png"
  height="720"
  width="100%"
  style="object-fit: cover; border-radius: 10px;"
>
</v-img>

        </section>
      </v-col>

      <v-col
        class="d-flex flex-column align-center justify-center"
        cols="12"
        :md="$vuetify.breakpoint.mobile ? 12 : 6"
        :lg="$vuetify.breakpoint.mobile ? 12 : 6"
        :xl="$vuetify.breakpoint.mobile ? 12 : 6"
      >
        <v-card
          color="transparent"
          flat
          :max-width="$vuetify.breakpoint.mobile ? 360 : 477"
        >
          <v-form ref="registerForm">
            <v-row dense>
              <v-col cols="12" md="6" lg="6" xl="6">
                <v-text-field
                  hide-details
                  :rules="[rules.required]"
                  outlined
                  background-color="white"
                  class="my-1"
                  label="First Name"
                  required
                  dense
                  v-model="registerData.first_name"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" lg="6" xl="6">
                <v-text-field
                  :rules="[rules.required]"
                  hide-details
                  outlined
                  background-color="white"
                  class="my-1"
                  label="Last Name"
                  required
                  dense
                  v-model="registerData.last_name"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  :rules="[rules.required]"
                  hide-details
                  outlined
                  background-color="white"
                  class="my-1"
                  dense
                  v-model="registerData.email"
                  :readonly="readonlyEmail"
                  label="Email"
                  required
                  @blur="validateEmail"
                ></v-text-field>
              </v-col>
              <v-col align-self="center" cols="12">
                <vue-tel-input
                  class="custom_intl_selector"
                  mode="international"
                  :autoFormat="true"
                  v-model="registerData.phone"
                  :autoDefaultCountry="true"
                  :inputOptions="{
                    type: 'tel',
                    placeholder: 'Phone Number',
                  }"
                  :dropdownOptions="{
                    showDialCodeInSelection: true,
                    showSearchBox: true,
                    showDialCodeInList: true,
                    showFlags: true,
                  }"
                  :validCharactersOnly="true"
                  @input="setPhoneNumber"
                ></vue-tel-input>
              </v-col>
              <v-col cols="12" md="6" lg="6" xl="6">
                <v-text-field
                  hide-details
                  outlined
                  background-color="white"
                  class="my-1"
                  dense
                  label="Date of Birth"
                  :rules="[(v) => !!v || 'Date of Birth is required']"
                  v-model="registerData.dob"
                  type="date"
                  required
              /></v-col>

              <!-- Gender -->
              <v-col cols="12" md="6" lg="6" xl="6">
                <v-select
                  hide-details
                  outlined
                  background-color="white"
                  class="my-1"
                  dense
                  label="Gender"
                  :items="genderOptions"
                  item-text="name"
                  item-value="value"
                  required
                  :rules="[(v) => !!v || 'Gender is required']"
                  v-model="registerData.gender"
              /></v-col>
              <!-- <v-col cols="12">
                <v-text-field
                  hide-details
                  :rules="[rules.required]"
                  outlined
                  background-color="white"
                  class="my-1"
                  label="Password"
                  dense
                  required
                  v-model="registerData.password"
                  :type="showPassword ? 'text' : 'password'"
                  :append-icon="showPassword ? 'visibility' : 'visibility_off'"
                  @click:append="showPassword = !showPassword"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  :rules="[rules.required]"
                  v-model="confirmPassword"
                  dense
                  hide-details
                  outlined
                  background-color="white"
                  class="my-1"
                  label="Confirm Password"
                  :type="confirmShowPassword ? 'text' : 'password'"
                  :append-icon="
                    confirmShowPassword ? 'visibility' : 'visibility_off'
                  "
                  @click:append="confirmShowPassword = !confirmShowPassword"
                  required
                ></v-text-field>
              </v-col> -->
              <v-col cols="12" md="6" lg="6" xl="6">
                <v-text-field
                  :rules="[rules.required]"
                  hide-details
                  outlined
                  background-color="white"
                  class="my-1"
                  label="Address"
                  required
                  v-model="registerData.address"
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" lg="6" xl="6">
                <v-text-field
                  hide-details
                  :rules="[rules.required]"
                  outlined
                  background-color="white"
                  class="my-1"
                  label="City"
                  required
                  v-model="registerData.city"
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" lg="6" xl="6">
                <v-text-field
                  hide-details
                  :rules="[rules.required]"
                  outlined
                  background-color="white"
                  class="my-1"
                  label="State/Province"
                  required
                  v-model="registerData.state"
                  dense
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="6" lg="6" xl="6">
                <v-text-field
                  hide-details
                  :rules="[rules.required]"
                  outlined
                  background-color="white"
                  class="my-1"
                  label="Zip Code"
                  :loading="zipLoader"
                  required
                  v-model="registerData.zip"
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="12" md="6" lg="6" xl="6">
                <v-autocomplete
                  color="black"
                  v-model="registerData.insurance_name"
                  :items="insurances"
                  item-text="name"
                  item-value="name"
                  label="Insurance Name"
                  class="my-1"
                  outlined
                  hide-details
                  dense
                ></v-autocomplete
              ></v-col>
              <v-col cols="12" md="6" lg="6" xl="6">
                <v-text-field
                  color="black"
                  v-model="registerData.insurance_number"
                  label="Insurance Number"
                  outlined
                  hide-details
                  dense
                  type="text"
                  class="my-1"
                ></v-text-field
              ></v-col>
              <v-col cols="12" md="6" lg="6" xl="6">
                <v-text-field
                  color="black"
                  v-model="registerData.other_insurance_name"
                  v-if="registerData.insurance_name === 'Other'"
                  label="Other Insurance Name"
                  outlined
                  hide-details
                  dense
                  class="my-1"
                ></v-text-field
              ></v-col>

              <section class="d-flex flex-column align-start my-4">
                <h3 class="t-font-medium t-text-lg t-text-black mb-2">
                  Where would you like to receive OTP (One-Time Password)?
                </h3>
                <v-radio-group
                  v-model="otpPreference"
                  :rules="[(v) => !!v || 'Please select one option.']"
                >
                  <v-radio
                    label="Phone"
                    value="phone"
                    class="t-text-[#302E2E] t-font-light"
                  ></v-radio>
                  <v-radio
                    label="Email"
                    value="email"
                    class="t-text-[#302E2E] t-font-light"
                  ></v-radio>
                  <v-radio
                    label="Both Phone and Email"
                    value="both"
                    class="t-text-[#302E2E] t-font-light"
                  ></v-radio>
                </v-radio-group>
              </section>
              <v-col cols="12" md="12" lg="12" xl="12">
                <input type="checkbox" /> By checking this box I agree to the
                <span
                  @click="privacyPolicy = true"
                  style="font-weight: bold; cursor: pointer"
                >
                  Privacy Policy</span
                >,
                <span
                  @click="terms = true"
                  style="font-weight: bold; cursor: pointer"
                  >Terms and Conditions</span
                >
                and
                <span
                  @click="smsPolicy = true"
                  style="font-weight: bold; cursor: pointer"
                  >SMS Policy</span
                >.
                <template>
                  <div class="text-center">
                    <v-dialog v-model="privacyPolicy" width="900">
                      <template v-slot:activator="{ on, attrs }">
                        <span v-bind="attrs" v-on="on"> </span>
                      </template>

                      <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                          Privacy Policy
                        </v-card-title>
                        <v-card-text>
                          <h3>Introduction:</h3>
                          <p>
                            At Previsitreview, we prioritize the protection and
                            confidentiality of patient data. This privacy policy
                            outlines our commitment to safeguarding personal
                            demographic data, insurance details, provider
                            information, pharmacy records, medication data, labs
                            results, imaging center reports, and clinical
                            history files within our web application.
                          </p>

                          <h3>Data Collection:</h3>
                          <ul>
                            <li>
                              <strong>Personal Demographic Data:</strong>
                              <ul>
                                <li>
                                  We gather personal demographic information
                                  such as name, date of birth, address, contact
                                  details, and other pertinent data during
                                  registration. This assists in establishing
                                  patient profiles and facilitating
                                  communication between patients and healthcare
                                  providers.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Insurance Data:</strong>
                              <ul>
                                <li>
                                  Patients may provide insurance particulars
                                  including policy numbers, coverage specifics,
                                  and insurer details to aid in billing and
                                  claims processing. Insurance data is securely
                                  managed and accessed solely by authorized
                                  personnel for administrative purposes.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong
                                >Provider, Pharmacy, and Medication
                                Data:</strong
                              >
                              <ul>
                                <li>
                                  Patient records encompass details regarding
                                  healthcare providers, pharmacies, prescribed
                                  medications, and treatment plans. This data
                                  supports diagnosis, treatment, medication
                                  management, and ongoing healthcare
                                  administration for patients.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Labs and Imaging Center Data:</strong>
                              <ul>
                                <li>
                                  We collect lab test results, imaging center
                                  reports, and diagnostic data to assist in
                                  patient diagnosis and treatment. This
                                  information is securely stored and accessed by
                                  authorized healthcare professionals for
                                  informed medical decision-making.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong
                                >Clinical History File/Records Upload:</strong
                              >
                              <ul>
                                <li>
                                  Patients have the option to upload clinical
                                  history files, medical records, and relevant
                                  documents to their profiles for healthcare
                                  provider reference. These records enhance
                                  continuity of care and aid healthcare
                                  providers in making well-informed treatment
                                  decisions.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>Data Usage:</h3>
                          <ul>
                            <li>
                              <strong>Patient Care:</strong>
                              <ul>
                                <li>
                                  Patient data is utilized to deliver
                                  personalized healthcare services including
                                  diagnosis, treatment planning, medication
                                  management, and follow-up care. Healthcare
                                  providers access patient records to administer
                                  appropriate medical care and monitor patient
                                  progress effectively.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong
                                >Billing and Administrative Purposes:</strong
                              >
                              <ul>
                                <li>
                                  Patient data may be employed for billing,
                                  insurance claims processing, and
                                  administrative tasks related to healthcare
                                  services. This encompasses verifying insurance
                                  coverage, submitting claims to insurance
                                  entities, and generating invoices for services
                                  provided.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>Data Security:</h3>
                          <ul>
                            <li>
                              <strong>Confidentiality:</strong>
                              <ul>
                                <li>
                                  We uphold strict confidentiality of patient
                                  data and adhere to industry standards for data
                                  protection and security. Access to patient
                                  records is limited to authorized personnel
                                  requiring access for legitimate healthcare
                                  purposes.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Encryption:</strong>
                              <ul>
                                <li>
                                  Patient data is encrypted during transmission
                                  and storage to prevent unauthorized access or
                                  interception by third parties. We utilize
                                  encryption protocols and secure socket layer
                                  (SSL) technology to safeguard data integrity
                                  and confidentiality.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>Data Sharing:</h3>
                          <ul>
                            <li>
                              <strong>Third-Party Providers:</strong>
                              <ul>
                                <li>
                                  Patient data may be shared with third-party
                                  service providers such as insurance companies,
                                  labs, pharmacies, imaging centers, and
                                  healthcare professionals as necessary to
                                  facilitate patient care and administrative
                                  processes. We ensure that third-party
                                  providers comply with applicable privacy
                                  regulations and maintain the confidentiality
                                  of patient data.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>Data Retention:</h3>
                          <ul>
                            <li>
                              <strong>Retention Period:</strong>
                              <ul>
                                <li>
                                  Patient data is retained for the duration
                                  necessary to fulfill the purposes outlined in
                                  this privacy policy and to comply with legal
                                  and regulatory requirements. Upon request,
                                  patients may seek deletion or anonymization of
                                  their personal data, subject to certain
                                  exceptions.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>Policy Updates:</h3>
                          <p>
                            We may periodically update this privacy policy to
                            reflect changes in our data practices or regulatory
                            requirements. Patients will be informed of any
                            significant changes to the privacy policy and
                            provided with an opportunity to review and consent
                            to the updated terms.
                          </p>

                          <h3>Contact Information:</h3>
                          <p>
                            For inquiries or concerns regarding our privacy
                            practices, please contact us at [info@previsit.com].
                          </p>

                          <h3>Effective Date:</h3>
                          <p>
                            This privacy policy is effective from January 1,
                            2024, and governs the use of patient data within the
                            Previsitreview.
                          </p>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            @click="privacyPolicy = false"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </template>
                <template>
                  <div class="text-center">
                    <v-dialog v-model="terms" width="900">
                      <template v-slot:activator="{ on, attrs }">
                        <span v-bind="attrs" v-on="on"> </span>
                      </template>
                      <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                          Terms and Conditions
                        </v-card-title>

                        <v-card-text>
                          <h3>1. Introduction</h3>
                          <p>
                            Welcome to Previsitreview. These terms and
                            conditions govern your use of our telehealth
                            platform and services. By accessing or using our
                            platform, you agree to comply with these terms and
                            conditions. If you do not agree with any part of
                            these terms, you may not use our services.
                          </p>

                          <h3>2. Services</h3>
                          <ul>
                            <li>
                              <strong>Telehealth Services:</strong>
                              <ul>
                                <li>
                                  Our platform provides telehealth services,
                                  including virtual medical consultations,
                                  remote diagnosis, treatment recommendations,
                                  and other related healthcare services.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Eligibility:</strong>
                              <ul>
                                <li>
                                  You must be at least 18 years old and legally
                                  competent to enter into this agreement and use
                                  our services. By using our platform, you
                                  represent and warrant that you meet these
                                  eligibility criteria.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Healthcare Providers:</strong>
                              <ul>
                                <li>
                                  We may connect you with licensed healthcare
                                  providers who offer telehealth services
                                  through our platform. These providers are
                                  independent practitioners responsible for the
                                  care and treatment they provide.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>User Accounts:</strong>
                              <ul>
                                <li>
                                  You may be required to create a user account
                                  to access certain features of our platform.
                                  You are responsible for maintaining the
                                  confidentiality of your account credentials
                                  and for all activities that occur under your
                                  account.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>3. Use of Platform</h3>
                          <ul>
                            <li>
                              <strong>Compliance:</strong>
                              <ul>
                                <li>
                                  You agree to use our platform in compliance
                                  with all applicable laws, regulations, and
                                  these terms and conditions.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Prohibited Activities:</strong>
                              <ul>
                                <li>
                                  You may not use our platform for any unlawful,
                                  fraudulent, or unauthorized purposes.
                                  Prohibited activities include but are not
                                  limited to:
                                  <ul>
                                    <li>
                                      Violating any third-party rights,
                                      including intellectual property rights.
                                    </li>
                                    <li>
                                      Transmitting viruses, malware, or other
                                      harmful code.
                                    </li>
                                    <li>
                                      Interfering with the security or integrity
                                      of our platform.
                                    </li>
                                    <li>
                                      Harassing, threatening, or abusing others.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Content:</strong>
                              <ul>
                                <li>
                                  You are solely responsible for any content you
                                  upload, transmit, or share through our
                                  platform. You retain ownership of your
                                  content, but by using our services, you grant
                                  us a non-exclusive, royalty-free license to
                                  use, reproduce, modify, adapt, publish, and
                                  distribute your content for the purpose of
                                  providing our services.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Feedback:</strong>
                              <ul>
                                <li>
                                  We welcome feedback, suggestions, and ideas
                                  about our platform. By providing feedback, you
                                  grant us the right to use and incorporate your
                                  feedback into our services without any
                                  obligation to compensate you.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>4. Privacy</h3>
                          <ul>
                            <li>
                              <strong>Privacy Policy:</strong>
                              <ul>
                                <li>
                                  Your privacy is important to us. Please review
                                  our privacy policy to understand how we
                                  collect, use, and disclose your personal
                                  information.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Confidentiality:</strong>
                              <ul>
                                <li>
                                  We take measures to protect the
                                  confidentiality and security of your personal
                                  information and healthcare data. However, we
                                  cannot guarantee the security of information
                                  transmitted over the internet or stored
                                  electronically.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>5. Fees and Payments</h3>
                          <ul>
                            <li>
                              <strong>Service Fees:</strong>
                              <ul>
                                <li>
                                  Certain services offered through our platform
                                  may be subject to fees. You agree to pay all
                                  fees associated with your use of these
                                  services.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Payment Methods:</strong>
                              <ul>
                                <li>
                                  We may offer various payment methods for your
                                  convenience. By providing payment information,
                                  you represent and warrant that you are
                                  authorized to use the selected payment method.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Refunds:</strong>
                              <ul>
                                <li>
                                  Service fees are non-refundable, except as
                                  required by law or as otherwise specified in
                                  our refund policy.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>6. Disclaimer of Warranties</h3>
                          <ul>
                            <li>
                              <strong>No Guarantees:</strong>
                              <ul>
                                <li>
                                  While we strive to provide high-quality
                                  telehealth services, we cannot guarantee the
                                  accuracy, reliability, or effectiveness of our
                                  platform or the services provided by
                                  healthcare providers.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>As-Is Basis:</strong>
                              <ul>
                                <li>
                                  Our platform is provided on an "as-is" and "as
                                  available" basis, without any warranties of
                                  any kind, whether express or implied. To the
                                  fullest extent permitted by law, we disclaim
                                  all warranties, including but not limited to
                                  warranties of merchantability, fitness for a
                                  particular purpose, and non-infringement.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>7. Limitation of Liability</h3>
                          <ul>
                            <li>
                              <strong>Exclusion of Damages:</strong>
                              <ul>
                                <li>
                                  In no event shall we be liable for any
                                  indirect, incidental, special, consequential,
                                  or punitive damages arising out of or in
                                  connection with your use of our platform or
                                  the services provided through our platform.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Maximum Liability:</strong>
                              <ul>
                                <li>
                                  Our total liability to you for any claims
                                  arising under these terms and conditions shall
                                  not exceed the amount you paid to us for the
                                  services giving rise to the claim.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>8. Governing Law and Dispute Resolution</h3>
                          <ul>
                            <li>
                              <strong>Governing Law:</strong>
                              <ul>
                                <li>
                                  These terms and conditions shall be governed
                                  by and construed in accordance with the laws
                                  of [Jurisdiction], without regard to its
                                  conflict of law provisions.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <strong>Dispute Resolution:</strong>
                              <ul>
                                <li>
                                  Any disputes arising under these terms and
                                  conditions shall be resolved through
                                  arbitration in accordance with the rules of
                                  the American Arbitration Association. The
                                  arbitration shall take place in
                                  [Jurisdiction], and the arbitrator's decision
                                  shall be final and binding.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>9. Changes to Terms and Conditions</h3>

                          <ul>
                            <li>
                              <strong>Modification:</strong>
                              <ul>
                                <li>
                                  We reserve the right to modify or update these
                                  terms and conditions at any time without prior
                                  notice. Any changes will be effective
                                  immediately upon posting on our platform. Your
                                  continued use of our platform after the
                                  posting of revised terms constitutes your
                                  acceptance of the changes.
                                </li>
                              </ul>
                            </li>
                          </ul>

                          <h3>10. Contact Information</h3>
                          <p>
                            For questions or inquiries regarding these terms and
                            conditions, please contact us at
                            [info@previsit.com].
                          </p>

                          <p>
                            <strong>Effective Date:</strong>
                            These terms and conditions are effective as of
                            January 1, 2024, and govern your use of our
                            Previsitreview platform and services.
                          </p>
                        </v-card-text>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            @click="privacyPolicy = false"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </template>
                <template>
                  <div class="text-center">
                    <v-dialog v-model="smsPolicy" width="900">
                      <template v-slot:activator="{ on, attrs }">
                        <span v-bind="attrs" v-on="on"> </span>
                      </template>

                      <v-card>
                        <v-card-title class="text-h5 grey lighten-2">
                          SMS Policy
                        </v-card-title>

                        <v-card-text>
                          <h2>Objective:</h2>
                          <p>
                            The SMS policy aims to outline guidelines for
                            sending SMS notifications to patients for various
                            interactions, including appointment booking,
                            cancellation, rescheduling, and registration,
                            through the Previsit platform.
                          </p>

                          <h2>Scope:</h2>
                          <p>
                            This policy applies to all patients registered with
                            the Previsit platform who have provided consent to
                            receive SMS notifications.
                          </p>

                          <h2>Guidelines:</h2>

                          <ol>
                            <li>
                              <h3>Consent:</h3>
                              <ul>
                                <li>
                                  Patients must provide explicit consent to
                                  receive SMS notifications during the
                                  registration process.
                                </li>
                                <li>
                                  The consent should be obtained through an
                                  opt-in mechanism, clearly indicating the types
                                  of notifications they will receive.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h3>Appointment Booking:</h3>
                              <ul>
                                <li>
                                  Patients will receive an SMS confirmation upon
                                  successful booking of an appointment.
                                </li>
                                <li>
                                  The SMS will include the appointment details,
                                  such as date, time, location, and any specific
                                  instructions.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h3>Appointment Cancellation:</h3>
                              <ul>
                                <li>
                                  Patients will receive an SMS notification if
                                  their appointment is cancelled by the
                                  healthcare provider or the system.
                                </li>
                                <li>
                                  The SMS will inform the patient about the
                                  cancellation and may provide instructions for
                                  rescheduling if applicable.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h3>Appointment Rescheduling:</h3>
                              <ul>
                                <li>
                                  Patients will receive an SMS notification if
                                  their appointment is rescheduled to a
                                  different date, time, or location.
                                </li>
                                <li>
                                  The SMS will include the updated appointment
                                  details and any necessary instructions.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h3>Registration:</h3>
                              <ul>
                                <li>
                                  Patients will receive a welcome SMS upon
                                  successful registration with the Previsit
                                  platform.
                                </li>
                                <li>
                                  The SMS may include a brief introduction to
                                  the platform, login credentials (if
                                  applicable), and contact information for
                                  support.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h3>Frequency:</h3>
                              <ul>
                                <li>
                                  SMS notifications should be sent sparingly and
                                  only for essential communication purposes.
                                </li>
                                <li>
                                  Avoid excessive or unnecessary messaging to
                                  prevent patient annoyance or spam.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h3>Opt-Out Option:</h3>
                              <ul>
                                <li>
                                  Patients should have the option to opt-out of
                                  receiving SMS notifications at any time.
                                </li>
                                <li>
                                  Provide clear instructions on how patients can
                                  opt-out, such as sending a specific keyword or
                                  contacting support.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h3>Data Privacy and Security:</h3>
                              <ul>
                                <li>
                                  Ensure compliance with data protection
                                  regulations, such as GDPR or HIPAA, when
                                  handling patient information for SMS
                                  communication.
                                </li>
                                <li>
                                  Implement measures to safeguard patient data
                                  and prevent unauthorized access to SMS
                                  records.
                                </li>
                              </ul>
                            </li>
                            <li>
                              <h3>Accuracy and Timeliness:</h3>
                              <ul>
                                <li>
                                  Ensure that SMS notifications are accurate and
                                  delivered in a timely manner to avoid
                                  confusion or inconvenience for patients.
                                </li>
                              </ul>
                            </li>
                          </ol>

                          <h2>Review and Compliance:</h2>
                          <p>
                            The SMS policy will be periodically reviewed and
                            updated to align with any changes in regulations or
                            organizational requirements. All staff involved in
                            patient communication via SMS must adhere to the
                            guidelines outlined in this policy.
                          </p>

                          <h2>Approval:</h2>
                          <p>
                            This SMS policy is approved and effective from
                            January 1, 2024.
                          </p>

                          <h2>Contact Information:</h2>
                          <p>
                            For inquiries or concerns regarding this SMS policy,
                            please contact us at info@previsit.com.
                          </p>
                        </v-card-text>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="primary"
                            text
                            @click="smsPolicy = false"
                          >
                            Close
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </template>
              </v-col>
            </v-row>

            <v-btn
              depressed
              block
              height="43"
              style="border-radius: 10px"
              color="secondary"
              class="text-capitalize mt-3 mb-5"
              :loading="loader"
              @click="register"
            >
              Register Now
            </v-btn>

            <div
              class="d-flex flex-column white--text align-center justify-center"
            >
              <div
                class="d-flex t-text-[#302E2E] my-2 t-w-full align-center justify-center"
              >
                <v-divider class="t-bg-[#302E2E] t-h-[5px]" />
                <span class="mx-3 t-text-lg"> or </span>
                <v-divider class="t-bg-[#302E2E] t-h-[5px]" />
              </div>

              <small
                class="t-text-[#302E2E] lg:t-text-xl t-text-base t-font-light"
                >Already have an account?
                <nuxt-link class="black--text t-font-[450]" to="/login"
                  >Login</nuxt-link
                >
              </small>

              <!-- <div class="d-flex align-center my-5 justify-center">
                <a
                  v-for="(social, index) in socialLink"
                  :key="index"
                  :href="social.route"
                  class="d-flex align-center justify-center ml-6 t-w-[50px] t-h-[50px] t-bg-[#D0D5DD]/30 t-rounded-[10px] px-0"
                  target="_blank"
                >
                  <v-img
                    :src="social.path"
                    lazy-src="social.path"
                    width="24"
                    height="24"
                    contain
                  />
                </a>
              </div> -->
            </div>
          </v-form>
        </v-card>
        <small style="font-size: 10px" class="black--text ligthen-5 pa-1">
          {{ `Version: ${AppVersion?.app_version}` }}
        </small>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import countryCodes from "country-codes-list";
import { VueTelInput } from "vue-tel-input";
import version from "../versions";
export default {
  layout: "authLayout",
  components: {
    VueTelInput,
  },
  data() {
    return {
      emailError: null,
      privacyPolicy: false,
      terms: false,
      smsPolicy: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
      loader: false,
      zipLoader: false,
      showPassword: false,
      otpPreference: null, // For OTP preference selection
      insurances: [],

      confirmShowPassword: false,
      confirmPassword: null,
      countryCodeModel: null,
      registerData: {
        first_name: null,
        last_name: null,
        address: null,
        city: null,
        state: null,
        zip: null,
        phone: "",
        email: null,
        insurance_name: "",
        other_insurance_name: "",
        insurance_number: "",
        gender: "",
        dob: "",
        // password: null,
      },
      genderOptions: [
        { name: "Male", value: "male" },
        { name: "Female", value: "female" },
      ],
      readonlyNumber: false,
      readonlyEmail: false,
      socialLink: [
        {
          path: "/icons/facebook-color.png",
          route: "https://www.facebook.com/",
        },
        {
          path: "/icons/google-color.png",
          route: "https://www.google.com/",
        },
        {
          path: "/icons/x-color.png",
          route: "https://x.com",
        },
      ],
    };
  },
  watch: {
    // zipCode(val) {
    //   if (val?.length >= 5) {
    //     this.getAddress(val)
    //   }
    // },
    // phoneNumber(val) {
    //   if (val) {
    //     // if number not starts with + add
    //     // if (!val?.startsWith('+')) {
    //     //   this.registerData.phone = `+${val}`
    //     // }
    //   }
    // },
  },
  async created() {
    const { mr_no } = await this.$route?.query;
    this.fetchInsurances();

    // If mr_no is present in hash then fetch the data
    await this.fetchTempData(mr_no);
  },
  computed: {
    AppVersion() {
      return version;
    },
    // zipCode: {
    //   get() {
    //     return this.registerData.zip
    //   },
    //   set(val) {
    //     this.registerData.zip = val
    //   },
    // },
    countryCodes() {
      let countryCodesList = countryCodes.customList(
        "countryNameEn",
        "{countryCallingCode}"
      );
      countryCodesList = Object.keys(countryCodesList).map((key) => {
        return {
          country: `${key}`,
          code: countryCodesList[key],
          label: `${key} (${countryCodesList[key]})`,
        };
      });

      return countryCodesList;
    },
    phoneNumber() {
      return this.registerData.phone;
    },
  },
  methods: {
    async initLogin(e) {
      if (!this.registerData?.email) {
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          text: "Please Enter Email.",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });
        return;
      }

      if (!this.registerData?.phone) {
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          text: "Please Enter Your Phone.",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });
        return;
      }

      this.$store.dispatch("initLoader", true);

      try {
        const response = await this.$api.expressService.sendOtp({
          email: this.registerData.email,
          phone: this.registerData.phone,
          type: this.otpPreference,
          flow: "register",
        });

        if (response.status) {
          localStorage.setItem("phone", this.registerData.phone);
          localStorage.setItem("email", this.registerData.email);
          localStorage.setItem("type", this.otpPreference);

          this.$router.push("/verify-user");

          // this.$swal.fire({
          //   toast: true,
          //   timerProgressBar: true,
          //   position: "top-end",
          //   icon: "success",
          //   text: "OTP sent successfully.",
          //   showConfirmButton: false,
          //   timer: 2000,
          //   didOpen: (toast) => {
          //     toast.addEventListener("mouseenter", this.$swal.stopTimer);
          //     toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          //   },
          // });
        } else this.$router.push("/login");
      } catch (error) {
        // console.log(error);
      } finally {
        this.$store.dispatch("initLoader", false);
      }
    },
    async fetchInsurances() {
      await this.$api.expressService
        .getAllInsurances()
        .then(async (response) => {
          if (response?.data) {
            this.insurances = response.data.reverse();
            this.insurances.push({ name: "Other" });

            // Group ROS by type
          }
        })
        .finally(() => {});
    },
    async fetchTempData(hash) {
      if (!hash) return;

      await this.$api.patientService
        .getTemporaryData(hash)
        .then((response) => {
          if (response?.data) {
            this.registerData = {
              ...this.registerData,
              mr_no: response?.data?.mr_no,
              email: response?.data?.email,
              phone: response?.data?.phone,
              first_name: response?.data?.name,
            };

            // disbale readonly fields
            if (response?.data?.email) {
              this.readonlyEmail = true;
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    setPhoneNumber(number, phoneObj) {
      if (phoneObj?.number) {
        this.registerData.phone = phoneObj?.number;
        // if number not starts with + add
        if (!phoneObj?.number?.startsWith("+")) {
          this.registerData.phone = `+${phoneObj?.number}`;
        }
      }
    },
    validateEmail() {
      this.emailError = null; // Reset the error message

      // Regular expression for basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (
        !this.registerData?.email ||
        !this.registerData?.email?.match ||
        !this?.registerData?.email?.match(emailRegex)
      ) {
        this.emailError = "Please enter a valid email address";
      }
      console.log(this.emailError);
    },
    async getAddress(code) {
      this.zipLoader = true;
      await this.$api.utilService
        .getAddressFromZip(code)
        .then((response) => {
          this.registerData.city =
            response?.places &&
            response?.places[0] &&
            response?.places[0]["place name"];
          this.registerData.state =
            response?.places && response?.places[0]?.state;
        })
        .catch((error) => {
          this.registerData.city = null;
          this.registerData.state = null;
        })
        .finally(() => {
          this.zipLoader = false;
        });
    },
    // selectRegisterNumber(num, phoneObj) {
    //   if (num && phoneObj)
    //     this.registerData.phone = `${phoneObj?.countryCallingCode} ${phoneObj?.nationalNumber}`
    // },
    register() {
      if (this.emailError) {
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          text: "Please enter a valid email address.",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });
        return;
      }
      if (
        !this.registerData.phone ||
        this.registerData.phone == "undefined undefined"
      ) {
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          text: "Please enter phone number.",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });
        return;
      }

      // Phone number should not contain any alphabets
      if (this.registerData.phone.match(/[a-z]/i)) {
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          text: "Please enter valid phone number.",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });
        return;
      }

      if (!this.otpPreference) {
        this.$swal.fire({
          icon: "warning",
          title: "Please select an OTP preference",
          timer: 2000,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
        return;
      }

      if (this.confirmPassword != this.registerData.password) {
        this.$swal.fire({
          toast: true,
          timerProgressBar: true,
          position: "top-end",
          icon: "error",
          text: "Password didn't matched.",
          showConfirmButton: false,
          timer: 2000,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", this.$swal.stopTimer);
            toast.addEventListener("mouseleave", this.$swal.resumeTimer);
          },
        });
        return;
      }

      if (this.$refs.registerForm.validate()) {
        this.loading = true;
        this.$store.dispatch("initLoader", true);

        let data = {
          ...this.registerData,
          phone: this.registerData?.phone.replace(/\s/g, ""), // Remove spaces from phone
        };

        // Check if insurance_name is "Other" and other_insurance_name has a value
        if (
          this.registerData.insurance_name === "Other" &&
          this.registerData.other_insurance_name
        ) {
          // Add other_insurance_name to insurance_name
          data.insurance_name = this.registerData.other_insurance_name;
        }

        // Remove the other_insurance_name field
        delete data.other_insurance_name;

        this.$api.authService
          .register(data)
          .then((response) => {
            if (response?.status) {
              this.$swal.fire({
                toast: true,
                timerProgressBar: true,
                position: "top-end",
                icon: "success",
                text: "Registered Successfully.",
                showConfirmButton: false,
                timer: 2000,
                didOpen: (toast) => {
                  toast.addEventListener("mouseenter", this.$swal.stopTimer);
                  toast.addEventListener("mouseleave", this.$swal.resumeTimer);
                },
              });

              // localStorage.setItem("newUser", this.registerData.email);
              let registerEmail = this.registerData.email;
              // reset Fields

              // disbale readonly fields
              this.readonlyEmail = false;
              this.readonlyNumber = false;
              this.initLogin();
              // this.$refs.registerForm.reset();
            }
          })
          .finally(() => {
            this.loading = false;
            this.$store.dispatch("initLoader", false);
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.custom_intl_selector {
  padding: 0 12px;
  // box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
  //   0 1px 5px 0 rgba(0, 0, 0, 0.12);
  background: #fff;
  border-radius: 4px;

  cursor: text;
  height: 40px;
  align-items: center;
  display: flex;

  min-height: inherit;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  transition-property: height, min-height;
  width: 100%;
  border-color: rgba(229, 231, 235, var(--tw-border-opacity));
}
</style>
