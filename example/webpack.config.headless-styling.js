var webpack = require('webpack');
var hotMiddlewareScript =
  'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true&overlayStyleMode=headless';

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: {
    client: ['./client.js', hotMiddlewareScript],
    'headless-styling': ['./headless-styling.js', hotMiddlewareScript],
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js',
  },
  devtool: 'source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
