const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')
const environments = require(path.join(
  __dirname,
  'config',
  'environments',
  process.env.APP_ENV
))

const rules = [
  {
    test: /\.tsx?$/,
    use: {
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
      },
    },
    exclude: /node_modules/,
  },
]

const resolve = {
  extensions: ['.js', '.ts', '.tsx', '.json'],
  alias: {
    '~': path.resolve(__dirname, 'src/'),
  },
}

const plugins = [
  new HTMLPlugin({
    template: path.join(__dirname, 'src', 'index.html'),
  }),
  new webpack.DefinePlugin({
    ...Object.entries(environments).reduce(
      (acc, [k, v]) => ({
        ...acc,
        [`process.env.${k}`]: JSON.stringify(v),
      }),
      {}
    ),
  }),
]

const devServer = {
  port: 3000,
  contentBase: path.join(__dirname, 'dist'),
  historyApiFallback: true,
  hot: true,
  inline: true,
  open: true,
}

module.exports = {
  entry: path.join(__dirname, 'src', 'app.tsx'),
  output: {
    filename: '[name].[hash].js',
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  devServer,
  devtool: 'inline-source-map',
}
