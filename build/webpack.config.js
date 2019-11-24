const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: '../src/index.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          extends: './.babelrc'
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '../src'),
      path.resolve(__dirname, 'node_modules')
    ],
    extensions: ['.js']
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.js', '.json'],
    mainFields: ['loader', 'main']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: '../dist',
    hot: true
  }
};
