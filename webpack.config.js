const path = require("path");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

const ENTRY_POINT = path.resolve(__dirname, "client/index.jsx");

const OUTPUT_DIR = path.resolve(__dirname, "public");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  entry: ENTRY_POINT,
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: OUTPUT_DIR,
  },
  devtool: "source-map",
  mode: isProd ? "production" : "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    compress: true,
    port: 8080,
  },
  plugins: isProd
    ? [
        // new CompressionPlugin({
        //   test: /\.js(\?.*)?$/i,
        // }),
      ]
    : [
        /* new BundleAnalyzerPlugin({}) */
      ],
  module: {
    rules: [
      {
        test: /.jsx?/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["env", "react", "airbnb"],
        },
      },
      // {
      //   test: /\.css$/,
      //   use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      // },
    ],
  },
};
