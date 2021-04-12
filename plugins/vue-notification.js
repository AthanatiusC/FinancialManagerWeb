import Vue from 'vue';
import Notifications from '@/node_modules/vue-notification/dist/index'
import velocity      from '@/node_modules/velocity-animate/velocity'

export default () => {
  Vue.use(Notifications,{velocity});
};