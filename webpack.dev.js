const path = require('path')

const webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './web/static/js/index.js'
  ],
  output: {
    path: path.join(__dirname, 'priv/static/js'),
    filename: 'app.js',
    publicPath: 'http://localhost:3000/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
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
