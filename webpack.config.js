const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jp(e*)g|svg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
  },

  devServer: {
    port: 3000,
  },
}
