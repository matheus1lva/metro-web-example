const path = require('path');

module.exports = {
    mode: "development",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "webpack-result.js"
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            }
        ]
    }
}