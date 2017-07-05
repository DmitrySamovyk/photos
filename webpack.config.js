const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + "/js/",
    filename: 'main.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },{
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader!sass-loader" })
      },{
        test:  /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'file-loader?name=../fonts/[name].[ext]'
      },{
        test:  /.(png|jpg)(\?[a-z0-9=\.]+)?$/,
        loader: 'file-loader?name=../img/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('../css/main.css')
  ]
};