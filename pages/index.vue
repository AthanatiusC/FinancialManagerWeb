<template>
  <section id="hero">  
    <v-parallax dark :src="require('../assets/background/01.png')" height="800">
      <v-container>
        <v-row style="margin:80px" align="center" justify="center">
        <v-col cols="12" md="6">
          <h1 class="display-2 font-weight-bold mb-4">Finage</h1>
          <h1 class="font-weight-light">
            Finage is your safe personal asset manager website.<br />
            Start to manage your finance and use finage today!<br />
          </h1>
          <v-btn
            rounded
            outlined
            large
            to="/register"
            class="mt-5"
            color="white"
          >
            Sign up for free!
            <v-icon class="ml-2">mdi-login</v-icon>
          </v-btn>
        </v-col>
        <v-col md="6"> 
          <img class="isometric heroiso" height="700px" src="../assets/isometric/data analytics.svg" alt="">
        </v-col>
      </v-row>
      </v-container>
      <div class="svg-border-waves">
        <svg id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 255, 255, 0.25098039215686274)" offset="0%"></stop><stop stop-color="rgba(255, 255, 255, 0.25)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,20L40,26.7C80,33,160,47,240,45C320,43,400,27,480,25C560,23,640,37,720,38.3C800,40,880,30,960,28.3C1040,27,1120,33,1200,45C1280,57,1360,73,1440,70C1520,67,1600,43,1680,31.7C1760,20,1840,20,1920,25C2000,30,2080,40,2160,48.3C2240,57,2320,63,2400,65C2480,67,2560,63,2640,60C2720,57,2800,53,2880,46.7C2960,40,3040,30,3120,36.7C3200,43,3280,67,3360,70C3440,73,3520,57,3600,55C3680,53,3760,67,3840,71.7C3920,77,4000,73,4080,68.3C4160,63,4240,57,4320,56.7C4400,57,4480,63,4560,56.7C4640,50,4720,30,4800,25C4880,20,4960,30,5040,31.7C5120,33,5200,27,5280,30C5360,33,5440,47,5520,46.7C5600,47,5680,33,5720,26.7L5760,20L5760,100L5720,100C5680,100,5600,100,5520,100C5440,100,5360,100,5280,100C5200,100,5120,100,5040,100C4960,100,4880,100,4800,100C4720,100,4640,100,4560,100C4480,100,4400,100,4320,100C4240,100,4160,100,4080,100C4000,100,3920,100,3840,100C3760,100,3680,100,3600,100C3520,100,3440,100,3360,100C3280,100,3200,100,3120,100C3040,100,2960,100,2880,100C2800,100,2720,100,2640,100C2560,100,2480,100,2400,100C2320,100,2240,100,2160,100C2080,100,2000,100,1920,100C1840,100,1760,100,1680,100C1600,100,1520,100,1440,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(244, 247, 245, 1)" offset="0%"></stop><stop stop-color="rgba(244, 247, 245,1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 50px); opacity:1" fill="url(#sw-gradient-1)" d="M0,10L40,11.7C80,13,160,17,240,25C320,33,400,47,480,48.3C560,50,640,40,720,35C800,30,880,30,960,31.7C1040,33,1120,37,1200,33.3C1280,30,1360,20,1440,13.3C1520,7,1600,3,1680,16.7C1760,30,1840,60,1920,65C2000,70,2080,50,2160,38.3C2240,27,2320,23,2400,26.7C2480,30,2560,40,2640,40C2720,40,2800,30,2880,31.7C2960,33,3040,47,3120,53.3C3200,60,3280,60,3360,56.7C3440,53,3520,47,3600,50C3680,53,3760,67,3840,68.3C3920,70,4000,60,4080,50C4160,40,4240,30,4320,30C4400,30,4480,40,4560,46.7C4640,53,4720,57,4800,50C4880,43,4960,27,5040,26.7C5120,27,5200,43,5280,43.3C5360,43,5440,27,5520,26.7C5600,27,5680,43,5720,51.7L5760,60L5760,100L5720,100C5680,100,5600,100,5520,100C5440,100,5360,100,5280,100C5200,100,5120,100,5040,100C4960,100,4880,100,4800,100C4720,100,4640,100,4560,100C4480,100,4400,100,4320,100C4240,100,4160,100,4080,100C4000,100,3920,100,3840,100C3760,100,3680,100,3600,100C3520,100,3440,100,3360,100C3280,100,3200,100,3120,100C3040,100,2960,100,2880,100C2800,100,2720,100,2640,100C2560,100,2480,100,2400,100C2320,100,2240,100,2160,100C2080,100,2000,100,1920,100C1840,100,1760,100,1680,100C1600,100,1520,100,1440,100C1360,100,1280,100,1200,100C1120,100,1040,100,960,100C880,100,800,100,720,100C640,100,560,100,480,100C400,100,320,100,240,100C160,100,80,100,40,100L0,100Z"></path></svg>
      </div>
    </v-parallax>
    <section id="features" style="background-color:#F4F7F5">
    <v-parallax dark :src="require('../assets/background/bg-image4.png')" height="500">
      <v-container fluid class="mt-2" style="color:#2a1242">
        <v-row align="center" justify="center">
          <v-col cols="10">
            <h2 class="display-2">Features</h2>
            <v-row align="center" justify="space-around">
              <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(feature, i) in features"
              :key="i"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="card"
                    shaped
                    :elevation="hover ? 10 : 4"
                    :class="{ up: hover }"
                  >
                    <v-img
                      :src="feature.img"
                      max-width="100px"
                      class="d-block ml-auto mr-auto"
                      :class="{ 'zoom-efect': hover }"
                    ></v-img>
                    <h1 class="font-weight-regular">{{ feature.title }}</h1>
                    <h4 class="font-weight-regular subtitle-1">
                      {{ feature.text }}
                    </h4>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-parallax>
    </section>
    <About></About>
    <Team></Team>
    <!-- <section id="contact" style="margin:none;background-color:#efedf1;color:#2a1242">
      <h2 class="display-2">Contact</h2>
      <div class="banner-img-2">
        <img :src="require('@/assets/isometric/health-family-illustration.svg')" width="978" fluid alt="#">
      </div>
    </section> -->
  </section>
</template>

<script>
import Team from '~/components/Team';
import About from '~/components/About';

export default {
  components: {Team,About },
  head(){
    return{
        title:"Home"
    }  
  },
  data(){
    return{
      features: [
        {
          img: require("@/assets/icons/SECURE.png"),
          title: "Secure",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/icons/Dashboard Report .png"),
          title: "Modern UI",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          img: require("@/assets/icons/Automation.png"),
          title: "Usability",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    }
  },
  components: {
    
  }
}
</script>
<style>

.heroiso{
  position: absolute;
  top: 12%;
}

section {
  position: relative;
}

.svg-border-waves{
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
.reversed-svg-border-waves{
}

.reversed-svg-border-waves svg{
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}
.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}
.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}

#hero {
  z-index: 0;
}
#about {
  background-color: #f4f7f5;
}
.isometric{
  z-index: 1;
}
.svg-border-waves svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index:-1;
}

.card {
  margin-top: 40px;
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}
</style>

<style lang="scss">
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}
.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;
  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }
  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;
      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }
    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>