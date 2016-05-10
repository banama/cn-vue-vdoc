exports.index =  function(res){
    require(['./index.vue'], res)
}
exports.api =  function(res){
    require(['./api.vue'], res)
}
exports.demo = function(res){
    require(['./demo.vue'], res)
}
