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
    compress: true,
    port: 8080,
    allowedHosts: 'all',
    // open: true,
    client: {
      overlay: true,
      reconnect: true
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
              url: true
            }
          },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|pdf|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        }
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
