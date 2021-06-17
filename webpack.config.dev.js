const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

const dev = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
});

module.exports = dev;
