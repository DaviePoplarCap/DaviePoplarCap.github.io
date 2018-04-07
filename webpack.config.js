const webpack = require('webpack'),
      path = require('path');


module.exports = {
  entry: [
    path.join(__dirname, 'app/Main.jsx')
  ],
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        loaders: ['babel']
      }, {
        test: /\.scss$/i,
        loaders: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader?outputStyle=expanded'
          // 'autoprefixer?browsers=last 3 versions'
        ]
      }, { 
        test: /\.json$/i, 
        loader: 'json'
      }, {
        test: /\.(pdf|vcf|docx?)$/i,
        loader: 'file-loader?name=[name].[ext]&publicPath=public/resources/&outputPath=public/dist/'
      }, {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/i,
        loader: 'url?limit=100000&name=[name].[ext]'
      }
    ]
  },
  watch: true,
  devtool: 'cheap-eval-source-map',
  devServer: {
    colors: true,
    noInfo: false,
    hot: true,
    inline: true,
    port: 8100,
    host: 'localhost'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: false
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
