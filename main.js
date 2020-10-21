exports.methods = {
    openPanel () {
        Editor.Panel.open('hello-plugin')
    },
    openPanel2 () {
        console.log('打开面板2')
        Editor.Panel.open('hello-plugin.panel2')
    },
    log (data) {
        console.log('插件收到log数据', data)
    },
    onSceneReady () {
        console.log('插件监听到scene ready')
    }
}
exports.load = {}
exports.unload = {}
