var webpack = require('webpack');

module.exports = {
  context: __dirname + '/app',
  entry: {
      app: './index.js',
      vendor: ['angular','angular-ui-router','angular-resource','chart.js']  
  },
  output: {
      path: __dirname + '/js',
      filename: 'app.bundle.js'
  },
  plugins: [
      new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
};