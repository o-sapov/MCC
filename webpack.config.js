module.exports = {
    entry: './app/assets/scripts/modules.js',
    output: {
        path: __dirname + '/docs/assets/scripts',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}