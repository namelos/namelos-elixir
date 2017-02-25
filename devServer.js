const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  quiet: false,
  noInfo: false,
  proxy: {
    '/api': {
      target: 'http://localhost:4000',
      secure: false
    }
  },
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false
  }
}).listen(3000, 'localhost', err => console.log(err || 'Listening at localhost:3000'))

process.stdin.resume()
process.stdin.on('end', () => process.exit(0))
