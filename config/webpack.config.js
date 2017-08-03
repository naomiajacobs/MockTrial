const path = require('path')
const webpack = require('webpack')
const StatsPlugin = require('stats-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const devServerPort = 3808
const production = process.env.NODE_ENV === 'production'
const testing = process.env.NODE_ENV === 'test'

let config = {
  entry: {
    index: './app/assets/javascripts/index.jsx',
    landing: './app/assets/javascripts/components/landing-page/index.jsx',
    specs: './app/assets/javascripts/specs.js',
  },

  output: {
    path: path.join(__dirname, '..', 'public', 'webpack'),
    publicPath: '/webpack/',
    filename: production ? '[name]-[chunkhash].js' : '[name].js'
  },

  resolve: {
    modules: [
      path.resolve(__dirname, '..', 'app', 'assets', 'javascripts'),
      path.resolve(__dirname, '..', 'node_modules')
    ],
    extensions: ['.js', '.jsx']
  },

  module: {
   loaders: [
     {
       test: /.jsx$/,
       loader: 'babel-loader',
       include: /app\/assets\/javascripts/,
       query: {
         presets: ['es2015', 'react']
       }
     },
     {
       test: /(\.scss|\.css)$/,
      //  use: ExtractTextPlugin.extract({
      use: [
        { loader: 'style-loader' },
        {
          loader: 'css-loader',
          options: {
            localIdentName: '[sha512:hash:base32]-[name]-[local]',
            modules: true,
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [require('autoprefixer')]
          }
        },
        { loader: 'sass-loader' }
      ]
     }
   ],
 },

  plugins: [
    new StatsPlugin('manifest.json', {
      chunkModules: false,
      source: false,
      chunks: false,
      modules: false,
      assets: true
    }),
    // new ExtractTextPlugin('styles.css')
  ],
}

let plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: JSON.stringify('production') }
  }),
]

if (production) {
  config.plugins.push(
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compressor: { warnings: false },
      mangle: { keep_fnames: true },
      output: { comments: false }
    })
  )
} else if (testing) {
  config.plugins.push(...plugins)
} else {
  config.devServer = {
    port: devServerPort,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }

  config.output.publicPath = `//localhost:${devServerPort}/webpack/`
  config.devtool = 'source-map'
}


module.exports = config
