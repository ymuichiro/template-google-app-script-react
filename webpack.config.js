const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/index.tsx",
  target: "web",
  output: {
    path: `${__dirname}/gas`,
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  plugins: [
    new HtmlWebpackPlugin({ inject: true, inlineSource: '.(js|css)$', template: "./public/index.html" }),
    new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
  ],
};