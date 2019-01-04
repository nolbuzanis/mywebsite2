const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

const pug = {
  test: /\.pug$/,
  use: ['html-loader?attrs=false', 'pug-html-loader']
}

const babel = {
  // Transpiles ES6-8 into ES5 (Babel)
  test: /\.js/,
  exclude: /node_modules/,
  use: {
    loader = "babel-loader"
  }
}

const config = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false
  },
  externals: [nodeExternals()],
    module: {
      rules: [babel]
    },
  module: {
    rules: [pug]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './src/index.pug',
      //exclude app.js from html file
      excludeChunks: [ 'app' ], 
      inject: false
    })
  ]
}

module.exports = config
