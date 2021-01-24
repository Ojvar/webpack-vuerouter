const Path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    mode: "development",

    entry: {
        index: "./src/index.js",
        // server: "./src/server.js",
    },

    output: {
        publicPath: "../dist/",
        path: Path.resolve("dist"),
        filename: "[name].js",
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.m?jsx?$/i,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        cacheCompression: true,
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },

    plugins: [new VueLoaderPlugin()],

    resolve: {
        alias: {
            vue$: "vue/dist/vue.esm.js",
            "@": Path.resolve("./src"),
        },
        extensions: [".js", ".vue", ".json", ".ts"],
        fallback: {
            stream: false,
            path: false,
        },
    },
};
