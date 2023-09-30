const {
  share,
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const moduleFederationConfig = withModuleFederationPlugin({
  name: "mf-login",
  exposes: {
    "./LoginComponent": "./src/app/authentication/login/login.component.ts",
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

//esta es la solucion para resolver el error de (SyntaxError: Cannot use 'import.meta' outside a module)
moduleFederationConfig.output.publicPath = "http://localhost:4201/";
module.exports = moduleFederationConfig;
