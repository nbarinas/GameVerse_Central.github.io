const { override, useBabelRc } = require('customize-cra');

module.exports = override(
  useBabelRc()
);

module.exports = function override(config, env) {
  if (config.devServer) {
    config.devServer.setupMiddlewares = (middlewares, devServer) => {
      if (typeof config.devServer.onBeforeSetupMiddleware === 'function') {
        config.devServer.onBeforeSetupMiddleware(devServer);
      }
      if (typeof config.devServer.onAfterSetupMiddleware === 'function') {
        config.devServer.onAfterSetupMiddleware(devServer);
      }
      return middlewares;
    };
  }
  return config;
};
