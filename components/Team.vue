<template>
    <section id="team" style="margin:none;background-color:#efedf1;color:#2a1242">
      <v-parallax dark :src="require('../assets/background/04.png')" height="600">
        <v-container>
          <v-row tyle="margin:80px" align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <img class="isometric d-block ml-auto mr-auto" height="600px" src="../assets/isometric/Team.svg" alt="">
            </v-col>
            <v-col cols="12" sm="8" class="text-left">
              <h1 class="font-weight-light display-2 mb-2">Regarding Us</h1>
              We are a small group of university student that are trying to help fixing real world problems via our application.
              <br> The idea of this website was initiated because the lack of financial knowledge around our environment
              <br>due to either the lack of education or even not having enough time to manage their personal finance. 
              <br> With ideas in mind we tried to create an application that helps people to manage their own financial.
              <h1 class="font-weight-light">
                Here are the members of our team!
                <ul>
                  <li>Lexi Anugrah</li>
                  <li>Shabira</li>
                  <li>Vici</li>
                  <li>Tissa</li>
                  <li>Sirly</li>
                </ul> 
              </h1>
              <v-btn rounded outlined href="https://github.com/AthanatiusC" target="_blank" large color="white" class="mt-4">
                <v-icon class="mr-2">
                  mdi-github
                </v-icon>
                Reach our team!
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
</template>