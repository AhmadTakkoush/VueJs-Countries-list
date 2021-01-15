<template>
  <div>
    <h1>Country List here</h1>
    <VSPagination>
      <table border="1px">
        <tr>
          <td>Country Name</td>
          <td>Country Capital</td>
        </tr>
        <tr v-for="item in list" v-bind:key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.capital }}</td>
        </tr>
      </table>
    </VSPagination>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios); // bind the two together

import VSPagination from "@/components/VSPagination.vue";

export default {
  components: { VSPagination },
  name: "CountryList",
  data() {
    return { list: undefined };
  },
  mounted() {
    Vue.axios.get("https://restcountries.eu/rest/v2/all").then((resp) => {
      this.list = resp.data;
      console.warn(resp.data);
    });
  }, // life cycle method and it wall be called when the component is ready to fetch the data
};
</script>
