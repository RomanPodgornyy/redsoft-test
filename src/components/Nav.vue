<template>
    <nav class="nav">
        <ul class="nav__list" :class="theme">
            <li class="nav__item">
                <a href="javascript:void(0)" class="nav__link nav__link--first">
                    <img
                        class="nav__logo"
                        src="@/assets/logo.svg"
                        alt="Логотип"
                    />
                </a>
            </li>
            <li class="nav__item">
                <a href="javascript:void(0)" class="nav__link">Каталог</a>
            </li>
            <li class="nav__item">
                <a href="javascript:void(0)" class="nav__link">Доставка</a>
            </li>
            <li class="nav__item">
                <a href="javascript:void(0)" class="nav__link">Оплата</a>
            </li>
            <li class="nav__item">
                <a href="javascript:void(0)" class="nav__link">Контакты</a>
            </li>
            <li class="nav__item">
                <a href="javascript:void(0)" class="nav__link">О галерее</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: ["theme"],
};
</script>

<style lang="scss" scoped>
.nav {
    &__logo {
        display: block;
        max-width: 100%;
    }
    &__list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        &--theme-gray .nav__link {
            color: $textColorDarken;
        }
    }
    &__link {
        position: relative;
        padding: 0 24px;
        display: block;
        color: $textColor;
        font-size: $fz14;
        line-height: $lh21;
        text-decoration: none;
        &::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 50%;
            width: calc(100% - 48px);
            height: 2px;
            background-color: $buttonColor;
            transform: translateX(-50%) scale(0);
            transition: 0.2s ease-in-out;
        }
        &:hover::after {
            transform: translateX(-50%) scale(1);
        }
        &--first {
            padding: 0 24px 0 0;
            &::after {
                display: none;
            }
        }
    }
}
</style>
