const path = require("path");
const rewireWebpackBundleAnalyzer = require('react-app-rewire-webpack-bundle-analyzer')
 
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  if (env === 'production') {
    config = rewireWebpackBundleAnalyzer(config, env, {
      analyzerMode: 'static',
      reportFilename: 'report.html'
    })
  }
  return config;
};
