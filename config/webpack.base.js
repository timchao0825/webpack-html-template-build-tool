const path = require('path')
const glob = require('glob')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const htmlConfig = function (name, chunks) {
  return {
    template: `./src/pages/${name}.html`,
    filename: `${name}.html`,
    inject: 'body',
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

module.exports = {
  entry: entries(),
  plugins: [
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
    html: el,
    chunks: ['vendor', 'common', el]
  })
})
htmlArray.forEach(el => {
  module.exports.plugins.push(
    new HtmlWebpackPlugin(htmlConfig(el.html, el.chunks))
  )
})
