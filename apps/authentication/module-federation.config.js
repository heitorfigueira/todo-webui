module.exports = {
  name: 'authentication',
  filename: 'remoteEntry.js',
  exposes: {
    './Module': 'apps/authentication/src/app/app.module.ts',
  },
};
