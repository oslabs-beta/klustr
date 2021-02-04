const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    publicPath: '/dist/',
    // contentBase: path.resolve(__dirname, "client/index.html"),
    proxy: {
      '/': 'http://localhost:3000',
      '/api': 'http://localhost:3000',
      '/otherApi': 'http://localhost:3000',
    },
    hot: true,
  },
};
