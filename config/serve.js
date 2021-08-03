
const {commonBuildOptions} = require('./common')
require('esbuild').serve({
    servedir:'www',
},{
    ...commonBuildOptions,
    entryPoints:['src/test.jsx','src/base.ts'],
    outdir:'www/js',
    bundle:true,
 
}).then(server=>{
    // server.stop()
})
