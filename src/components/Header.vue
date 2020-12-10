<template>
    <header class="header">
        <div class="container header__container">
            <Nav />
            <Search />
        </div>
    </header>
</template>

<script>
import Search from "./Search.vue";
import Nav from "./Nav.vue";

export default {
    components: {
        Search,
        Nav,
    },
};
</script>

<style lang="scss" scoped>
.header {
    margin: 0 0 45px;
    border-bottom: 1px solid $borderColor;
    &__container {
        padding: 24px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
@media (max-width: 1199px) {
    .header {
        display: none;
    }
}
@media (max-width: 992px) {
    .header {
        display: none;
    }
}
@media (max-width: 768px) {
    .header {
        display: none;
    }
}
@media (max-width: 600px) {
    .header {
        display: none;
    }
}
</style>
