const Path = require('path');
const Fs = require('fs');
let VM = null;
exports.template = Fs.readFileSync(Path.join(__dirname, 'panel2.html'), 'utf-8');
exports.style = Fs.readFileSync(Path.join(__dirname, 'panel2.css'), 'utf-8');
exports.$ = { app: '#app' }
exports.methods = {
    onPanel1Data (data) {
        VM.recvData = data;
    }
}
exports.ready = function () {
    // 使用vue编写界面逻辑
    VM = require('./panel2.js').init(this.$.app);
}
exports.close = {}
