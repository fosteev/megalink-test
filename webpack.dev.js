const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const WebpackBar = require('webpackbar');
const SizePlugin = require('size-plugin');
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new ErrorOverlayPlugin(),
        new WebpackBar(),
        new SizePlugin()
    ],
    devServer: {
        contentBase: './dist'
    }
})
