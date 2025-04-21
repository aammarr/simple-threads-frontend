<template>
    <v-container class="px-8 py-16" style="padding-bottom: 150px !important">
      <h1
        class="text-3xl font-bold text-indigo-600 mb-4 text-center"
        style="
          font-size: 45px;
          font-weight: bold;
          font-family: Ubuntu !important;
        "
      >
About Us    </h1>
  
          <v-img
            src="/home-image.png"
            lazy-src="/home-image.png"
            
  class="image-style-about"      />
  
  
  <h1
        class="text-3xl font-bold text-indigo-600 mb-4 small-heading" 
  >Who We Are?</h1
          >
  <p class="text-style">Welcome to Express Triage, your trusted partner in modern healthcare. Learn more about our mission, values, and the team behind our innovative platform. <br> <br>
    At Express Triage, our mission is to revolutionize the healthcare industry by leveraging technology to provide convenient, accessible, and personalized care to patients worldwide. We believe that everyone deserves timely access to quality healthcare, and we're committed to making that a reality.

<br><br>
Express Triage is a groundbreaking platform designed to revolutionize patient care by collecting and analyzing medical information before connecting patients with the most suitable healthcare providers or facilities. <br><br>

Patients input detailed medical histories, symptoms, and concerns through an intuitive online interface. <br><br>
The platform ensures accuracy and completeness, capturing key details like current medications, allergies, past medical history, and presenting complaints. <br><br>

Sharing current insurance information in advance prevents billing errors and delays. Facility Preferences: Patients can indicate their preferred pharmacies or diagnostic facilities, ensuring prescriptions or test orders are sent to the right places. <br><br>

Express Triage offers a specialized Health Record Review & Summary service designed to simplify complex medical records for patients and healthcare providers. This service leverages advanced AI technology to extract, organize, and present key medical information in an easy-to-read format.
</p>
     
  
  
  
  
    </v-container>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .main-heading {
    font-size: 30px;
    font-weight: bold;
    font-family: Ubuntu !important;
  }
  .second-heading {
    font-size: 25px;
    font-weight: bold;
    font-family: Ubuntu !important;
    /* color: #e11f27; */
  }
  .third-heading {
    font-size: 22px;
    font-weight: bold;
    font-family: Ubuntu !important;
  }
  ul {
    list-style: disc;
  }
  ol {
    list-style: decimal;
  }
  </style>
  
  <
  
  <style lang="scss" scoped>
  strong {
    color:$primary-color;
  }
  .custom-icon-list {
    list-style: none;
    padding-left: 0;
  }
  
  .custom-icon-list li {
    position: relative;
    font-size: 18px;
    padding-left: 24px; /* Space for the icon */
    margin-bottom: 8px;
    /* font-weight: bold; */
    font-family: Poppins !important;
  
  }
  
  .custom-icon-list li::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px; /* Match the width of the SVG */
    height: 20px; /* Match the height of the SVG */
    mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.834 9.99984L9.66732 7.49984L3.41732 1.6665L5.33398 9.99984L3.33398 18.3332L9.58398 12.4998L17.834 9.99984Z" fill=\'%23DF232F\'/></svg>')
      no-repeat;
    -webkit-mask: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.834 9.99984L9.66732 7.49984L3.41732 1.6665L5.33398 9.99984L3.33398 18.3332L9.58398 12.4998L17.834 9.99984Z" fill=\'%23DF232F\'/></svg>')
      no-repeat;
    background-color: #df232f; /* Fallback color for unsupported browsers */
    
  }
  </style>
  