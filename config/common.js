 const commonBuildOptions  = {
    define:{
        env:'prod',
        global2:'global'
    },
    // inject 内容只能是 命名导出的形式，不能使用默认导出
    inject:['src/global.js'],
    loader:{
        '.jpg':'dataurl'
    }
}

module.exports = {
    commonBuildOptions
}