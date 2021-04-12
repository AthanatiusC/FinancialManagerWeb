<template>
    <div class="register" style="height:100%;position:relative">        
        <v-container fluid fill-height>
            <v-row align="center" justify="center">
                <v-col md="3">
                    <v-card color="#f4f7f5" shaped elevation="10">
                    <div align="center" style="height:100px">
                        <img style="margin:20px;max-height:230px;display:block;position:absolute;top:-18%;left:20%" :src="require('@/assets/icons/PERSONAL-DATA-PROTECTION.png')" alt="">
                        <!-- <h2 class="display-3">Login</h2> -->
                    </div> 
                    <v-card-text>
                        <h2 class="text-center">Create a new account</h2>
                        <br>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            Email
                            <v-text-field
                                id="email"
                                autocomplete="off"
                                prepend-icon="mdi-email"
                                :rules="[() => !!user.email || 'This field is required',
                                v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid']"
                                name="email"
                                v-model="user.email"
                                label="Email"
                                type="email"
                                solo
                                dense
                            ></v-text-field>
                            Full Name
                            <v-text-field
                                prepend-icon="mdi-account"
                                ref="name"
                                v-model="user.fullname"
                                :rules="[() => !!user.fullname || 'This field is required']"
                                :error-messages="errorMessages"
                                label="Full Name"
                                solo
                                dense
                                placeholder="Enter your name"
                                required
                            ></v-text-field>
                            Password
                            <v-text-field
                                id="password"
                                v-model="user.password"
                                autocomplete="off"
                                prepend-icon="mdi-form-textbox-password"
                                :rules="[() => !!user.password || 'This field is required',
                                () => user.password.length>=8 || 'Minimal 8 characters',
                                ]"
                                hint="Password must be at least 8 characters"
                                name="password"
                                label="Password"
                                type="password"
                                solo
                                dense
                            ></v-text-field>
                            Confirm Password
                            <v-text-field
                                id="password2"
                                autocomplete="off"
                                prepend-icon="mdi-form-textbox-password"
                                name="password2"
                                v-model="user.password2"
                                :rules="[
                                () => !!user.password2 || 'This field is required',
                                () => user.password2.length>=8 || 'Minimal 8 characters',
                                () => user.password2 === user.password || 'Passwords must match'
                                ]"
                                hint="Password must be at least 8 characters"
                                label="Confirm Password"
                                type="password"
                                solo
                                dense
                            ></v-text-field>
                            Date of Birth
                            <v-menu ref="menu" v-model="menu" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-text-field
                                        v-model="user.dob"
                                        label="Birthday date"
                                        prepend-icon="mdi-calendar"
                                        readonly
                                        :rules="[() => !!user.dob || 'This field is required']"
                                        solo
                                        dense
                                        v-bind="attrs"
                                        v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker
                                    ref="picker"
                                    v-model="user.dob"
                                    :max="new Date().toISOString().substr(0, 10)"
                                    min="1950-01-01"
                                    @change="save"
                                    ></v-date-picker>
                            </v-menu>
                            Address
                            <v-text-field
                                ref="address"
                                v-model="user.address"
                                :rules="[
                                () => !!user.address || 'This field is required',
                                () => !!user.address && user.address.length <= 30 || 'Address must be less than 30 characters',
                                ]"
                                label="Address Line"
                                placeholder="Snowy Rock Pl"
                                counter="30"
                                solo
                                dense
                                prepend-icon="mdi-map"
                            ></v-text-field>
                            
                        </v-form>
                        <nuxt-link to="/Login">Already have account?</nuxt-link>
                    </v-card-text>
                    <v-card-actions>
                        <v-col>
                            <v-btn to="/" outlined rounded color="error" dark >
                                <v-icon>arrow-left</v-icon>
                                Back
                            </v-btn>
                        </v-col>
                        <v-col class="text-right">
                            <v-btn :disabled="!valid" rounded color="success" @click="validate" >
                                Confirm
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
  export default {
    middleware:'dashboard',
    head(){
      return{
          title:$nuxt.$route.name
      }  
    },
    data: () => ({
        valid:true,
        date: null,
        menu: false,
        errorMessages: '',
        user:{
          fullname:'',
          email:'',
          password:'',
          password2:'',
          dob:'',
          address:''
        }
    }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
      async validate() {
        if(this.$refs.form.validate()){
            await this.$axios.$post("/api/v1/user/register",this.user).then((res)=>{
                if(res.data != null){
                    this.$notify({
                        type:"success",
                        title: 'Successfully Registered!',
                        message: 'Redirecting to dashboard!'
                    })
                    this.$store.commit('auth/setUser',res.data,{httpOnly:true})
                    this.$router.push('/dashboard/home')
                }else{
                    this.$notify({
                        type:"error",
                        title: 'Register Failed!',
                        message: res.message
                    })
                }
            }).catch((err)=>{
                if(!err.status){
                    this.$notify({
                        type:"error",
                        title: 'Register Failed!',
                        message: "Duplicate email!"
                    })
                }
            })
        }
      },
    },
  }
</script>
<style scoped>
.register{
    background: url('../assets/background/10.png');
    background-size:100%;
}
</style>
