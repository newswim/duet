const webpack = require('webpack')
const path = require('path')
const WebpackHtmlPlugin = require('html-webpack-plugin')

module.exports = (env = 'development') => {
  const plugins = [
    new WebpackHtmlPlugin({ template: './src/index.html', inject: true }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env) }
    }),
    new webpack.NamedModulesPlugin()
  ]

  const isProduction = env === 'production'
  if (isProduction) {
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true
        },
        compress: {
          screw_ie8: true,
          warnings: false
        },
        comments: false
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
      })
    )
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin())
  }

  const entry = (isProduction) ? path.join(__dirname, 'src/index.js') : [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ]

  return {
    devtool: isProduction ? 'hidden-source-map' : 'eval-source-map',
    entry,
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }]
    },
    plugins,
    devServer: {
      contentBase: './public',
      publicPath: '/',
      historyApiFallback: true,
      port: 4001,
      inline: true,
      hot: true,
      noInfo: false,
      stats: 'minimal'
    }
  }
}
