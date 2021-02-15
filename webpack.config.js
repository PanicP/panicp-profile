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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name:'static/[name].[ext]'
              }
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              query: {
                mozjpeg: {
                  progressive: true,
                },
                gifsicle: {
                  interlaced: true,
                },
                optipng: {
                  optimizationLevel: 7,
                }
              }
            }
          }]
      },
      {
        test: /\.(ttf)$/,
        use: {
          loader: 'url-loader',
        },
      },
      // {
      //   test: /\.(jpe?g|gif|png|svg)$/i,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000
      //       }
      //     }
      //   ]
      // }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
      Static: path.resolve(__dirname, "src/static/")
    },
  },
  performance: {
    hints: false
  }
}