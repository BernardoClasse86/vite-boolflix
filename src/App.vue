<template>
  <div class="column page">
    <div class="main-header">
      <AppHeader @onSearch="fetchMovies" />
    </div>

    <div class="container main-content">
      <AppMain v-for="movie in store.movies" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from 'axios';
import store from './store'

export default {

  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
    }
  },
  computed: {
    movies() {
      return this.store.movies
    },
  },
  methods: {
    fetchMovies() {
      const search = this.store.search
      axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=6a24e6efb580fd2e4990063ae815b869&query=${search}`, {

          params: {
            query: search
          }
        })
        .then((res) => {
          this.store.movies = res.data.results
          console.log(res.data.results)
        })
      // axios
      //   .get(`https://api.themoviedb.org/3/search/tv?api_key=6a24e6efb580fd2e4990063ae815b869&query=${search}`, {

      //     params: {
      //       query: search
      //     }
      //   })
      //   .then((res) => {
      //     this.store.movies = res.data.results
      //   })
    }
  },
  created() {
    this.fetchMovies()
  },
}
  ;
</script>

<style lang="scss" scoped>
@use './style/generals.scss' as *;
@use './style/partials/reset' as *;
@use './style/partials/variables' as *;

.page {
  height: 100vh;
  background-color: black;
}

.main-header {
  flex-shrink: 0;
  padding: 1rem;
  background-color: $header-bg;
}

.main-content {
  padding: 2rem 0 0;
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
</style>
