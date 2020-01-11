const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|dist)/,
        loaders: ['babel-loader']
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  }
};