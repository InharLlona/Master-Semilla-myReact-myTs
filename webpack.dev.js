
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const DotenvWebpackPlugin = require("dotenv-webpack");

module.exports = merge(common, {
    mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader","sass-loader"],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    port: "8086",
  },
  stats: "errors-only",
  plugins:[
      new DotenvWebpackPlugin({
          path:"./dev.env",
      }),
  ],
});

