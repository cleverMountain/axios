const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: undefined
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  plugins: [

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./index.html"),
      filename: "index.html",
    }),
  ],
  // devtool: 'source-map',
  devServer: {
    hot: true, // 热更新
    host: 'localhost',
    port: 8089,
    open: true, // 自动打开
  },
  mode: 'development'
}