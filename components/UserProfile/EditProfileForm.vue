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
            v-model="userdata.fullname"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            type="email"
            label="Email address"
            placeholder="mike@email.com"
            v-model="userdata.email"
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
            v-model="userdata.fullname"
          >
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <base-input
            type="text"
            label="Address"
            placeholder="Home Address"
            v-model="userdata.address"
          >
          </base-input>
        </div>
      </div>
      <label>Date of Birth</label>
      <template>
        <base-input>
        <el-date-picker v-model="userdata.dob"
          type="datetime"
          placeholder="Select date and time">
          </el-date-picker>
      </base-input>
      </template>

      <base-button native-type="submit" type="primary" class="btn-fill">
        Save
      </base-button>
    </form>
  </card>
</template>
<script>
import moment from 'moment'
import {DatePicker, TimeSelect} from 'element-ui'
export default {
  middleware:'authentication',
  components:{
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
  },
  async fetch(){
    var id = this.$cookies.get("id")
    var token = this.$cookies.get("refresh_token")
    this.$axios.setHeader("refresh_token",token)
    this.$axios.setHeader("user_id",id)
    const data = await this.$axios.$get("api/v1/user/"+id).then((res)=>{
      this.userdata = res.data 
    });
  },
  props:['data'],
  watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
  },
  data() {
    return {
      userdata:{
        menu: false,
        fullname:null,
        dob:null,
        address:null,
        email:null
      }
    };
  },
  methods: {
    async updateProfile() {
      if(this.userdata.fullname||this.userdata.address||this.userdata.email||this.userdata.dob){
          this.$axios.setHeader("refresh_token",this.$cookies.get("refresh_token"))
          this.$axios.setHeader("user_id",this.$cookies.get("id"))
          this.userdata.id=this.$cookies.get("id")
          await this.$axios.$put("/api/v1/user/update",this.userdata).then((res)=>{
              if(res.data){
                  this.$notify({
                      type: 'success',
                      title: 'Transaction successfully updated!',
                      text: 'Refreshing Table..'
                  })
                  this.$fetch()
              }else{
                  this.$notify({
                      type: 'error',
                      title: 'Update transaction failed!',
                      text: res.message,
                  })
              }
          }).catch((err)=>{
              if(!err.status){
                  this.$notify({
                      type: 'error',
                      title: 'Update transaction failed!',
                      text: err,
                  })
              }
          })
      }else{
          this.$notify({
              type: 'error',
              title: 'Please fill all the required input!',
              text: 'Try again..'
          })
      }
    }
  }
};
</script>
<style></style>
