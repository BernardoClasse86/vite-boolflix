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
            const url = 'https://image.tmdb.org/t/p/original';
            const imgUrl = this.toWatch.poster_path;

            if (imgUrl) {
                return url + imgUrl;
            } else {
                return this.defaultImg
            }
        }
    },
    computed: {
        vote() {
            return Math.round(this.toWatch.vote_average / 2);
        },
    }
}    
</script>

<template>
    <div class="card column">

        <img class="card__thumb" :src="getUrl()" alt="">

        <div class="card__details">

            <h2 class="og-title">{{ toWatch.original_title || toWatch.original_name }}</h2>

            <h3 class="title">{{ toWatch.title || toWatch.name }}</h3>

            <figure class="flag row">
                <p class="flag__lang">Language: </p>
                <img v-if="flags[toWatch.original_language]" class="flag__thumb" :src="flags[toWatch.original_language]"
                    alt="">
                <img v-else class="flag__thumb" src="/images/xx.svg" alt="">
            </figure>

            <div class="rating row">
                <p class="rate__item">Rating:</p>
                <div v-for="star in 5" :key="star" :class="['star', vote >= star ? 'filled' : '']">&#9733;</div>
            </div>

            <div class="overview">
                <p class="overview__title">Overview: </p>
                <p class="overview__text">{{ toWatch.overview }}</p>
            </div>


        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use '../style/partials/reset' as *;
@use '../style/partials/variables' as *;

.card.column {
    color: white;
    border: 1px solid white;
    justify-content: space-between;
    position: relative;

    .card__thumb {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1;
        transition: opacity 0.3s ease-out;
    }

    .card__details {
        padding: 0.5rem 0.5rem;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        visibility: hidden;
        z-index: 2;

        .og-title {
            font-size: 1.2rem;
        }

        .title {
            font-size: 0.75rem;
            font-style: italic;
        }

        .og-title,
        .title {
            margin-bottom: 0.75rem;

        }
    }

    .flag.row {
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;

        .flag__lang {
            font-size: 0.75rem;
        }

        .flag__thumb {
            width: 20px;
        }
    }

    .rating {
        font-size: 0.75rem;
        align-items: center;
        margin-bottom: 0.5rem;
        color: red;

        .rate__item {
            margin-right: 0.5rem;
        }

        .star {
            display: inline-block;
            height: 1rem;
            color: #ddd;
        }

        .star.filled {
            color: #ff9800;
        }
    }

    .overview {
        font-size: 0.75rem;

        .overview__title {
            float: left;
            margin-right: 0.25rem;
            font-weight: bold;
            color: green;
        }

    }
}

.card.column:hover .card__thumb {
    opacity: 1;
}

.card.column:hover .card__details {
    visibility: visible;
    opacity: 0;
    background-color: rgba(80, 80, 80, 0.9);
    transition: opacity 0.2s ease-in-out, visibility 0s linear 0.2s;
}

.card.column:hover .card__details:hover {
    opacity: 1;
    transition-delay: 0s;
}
</style>