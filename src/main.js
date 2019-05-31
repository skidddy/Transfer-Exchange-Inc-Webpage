import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import home from "./components/home.vue";
import about from "./components/about.vue";
import the1031 from "./components/the1031.vue";
import why from "./components/why.vue";
import pricing from "./components/pricing.vue";
import tips from "./components/tips.vue";
// Don't forget to import your components here

Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: new VueRouter({
    routes: [
      { path: "/", component: home },
      { path: "/about", component: about },
      { path: "/the1031", component: the1031 },
      { path: "/why", component: why },
      { path: "/pricing", component: pricing },
      { path: "/tips", component: tips }
      // Put your routes in here
    ]
  })
}).$mount("#app");
