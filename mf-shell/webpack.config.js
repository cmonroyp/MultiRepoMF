const {
  share,
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const moduleFederationConfig = withModuleFederationPlugin({
  remotes: {
    // mfLogin: "http://localhost:4201/remoteEntry.js",
    // mfLayout: "http://localhost:4202/remoteEntry.js",
  },

  // shared: {
  //   ...shareAll({
  //     singleton: true,
  //     strictVersion: true,
  //     requiredVersion: "auto",
  //   }),
  // },
  shared: share({
    "@angular/core": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/common/http": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    "@angular/router": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
    bootstrap: {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    },
  }),
});

moduleFederationConfig.output.publicPath = "http://localhost:4200/";
module.exports = moduleFederationConfig;
