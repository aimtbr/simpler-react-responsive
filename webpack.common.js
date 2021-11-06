const path = require('path');


module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.json'],
    fallback: {
      fs: false,
      path: false,
    },
  },
};