//webpack.config.js
var path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new NodePolyfillPlugin({
      includeAliases: ['stream', 'process']
    })
  ],
  entry: {
    main: "./src/httpsnippet.ts",
  },
  output: {
    globalObject: "this",
    path: path.resolve(__dirname, './build'),
    filename: "httpsnippet-bundle.js" // <--- Will be compiled to this single file
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        /*
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['es2015', { targets: "defaults" }]
            ]
          }
        }
        */
      }
    ]
  }
};
