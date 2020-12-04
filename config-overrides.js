const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    // fixBaberImports('import',{//配置上的babel-plugin-import
    //     libraryName:'antd',//针对的是antd
    //     libraryDirectory:'es',//源码文件中的es文件夹
    //     //style:'css',//自动打包相关的css
    //     style:true,
    // }),
    // 设置antd自定义主题

    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
            ModifyVars: { '@primary-color': '#1DA57A' }
        }
    })

)


// "start": "react-scripts start",
    // "build": "react-scripts build",
    // "test": "react-scripts test",