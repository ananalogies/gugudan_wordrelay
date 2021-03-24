const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production
  devtool: "eval", // hidden-source-map
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },
  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],
  output: {
    filename: "[name].js", // [name]에는 entry의 name, 즉 app.js가 된다.
    path: path.join(__dirname, "dist"),
  },
};
