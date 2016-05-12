webpackJsonp([19],{66:function(s,a,n){var e,i;__vdoc_config_=n(82),i=n(138),s.exports=e||{},s.exports.__esModule&&(s.exports=s.exports["default"]),i&&(("function"==typeof s.exports?s.exports.options:s.exports).html=i)},82:function(s,a){},138:function(s,a){s.exports='<p>通过 Vue.js 的过渡系统，可以在元素从 DOM 中插入或移除时自动应用过渡效果。Vue.js 会在适当的时机为你触发 CSS 过渡或动画，你也可以提供相应的 JavaScript 钩子函数在过渡过程中执行自定义的 DOM 操作。</p> <p>为了应用过渡效果，需要在目标元素上使用 <code>transition</code> 特性：</p> <figure class="highlight html"><table><tr><td class=code><pre><div class=line><span class=tag>&lt;<span class=name>div</span> <span class=attr>v-if</span>=<span class=string>"show"</span> <span class=attr>transition</span>=<span class=string>"my-transition"</span>&gt;</span><span class=tag>&lt;/<span class=name>div</span>&gt;</span></div></pre></td></tr></table></figure><p><code>transition</code> 特性可以与下面资源一起用：</p> <ul> <li><code>v-if</code></li> <li><code>v-show</code></li> <li><code>v-for</code> （只为插入和删除触发）</li> <li>动态组件 （介绍见<a href=components.html#动态组件>组件</a>）</li> <li>在组件的根节点上，并且被 Vue 实例 DOM 方法（如 <code>vm.$appendTo(el)</code>）触发。</li> </ul> <p>当插入或删除带有过渡的元素时，Vue 将：</p> <ol> <li><p>尝试以 ID <code>&quot;my-transition&quot;</code> 查找 JavaScript 过渡钩子对象——通过 <code>Vue.transition(id, hooks)</code> 或 <code>transitions</code> 选项注册。如果找到了，将在过渡的不同阶段调用相应的钩子。</p> </li> <li><p>自动嗅探目标元素是否有 CSS 过渡或动画，并在合适时添加/删除 CSS 类名。</p> </li> <li><p>如果没有找到 JavaScript 钩子并且也没有检测到 CSS 过渡/动画，DOM 操作（插入/删除）在下一帧中立即执行。</p> </li> </ol> <h2 id=css->CSS 过渡</h2> <h3 id=->示例</h3> <p>典型的 CSS 过渡像这样：</p> <figure class="highlight html"><table><tr><td class=code><pre><div class=line><span class=tag>&lt;<span class=name>div</span> <span class=attr>v-if</span>=<span class=string>"show"</span> <span class=attr>transition</span>=<span class=string>"expand"</span>&gt;</span>hello<span class=tag>&lt;/<span class=name>div</span>&gt;</span></div></pre></td></tr></table></figure><p>然后为 <code>.expand-transition</code>, <code>.expand-enter</code> 和 <code>.expand-leave</code> 添加 CSS 规则:</p> <figure class="highlight css"><table><tr><td class=code><pre><div class=line><span class=comment>/* 必需 */</span></div><div class=line><span class=selector-class>.expand-transition</span> {</div><div class=line>  <span class=attribute>transition</span>: all .<span class=number>3s</span> ease;</div><div class=line>  <span class=attribute>height</span>: <span class=number>30px</span>;</div><div class=line>  <span class=attribute>padding</span>: <span class=number>10px</span>;</div><div class=line>  <span class=attribute>background-color</span>: <span class=number>#eee</span>;</div><div class=line>  <span class=attribute>overflow</span>: hidden;</div><div class=line>}</div><div class=line></div><div class=line><span class=comment>/* .expand-enter 定义进入的开始状态 */</span></div><div class=line><span class=comment>/* .expand-leave 定义离开的结束状态 */</span></div><div class=line><span class=selector-class>.expand-enter</span>, <span class=selector-class>.expand-leave</span> {</div><div class=line>  <span class=attribute>height</span>: <span class=number>0</span>;</div><div class=line>  <span class=attribute>padding</span>: <span class=number>0</span> <span class=number>10px</span>;</div><div class=line>  <span class=attribute>opacity</span>: <span class=number>0</span>;</div><div class=line>}</div></pre></td></tr></table></figure><p>你可以在同一元素上通过动态绑定实现不同的过渡：</p> <figure class="highlight html"><table><tr><td class=code><pre><div class=line><span class=tag>&lt;<span class=name>div</span> <span class=attr>v-if</span>=<span class=string>"show"</span> <span class=attr>:transition</span>=<span class=string>"transitionName"</span>&gt;</span>hello<span class=tag>&lt;/<span class=name>div</span>&gt;</span></div></pre></td></tr></table></figure><figure class="highlight js"><table><tr><td class=code><pre><div class=line><span class=keyword>new</span> Vue({</div><div class=line>  el: <span class=string>\'...\'</span>,</div><div class=line>  data: {</div><div class=line>    show: <span class=literal>false</span>,</div><div class=line>    transitionName: <span class=string>\'fade\'</span></div><div class=line>  }</div><div class=line>})</div></pre></td></tr></table></figure><p>另外，可以提供 JavaScript 钩子:</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line>Vue.transition(<span class=string>\'expand\'</span>, {</div><div class=line></div><div class=line>  beforeEnter: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    el.textContent = <span class=string>\'beforeEnter\'</span></div><div class=line>  },</div><div class=line>  enter: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    el.textContent = <span class=string>\'enter\'</span></div><div class=line>  },</div><div class=line>  afterEnter: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    el.textContent = <span class=string>\'afterEnter\'</span></div><div class=line>  },</div><div class=line>  enterCancelled: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    <span class=comment>// handle cancellation</span></div><div class=line>  },</div><div class=line></div><div class=line>  beforeLeave: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    el.textContent = <span class=string>\'beforeLeave\'</span></div><div class=line>  },</div><div class=line>  leave: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    el.textContent = <span class=string>\'leave\'</span></div><div class=line>  },</div><div class=line>  afterLeave: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    el.textContent = <span class=string>\'afterLeave\'</span></div><div class=line>  },</div><div class=line>  leaveCancelled: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    <span class=comment>// handle cancellation</span></div><div class=line>  }</div><div class=line>})</div></pre></td></tr></table></figure><div id=demo> <div v-if=show transition=expand>hello</div> <button @click="show = !show">Toggle</button> </div> <style>.expand-transition{transition:all .3s ease;height:30px;padding:10px;background-color:#eee;overflow:hidden}.expand-enter,.expand-leave{height:0;padding:0 10px;opacity:0}</style> <script>new Vue({el:"#demo",data:{show:!0,transitionState:"Idle"},transitions:{expand:{beforeEnter:function(e){e.textContent="beforeEnter"},enter:function(e){e.textContent="enter"},afterEnter:function(e){e.textContent="afterEnter"},beforeLeave:function(e){e.textContent="beforeLeave"},leave:function(e){e.textContent="leave"},afterLeave:function(e){e.textContent="afterLeave"}}}})</script> <h3 id=-css->过渡的 CSS 类名</h3> <p>类名的添加和切换取决于 <code>transition</code> 特性的值。比如 <code>transition=&quot;fade&quot;</code>，会有三个 CSS 类名：</p> <ol> <li><p><code>.fade-transition</code> 始终保留在元素上。</p> </li> <li><p><code>.fade-enter</code> 定义进入过渡的开始状态。只应用一帧然后立即删除。</p> </li> <li><p><code>.fade-leave</code> 定义离开过渡的结束状态。在离开过渡开始时生效，在它结束后删除。</p> </li> </ol> <p>如果 <code>transition</code> 特性没有值，类名默认是 <code>.v-transition</code>, <code>.v-enter</code> 和 <code>.v-leave</code>。</p> <h3 id=->自定义过渡类名</h3> <blockquote> <p>1.0.14 新增</p> </blockquote> <p>我们可以在过渡的 JavaScript 定义中声明自定义的 CSS 过渡类名。这些自定义类名会覆盖默认的类名。当需要和第三方的 CSS 动画库，比如 <a href=https://daneden.github.io/animate.css/ >Animate.css</a> 配合时会非常有用：</p> <figure class="highlight html"><table><tr><td class=code><pre><div class=line><span class=tag>&lt;<span class=name>div</span> <span class=attr>v-show</span>=<span class=string>"ok"</span> <span class=attr>class</span>=<span class=string>"animated"</span> <span class=attr>transition</span>=<span class=string>"bounce"</span>&gt;</span>Watch me bounce<span class=tag>&lt;/<span class=name>div</span>&gt;</span></div></pre></td></tr></table></figure><figure class="highlight js"><table><tr><td class=code><pre><div class=line>Vue.transition(<span class=string>\'bounce\'</span>, {</div><div class=line>  enterClass: <span class=string>\'bounceInLeft\'</span>,</div><div class=line>  leaveClass: <span class=string>\'bounceOutRight\'</span></div><div class=line>})</div></pre></td></tr></table></figure><h3 id=-css->显式声明 CSS 过渡类型</h3> <blockquote> <p>1.0.14 新增</p> </blockquote> <p>Vue.js 需要给过渡元素添加事件侦听器来侦听过渡何时结束。基于所使用的 CSS，该事件要么是 <code>transitionend</code>，要么是 <code>animationend</code>。如果你只使用了两者中的一种，那么 Vue.js 将能够根据生效的 CSS 规则自动推测出对应的事件类型。但是，有些情况下一个元素可能需要同时带有两种类型的动画。比如你可能希望让 Vue 来触发一个 CSS animation，同时该元素在鼠标悬浮时又有 CSS transition 效果。这样的情况下，你需要显式地声明你希望 Vue 处理的动画类型 (<code>animation</code> 或是 <code>transition</code>)：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line>Vue.transition(<span class=string>\'bounce\'</span>, {</div><div class=line>  <span class=comment>// 该过渡效果将只侦听 `animationend` 事件</span></div><div class=line>  type: <span class=string>\'animation\'</span></div><div class=line>})</div></pre></td></tr></table></figure><h3 id=->过渡流程详解</h3> <p>当 <code>show</code> 属性改变时，Vue.js 将相应地插入或删除 <code>&lt;div&gt;</code> 元素，按照如下规则改变过渡的 CSS 类名：</p> <ul> <li><p>如果 <code>show</code> 变为 false，Vue.js 将：</p> <ol> <li>调用 <code>beforeLeave</code> 钩子；</li> <li>添加 <code>v-leave</code> 类名到元素上以触发过渡；</li> <li>调用 <code>leave</code> 钩子；</li> <li>等待过渡结束（监听 <code>transitionend</code> 事件）；</li> <li>从 DOM 中删除元素并删除 <code>v-leave</code> 类名；</li> <li>调用 <code>afterLeave</code> 钩子。</li> </ol> </li> <li><p>如果 <code>show</code> 变为 true，Vue.js 将：</p> <ol> <li>调用 <code>beforeEnter</code> 钩子；</li> <li>添加 <code>v-enter</code> 类名到元素上；</li> <li>把它插入 DOM；</li> <li>调用 <code>enter</code> 钩子；</li> <li>强制一次 CSS 布局，让 <code>v-enter</code> 确实生效。然后删除 <code>v-enter</code> 类名，以触发过渡，回到元素的原始状态；</li> <li>等待过渡结束；</li> <li>调用 <code>afterEnter</code> 钩子。</li> </ol> </li> </ul> <p>另外，如果在它的进入过渡还在进行中时删除元素，将调用 <code>enterCancelled</code> 钩子，以清理变动或 <code>enter</code> 创建的计时器。反过来对于离开过渡亦如是。</p> <p>上面所有的钩子函数在调用时，它们的 <code>this</code> 均指向其所属的 Vue 实例。编译规则：过渡在哪个上下文中编译，它的 <code>this</code> 就指向哪个上下文。</p> <p>最后，<code>enter</code> 和 <code>leave</code> 可以有第二个可选的回调参数，用于显式控制过渡如何结束。因此不必等待 CSS <code>transitionend</code> 事件， Vue.js 将等待你手工调用这个回调，以结束过渡。例如：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line>enter: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>  <span class=comment>// 没有第二个参数</span></div><div class=line>  <span class=comment>// 由 CSS transitionend 事件决定过渡何时结束</span></div><div class=line>}</div></pre></td></tr></table></figure><p>vs.</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line>enter: <span class=function><span class=keyword>function</span> (<span class=params>el, done</span>) </span>{</div><div class=line>  <span class=comment>// 有第二个参数</span></div><div class=line>  <span class=comment>// 过渡只有在调用 `done` 时结束</span></div><div class=line>}</div></pre></td></tr></table></figure><p class=tip>当多个元素一起过渡时，Vue.js 会批量处理，只强制一次布局。</p> <h3 id=css->CSS 动画</h3> <p>CSS 动画用法同 CSS 过渡，区别是在动画中 <code>v-enter</code> 类名在节点插入 DOM 后不会立即删除，而是在 <code>animationend</code> 事件触发时删除。</p> <p>示例： (省略了兼容性前缀)</p> <figure class="highlight html"><table><tr><td class=code><pre><div class=line><span class=tag>&lt;<span class=name>span</span> <span class=attr>v-show</span>=<span class=string>"show"</span> <span class=attr>transition</span>=<span class=string>"bounce"</span>&gt;</span>Look at me!<span class=tag>&lt;/<span class=name>span</span>&gt;</span></div></pre></td></tr></table></figure><figure class="highlight css"><table><tr><td class=code><pre><div class=line><span class=selector-class>.bounce-transition</span> {</div><div class=line>  <span class=attribute>display</span>: inline-block; <span class=comment>/* 否则 scale 动画不起作用 */</span></div><div class=line>}</div><div class=line><span class=selector-class>.bounce-enter</span> {</div><div class=line>  <span class=attribute>animation</span>: bounce-in .<span class=number>5s</span>;</div><div class=line>}</div><div class=line><span class=selector-class>.bounce-leave</span> {</div><div class=line>  <span class=attribute>animation</span>: bounce-out .<span class=number>5s</span>;</div><div class=line>}</div><div class=line>@<span class=keyword>keyframes</span> bounce-in {</div><div class=line>  0% {</div><div class=line>    <span class=attribute>transform</span>: <span class=built_in>scale</span>(0);</div><div class=line>  }</div><div class=line>  50% {</div><div class=line>    <span class=attribute>transform</span>: <span class=built_in>scale</span>(1.5);</div><div class=line>  }</div><div class=line>  100% {</div><div class=line>    <span class=attribute>transform</span>: <span class=built_in>scale</span>(1);</div><div class=line>  }</div><div class=line>}</div><div class=line>@<span class=keyword>keyframes</span> bounce-out {</div><div class=line>  0% {</div><div class=line>    <span class=attribute>transform</span>: <span class=built_in>scale</span>(1);</div><div class=line>  }</div><div class=line>  50% {</div><div class=line>    <span class=attribute>transform</span>: <span class=built_in>scale</span>(1.5);</div><div class=line>  }</div><div class=line>  100% {</div><div class=line>    <span class=attribute>transform</span>: <span class=built_in>scale</span>(0);</div><div class=line>  }</div><div class=line>}</div></pre></td></tr></table></figure><div id=anim class=demo> <span v-show=show transition=bounce>Look at me!</span> <br> <button @click="show = !show">Toggle</button> </div> <style>.bounce-transition{display:inline-block}.bounce-enter{-webkit-animation:bounce-in .5s;animation:bounce-in .5s}.bounce-leave{-webkit-animation:bounce-out .5s;animation:bounce-out .5s}@keyframes bounce-in{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes bounce-out{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(0);transform:scale(0)}}@-webkit-keyframes bounce-in{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes bounce-out{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.5);transform:scale(1.5)}100%{-webkit-transform:scale(0);transform:scale(0)}}</style> <script>new Vue({el:"#anim",data:{show:!0}})</script> <h2 id=javascript->JavaScript 过渡</h2> <p>也可以只使用 JavaScript 钩子，不用定义任何 CSS 规则。当只使用 JavaScript 过渡时，<strong><code>enter</code> 和 <code>leave</code> 钩子需要调用 <code>done</code> 回调</strong>，否则它们将被同步调用，过渡将立即结束。</p> <p>为 JavaScript 过渡显式声明 <code>css: false</code> 是个好主意，Vue.js 将跳过 CSS 检测。这样也会阻止无意间让 CSS 规则干扰过渡。</p> <p>在下例中我们使用 jQuery 注册一个自定义的 JavaScript 过渡：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line>Vue.transition(<span class=string>\'fade\'</span>, {</div><div class=line>  css: <span class=literal>false</span>,</div><div class=line>  enter: <span class=function><span class=keyword>function</span> (<span class=params>el, done</span>) </span>{</div><div class=line>    <span class=comment>// 元素已被插入 DOM</span></div><div class=line>    <span class=comment>// 在动画结束后调用 done</span></div><div class=line>    $(el)</div><div class=line>      .css(<span class=string>\'opacity\'</span>, <span class=number>0</span>)</div><div class=line>      .animate({ opacity: <span class=number>1</span> }, <span class=number>1000</span>, done)</div><div class=line>  },</div><div class=line>  enterCancelled: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    $(el).stop()</div><div class=line>  },</div><div class=line>  leave: <span class=function><span class=keyword>function</span> (<span class=params>el, done</span>) </span>{</div><div class=line>    <span class=comment>// 与 enter 相同</span></div><div class=line>    $(el).animate({ opacity: <span class=number>0</span> }, <span class=number>1000</span>, done)</div><div class=line>  },</div><div class=line>  leaveCancelled: <span class=function><span class=keyword>function</span> (<span class=params>el</span>) </span>{</div><div class=line>    $(el).stop()</div><div class=line>  }</div><div class=line>})</div></pre></td></tr></table></figure><p>然后用 <code>transition</code> 特性中：</p> <figure class="highlight html"><table><tr><td class=code><pre><div class=line><span class=tag>&lt;<span class=name>p</span> <span class=attr>transition</span>=<span class=string>"fade"</span>&gt;</span><span class=tag>&lt;/<span class=name>p</span>&gt;</span></div></pre></td></tr></table></figure><h2 id=->渐近过渡</h2> <p><code>transition</code> 与 <code>v-for</code> 一起用时可以创建渐近过渡。给过渡元素添加一个特性 <code>stagger</code>, <code>enter-stagger</code> 或 <code>leave-stagger</code>：</p> <figure class="highlight html"><table><tr><td class=code><pre><div class=line><span class=tag>&lt;<span class=name>div</span> <span class=attr>v-for</span>=<span class=string>"item in list"</span> <span class=attr>transition</span>=<span class=string>"stagger"</span> <span class=attr>stagger</span>=<span class=string>"100"</span>&gt;</span><span class=tag>&lt;/<span class=name>div</span>&gt;</span></div></pre></td></tr></table></figure><p>或者，提供一个钩子 <code>stagger</code>, <code>enter-stagger</code> 或 <code>leave-stagger</code>，以更好的控制：</p> <figure class="highlight js"><table><tr><td class=code><pre><div class=line>Vue.transition(<span class=string>\'stagger\'</span>, {</div><div class=line>  stagger: <span class=function><span class=keyword>function</span> (<span class=params>index</span>) </span>{</div><div class=line>    <span class=comment>// 每个过渡项目增加 50ms 延时</span></div><div class=line>    <span class=comment>// 但是最大延时限制为 300ms</span></div><div class=line>    <span class=keyword>return</span> <span class=built_in>Math</span>.min(<span class=number>300</span>, index * <span class=number>50</span>)</div><div class=line>  }</div><div class=line>})</div></pre></td></tr></table></figure><p>示例：</p> <p><iframe width=100% height=200 style=margin-left:10px src=http://jsfiddle.net/yyx990803/mvo99bse/embedded/result,html,js,css allowfullscreen=allowfullscreen frameborder=0></iframe> </p>'}});