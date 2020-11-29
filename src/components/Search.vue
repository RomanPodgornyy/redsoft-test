<template>
    <form action="" class="search-form">
        <input
            type="text"
            class="input search-form__input"
            placeholder="Поиск по названию картины"
        />
        <button class="button search-form__button">Найти</button>
    </form>
</template>

<style lang="scss" scoped>
.search-form {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    &__input {
        min-width: 294px;
        height: 48px;
    }
    &__button {
        min-width: 122px;
        height: 48px;
    }
}
</style>