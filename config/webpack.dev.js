const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const read = require('fs-readdir-recursive')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const htmlConfig = function (name, chunks) {
  return {
    template: `./src/pages/${name}.html`,
    filename: `${name}.html`,
    inject: true,
    hash: false,
    chunks: chunks
  }
}

function entries() {
  const entry = {}
  glob.sync('./src/js/*.js').forEach(function (name) {
    const start = name.indexOf('src/') + 4,
      end = name.length - 3
    const eArr = []
    let n = name.slice(start, end)
    n = n.split('/')[1]
    eArr.push(name)
    entry[n] = eArr
  })
  return entry
}

console.log(entries())

module.exports = (env, options) => {
  const config = {
    mode: 'development',
    entry: entries(),
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: './js/[name].bundle.js'
    },
    devtool: 'source-map',
    devServer: {
      watchFiles: ['./src/*'],
      compress: true,
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
          // handle css module
          test: /\.(sa|sc|c)ss$/,
          exclude: /node_modules/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            {
              loader: 'css-loader',
              options: {
                import: true,
                sourceMap: true,
                url: true,
                modules: {
                  localIdentName: '[local]'
                }
              }
            },
            'postcss-loader',
            'sass-loader'
          ],
          include: /\.module\.(sa|sc|c)ss$/
        },
        {
          // handle css without module
          test: /\.(sa|sc|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../'
              }
            },
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ],
          exclude: /\.module\.(sa|sc|c)ss$/
        },
        {
          // handle image
          test: /\.(png|svg|jpg|gif|pdf)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        },
        {
          // handle font
          test: /\.(woff(2)?|ttf|eot|svg|otf)(\?v=\d+\.\d+\.\d+)?$/,
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
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, '../src/assets'),
            to({ context, absoluteFilename }) {
              return './assets'
            }
          }
        ]
      })
    ]
  }
  const entryObj = entries()
  const htmlArray = []
  Object.keys(entryObj).forEach(el => {
    htmlArray.push({
      _html: el,
      title: '',
      chunks: ['vendor', 'common', el]
    })
  })
  htmlArray.forEach(el => {
    config.plugins.push(new HtmlWebpackPlugin(htmlConfig(el._html, el.chunks)))
  })

  return config
}
