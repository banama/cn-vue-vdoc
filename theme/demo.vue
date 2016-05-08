<template>
    <topheader></topheader>
    <div id="main">
        <sidebar :catalog=filter :subtitles=subtitles></sidebar>
        <div class="content api with-sidebar">
            {{{doc.html}}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        document: {
            type: Object,
            default: function(){
                return {
                    html: "",
                }
            }
        }
    },
    ready: function(){
        vdoc.evalScript(this.document.html)
    },
    components: {
        sidebar: function(res){
            require(['./sidebar.vue'], res)
        },
        topheader: function(res){
            require(['./header.vue'], res)
        }
    },
    computed: {
         filter: function(){
            return vdoc.sort(vdoc.getType('demo'), -1)
        },
        doc: function(){
            if(!!this.document.html){
                var self = this
                document.title = vdoc.moutData[this.$route.path].title
                Vue.nextTick(function(){
                    vdoc.evalScript(self.document.html)
                })
            }
            return this.document
        },
        subtitles: function(){
            return !!this.document.html ? vdoc.moutData[this.$route.path].subtitles : []
        }

    }
}
</script>

<style lang="stylus">
@import './css/page.styl'
</style>
