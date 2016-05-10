<template>
    <div id="hero">
      <div class="inner">
          <div class="nav-index">
            <navs></navs>
          </div>
        <div id="logo-wrap">
          <img id="logo" src="./images/logo.png">
          <h1>Vue.js</h1>
        </div>
        <p class="desc">数据驱动的组件，为现代化的 Web 界面而生</p>
        <p class="desc">该文档基于<a href="https://github.com/banama/vdoc" class="vdoc-link">Vdoc(vue+webpack)</a>构建</p>
        <p class="buttons">
        <a href="http://github.com/vuejs/vue" class="button">安装</a>
        </p>
        <ul id="social">
          <li><a href="https://twitter.com/vuejs" class="twitter-follow-button" data-show-count="false" data-dnt="true">Follow @vuejs</a></li>
          <li><iframe src="//ghbtns.com/github-btn.html?user=vuejs&repo=vue&type=watch&count=true"
        allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe></li>
          <li id="donate">
            <span class="wrapper" style="width: 108px">
              <img src="./images/patreon.png">
              <a href="http://vuejs.org.cn/support-vuejs/">支持 Vue.js</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
    components: {
        navs: require('./nav.vue')
    }
}
</script>

<style lang="stylus">
@import "./css/_common"

zoom()
    -webkit-transform scale(1.05)
    -moz-transform scale(1.05)
    -ms-transform scale(1.05)
    transform scale(1.05)

html, body
    height 100%
#app
    min-height 100%
.nav-index
    position absolute
    right 50%
    transform translateX(50%)
#logo
    display block
    margin 0 auto
    width 200px
.vdoc-link
    color $green
#logo-wrap
    margin 3.5em 0 4em

#hero
    text-align center
    .inner
        width 100%
        position absolute
        top 50%
        transform translateY(-50%)
        left 0
    a.button
        display inline-block
        font-family $code-font
        font-weight 700
        width 260px
        color #fff
        background-color lighten($green, 8%)
        border-bottom 2px solid darken($green, 12%)
        padding 12px 14px
        border-radius 4px
        transition all .15s ease
        &:hover
            background-color lighten($green, 15%)
            -webkit-transform translate(0, -2px)
            transform translate(0, -2px)
    h1
        font-family $logo-font
        font-weight 300
        font-size 4em
        margin 0
#social
    text-align center
    list-style-type none
    margin 0 auto
    padding 0
    margin 1.5em auto
    li
        display inline-block
        margin 0 5px
        vertical-align middle
        &.last
            margin-left -2px
@media screen and (max-width: 480px)
    body
        font-size 14px
    #logo
        width 120px
    .nav-link
        font-size .85em
        margin 0 .5em
    #hero
        h1
            font-size 2em
            font-weight 400
        a.button
            width 260px
            font-size .8em
            margin .5em 0
        .desc
            max-width 300px
            font-size .85em
            margin 1em auto
    #social
        max-width 340px
        margin 1.2em auto
        line-height 1.8em
</style>
