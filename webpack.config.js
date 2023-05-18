const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },
    output: {
        path: path.resolve(__dirname, './docs/assets/scripts'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            /*apply babel for js-files only*/
            test: /\.m?js$/,
            include: [
                path.resolve(__dirname, "app")
            ],
            exclude: [
                path.resolve(__dirname, "node_modules")
            ],
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }

        }],
    },
};
