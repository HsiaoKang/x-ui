const esbuild = require('esbuild')
// run build on project root 
esbuild.build({
    entryPoints:["src/test.jsx",'src/base.ts'],
    // bundle:true,
    outdir:'dest',
    define:{
        env:'prod',
        global:'global2'
    },
    inject:['src/global.js'],
    loader:{
        '.jpg':'dataurl'
    },
    minify:true

}).catch((error)=>{
    console.log(error);
    process.exit()
})
