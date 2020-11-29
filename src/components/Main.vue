<template>
    <main class="main">
        <div class="container">
            <h1 class="main-title">Картины эпохи Возрождения</h1>
            <Catalog />
        </div>
    </main>
</template>

<script>
import Catalog from './Catalog.vue';

export default {
    components: {
        Catalog
    }
}
</script>

<style lang="scss" scoped>
.main {
    flex: 1 0 auto;
}
</style>