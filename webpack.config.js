var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    entry:__dirname+'/src/main.js',
    output:{
        path:__dirname+'/dist',
        filename:'[name].js'
    },
    module:{
        loaders:[
            {
                test:/\.js|jsx/,
                loaders:['babel-loader?presets[]=es2015']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'这是zhlux',
            template:__dirname+'/example.tmp.html',
            file:__dirname+'/example.html',
        })
    ]
}