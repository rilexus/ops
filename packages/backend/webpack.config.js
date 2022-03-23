//eslint-disable-next-line
const path = require("path");
//eslint-disable-next-line
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const BUILD_FOLDER = "dist";

module.exports = ({ development, production }) => {
  const mode = development ? "development" : "production";

  return {
    entry: ["./src/index.ts"],
    mode,
    target: "node",
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      alias: {
        "@env": path.resolve(__dirname, "src/env.ts"),
        "@libs": path.resolve(__dirname, "src/libs"),
        "@libs/": path.resolve(__dirname, "src/libs/"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@utils/": path.resolve(__dirname, "src/utils/"),
      },
      extensions: [".ts", ".js"],
    },
    output: {
      path: path.resolve(__dirname, BUILD_FOLDER),
      filename: "bundle.js",
    },

    plugins: [
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: "./src/**/*",
        },
      }),
    ],
  };
};
