<template>
    <Header />
    <Main />
    <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";

export default {
    name: "App",
    components: {
        Header,
        Main,
        Footer,
    },
};
</script>

<style lang="scss">
@import "./styles/font-face.scss";
@import "./styles/typography.scss";

#app {
    height: 100%;
    display: flex;
    flex-direction: column;
}
* {
    box-sizing: border-box;
    outline-color: $borderColorDarken;
    outline-width: 1px;
}
html {
    height: 100%;
    font-family: 'Merriweather', sans-serif;
}
body {
    margin: 0;
    height: 100%;
    background-color: $bodyColor;
}
.container {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1256px;
}
@media (max-width: 1199px) {
    .container {
        max-width: 992px;
    }
    .main-title {
        text-align: center;
        margin: 0 0 10px;
        padding-top: 20px;
    }
}
@media (max-width: 920px) {
    .container {
        max-width: 630px;
    }
    .main-title {
        text-align: center;
        margin: 0 0 10px;
        padding-top: 20px;
    }
}
@media (max-width: 600px) {
    .container {
        max-width: 375px;
    }
    .main-title {
        text-align: left;
        margin: 0 0 10px;
        font-size: 17px;
        padding-top: 20px;
    }
}
</style>