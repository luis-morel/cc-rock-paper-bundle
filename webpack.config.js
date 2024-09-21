/*
Loaders: Out of the box, webpack only understands JavaScript and JSON files. 
Loaders allow webpack to process other types of files and convert them into 
valid modules that can be consumed by your application and added to the 
dependency graph.

Plugins: While loaders are used to transform certain types of modules, plugins 
can be leveraged to perform a wider range of tasks like bundle optimization, 
asset management and injection of environment variables.

Source: https://webpack.js.org/concepts/#loaders and #plugins

Note: Given the aforementioned, the "html-webpack-plugin" and "webpack" packages
imported below are required to process the index.html file, otherwise, Webpack 
throws an "Cannot GET /" error when you "npm run start" the server.
*/
const HtmlWebpackPlugin = require('html-webpack-plugin'); // to read index.html
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
    entry: './code/main.js',
    mode: 'development',
    module: {
        // Rules for css, fonts, html, and images.
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|woff|woff2)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.txt$/, 
                use: 'raw-loader' 
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html' })],
};
