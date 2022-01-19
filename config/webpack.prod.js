const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const WebpackConfigBase = require('./webpack.base')
const WebpackConfigProd = {
  mode: 'none',
  output: {
    clean: true,
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
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
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          },
          {
            loader: 'resolve-url-loader'
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
        // handle image
        test: /\.(png|svg|jpg|gif|pdf|webp|svg)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        },
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 90
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: [0.85, 0.9],
                speed: 4
              },
              gifsicle: {
                interlaced: false
              },
              webp: {
                quality: 90
              }
            }
          }
        ]
      },
      {
        // handle font
        test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    })
  ]
}
module.exports = merge(WebpackConfigBase, WebpackConfigProd)
