<template>
    <div class="login" style="height:100%;position:relative">        
        <v-container fluid fill-height>
            <v-row align="center" justify="center">
                <v-col md="3">
                <v-card color="#f4f7f5" shaped elevation="10">
                    <v-flex>
                        <v-img class="mx-auto" contain max-width="200px" :src="require('@/assets/icons/Fingerprint Padlock.png')" alt="">
                        </v-img>
                        <!-- <h2 class="display-3">Login</h2> -->
                    </v-flex> 
                    <v-card-text>
                        <v-row v-show="isLogin" justify="center" >
                            <div class="semipolar-spinner text-center" >
                            <div class="ring"></div>
                            <div class="ring"></div>
                            <div class="ring"></div>
                            <div class="ring"></div>
                            <div class="ring"></div>
                            </div>
                        </v-row>
                        <br>
                        <h2 class="text-center">Enter your user creditential!</h2>
                        <br>
                        <v-form ref="form" v-model="valid" lazy-validation>
                        Email
                        <v-text-field
                            id="email"
                            autocomplete="off"
                            prepend-icon="mdi-email"
                            v-model="user.email"
                            :rules="[() => !!user.email || 'This field is required',
                            v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid']"
                            name="email"
                            label="Email"
                            type="email"
                            solo
                            dense
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
                        </v-form>
                        <nuxt-link to="/Register">don't have an account yet?</nuxt-link>
                    </v-card-text>
                    <v-card-actions>
                        <v-col>
                            <v-btn to="/" outlined rounded color="error" dark >
                                <v-icon>arrow-left</v-icon>
                                Back
                            </v-btn>
                        </v-col>
                        <v-col class="text-right">
                            <v-btn :disabled="!valid" rounded color="success" @click="login()" click="validate">
                                Login
                            </v-btn>
                        </v-col>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<style scoped>
.login{
    background: url('../assets/background/01 - Copy.png');
    background-size:100%;
}
</style>
<script>
import Alert from "~/components/Alert.vue"

export default{
    middleware:'dashboard',
    components: { Alert },
    data:()=>({
        user:{
            email:'',
            password:''
        },
        alert:{
            display:false,
            color:'green',
            border:'left',
            type:'success',
            icons:'',
            message:'',
            transition:''
        },
        valid:false,
        isLogin:false
    }),
    head(){
      return{
          title:$nuxt.$route.name
      }  
    },
    methods:{
        showMessage(message,type){
            this.message =message
            this.type = type
            this.transition="scroll-x-transition"
            setTimeout(() => {
                this.alert=true
            }, 3000);
        },
        async login(){
            this.isLogin = true
            if(this.$refs.form.validate()){
                await this.$axios.$post("/api/v1/user/auth",this.user).then((res)=>{
                    if(res.data.id!= null){
                        this.$notify({
                            type: 'success',
                            title: 'Login Success!',
                            text: 'Rediricting to<b> Dashboard! </b>'
                        })
                        this.$store.commit('auth/setUser',res.data,{httpOnly:true})
                        this.$router.push('/dashboard/home')
                    }else{
                        this.$notify({
                            type: 'error',
                            title: 'Login Failed!',
                            text: res.message,
                            // data: {res:res}
                        })
                    }
                }).catch((err)=>{
                    if(!err.status){
                        this.$notify({
                            type: 'error',
                            title: 'Login Failed!',
                            text: err,
                        })
                    }
                })
            }
            this.isLogin = false
        }
    }
}
</script>

<style scoped>
.semipolar-spinner, .semipolar-spinner * {
      box-sizing: border-box;
    }

    .semipolar-spinner {
      height: 65px;
      width: 65px;
      position: relative;
    }

    .semipolar-spinner .ring {
      border-radius: 50%;
      position: absolute;
      border: calc(65px * 0.05) solid transparent;
      border-top-color: #ff1d5e;
      border-left-color: #ff1d5e;
      animation: semipolar-spinner-animation 2s infinite;
    }

    .semipolar-spinner .ring:nth-child(1) {
      height: calc(65px - 65px * 0.2 * 0);
      width: calc(65px - 65px * 0.2 * 0);
      top: calc(65px * 0.1 * 0);
      left: calc(65px * 0.1 * 0);
      animation-delay: calc(2000ms * 0.1 * 4);
      z-index: 5;
    }

    .semipolar-spinner .ring:nth-child(2) {
      height: calc(65px - 65px * 0.2 * 1);
      width: calc(65px - 65px * 0.2 * 1);
      top: calc(65px * 0.1 * 1);
      left: calc(65px * 0.1 * 1);
      animation-delay: calc(2000ms * 0.1 * 3);
      z-index: 4;
    }

    .semipolar-spinner .ring:nth-child(3) {
      height: calc(65px - 65px * 0.2 * 2);
      width: calc(65px - 65px * 0.2 * 2);
      top: calc(65px * 0.1 * 2);
      left: calc(65px * 0.1 * 2);
      animation-delay: calc(2000ms * 0.1 * 2);
      z-index: 3;
    }

    .semipolar-spinner .ring:nth-child(4) {
      height: calc(65px - 65px * 0.2 * 3);
      width: calc(65px - 65px * 0.2 * 3);
      top: calc(65px * 0.1 * 3);
      left: calc(65px * 0.1 * 3);
      animation-delay: calc(2000ms * 0.1 * 1);
      z-index: 2;
    }

    .semipolar-spinner .ring:nth-child(5) {
      height: calc(65px - 65px * 0.2 * 4);
      width: calc(65px - 65px * 0.2 * 4);
      top: calc(65px * 0.1 * 4);
      left: calc(65px * 0.1 * 4);
      animation-delay: calc(2000ms * 0.1 * 0);
      z-index: 1;
    }

    @keyframes semipolar-spinner-animation {
      50% {
        transform: rotate(360deg) scale(0.7);
      }
    }
</style>