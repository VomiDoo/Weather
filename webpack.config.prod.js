const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

const prod = merge(base, {
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'distProd')
    },
})

module.exports = prod;