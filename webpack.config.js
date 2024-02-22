const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { resolveTsAliases } = require("resolve-ts-aliases");
const path = require("path");

const isProd = process.env.NODE_ENV === "production";

console.log({ e: process.env.NODE_ENV, __dirname });

const config = {
  mode: isProd ? "production" : "development",
  entry: {
    index: "./src/index.tsx",
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: "/",
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", "..."],
    alias: resolveTsAliases(__dirname + "/tsconfig.json"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ts(x?))$/,
        use: [
          {
            loader: "babel-loader",
            // options: { presets: [["@babel/preset-env", { targets: "ie 11" }]] },
          },
          {
            loader: "ts-loader",
            options: {
              onlyCompileBundledFiles: true,
              compilerOptions: { noEmit: false },
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "file-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: {
      disableDotRule: true,
    },
    devMiddleware: {
      publicPath: "/",
      stats: "errors-only",
    },
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
  };
}

module.exports = config;
