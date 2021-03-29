<template>
    <div class="login" style="height:100%;position:relative">        
        <v-container fluid fill-height>
            <v-row align="center" justify="center">
                <v-col md="3">
                    <v-card color="#f4f7f5" shaped elevation="10">
                    <div align="center" style="height:100px">
                        <img style="margin:20px;max-height:200px;display:block;position:absolute;top:-30%;left:23.5%" :src="require('@/assets/icons/Fingerprint Padlock.png')" alt="">
                        <!-- <h2 class="display-3">Login</h2> -->
                    </div> 
                    <v-card-text>
                        <h2 class="text-center">Enter your user creditential!</h2>
                        <br>
                        <v-form>
                        Username
                        <v-text-field
                            id="username"
                            autocomplete="off"
                            prepend-icon="mdi-account"
                            name="username"
                            label="Username"
                            type="text"
                            solo
                            dense
                        ></v-text-field>
                        Password
                        <v-text-field
                            id="password"
                            autocomplete="off"
                            prepend-icon="mdi-form-textbox-password"
                            name="password"
                            label="Password"
                            type="password"
                            solo
                            dense
                        ></v-text-field>
                        </v-form>
                        <nuxt-link to="/">don't have an account yet?</nuxt-link>
                    </v-card-text>
                    <v-card-actions>
                        <v-col>
                            <v-btn to="/" outlined rounded color="error" dark >
                                <v-icon>arrow-left</v-icon>
                                Back
                            </v-btn>
                        </v-col>
                        <v-col class="text-right">
                            <v-btn outlined rounded color="success" dark >
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
