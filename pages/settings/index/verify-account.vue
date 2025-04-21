<template>

<Verification />
</template>
    
    <script>
    import Verification from '@/components/VerificationModal.vue';
    
    export default {
      components: {  Verification },
      data() {
        return {
          activeTab: 0,
      
        };
      },
    
      methods: {
    
      },
      mounted() {
    
    console.log(this.$route.path);
    },
    };
    </script>