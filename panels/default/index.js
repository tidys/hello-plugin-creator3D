const Path = require('path');
const Fs = require('fs');
exports.template = Fs.readFileSync(Path.join(__dirname, 'default.html'), 'utf-8');
exports.style = Fs.readFileSync(Path.join(__dirname, 'default.css'), 'utf-8');
exports.$ = { app: '#app' }
exports.methods = {

}
exports.ready = function () {
    // 使用vue编写界面逻辑
    require('./default.js').init(this.$.app);
}
exports.close = {}
