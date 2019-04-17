import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

// Don't forget to import your components here

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      // Put your routes in here
    ]
  })
}).$mount("#app");
