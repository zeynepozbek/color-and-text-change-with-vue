var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config ={
    entry: SRC_DIR + "/app.js",
    output:{
        path: DIST_DIR + "/src",
        filename: "bundle.js",
        publicPath: "/src/"
    },
    module: {
        rules:[
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["es2017"]
                }
            }
        ]
    }
};

module.exports = config;