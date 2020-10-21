const Path = require('path')
const Fs = require('fs')

exports.init = (el) => {
    let Vue = require('../../vue');
    return new Vue({
        el: el,
        data () {
            return {
                recvData: null,
            }
        },
        created () {
            console.log('created')
        },
        methods: {
            onClickBtn () {
                Editor.Message.send('hello-plugin', "log", '牛逼')
            }
        }
    })
}
