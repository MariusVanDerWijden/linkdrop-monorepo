const path = require('path')
const webpack = require('webpack')

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    importLoaders: 1,
    camelCase: true,
    localIdentName: '[local]__[hash:base64:5]',
    minimize: true
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    minimize: true
  }
}

const postCSSLoader = {
  loader: 'postcss-loader',
  options: {
    ident: 'postcss',
    sourceMap: true,
    plugins: () => [
      require('autoprefixer')({
        browsers: ['>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9']
      })
    ]
  }
}

module.exports = {
  entry: [
    '@babel/polyfill',
    './index.js',
    'webpack/hot/dev-server'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'assets/scripts')
  },
  context: __dirname,
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css', '*'],
    modules: [
      path.resolve('./'),
      path.resolve('./node_modules'),
      path.resolve('../../node_modules')
    ],
    alias: {
      wallets: path.resolve(__dirname, '../../configs/wallets.config'),
      config: path.resolve(__dirname, '../../configs/app.config'),
      'config-demo': path.resolve(__dirname, '../../configs/demo.config'),
      contracts: path.resolve(__dirname, '../../contracts/build'),
      variables: path.resolve(__dirname, '../linkdrop-commons/variables/index.module.scss')
    }
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.(js|jsx)$/,
      loader: 'standard-loader',
      exclude: /(node_modules|bower_components|linkdrop-ui-kit)/,
      options: {
        parser: 'babel-eslint'
      }
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.(scss|css)$/,
      exclude: /\.module\.scss$/,
      use: [
        'style-loader',
        CSSLoader,
        'sass-loader',
        postCSSLoader
      ]
    }, {
      test: /\.module\.scss$/,
      use: [
        'style-loader',
        CSSModuleLoader,
        'sass-loader',
        postCSSLoader
      ]
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg|otf|gif)$/,
      loader: 'url-loader?limit=100000'
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}