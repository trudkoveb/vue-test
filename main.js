var Vue = require('vue')
var message = require('vue!./components/hello.vue')
var list = require('vue!./components/list.vue')
var info = require('vue!./components/text.vue')

new Vue({
    el: 'body',
    components:{
        message: message
    }
})

new Vue({
    el: 'body',
    components:{
        list: list
    }
})

new Vue({
    el: 'body',
    components: {
        info: info
    }
})