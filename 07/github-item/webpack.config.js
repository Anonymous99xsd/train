const path = require('path');
// const webpack = require('webpack');
const Package = require('./package.json');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const moment = require('moment');
// 设置版本号
const buildVersion = moment().format('YYYY-MM-DD_HH_mm_ss');

module.exports = {
    entry: path.join(__dirname, '../src/pages/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: Package.name + '.js'
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.sass$/,
                loader: ['sass-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            version: buildVersion,
            filename: 'index.html',
            template: path.join(__dirname, '../src/pages/index.html'),
            inject: 'body'
        })
    ],
    externals: {
        'babel-polyfill': 'window'
    },
    devtool: 'source-map'
}