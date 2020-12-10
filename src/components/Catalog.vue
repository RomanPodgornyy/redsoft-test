<template>
    <ul class="catalog">
        <Card
            v-for="(card, index) in cards"
            :key="card.id"
            :id="index"
            :img-path="card.imgPath"
            :title="card.title"
            :old-price="card.oldPrice"
            :current-price="card.currentPrice"
            :in-cart="card.inCart"
        />
    </ul>
</template>

<script>
import Card from "./Card.vue";

export default {
    data() {
        return {
            cards: [
                {
                    id: 1,
                    imgPath: require('@/assets/img-1.png'),
                    title: "«Рождение Венеры» Сандро Боттичелли",
                    oldPrice: 2000000,
                    currentPrice: 1000000,
                    inCart: false,
                },
                {
                    id: 2,
                    imgPath: require('@/assets/img-2.png'),
                    title: "«Тайная вечеря»  Леонардо да Винчи",
                    currentPrice: 3000000,
                    inCart: false,
                },
                {
                    id: 3,
                    imgPath: require('@/assets/img-3.png'),
                    title: "«Сотворение Адама» Микеланджело",
                    oldPrice: 6000000,
                    currentPrice: 5000000,
                    inCart: false,
                },
                {
                    id: 4,
                    imgPath: require('@/assets/img-4.png'),
                    title: "«Урок анатомии» Рембрандт",
                    inCart: false,
                },
            ],
        };
    },
    provide() {
        return {
            setIsCartStatus: this.setIsCartStatus,
        };
    },
    methods: {
        setIsCartStatus(item) {
            this.cards[item].inCart = !this.cards[item].inCart;
            localStorage.setItem('currentState', JSON.stringify(this.cards));
        },
    },
    mounted() {
        const currentState = JSON.parse(localStorage.getItem('currentState'));
        
        if (!currentState) {
            return;
        }

        this.cards = currentState;
    },
    components: {
        Card,
    },
};
</script>

<style lang="scss" scoped>
.catalog {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;;
}
@media (max-width: 992px) {
    .catalog {
        padding: 20px 0;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
}
@media (max-width: 768px) {
    .catalog {
        padding: 20px 0;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}
@media (max-width: 600px) {
    .catalog {
        padding: 20px 0;
        flex-wrap: wrap;
    }
}
</style>
