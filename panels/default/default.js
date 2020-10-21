const Path = require('path')
const Fs = require('fs')

exports.init = (el) => {
    let Vue = require('../../vue');
    new Vue({
        el: el,
        data () {
            return {
                sendData: 'hello cocos3d plugin',
            }
        },
        created () {
            console.log('created')
        },
        methods: {
            onClickBtn1 () {
                Editor.Message.send('hello-plugin', "log", this._getRandomData())
            },
            onClickBtn2 () {

                Editor.Message.send('hello-plugin', 'panel1-panel2', this._getRandomData())
            },
            _getRandomData () {
                let rand = Math.random() * 100
                return `我来自panel1，${this.sendData} [${rand.toFixed(0)}]`
            }
        }
    })
}
