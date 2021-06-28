const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, argv) => {
  const {
    NODE_ENV = 'development',
    PORT = 8080,
  } = env;

  const environment = argv.mode || NODE_ENV;

  const mode = environment;
  const port = PORT;
  const host = '127.0.0.1';
  const devtool = 'inline-source-map';

  const plugins = [
    new HtmlWebpackPlugin({
      title: 'Simple React Responsiveness',
      template: 'public/index.ejs',
      meta: {
        viewport: "width=device-width, initial-scale=1",
      },
    }),
  ];

  return [
    {
      entry: ['./src/test/main.jsx'],
      mode,
      devtool,
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
      },
      devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        host,
        port,
        hot: true,
        historyApiFallback: true,
      },
      resolve: {
        extensions: ['*', '.js', '.jsx', '.json'],
        fallback: {
          fs: false,
          path: false,
        },
      },
      plugins,
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, 'src')
            ],
            exclude: [
              path.resolve(__dirname, 'node_modules'),
              path.resolve(__dirname, 'public')
            ],
            use: ['babel-loader'],
          },
          {
            test: /\.html$/,
            exclude: [
              path.resolve(__dirname, 'node_modules'),
            ],
            use: ['html-loader'],
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
