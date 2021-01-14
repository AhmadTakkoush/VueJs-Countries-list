import Vue from "vue";
import App from "./App";

import VueRouter from "vue-router";

import ProductCatalog from "./components/Home";
import Countrylist from "./components/Countrylist";

// import some global styles
import "../styles/style.scss";

Vue.use(VueRouter);

const routes = [
  { path: "/home", alias: "/", component: ProductCatalog },
  { path: "/Countrylist", component: Countrylist },
];

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
