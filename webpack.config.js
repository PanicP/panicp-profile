const path = require('path');

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
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
}

// const path = require('path');

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