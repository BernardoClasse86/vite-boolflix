<script>
import store from '../store';

export default {
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <nav class="row nav">

        <div class="logo">
            <img src="/images/Netflix-logo.svg" alt="">
        </div>

        <div>
            <input @keyup.enter="$emit('onSearch')" class="search" type="text" v-model="store.search"
                placeholder="Search a Film">
        </div>

    </nav>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use '../style/partials/reset' as *;
@use '../style/partials/variables' as *;

.row.nav {
    justify-content: space-between;
    align-items: center;
}

.logo {
    width: 150px;
}
</style>