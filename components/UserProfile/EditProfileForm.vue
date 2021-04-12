<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <form @submit.prevent="updateProfile">
      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Username"
            placeholder="Username"
            v-model="data.fullname"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="email"
            label="Email address"
            placeholder="mike@email.com"
            v-model="data.email"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input
            type="text"
            label="Full Name"
            placeholder="Full Name"
            v-model="this.data.fullname"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input
            type="text"
            label="Address"
            placeholder="Home Address"
            v-model="data.address"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <base-input
                v-bind="attrs"
                v-on="on"
                type="text"
                label="Date of Birth"
                placeholder="Date of Birth"
                v-model="date">
              </base-input>
            </template>
            <v-date-picker
              ref="picker"
              v-model="date"
              :max="new Date().toISOString().substr(0, 10)"
              min="1950-01-01"
            ></v-date-picker>
          </v-menu>
        </div>
      </div>

      <!-- <div class="row">
        <div class="col-md-12">
          <base-input label="About Me">
            <textarea
              class="form-control"
              placeholder="ZIP Code"
              v-model="data.aboutMe"
            >
            </textarea>
          </base-input>
        </div>
      </div> -->

      <base-button native-type="submit" type="primary" class="btn-fill">
        Save
      </base-button>
    </form>
  </card>
</template>
<script>
import moment from 'moment'
import { format, parseISO } from 'date-fns'
export default {
  props:['data'],
  computed: {
      computedDateFormattedMomentjs () {
        return this.data.dob ? moment(this.data.dob).format('dddd, MMMM Do YYYY') : ''
      },
      computedDateFormattedDatefns () {
        return this.data.dob ? format(parseISO(this.data.dob), 'EEEE, MMMM do yyyy') : ''
      },
  },
  watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
  },
  data() {
    return {
      date: moment(this.data.dob).format("YYYY-MM-DD"),
      menu: false,
      // user:this.data
      // user: {
      //   username: this.data.fullname,
      //   email: this.data.email,
      //   firstName: this.data.fullname.split(' ')[0],
      //   lastName: this.data.fullname.split(' ')[1],
      //   address: this.data.address,
      //   city: 'New York',
      //   country: 'USA',
      //   postalCode: '',
      //   aboutMe: `Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.`
      // }
    };
  },
  methods: {
    updateProfile() {
      alert('Your data: ' + JSON.stringify(this.user));
    }
  }
};
</script>
<style></style>
