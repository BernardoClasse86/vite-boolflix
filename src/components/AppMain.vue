<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="card column">

        <h2 class="og-title">{{ movie.original_title }}</h2>
        <h3 class="title">{{ movie.title }}</h3>

        <figure class="flag" v-if="movie.original_language === 'en'">
            <img class="flag-thumb" src="/images/gb.svg" alt="">
        </figure>

        <figure class="flag" v-else-if="movie.original_language === 'it'">
            <img class="flag-thumb" src="/images/it.svg" alt="">
        </figure>

        <figure class="flag" v-else-if="movie.original_language === 'fr'">
            <img class="flag-thumb" src="/images/fr.svg" alt="">
        </figure>

        <figure class="flag" v-else-if="movie.original_language === 'es'">
            <img class="flag-thumb" src="/images/es.svg" alt="">
        </figure>

        <figure class="flag" v-else-if="movie.original_language === 'de'">
            <img class="flag-thumb" src="/images/de.svg" alt="">
        </figure>

        <figure class="flag" v-else-if="movie.original_language === 'ja'">
            <img class="flag-thumb" src="/images/jp.svg" alt="">
        </figure>

        <figure class="flag" v-else-if="movie.original_language === 'cn'">
            <img class="flag-thumb" src="/images/cn.svg" alt="">
        </figure>

        <figure class="flag" v-else>
            <img class="flag-thumb" src="/images/xx.svg" alt="">
        </figure>

        <p class="vote">{{ movie.vote_average }}</p>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use '../style/partials/reset' as *;
@use '../style/partials/variables' as *;

.card.column {
    padding: 1rem;
    color: white;
    background-color: black;

    .og-title {
        font-size: 1rem;
    }

    .title {
        font-size: 0.75rem;
    }

    .vote {
        font-size: 0.75rem;
    }

    .og-title,
    .title,
    .flag {
        margin-bottom: 1.25rem;
    }
}

.flag-thumb {
    width: 50px;
}
</style>