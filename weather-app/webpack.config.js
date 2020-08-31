


module.exports = {
    entry : './src/scripts/index.js',
    output : {
        path : __dirname + '/build/',
        publicPath : '/build/',
        filename : 'bundle.js'
    },
    module : {
        loaders : [{
            test : /\.svg$/,
            loader : 'url'
        }]
    }
}