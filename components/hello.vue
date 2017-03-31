<template lang="jade">
    h1 {{ message }}
</template>

<script>
    module.exports = {
        data: function(){
            return{
                message: 'Привет!'
            }
        }
    }
</script>

<style lang="sass?indentedSyntax=true">
    h1
        font-size: 20px
        text-align: center
        font-weight: bold
</style>