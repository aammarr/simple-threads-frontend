<template>
 <Feeds/>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {


 
    };
  },
  methods: {

  },
};
</script>

<style scoped>
.headline-main {
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
}

p {
  font-size: 20px;
}
</style>

<style lang="scss" scoped>
.home-top-container {
  position: relative; /* Ensure the container is positioned relatively */
  width: 100%;
  height: 666px;
  gap: 0px;
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0) 35.97%,
    #737373 76.67%
  );
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add shadow to the container */
}

.home-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.home-overlay {
  position: absolute; /* Position the overlay absolutely within the container */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background: rgba(232, 246, 252, 0.5);
  /* Semi-transparent background for the overlay */
}

.overlay-content {
  width: 100%;
}

.overlay-content h1 {
  font-family: Ubuntu !important;
  font-size: 48px;
  font-weight: bold;
  line-height: 55.15px;

  margin-bottom: 10px;
}

.overlay-content p {
  font-size: 18px;
  max-width: 480px;
  margin-bottom: 30px;
}

.appointment-button {
  padding: 10px 15px;
  background: #df232f;
  color: white;

  border-radius: 10px;
  &:hover {
    cursor: pointer;
    background: #c21f2a;
  }
}

.feature-card {
  gap: 47px;
  border-radius: 10px;
  border: 2px solid #c0c9e7; /* Corrected border */
  opacity: 1; /* Ensure the element is visible */
  min-height: 300px;
  background-color: #f8f9fe;
  box-shadow: -8px 8px 0px 0px rgba(137, 105, 180, 0.5); /* Adjusted shadow for better visibility */
}


@media (max-width: 599px) {
  .custom-class {
    text-align: center !important;
  }
  .overlay-content p {
    max-width: 100% !important;
  }
}
.tabs {
  border: 1px solid $primary-color;
  border-radius: 10px;
  display: flex;

  .tab-item {
    font-weight: bold;
    padding: 10px 15px;
    cursor: pointer;
  }
  .active-patient {
    background-color: $primary-color;

    border-radius: 10px 0 0 10px;
    color: white;
  }
  .active-doctor {
    background-color: $primary-color;

    border-radius: 0 10px 10px 0;
    color: white;
  }
}
.list {
  display: flex;
  gap: 14px;
  margin-bottom: 20px;
  font-weight: bold;
}

.testimonials-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 25px;

  .testimonials-card {
    padding: 35px;
    border: 1px solid #c0c9e7;
    border-radius: 8px;
    width: 40%;
    min-height: 300px;
  }
  .testimonials-arrow {
    background-color: $primary-color;
    padding: 10px 14px;
    padding-top: 13px;

    border-radius: 50%;
    &:hover {
      cursor: pointer;
      background-color: #8863b9;
    }
  }
  .testimonials-bottom-container {
    margin-top: 25px;
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: space-between;
    .testimonials-image {
      border-radius: 50% !important;
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: 80% 100%;
    }

    .testimonials-title {
      font-family: Ubuntu !important;
      font-weight: bold;
      font-size: 19px;
    }
    .testimonials-title-two {
      font-family: Poppins !important;
      font-weight: normal;
      font-size: 14px;
    }
  }
}

.testimonials-arrows {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 35px;
  .slider-arrow {
    background-color: $primary-color;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    &:hover {
      cursor: pointer;
    }
  }

  .active-slider-arrow {
    width: 40px;
    border-radius: 5px;
  }
}

@media (max-width: 904px) {
  .testimonials-container {
    flex-direction: column;
  }
  .testimonials-card {
    width: 100% !important;
  }

}
.read-button {
  text-align: center;
  color: $secondary-color;
  cursor: pointer;
}
.card-heading {
  font-size: 20px;
   font-weight: bold;
   color: $secondary-color;
}

.home-heading-small {
  font-family: Ubuntu !important;
  font-size: 50px !important;
  font-weight: 400 !important;
  line-height: 57.45px !important;
  text-align: left !important;
  text-underline-position: from-font !important;
  text-decoration-skip-ink: none !important;

  // Media queries for responsiveness
  @media (max-width: 1024px) { // For tablets
    font-size: 40px !important;
    line-height: 48px !important;
  }

  @media (max-width: 768px) { // For smaller tablets and large phones
    font-size: 35px !important;
    line-height: 42px !important;
  }

  @media (max-width: 480px) { // For small phones
    font-size: 25px !important;
    line-height: 32px !important;
    text-align: center !important; // Optional alignment adjustment
  }
}

.home-heading {
  font-family: Ubuntu !important;
  font-size: 70px !important;
  font-weight: 700 !important;
  line-height: 80.43px !important;
  text-align: left !important;
  text-underline-position: from-font !important;
  text-decoration-skip-ink: none !important;

  // Media queries for responsiveness
  @media (max-width: 1024px) { // For tablets
    font-size: 50px !important;
    line-height: 60px !important;
  }

  @media (max-width: 768px) { // For smaller tablets and large phones
    font-size: 40px !important;
    line-height: 50px !important;
  }

  @media (max-width: 480px) { // For small phones
    font-size: 30px !important;
    line-height: 40px !important;
    text-align: center !important; // Optional alignment adjustment
  }
}


</style>
