module.exports = {
  entry: './src/components/app/app.module.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.html$/, loader: "html" },
      { test: /\.css$/, loader: "style!css" },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }, 
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: "#inline-source-map"
}
