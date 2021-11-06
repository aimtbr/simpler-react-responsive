const path = require('path');

const common = require('./webpack.common.js');


module.exports = (env, argv) => {
  const mode = 'development';

  return [
    {
      ...common,
      entry: {
        index: './src/app/index.js'
      },
      mode,
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, 'src', 'app')
            ],
            use: ['babel-loader'],
          },
        ],
      },
      optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      },
    },
  ];
};
