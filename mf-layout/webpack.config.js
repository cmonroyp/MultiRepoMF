const {
  share,
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

const moduleFederationConfig = withModuleFederationPlugin({
  name: "mf-layout",

  // exposes: {
  //   "./Component": "./src/app/app.component.ts",
  // },
  exposes: {
    "./LayoutComponent": "./src/app/layout/layout.component.ts",
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
    "@angular/material": {
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      includeSecondaries: true,
    },
  }),
});

//esta es la solucion para resolver el error de (SyntaxError: Cannot use 'import.meta' outside a module)
moduleFederationConfig.output.publicPath = "http://localhost:4202/";
module.exports = moduleFederationConfig;
