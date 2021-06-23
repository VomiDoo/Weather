<<<<<<< HEAD
const HtmlWebpackPlugin = require('html-webpack-plugin');
=======
>>>>>>> fa2586ab2fdc6523aff49d1952091c5653054964
const path = require('path');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');

const dev = merge(base, {
<<<<<<< HEAD
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
            title: 'Weather',
            template: './src/index.html',
        })
    ],
})

module.exports = dev
=======
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
});

module.exports = dev;
>>>>>>> fa2586ab2fdc6523aff49d1952091c5653054964
