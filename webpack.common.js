const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
           {
                test: /\.(jpe?g|png|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        // name: '[assets][images].[ext]?[contenthash]',
                        // outputPath: 'img',
                        name: 'images/[name].[ext]',
                    },
                },
           }
       ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       })
   ]
}