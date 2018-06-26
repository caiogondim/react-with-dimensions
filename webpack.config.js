/*eslint-env node */

const env = process.env.NODE_ENV

const config = {
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd'
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
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },

}

if (env === 'development') {
  config.entry = [
    './example/index.js',
  ]
  config.devServer = {
    contentBase: './example'
  }
} else if (env === 'production') {
  config.entry = [
    './lib/index.js',
  ]
  config.externals = {
    'react': {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  }
}

module.exports = config
