const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack')

module.exports = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'js/main.[hash].js'
  },
  module: {
    rules: [
    ]
  },
  devtool: 'source-map',
  target: 'web',
  optimization: {
    noEmitOnErrors: true
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/assets/', to: './assets/' }
      ]
    }),
    new ImageminPlugin({
      name: '[path][name].[ext]',
      imageminOptions: {
        plugins: [
          ['gifsicle', { interlaced: true, optimizationLevel: 3 }],
          ['mozjpeg', { quality: 73, progressive: true }],
          ['pngquant', { quality: [0.6, 0.8] }]
        ]
      }
    })
  ]
}
