// const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './client/index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader"
      //     }
      //   ]
      // },
      // {
        //todo: readd scss;
    //     test: /\.scss$/,
    //     use: [
    //       {
    //         loader : "style-loader"
    //       },
    //       {
    //          loader: "css-loader"
    //       },
    //       {
    //         loader: "sass-loader"
    //       },
    //     ]
    //   },
    ]
  },
  // plugins: [
  //   new HtmlWebPackPlugin({
  //     template: "./dist/index.html",
  //     filename: "index.html"
  //   })
  // ]
};