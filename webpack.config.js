const path = require('path');

module.exports = {
  entry: './src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js$|jsx|ts|tsx/,
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
    },
  },
  performance: {
    hints: false
  }
}