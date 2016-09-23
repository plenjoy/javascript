var webpack = require('webpack');
var path = require("path");
var chunkPlugin = new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.js");

var providePlugin = new webpack.ProvidePlugin({
  $: "jquery",
  jQuery: "jquery",
  "window.jQuery": "jquery",
  Store: "Store"
});

module.exports = {
  plugins: [chunkPlugin,providePlugin],
  entry: {
    app : path.join(__dirname, '/vuejs&webpack/src/index.js'),
    vendor: ['jquery', 'vue'],
  },
  //入口文件输出配置
  output: {
    path: path.join(__dirname, '/vuejs&webpack/'),
    filename: '[name].js'   // name是上面entry中设置的key
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=1000" },
      { test: /\.jpg$/, loader: "file-loader" },
      { test: /\.vue$/, loader: "vue" }
      // { test: /\.js$/, loader: 'jsx-loader?harmony' },
      // { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
      // { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  //其它解决方案配置
  resolve: {
    /*root: 'D:/workspace_new/js/h5/', //绝对路径*/
    /*extensions: ['', '.js', '.json', '.scss'],*/
    alias: require(path.join(__dirname, '/vuejs&webpack/alias.js'))
  }
};