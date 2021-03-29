<template>
    <section id="about">
        
        <v-container fluid>
            <v-row align="center" justify="center">
                <v-col cols="10">
                <v-row align="center" justify="center">
                    <v-col cols="12" md="7">
                    <!-- <h1 class="font-weight-light display-2">About</h1> -->
                    <br>
                    <h1 class="font-weight-light display-1 mb-3">
                        All you need to know
                    </h1>
                    <v-row>
                        <v-col cols="12" class="d-flex align-center">
                        <v-img
                            :src="require('@/assets/icons/Cortical Stack.png')"
                            max-width="60px"
                            class="mr-4"
                        />
                        <div>
                            <p class="text-justify">What is Finage?</p>
                            <p>Finage is a website application that helps you manage your financial. 
                            It works by taking notes of every transaction you made and records them for you!</p>
                        </div>
                        </v-col>
                        <v-col cols="12" class="d-flex align-center">
                        <v-img
                            :src="require('@/assets/icons/Secure Backup.png')"
                            max-width="60px"
                            class="mr-4"
                        />
                        <div>
                            <p class="text-justify">Is Finage Safe?</p>
                            <p>
                            Finage only records relevant data in order to function, it does not need 
                            any banking information or any sensitive data. Finage also encrypts every network
                            traffic in order to protect your data and privacy to any potential attacker.
                            </p>
                        </div>
                        </v-col>
                        <v-col cols="12" class="d-flex align-center">
                        <v-img
                            :src="require('@/assets/icons/Automation.png')"
                            max-width="60px"
                            class="mr-4"
                        />
                        <div>
                            <p class="text-justify">Why Finage?</p>
                            <p>
                            Finage is a website application that helps you manage your financial. 
                            It works by taking notes of every transaction you made and records them for you!
                            </p>
                        </div>
                        </v-col>
                    </v-row>
                    </v-col>
                    <v-col cols="12" md="5" class="d-none d-md-flex">
                        
                    <v-img style="color:#F4F7F5"
                        :src="require('@/assets/isometric/Data Analysis.svg')"
                        class="d-block ml-auto mr-auto"
                        max-width="600px"
                    />
                    </v-col>
                </v-row>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>