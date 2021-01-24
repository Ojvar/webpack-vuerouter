const mix = require("laravel-mix");

/* Mix */
mix.setPublicPath("dist");
mix.vue({ version: 2 });

mix.options({
    legacyNodePolyfills: true,
});
mix.webpackConfig({
    optimization: {
        providedExports: false,
        sideEffects: false,
        usedExports: false,
    },
});

/* Transpile */
mix.js("./src/index.js", "dist");
mix.js("./src/server.js", "dist");
