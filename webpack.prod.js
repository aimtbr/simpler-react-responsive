const path = require('path');

const common = require('./webpack.common.js');


module.exports = (env, argv) => {
  const mode = 'production';

  return [
    {
      ...common,
      externals: 'react',
      entry: {
        index: './src/app/index.js',
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
    },
  ];
};
