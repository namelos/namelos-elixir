const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './web/static/js/index.js',
  output: {
    path: path.join(__dirname, 'priv/static/js'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
      }],
      include: path.join(__dirname, 'web/static/js')
    }, {
      test: /\.elm$/,
      use: [{
        loader: 'elm-webpack-loader',
        options: {
          pathToMake: __dirname + '/node_modules/.bin/elm-make',
          cwd: __dirname + '/web/static/elm'
        }
      }],
      exclude: [/elm-stuff/, /node_modules/]
    }]
  },
  resolve: {
    extensions: ['.js', '.elm']
  }
}
