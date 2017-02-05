
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: ["./frontend/entryRouter.js"],
  output: {
    path: __dirname + "/frontend/public",
    filename: "bundle.js",
    devtoolModuleFilenameTemplate: '[resourcePath]',
    devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
  },
  module: {
    loaders: [{
      test: [/\.jsx?$/, /\.js?$/],
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }, ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx"]
  },
  plugins: [
    new LiveReloadPlugin()
  ]
}; 