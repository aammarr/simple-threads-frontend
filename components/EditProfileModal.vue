<template>
      <v-card>
        <v-card-title class="headline justify-center mb-2">Edit Profile</v-card-title>
        <v-card-text>
          <v-form ref="form">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field v-model="editedUser.firstName" label="First Name" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="editedUser.lastName" label="Last Name" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="editedUser.username" label="Username" required></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="editedUser.accountType" label="Account Type" disabled></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="editedUser.email" label="Email" disabled></v-text-field>
              </v-col>
              <v-col cols="12" md="6">
                <v-text-field v-model="editedUser.phone" label="Phone Number" type="tel"></v-text-field>
              </v-col>
          
              <v-col cols="12">
                <v-textarea v-model="editedUser.bio" label="Bio" rows="2"></v-textarea>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="editedUser.city" label="City"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="editedUser.state" label="State"></v-text-field>
              </v-col>
              <v-col cols="12" md="4">
                <v-text-field v-model="editedUser.country" label="Country"></v-text-field>
              </v-col>
           
            </v-row>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="close">Cancel</v-btn>
          <v-spacer></v-spacer>

          <v-btn color="primary" @click="save">Save</v-btn>
        </v-card-actions>
      </v-card>
  </template>
  
  <script>
  export default {
    props: {
      user: Object,
      value: Boolean
    },
    data() {
      return {
        editedUser: { ...this.user }
      }
    },
    computed: {
      dialog: {
        get() { return this.value },
        set(val) { this.$emit('input', val) }
      }
    },
    watch: {
      user(newVal) {
        this.editedUser = { ...newVal }
      }
    },
    methods: {
      save() {
        if (this.$refs.form.validate()) {
          this.$emit('save', this.editedUser)
          this.close()
        }
      },
      close() {
        this.$router.push('/profile')
      }
    }
  }
  </script>