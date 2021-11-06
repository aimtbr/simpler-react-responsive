const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');


module.exports = (env, argv) => {
  const mode = 'development';
  const port = 8080;
  const host = '127.0.0.1';
  const devtool = 'inline-source-map';

  const plugins = [
    new HtmlWebpackPlugin({
      title: 'Simpler React Responsive',
      template: 'public/index.ejs',
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
    }),
  ];

  return [
    {
      ...common,
      entry: './src/test/main.jsx',
      mode,
      devtool,
      devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        host,
        port,
        hot: true,
        historyApiFallback: true,
      },
      plugins,
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, 'src')
            ],
            use: ['babel-loader'],
          },
        ],
      },
    },
  ];
};
