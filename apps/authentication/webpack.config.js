const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'authentication',
  exposes: {
    './Module': 'apps/authentication/src/app/app.module.ts',
  },
  shared: {
    ...shareAll({
    singleton: true,
    strictVersion: true,
    requiredVersion: 'auto'
    })
  }
});
