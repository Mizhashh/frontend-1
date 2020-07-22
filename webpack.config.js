const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
// Work with env and const helpers
const NODE_ENV = process.env.NODE_ENV || 'development';
const isDev = NODE_ENV === 'development';

//Run helpers
const plugins = () => {
  return isDev ? [] : [
    new CleanWebpackPlugin()
  ]
}


module.exports = {
  mode: 'development',
  devtool: isDev ? 'source-map' : '',
  entry: './src/index.js',
  output: {
    path: path.resolve(isDev ? 'server/static' : 'lib'),
    filename: '[name].js'
  },
  module: {
    rules: []
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: plugins()
}