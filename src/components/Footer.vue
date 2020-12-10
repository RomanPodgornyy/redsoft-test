<template>
    <footer class="footer footer--theme-gray">
        <div class="container footer__container">
            <Nav :theme="'nav__list--theme-gray'" />
            <Contacts />
        </div>
    </footer>
</template>

<script>
import Nav from "./Nav.vue";
import Contacts from './Contacts.vue';

export default {
    components: {
        Nav,
        Contacts
    },
};
</script>

<style lang="scss" scoped>
.footer {
    flex: 0 0 auto;
    background-color: $footerColor;
    &__container {
        padding: 24px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
@media (max-width: 1199px) {
    .footer {
        display: none;
    }
}
@media (max-width: 992px) {
    .footer {
        display: none;
    }
}
@media (max-width: 768px) {
    .footer {
        display: none;
    }
}
@media (max-width: 600px) {
    .footer {
        display: none;
    }
}
</style>
