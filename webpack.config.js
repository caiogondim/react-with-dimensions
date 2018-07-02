/*eslint-env node */

const config = {
  entry: [
    './example/index.js',
  ],
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  devServer: {
    contentBase: './example'
  }
}

module.exports = config
