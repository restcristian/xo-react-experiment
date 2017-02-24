//var debug = process.env.NODE_ENV !== 'production',
var debug = false;
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    path = require('path');

module.exports = {
    context:__dirname,
    entry:path.resolve(__dirname,'dev/js/app.js'),
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.min.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:['react-hot-loader','babel-loader']
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'My Example',
            template:path.resolve(__dirname,'index.ejs'),
        })
    ]
};