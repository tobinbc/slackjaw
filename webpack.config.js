const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const ROOT = path.resolve(__dirname, 'src');
const DESTINATION = path.resolve(__dirname, 'dist');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  context: ROOT,

  entry: {
    popup: 'popup/popup.tsx',
    "background-redirecter": 'background/redirecter/redirecter.ts',
    "tab-redirect": 'tabs/redirect/redirect.tsx',
    "content-redirect": 'content/redirect/redirect.ts',
    "content-hangouts": 'content/hangouts/hangouts.ts',
  },

  output: {
    filename: '[name].bundle.js',
    path: DESTINATION
  },

  resolve: {
    extensions: ['.ts','.tsx','.jsx', '.js'],
    modules: [ROOT, 'node_modules']
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'tslint-loader'
      },
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: 'awesome-typescript-loader'
      },
      {
        test: /\.(tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(svg|eot|woff|ttf|svg|woff2)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    name: "[name].[ext]"
                }
            }
        ]
    },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].bundle.css'
            }
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyPlugin([{ from: 'assets/*', to: DESTINATION, flatten: true }]),

    new HtmlWebpackPlugin({
      chunks: ['popup'],
      filename: 'popup.html',
      template: 'popup/popup.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['tab-redirect'],
      filename: 'tab-redirect.html',
      template: 'tabs/redirect/redirect.html'
    })
  ],
  devtool: 'cheap-module-source-map',
  devServer: {}
};
