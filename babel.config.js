module.exports = {
    presets: [
        [
            "@vue/app",
            {
                polyfills: ["es.promise", "es.symbol"],
            },
        ],
    ],
    plugins: ["@babel/plugin-syntax-dynamic-import"],
};
