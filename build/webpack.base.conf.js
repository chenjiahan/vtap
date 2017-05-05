module.exports = {
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader'
                ],
            },
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    },
    performance: {
        hints: false
    },
    resolve: {
        extensions: ['.webpack.js',  '.js', '.vue', '.ts']
    }
};
