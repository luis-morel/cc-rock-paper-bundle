const path = require('path');

module.exports = {
    entry: './code/main.js',
    mode: 'development',
    module:
    // Rules for CSS, fonts, and images.
    {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.png$/i,
                type: 'asset/resource'
            }
        ]
    }

}
