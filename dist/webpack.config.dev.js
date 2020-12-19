"use strict";

var path = require('path');

module.exports = {
  entry: './src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$|jsx|ts|tsx/,
      exclude: /node_modules/
    }, {
      test: /\.(scss|css)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      Components: path.resolve(__dirname, "src/components/") // 'Components': path.resolve(__dirname, '../src/components/'),
      // 'Pages': path.resolve(__dirname, '../src/pages/'),
      // 'Services': path.resolve(__dirname, '../src/services/'),

    }
  } // resolve: {
  //   extensions: ['tsx', '.ts', '.js'],
  //   alias: {
  //     Components: path.resolve(__dirname, "src/components/"),
  //     // 'Components': path.resolve(__dirname, '../src/components/'),
  //     // 'Pages': path.resolve(__dirname, '../src/pages/'),
  //     // 'Services': path.resolve(__dirname, '../src/services/'),
  //   },
  // }

}; // const path = require('path');
// module.exports = {
//   entry  : './out/App.js',
//   output : {
//     path     : path.resolve(__dirname, 'public'),
//     filename : 'app.js'
//   },
//   externals : {
//     "react"     : 'React',
//     "react-dom" : 'ReactDOM'
//   },
// };