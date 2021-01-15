<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Countries</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            :active="routeCheck('home')"
            :disabled="routeCheck('home')"
            to="home"
          >
            Home
          </b-nav-item>
          <b-nav-item
            :active="routeCheck('countrylist')"
            :disabled="routeCheck('countrylist')"
            to="countrylist"
          >
            Countrylist page
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "TheMainNav",
  computed: {
    route() {
      return this.$route.name;
    },
  },
  methods: {
    routeCheck(routeName) {
      return this.route === routeName;
    },
  },
};
</script>
