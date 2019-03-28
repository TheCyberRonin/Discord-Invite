// webpack.config.js

const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const libraryName = 'DiscordInvite';
const outputFile = libraryName + '.min.js';
const UglifyJSPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: ['babel-polyfill', path.join(__dirname, '..', 'src', 'index.js')],
  devtool: 'source-map',
  output: {
    path: path.join(__dirname, '..','lib'),
    filename: outputFile,
    library: [libraryName],
    libraryTarget: 'umd',
    umdNamedDefine: true,
    publicPath: path.join(__dirname, '..', 'src')
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {loader: 'babel-loader', options: {presets: ['react', 'es2015', 'stage-2']}},
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, '..', 'src')
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: {loader: 'css-loader', options: {minimize: true}}
        })
      }
    ]
  },
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new UglifyJSPlugin({minimze: true}),
    new ExtractTextPlugin('DiscordInvite.min.css'),
    new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'})
  ]
};
