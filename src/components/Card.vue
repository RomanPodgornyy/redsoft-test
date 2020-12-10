<template>
    <li class="card" :class="{ 'card--disabled': !currentPrice }">
        <div class="card__img-container">
            <img :src="imgPath" alt="" class="card__img" />
        </div>
        <div class="card__body">
            <a href="#" class="card__title">{{ title }}</a>
            <div class="card__footer">
                <div v-if="currentPrice" class="card__price-container">
                    <span v-if="oldPrice" class="card__price card__price--old"
                        >{{ formatPrice(oldPrice) }} $</span
                    >
                    <span class="card__price"
                        >{{ formatPrice(currentPrice) }} $</span
                    >
                </div>
                <button
                    v-if="currentPrice"
                    @click.prevent="addToCart(id)"
                    class="button card__button"
                    :class="{ 'button--loading': isSending, 'button--in-cart': inCart }"
                    :disabled="isSending"
                >
                    {{ inCart ? "В корзине" : "Купить" }}
                </button>
                <span v-else class="card__price">Продана на аукционе</span>
            </div>
        </div>
    </li>
</template>

<script>
import axios from 'axios';

export default {
    props: ["id", "imgPath", "title", "oldPrice", "currentPrice", "inCart"],
    data() {
        return {
            isSending: false,
        };
    },
    inject: ["setIsCartStatus"],
    methods: {
        formatPrice(value) {
            let val = (value / 1).toFixed().replace("", " ");
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        },
        async addToCart(item) {
            try {
                this.isSending = true;

                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                
                if (response.status === 200) {
                    // Слишком быстро выполняется запрос, для демонстрации эффекта лоадера, добавил искусственную задержку.
                    setTimeout(() => {
                        this.isSending = false;
                        this.setIsCartStatus(item)
                    }, 1500)
                }
            } catch (err) {
                throw new Error(err);
            }
        }
    },
};
</script>

<style lang="scss" scoped>
.card {
    margin-right: 32px;
    width: calc(25% - 24px);
    border: 1px solid $borderColor;
    &__img {
        display: block;
        max-width: 100%;
        height: 100%;
        &-container {
            height: 160px;
        }
    }
    &__body {
        padding: 20px 24px 26px;
    }
    &__title {
        overflow: hidden;
        margin-bottom: 22px;
        display: block;
        height: 54px;
        font-size: $fz18;
        line-height: $lh27;
        color: $textColor;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    &__footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    &__price {
        display: block;
        font-size: $fz16;
        line-height: $lh24;
        color: $textColor;
        font-weight: $fwBold;
        &--old {
            font-size: $fz14;
            line-height: $lh21;
            color: $textColorGray;
            font-weight: $fwLight;
            text-decoration: line-through;
        }
    }
    &__button {
        min-width: 118px;
        height: 48px;
    }
    &--disabled {
        pointer-events: none;
        opacity: 0.5;
    }
    &:last-child {
        margin-right: 0;
    }
}
@media (min-width: 921px) and (max-width: 1199px) {
    .card {
        margin-bottom: 20px;   
        margin-right: 20px;
        width: calc((100% / 3) - 20px);
        &__img {
            margin: 20px auto 0;
        }
        &:nth-child(3n) {
            margin-right: 0;
        }
    }
}
@media (max-width: 920px) {
    .card {
        margin-bottom: 20px;   
        margin-right: 20px;
        width: calc(50% - 10px);
        &__img {
            margin: 20px auto 0;
        }
        &:nth-child(2n) {
            margin-right: 0;
        }
    }
}
@media (max-width: 600px) {
    .card {
        margin-bottom: 20px;   
        margin-right: 0;
        width: 100%;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
</style>
