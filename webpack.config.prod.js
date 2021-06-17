const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

const prod = merge(base, {
  mode: 'production',
});

module.exports = prod;
