<template>
  <div class="row">
    <div class="col-md-8"><edit-profile-form :data="user"> </edit-profile-form></div>
    <div class="col-md-4"><user-card :data="user"> </user-card></div>
  </div>
</template>
<script>
import EditProfileForm from '../../components/UserProfile/EditProfileForm.vue';
import UserCard from '../../components/UserProfile/UserCard.vue';

export default {
  name: 'setting',
  components: {
    EditProfileForm,
    UserCard
  },
  data(){
    return{
      user:{
        fullname:''
      }
    }
  },
  async fetch(){
    var id = this.$cookies.get("id")
    var token = this.$cookies.get("refresh_token")
    this.$axios.setHeader("refresh_token",token)
    this.$axios.setHeader("user_id",id)
    const data = await this.$axios.$get("api/v1/user/"+id).then((data)=>{
      this.user = data.data
    });
  },
};
</script>
<style></style>