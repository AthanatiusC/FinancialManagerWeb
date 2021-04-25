<template>
  <v-app>
    <notifications animation-type="velocity"/>

    <navigation :color="color" :flat="flat"/>
    <v-main v-if="isIndex" class="pt-0">
      <nuxt />
    </v-main>
    <div class="dashboard">
      <side-bar
      v-show="isDashboard"
      :background-color="sidebarBackground"
      :short-title="$t('sidebar.shortTitle')"
      :title="$t('sidebar.title')"
    >
      <template slot-scope="" slot="links">
        <sidebar-item
          :link="{
            name: $t('sidebar.dashboard'),
            icon: 'tim-icons icon-chart-pie-36',
            path: '/dashboard/home'
          }"
        >
        </sidebar-item>
        <sidebar-item
          :link="{
            name: 'transactions',
            icon: 'tim-icons icon-money-coins',
            path: '/dashboard/transactions'
          }"
        >
        </sidebar-item>

        <li class="active-pro">
          <NuxtLink to="setting">
            <i class="tim-icons icon-settings-gear-63"></i>
            <p>Settings</p>
          </NuxtLink>
        </li>
      </template>
    </side-bar>
    </div>
    <v-main v-if="isDashboard" class="pt-0 dashboard">
      <div class="main-panel" :data="sidebarBackground">
        <DashboardNavbar></DashboardNavbar>
        <router-view name="header"></router-view>

        <div
          :class="{ content: !isFullScreenRoute }"
          @click="toggleSidebar"
        >
          <zoom-center-transition :duration="200" mode="out-in">
            <!-- your content here -->
            <nuxt></nuxt>
          </zoom-center-transition>
        </div>
        <content-footer v-if="!isFullScreenRoute"></content-footer>
      </div>
    </v-main>

    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="#2a1242"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    
  </v-app>
</template>

<script>
import ContentFooter from '@/components/Layout/ContentFooter';
import { SlideYDownTransition, ZoomCenterTransition } from 'vue2-transitions';
import DashboardNavbar from '@/components/Layout/DashboardNavbar';

import Navigation from '~/components/Navigation.vue';
import PerfectScrollbar from 'perfect-scrollbar';
import 'perfect-scrollbar/css/perfect-scrollbar.css';

function hasElement(className) {
  return document.getElementsByClassName(className).length > 0;
}
function initScrollbar(className) {
  if (hasElement(className)) {
    new PerfectScrollbar(`.${className}`);
  } else {
    // try to init it later in case this component is loaded async
    setTimeout(() => {
      initScrollbar(className);
    }, 100);
  }
}

export default {
  components: { Navigation,ZoomCenterTransition,DashboardNavbar,ContentFooter },
  computed:{
    isFullScreenRoute() {
      return this.$route.path === '/maps/full-screen'
    },
    isDashboard(){
      var path = $nuxt.$route.path+""
      path = path.toString().toLowerCase()
      if(path.includes("dashboard")){
        return true
      }else{
        return false
      }
    },
    isIndex(){
      var path = $nuxt.$route.path+""
      path = path.toString().toLowerCase()
      if(path ==="/"||path==="/login"||path==="/register"){
        return true
      }else{
        return false
      }
    }
  },
  data () {
    return {
      sidebarBackground: 'vue',
      fab: null,
      color: "",
      flat: null,
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Finance Manager',
      appbarbg:'transparent',
    }
  },created() {
    // this.$notify.changeName
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },
  watch: {
    fab(value) {
      if (value) {
        this.color = "#2a1242";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },beforeMount(){
    
  },
  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    showMessage(message,type){
        this.message =message
        this.type = type
        this.transition="scroll-x-transition"
        setTimeout(() => {
            this.alert=true
        }, 3000);
    },
    toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
    },
    initScrollbar() {
      let docClasses = document.body.classList;
      let isWindows = navigator.platform.startsWith('Win');
      if (isWindows) {
        // if we are on windows OS we activate the perfectScrollbar function
        initScrollbar('sidebar');
        initScrollbar('main-panel');
        initScrollbar('sidebar-wrapper');

        docClasses.add('perfect-scrollbar-on');
      } else {
        docClasses.add('perfect-scrollbar-off');
      }
    }
  },
  mounted() {
    this.initScrollbar();
  }
}
</script>

<style lang="scss">
  $scaleSize: 0.95;
  @keyframes zoomIn95 {
    from {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
    to {
      opacity: 1;
    }
  }

  .main-panel .zoomIn {
    animation-name: zoomIn95;
  }

  @keyframes zoomOut95 {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: scale3d($scaleSize, $scaleSize, $scaleSize);
    }
  }

  .main-panel .zoomOut {
    animation-name: zoomOut95;
  }
  .dashboard{    
    @import '@/assets/sass/black-dashboard.scss';
  }
</style>
