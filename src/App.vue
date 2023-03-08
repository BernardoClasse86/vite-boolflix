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
  methods: {
    fetchToWatch() {
      const search = this.store.search

      axios.all([

        axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=6a24e6efb580fd2e4990063ae815b869&query=${search}`, {

            params: {
              query: search
            }
          }),

        axios
          .get(`https://api.themoviedb.org/3/search/tv?api_key=6a24e6efb580fd2e4990063ae815b869&query=${search}`, {

            params: {
              query: search
            }
          })
      ])
        .then((res) => {
          const movies = res[0].data.results
          const series = res[1].data.results

          this.store.movies = movies
          this.store.series = series
          console.log('movies', movies)
          console.log('series', series)

          this.store.moviesAndSeries = [...movies, ...series]
          console.log(this.store.moviesAndSeries)
        })

    }
  },
  created() {
    this.fetchToWatch()
  },
}
  ;
</script>

<template>
  <div class="column page">
    <div class="main-header">
      <AppHeader @onSearch="fetchToWatch" />
    </div>

    <div class="container main">
      <div class="main-content">
        <AppMain v-for="toWatch in store.moviesAndSeries" :key="toWatch.id" :toWatch="toWatch" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './style/generals.scss' as *;
@use './style/partials/reset' as *;
@use './style/partials/variables' as *;

.page {
  background-color: black;
}

.main-header {
  flex-shrink: 0;
  padding: 1rem;
  background-color: $header-bg;
}

.container.main {
  flex-grow: 1;
}

.main-content {
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
</style>
