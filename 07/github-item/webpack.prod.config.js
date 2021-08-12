const merge = require('webpack-merge')
const base = require('./webpack.config')
const OptimizeCss = require('optimize-css-assets-webpack-plugin');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        minimizer: [
            new OptimizeCss(),
        ]
    }
})