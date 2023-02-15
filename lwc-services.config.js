// Find the full example of all available configuration options at
// https://github.com/muenzpraeger/create-lwc-app/blob/master/packages/lwc-services/example/lwc-services.config.js
module.exports = {
  /*
  resources: [
    { from: "src/client/resources", to: "dist/resources/" },
    // SLDS
    { from: "node_modules/@salesforce-ux/design-system/assets/icons", to: "src/client/slds/icons" },
    { from: "node_modules/@salesforce-ux/design-system/assets/images", to: "src/client/slds/images" },
    { from: "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css", to: "src/client/slds/styles/salesforce-lightning-design-system.min.css" },
    // DATATABLES.NET
    { from: "node_modules/datatables.net-select-bs5/css/select.bootstrap5.min.css", to: "src/client/datatables.net/css/select.bootstrap5.min.css" },
  ],
  */
  sourceDir: "./src/client",
  devServer: {
    proxy: { "/": "http://localhost:3002" },
  },
}
