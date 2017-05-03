<template lang="jade">
    p {{ info }}
</template>

<script>
    module.exports = {
        name: 'ret',
        data: function(){
            return{
                info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur omnis totam temporibus, provident magnam perferendis dolor sint aperiam ullam beatae.'
            }
        }
    }
</script>

<style lang="sass?indentedSyntax=true">
    p
        text-align: center
        font-style: italic
        color: blue
</style>