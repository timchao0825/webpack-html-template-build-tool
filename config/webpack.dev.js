const path = require('path')
const { merge } = require('webpack-merge')

const WebpackConfigBase = require('./webpack.base')
const WebpackConfigDev = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'eval-source-map',
  devServer: {
    watchFiles: ['src/**/*'],
    compress: false,
    port: 8080,
    hot: true,
    open: true,
    client: {
      overlay: true
    }
  },
  module: {
    rules: [
      {
        // handle js
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        // handle scss
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        // handle image
        test: /\.(png|svg|jpg|gif|pdf|webp|svg)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './images',
              esModule: false
            }
          }
        ]
      },
      {
        // handle font
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts'
            }
          }
        ]
      }
    ]
  }
}
module.exports = merge(WebpackConfigBase, WebpackConfigDev)
