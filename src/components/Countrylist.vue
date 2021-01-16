<template>
  <div class="container">
    <!-- pagination -->
    <div class="container mb-4">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <button class="page-link" @click.prevent="previous()">
              Previous
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" @click.prevent="next()">Next</button>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /pagination -->

    <!-- History Modal -->
    <div>
      <b-button v-b-modal.modal-1>View History</b-button>
      <b-modal id="modal-1" title="History">
        <p class="my-4">
          <span>{{ this.printCountry }}</span>
        </p>
      </b-modal>
    </div>

    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <!-- a single row from an array  -->
      <div
        class="col"
        v-for="(country, index) in countries"
        :key="index"
        v-bind:value="countries.name"
      >
        <div class="card shadow-sm">
          <img class="card-img-top" :src="country.flag" alt="Card image cap" />
          <div class="card-body">
            <strong class="card-text" @click="handleClick(country)">
              {{ country.name }}
            </strong>

            <div class="d-flex justify-content-between align-items-center mt-2">
              <div class="btn-group"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- /a single row from an array  -->
    </div>
    <!-- pagination -->
    <div class="container mt-4">
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <button class="page-link" @click.prevent="previous()">
              Previous
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" @click.prevent="next()">Next</button>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /pagination -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalCounties: 250,
      first: 0,
      last: 20,
      totalInPerPage: 20,
      countries: [],
      country: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((data) => (this.countries = data.slice(this.first, this.last)))
        .catch((err) => console.log(err.message));
    },
    previous() {
      this.last = this.first;
      this.first = this.first - this.totalInPerPage;
      if (this.first >= 0) {
        this.fetchData();
      } else {
        this.first = 0;
        this.last = this.totalInPerPage;
        this.fetchData();
      }
    },
    next() {
      this.first = this.last;
      this.last = this.last + this.totalInPerPage;
      if (this.last <= this.totalCounties) {
        this.fetchData();
      } else {
        this.first = this.totalCounties - this.totalInPerPage;
        this.last = this.totalCounties;
        this.fetchData();
      }
    },
    handleClick(country) {
      console.log("Clicked on: " + country.name);
    },
  },
};
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>
