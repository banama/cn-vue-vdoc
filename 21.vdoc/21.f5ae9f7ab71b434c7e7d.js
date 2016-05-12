webpackJsonp([21],{63:function(e,s,i){var a,t;__vdoc_config_=i(84),t=i(135),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),t&&(("function"==typeof e.exports?e.exports.options:e.exports).html=t)},84:function(e,s){},135:function(e,s){e.exports='<h2 id=->开发插件</h2> <p>插件通常会为 Vue 添加全局功能。插件的范围没有限制——通常是下面几种：</p> <ol> <li><p>添加全局方法或属性，如 <a href=https://github.com/vuejs/vue-element>vue-element</a></p> </li> <li><p>添加全局资源：指令/过滤器/过渡等，如 <a href=https://github.com/vuejs/vue-touch>vue-touch</a></p> </li> <li><p>添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。</p> </li> <li><p>一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如 <a href=https://github.com/vuejs/vue-router>vue-router</a></p> </li> </ol> <p>Vue.js 的插件应当有一个公开方法 <code>install</code>。这个方法的第一个参数是 <code>Vue</code> 构造器，第二个参数是一个可选的选项对象：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line>MyPlugin.install = <span class=function><span class=keyword>function</span> (<span class=params>Vue, options</span>) </span>{</div><div class=line>  <span class=comment>// 1. 添加全局方法或属性</span></div><div class=line>  Vue.myGlobalMethod = ...</div><div class=line>  <span class=comment>// 2. 添加全局资源</span></div><div class=line>  Vue.directive(<span class=string>\'my-directive\'</span>, {})</div><div class=line>  <span class=comment>// 3. 添加实例方法</span></div><div class=line>  Vue.prototype.$myMethod = ...</div><div class=line>}</div></pre></td></tr></table></figure><h2 id=->使用插件</h2> <p>通过 <code>Vue.use()</code> 全局方法使用插件：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line><span class=comment>// 调用 `MyPlugin.install(Vue)`</span></div><div class=line>Vue.use(MyPlugin)</div></pre></td></tr></table></figure><p>也可以传入一个选项对象：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line>Vue.use(MyPlugin, { someOption: <span class=literal>true</span> })</div></pre></td></tr></table></figure><p>一些插件，如 <code>vue-router</code>，如果 <code>Vue</code> 是全局变量则自动调用 <code>Vue.use()</code>。不过在模块环境中应当始终显式调用 <code>Vue.use()</code>：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line><span class=comment>// 通过 Browserify 或 Webpack 使用 CommonJS 兼容模块</span></div><div class=line><span class=keyword>var</span> Vue = <span class=built_in>require</span>(<span class=string>\'vue\'</span>)</div><div class=line><span class=keyword>var</span> VueRouter = <span class=built_in>require</span>(<span class=string>\'vue-router\'</span>)</div><div class=line></div><div class=line><span class=comment>// 不要忘了调用此方法</span></div><div class=line>Vue.use(VueRouter)</div></pre></td></tr></table></figure><h2 id=->已有插件 &amp; 工具</h2> <ul> <li><p><a href=https://github.com/vuejs/vue-router>vue-router</a>：Vue.js 官方路由。与 Vue.js 内核深度整合，让构建单页应用易如反掌。</p> </li> <li><p><a href=https://github.com/vuejs/vue-resource>vue-resource</a>：通过 XMLHttpRequest 或 JSONP 发起请求并处理响应。</p> </li> <li><p><a href=https://github.com/vuejs/vue-async-data>vue-async-data</a>：异步加载数据插件。</p> </li> <li><p><a href=https://github.com/vuejs/vue-validator>vue-validator</a>：表单验证插件。</p> </li> <li><p><a href=https://github.com/vuejs/vue-devtools>vue-devtools</a>：Chrome 开发者工具扩展，用于调试 Vue.js 应用。</p> </li> <li><p><a href=https://github.com/vuejs/vue-touch>vue-touch</a>：使用 Hammer.js 添加触摸手势指令。</p> </li> <li><p><a href=https://github.com/vuejs/vue-element>vue-element</a>：使用 Vue.js 注册自定义元素。</p> </li> <li><p><a href=https://github.com/vuejs/awesome-vue#libraries--plugins>用户贡献的工具</a></p> </li> </ul>'}});