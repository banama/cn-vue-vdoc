import Vdoc from 'vdoc'
var vdoc = new Vdoc()
vdoc.mout(require("../vdoc.vdoc"))
vdoc.theme(require('../theme'))
vdoc.addRoute('/', require("../theme/root.vue"))
vdoc.start("#app", {history: false})
export default vdoc
