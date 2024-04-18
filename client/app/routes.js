import jQuery from "jquery";
global.jQuery = jQuery;
global.$ = jQuery;

import Vue from "vue";
import VueRouter from "vue-router";

import App from "./App.vue";
import Help from "./components/pages/Help.vue";
import FileRequirements from "./components/pages/FileRequirements.vue";
import Home from "./components/pages/Home.vue";
import License from "./components/pages/License.vue";

import VTooltip from "v-tooltip";
import "../assets/css/v-tooltip.css";
Vue.use(VTooltip);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/help",
    name: "help",
    component: Help
  },
  {
    path: "/file-requirements",
    name: "file-requirements",
    component: FileRequirements
  },
  {
    path: "/license",
    name: "license",
    component: License
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

window.addEventListener("load", () => {
  new Vue({
    el: "#app",
    render: h => h(App),
    router
  });
});
