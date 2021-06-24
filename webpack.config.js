const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin'); // js compress
const CopyPlugin = require('copy-webpack-plugin');

const SRC_DIR = path.join(__dirname, "client");
const PUBLIC_DIR = path.join(__dirname, "public");

module.exports = (env, argv) => ({
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    resolve: {
        alias: {
            "@": __dirname
        }
    },
    entry: path.join(SRC_DIR, "main.js"),
    module: {
        rules: [

            {
                test: /\.vue$/,
                use: [
                    "vue-loader",
                    "eslint-loader",
                ],
            },
            {
                test: /\.js$/,
                use: [
                    "babel-loader",
                    "eslint-loader",
                ]
            },
            {
                test: /\.pug$/,
                oneOf: [
                    // this applies to `<template lang="pug">` in Vue components
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader']
                    },
                    // this applies to pug imports inside JavaScript
                    {
                        use: [
                            'html-loader',
                            'pug-plain-loader'
                        ]
                    }
                ]
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "svg-url-loader",
                        options: {
                            //limit: 8192
                        }
                    },
                ],
                exclude: [
                    /node_modules/
                ]
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true,
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.md$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "/",
                    }
                }],
                include: [
                    PUBLIC_DIR
                ],
            },
        ]
    },
    output: {
        path: argv.mode !== "production" ? PUBLIC_DIR : path.join(PUBLIC_DIR, "dist"),
        publicPath: argv.mode !== "production" ? "" : "/dist/",
        filename: "bundle.js"
    },
    devtool: argv.mode !== "production" ? "eval-cheap-module-source-map" : "source-map",
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: path.join(SRC_DIR, "index.pug"),
            filename: "index.html"
        }),
        argv.mode !== "production" ? new CopyPlugin([
            {
                from: 'public/*',
                to: '[name].[ext]',
                test: /\.md$/,
            },
        ]) : false,
    ].filter(Boolean),
    devServer: {
        contentBase: SRC_DIR,
        watchContentBase: true,
        port: 8090,
        open: false,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
});

