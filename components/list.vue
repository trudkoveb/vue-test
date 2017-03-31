<template lang="jade">
    ul
        li {{ message }}
</template>

<script>
    module.exports = {
        data:{
                clubs: [
                {
                    name: 'Герта',
                    status: false
                },
                {
                    name: 'Бавария',
                    status: true
                },
                {
                    name: 'Вердер',
                    status: false
                },
                {
                    name: 'Шальке',
                    status: false
                }
                ]
            }
    }
</script>

<style lang="sass?indentedSyntax=true">
    h1
        font-size: 20px
        text-align: center
        font-weight: bold
</style>