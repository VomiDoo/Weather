const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const base = require('./webpack.config.base');

const prod = merge(base, {
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'distProd')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather',
            template: './src/index.html',
        })
    ],
})

module.exports = prod;