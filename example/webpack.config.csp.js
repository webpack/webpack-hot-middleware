var webpack = require('webpack');
var violateCSP = process.env.WEBPACK_HOT_MIDDLEWARE_VIOLATE_CSP == 'true';
var hotMiddlewareScript =
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true' +
  '&overlayStyleMode=' +
  (violateCSP ? 'inline' : 'headless');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    client: [
      './client.js',
      hotMiddlewareScript,
      'webpack-hot-middleware/client-overlay.css',
    ],
    csp: [
      './csp.js',
      hotMiddlewareScript,
      'webpack-hot-middleware/client-overlay.css',
    ],
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: require.resolve('style-loader'),
            options: {
              injectType: 'linkTag',
            },
          },
          { loader: require.resolve('file-loader') },
        ],
      },
    ],
  },
};
