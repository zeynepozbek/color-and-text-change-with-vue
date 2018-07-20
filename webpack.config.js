var webpack = require("webpack");
const path = require("path");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");
const SRC_JS = path.resolve(__dirname, "src/js");
const SRC_SCSS = path.resolve(__dirname, "src/scss");

const config ={
    entry: [ SRC_JS + '/app.js', SRC_SCSS + '/style.scss'],
    output:{
        path: DIST_DIR,
        // filename: "bundle.js", "bundle.css",
        //publicPath: DIST_DIR
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].bundle.css",
            allChunks: true,
        })
    ],
    module: {
        rules:[
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["es2017"]
                }
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
};

module.exports = config;