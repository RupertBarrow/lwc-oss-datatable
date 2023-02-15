const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

const fs = require("fs")
const path = require("path")

module.exports = {
  entry: {
    index: "./src/client/index.js",
  },

  output: {
    filename: "[name].bundle.[contenthash].js",
    publicPath: "/",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html",
      filename: "index-new.html",
      chunks: ["index"],
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve("src/client/resources"),
          to: "resources",
        },
        {
          from: path.resolve("node_modules/@salesforce-ux/design-system/assets/icons"),
          to: "slds/icons",
        },
        {
          from: path.resolve("node_modules/@salesforce-ux/design-system/assets/images"),
          to: "slds/images",
        },
        {
          from: path.resolve("node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css"),
          to: "slds/styles/salesforce-lightning-design-system.min.css",
        },
        /*
        {
          from: path.resolve("node_modules/datatables.net-bs5/css/dataTables.bootstrap5.min.css"),
          to: "datatables/datatables.net-bs5/css/dataTables.bootstrap5.min.css",
        },
        {
          from: path.resolve("node_modules/datatables.net-select-bs5/css/select.bootstrap5.min.css"),
          to: "datatables/datatables.net-select-bs5/css/select.bootstrap5.min.css",
        },
        */
      ],
    }),
  ],
}
