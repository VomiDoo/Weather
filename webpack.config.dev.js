const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base')

const dev = merge(base, {
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'distDev')
    },
    devServer: {
        contentBase: path.join(__dirname, 'distDev'),
        compress: true,
        port: 9000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html',
        })
    ],
})

module.exports = dev