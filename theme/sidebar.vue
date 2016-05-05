<template>
    <div class="sidebar">
        <ul class="menu-root">
        <template v-for="doc in catalog">
            <template v-if="doc.route == $route.path">
            <li><a v-link="doc.route" class="section-link active active sidebar-link">{{doc.title}}</a>
                <ul class="menu-sub">
                    <template v-for="st in subtitles">
                    <li class="sub-deeep-{{st.deep}}" @click="jump(st.index)">
                        <a class="section-link" href="javascript:void 0">{{st.title}}</a>
                    </li>
                    </template>
                </ul>
            </li>
            </template>
            <template v-else>
                <li><a v-link="doc.route" class="sidebar-link">{{doc.title}}</a>
                </li>
            </template>
        </template>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        catalog: {
            type: Array,
            default: function(){
                return []
            }
        },
        subtitle: {
            type: Boolean,
            default: function(){
                return false
            }
        }
    },
    ready: function(){
    },
    computed: {
        subtitles: function(){
            if(!this.subtitle){
                return []
            }
            else{
                var subtitles = vdoc.moutData[this.$route.path].subtitles
                return subtitles
            }
        }
    },
    methods:{
        jump: function(index){
            var dom = document.querySelectorAll('.--vdoc-title--')[index]
            document.documentElement.scrollTop = document.body.scrollTop = dom.offsetTop;
        }
    }
}
</script>

<style lang="stylus">
@import './css/_settings.styl'
.sidebar
    position absolute
    z-index 10
    top 0
    left 60px
    bottom 0
    padding 3em 0
    width 260px
    margin-right 20px
    overflow-x hidden
    overflow-y auto
    -webkit-overflow-scrolling touch
    -ms-overflow-style none
    h2
        margintop .2em
    ul
        list-style-type none
        margin 0
        line-height 1.8em
        padding-left 1em
    .version-select
        vertical-align middle
        margin-left 5px
    .menu-root
        padding-left 0
    .menu-sub
        font-size .85em
    .sidebar-link
        color $light
        &.current
            font-weight 600
            color $green
        &.new
            &:after
                content "NEW"
                display inline-block
                font-size 10px
                font-weight 600
                color #fff
                background-color $green
                line-height 14px
                padding 0 4px
                border-radius 3px
                margin-left 5px
                vertical-align middle
                position relative
                top -1px
        &:hover
            border-bottom 2px solid $green
    .section-link
        &.active
            font-weight bold
            color $green
    .main-menu
        margin-bottom 20px
        display none
        padding-left 0

.sub-deeep-1
    font-size 1.2em
.sub-deeep-2
    font-size 1em
    padding-left .8rem

</style>
