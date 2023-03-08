import { reactive } from 'vue'

const store = reactive({
    movies: [],
    series: [],
    moviesAndSeries: [],
    search: '',
})

export default store