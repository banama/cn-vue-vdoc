import Vdoc from 'vdoc'
window.vdoc = new Vdoc()

var config = require("../vdoc.vdoc")
vdoc.mout(config)
vdoc.theme(require('../theme'))
vdoc.addRoute('/', require("../theme/root.vue"))
vdoc.start("#app", {history: false})
