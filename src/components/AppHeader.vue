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
    <div>
        <input @keyup.enter="$emit('onSearch')" class="search" type="text" v-model="store.search"
            placeholder="Search a Film">
    </div>
</template>

<style lang="scss" scoped>
@use '../style/generals.scss' as *;
@use '../style/partials/reset' as *;
@use '../style/partials/variables' as *;
</style>