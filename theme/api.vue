<template>
    <div id="main" class="fix-sidebar">
        <sidebar :catalog=filter :subtitle=true></sidebar>
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
        }
    },
    computed: {
         filter: function(){
            return vdoc.sort(vdoc.getType('api'))
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
        }
    }
}
</script>

<style lang="stylus">
@import './css/page.styl'
</style>
