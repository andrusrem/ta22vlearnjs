const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader')

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
    port: 1080,
    historyApiFallback: true,
  },
  module: {
    
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', "css-loader"],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    template: './index.html',
    
  }),
    new MiniCssExtractPlugin(),
    new VueLoaderPlugin()
  ],
};