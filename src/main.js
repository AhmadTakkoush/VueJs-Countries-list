import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

import Home from "./components/Home";
import Countrylist from "./components/Countrylist";

// import some global styles

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    alias: "/home",
    component: Home,
  },
  {
    path: "/countrylist",
    name: "countrylist",
    component: Countrylist,
  },
];

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
