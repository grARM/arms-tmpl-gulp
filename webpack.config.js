const path = require('path');
const webpack = require('webpack');

const config = {
  entry: {
    'index': './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          loader: 'babel-loader'
      }
    ]
  },
  externals: {
    "jquery": 'jQuery'
  },
  plugins: [
      // new webpack.DefinePlugin({
      //     'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      // }),
      // new webpack.optimize.UglifyJsPlugin(),
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "window.jQuery":"jquery"
      })
  ]
};

module.exports = config;