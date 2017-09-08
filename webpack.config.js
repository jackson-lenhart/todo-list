var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  plugins: [new HtmlWebpackPlugin()],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  }
};
