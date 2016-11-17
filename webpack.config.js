var path = require('path');
var webpack = require('webpack');

module.exports = {
  resolve: {
    root: path.resolve('.'),
    extensions: ['', '.js']
  },
  entry: path.resolve('./client/client.js'),
  output: {
    path: path.resolve('./public/js'),
    publicPath: './public/js/',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: require.resolve('babel-loader')
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: require.resolve('json-loader')
      }
    ]
  },
  stats: {
    colors: false
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        BROWSER: JSON.stringify(true)
      }
    })
  ],
  devtool: 'source-map',
  watch: false,
  keepalive: true
};
