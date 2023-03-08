<script>
export default {
    props: {
        toWatch: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            flags: {
                en: '/images/gb.svg',
                it: '/images/it.svg',
                de: '/images/de.svg',
                es: '/images/es.svg',
                fr: '/images/fr.svg',
                ja: '/images/jp.svg',
                cn: '/images/cn.svg',
            },
            defaultImg: '/images/default.png'
        }
    },
    methods: {
        getUrl() {
            const url = 'https://image.tmdb.org/t/p/w500';
            const imgUrl = this.toWatch.backdrop_path;

            if (imgUrl) {
                return url + imgUrl;
            } else {
                return this.defaultImg
            }
        }
    }
}
</script>

<template>
    <div class="card column">

        <img class="card__thumb" :src="getUrl()" alt="">

        <div class="card__details">

            <h2 class="og-title">{{ toWatch.original_title || toWatch.original_name }}</h2>

            <h3 class="title">{{ toWatch.title || toWatch.name }}</h3>

            <figure class="flag">
                <img v-if="flags[toWatch.original_language]" class="flag-thumb" :src="flags[toWatch.original_language]"
                    alt="">
                <img v-else class="flag-thumb" src="/images/xx.svg" alt="">
            </figure>

            <p class="vote">{{ toWatch.vote_average }}</p>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use '../style/partials/reset' as *;
@use '../style/partials/variables' as *;

.card.column {
    padding: 1rem;
    color: white;
    border: 1px solid white;
    justify-content: space-between;
    background-color: rgb(64, 64, 64);
    position: relative;
    height: 460px;
}

.card__thumb {
    z-index: 1;
    transition: opacity 0.3s ease-out;
}

.card.column:hover .card__thumb {
    opacity: 0;
}

.card__details {
    position: absolute;
    top: 1rem;
    left: 1rem;
    width: 60%;
    height: 60%;
    visibility: hidden;
    z-index: 2;
}

.card.column:hover .card__details {
    visibility: visible;
    transition: visibility 0s linear 0.4s;
}

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


.flag-thumb {
    width: 50px;
}
</style>