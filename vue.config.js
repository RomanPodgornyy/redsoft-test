module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                @import "~@/styles/variables.scss";
                `
            }
        }
    },
    transpileDependencies: [
        "buble",
        "regexpu-core",
        "unicode-match-property-ecmascript",
        "unicode-match-property-value-ecmascript",
    ],
}