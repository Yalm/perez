import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "@/styles.scss";
import { VLazyImagePlugin } from "v-lazy-image";
import VueAnalytics from "vue-analytics";

Vue.config.productionTip = false;

Vue.component(
  "ButtonLinkPerez",
  require("@/components/ButtonComponent.vue").default
);
Vue.use(VueAnalytics, {
  id: "UA-174243009-1",
  router
});
Vue.use(VLazyImagePlugin);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
