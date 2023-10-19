const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'public')
    },
    compress: true,
    port: 1080
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html'
  })],
};