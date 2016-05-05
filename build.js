var build = require('vdoc/build.js')
var VdocPlugin = require('vdoc-webpack-plugin')

build.live({
    port: 9999
},  function(){
    this.setEntry({
        main: ['./src/main.js']
    })
    this.setHtml({
        template: "./template/index.html",
        filename: "index.html",
        chunk: ['main']
    })
    this.loaders({
        test: /\.styl$/,
        loader: 'stylus'
    })
    this.plugins(
        new VdocPlugin({
            doc: "./doc",
            outFile: "./vdoc.vdoc"
        })
    )
})
