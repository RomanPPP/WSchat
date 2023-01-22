const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const CompressionPlugin = require("compression-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  entry: {
    tasks: { import: "./src/index.tsx", filename: "./build.js" },
   
  },
  mode: "production",
  
  devServer: {
    // configuration for webpack-dev-server
    historyApiFallback: true,
    watchFiles: path.join(__dirname, 'src'),
    port: 8080, // port to run dev-server
  },

  devtool: "inline-source-map",
  plugins : [
    new CompressionPlugin({
      test: /\.js(\?.*)?$/i,
    
      algorithm: "gzip",
      deleteOriginalAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'template.html'),
      filename: 'index.html',
    }),
  ]
});
