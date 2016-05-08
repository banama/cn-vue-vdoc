<template>
    <ul id="nav">
        <template v-for="nav in navs">
            <li><a v-link="nav.link" class="nav-link {{$route.path == nav.link ? 'current' : ''}}">{{nav.title}}</a></li>
        </template>
    </ul>
</template>

<script>
export default {
    data: function(){
        return {
            navs: [
                {
                    link: '/doc/guide/index',
                    title: "教程"
                },
                {
                    link: '/doc/api/index',
                    title: "API"
                },
                {
                    link: '/doc/examples/index',
                    title: "示例"
                }
            ]
        }
    }
}
</script>

<style lang="stylus">
@import './css/_settings.styl'

$header-height = 40px
#nav
    list-style-type none
    margin 0
    padding 0
    height $header-height
    line-height $header-height
    .break
        display none
    li
        display inline-block
        position relative
        margin 0 .6em

.nav-link
    padding-bottom 3px
    &:hover, &.current
        border-bottom 3px solid $green
</style>
