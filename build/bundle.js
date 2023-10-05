var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function s(e){e.forEach(t)}function a(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function r(e){e.parentNode.removeChild(e)}function c(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function m(){return d(" ")}function f(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}let p;function h(e){p=e}const g=[],v=[],b=[],$=[],y=Promise.resolve();let w=!1;function k(e){b.push(e)}const x=new Set;let j=0;function q(){const e=p;do{for(;j<g.length;){const e=g[j];j++,h(e),I(e.$$)}for(h(null),g.length=0,j=0;v.length;)v.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];x.has(t)||(x.add(t),t())}b.length=0}while(g.length);for(;$.length;)$.pop()();w=!1,x.clear(),h(e)}function I(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(k)}}const _=new Set;function A(e,t){e&&e.i&&(_.delete(e),e.i(t))}function L(e,t,n,s){if(e&&e.o){if(_.has(e))return;_.add(e),undefined.c.push((()=>{_.delete(e),s&&(n&&e.d(1),s())})),e.o(t)}}function S(e){e&&e.c()}function F(e,n,i,o){const{fragment:l,on_mount:r,on_destroy:c,after_update:u}=e.$$;l&&l.m(n,i),o||k((()=>{const n=r.map(t).filter(a);c?c.push(...n):s(n),e.$$.on_mount=[]})),u.forEach(k)}function M(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function T(e,t){-1===e.$$.dirty[0]&&(g.push(e),w||(w=!0,y.then(q)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function O(t,a,i,o,l,c,u,d=[-1]){const m=p;h(t);const f=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(a.context||(m?m.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:a.target||m.$$.root};u&&u(f.root);let g=!1;if(f.ctx=i?i(t,a.props||{},((e,n,...s)=>{const a=s.length?s[0]:n;return f.ctx&&l(f.ctx[e],f.ctx[e]=a)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](a),g&&T(t,e)),n})):[],f.update(),g=!0,s(f.before_update),f.fragment=!!o&&o(f.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);f.fragment&&f.fragment.l(e),e.forEach(r)}else f.fragment&&f.fragment.c();a.intro&&A(t.$$.fragment),F(t,a.target,a.anchor,a.customElement),q()}h(m)}class P{$destroy(){M(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function C(t){let n;return{c(){n=u("div"),n.innerHTML='<p>This page is made with\n        <a href="https://svelte.dev/" class="svelte-12jqusv">Svelte</a></p>',f(n,"class","svelte-12jqusv")},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&r(n)}}}class E extends P{constructor(e){super(),O(this,e,null,C,i,{})}}function H(t){let n;return{c(){n=u("header"),n.innerHTML='<h1 class="title thin svelte-zqinvi">Hi I&#39;m</h1> \n    <h1 class="title svelte-zqinvi">Santiago Farall</h1> \n\n    <h2 class="subtitle svelte-zqinvi">A Software Developer from Uruguay</h2>',f(n,"class","svelte-zqinvi")},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&r(n)}}}class N extends P{constructor(e){super(),O(this,e,null,H,i,{})}}function G(t){let n;return{c(){n=u("article"),n.innerHTML='<h1 class="title svelte-axr9qs">A brief Biography</h1> \n    <h3 class="text svelte-axr9qs">I was born in Paysandú in the 2001, from my childhood I showed some interests in computers and electronics, possibly instilled by my uncle. \n        At the age of 8 (or 9, I don&#39;t remember) I started to write little programs in Python and games in Scratch. \n        And at 14, I made my &quot;biggest&quot; project at that moment, a little 2D clone of Minecraft written in Java with LWJGL and OpenGL 2.1, \n        a couple of years later I started to write more complex programs, some OS developing, Android apps and web pages.\n        Now I&#39;m 21, I&#39;m studying at UTEC university in Fray Bentos and started to look a first job to gain more experience.</h3>',f(n,"class","svelte-axr9qs")},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&r(n)}}}class W extends P{constructor(e){super(),O(this,e,null,G,i,{})}}function B(t){let n;return{c(){n=u("article"),n.innerHTML='<h1 class="title svelte-aa7m5b">Software and Technologies</h1> \n    <h3 class="text svelte-aa7m5b">From my starts to today I used and learned a lot of tools and programming languages, some of these are listed in the images below</h3> \n\n    <div class="text svelte-aa7m5b" id="logos"><i class="devicon-cplusplus-plain-wordmark svelte-aa7m5b"></i> \n        <i class="devicon-c-plain-wordmark svelte-aa7m5b"></i> \n        <i class="devicon-csharp-plain-wordmark svelte-aa7m5b"></i> \n\n        \n        <i class="devicon-html5-plain-wordmark svelte-aa7m5b"></i> \n        <i class="devicon-css3-plain-wordmark svelte-aa7m5b"></i> \n        <i class="devicon-javascript-plain svelte-aa7m5b"></i> \n\n        \n        \n        \n        <i class="devicon-typescript-plain svelte-aa7m5b"></i> \n        <i class="devicon-react-original-wordmark svelte-aa7m5b"></i> \n        <i class="devicon-svelte-plain svelte-aa7m5b"></i> \n\n        \n        <i class="devicon-java-plain svelte-aa7m5b"></i> \n        <i class="devicon-kotlin-plain svelte-aa7m5b"></i> \n        <i class="devicon-android-plain svelte-aa7m5b"></i> \n\n        \n        <i class="devicon-postgresql-plain svelte-aa7m5b"></i> \n        <i class="devicon-mongodb-plain-wordmark svelte-aa7m5b"></i> \n\n        \n        <i class="devicon-python-plain svelte-aa7m5b"></i> \n        <i class="devicon-git-plain svelte-aa7m5b"></i> \n        <i class="devicon-docker-plain svelte-aa7m5b"></i> \n        <i class="devicon-rust-plain svelte-aa7m5b"></i>  \n        <i class="devicon-opengl-plain svelte-aa7m5b"></i> \n        <i class="devicon-godot-plain svelte-aa7m5b"></i> \n        <i class="devicon-unity-original svelte-aa7m5b"></i> \n        <i class="devicon-linux-plain svelte-aa7m5b"></i></div>',f(n,"class","svelte-aa7m5b")},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&r(n)}}}class J extends P{constructor(e){super(),O(this,e,null,B,i,{})}}function z(e,t,n){const s=e.slice();return s[1]=t[n],s}function D(t){let n,s,a,i,c,p,h,g,v,b=t[1].title+"",$=t[1].desc+"";return{c(){n=u("div"),s=u("h3"),a=u("a"),i=d(b),p=m(),h=u("h3"),g=d($),v=m(),f(a,"href",c=t[1].link),f(a,"class","svelte-11jgfun"),f(s,"class","project_title svelte-11jgfun"),f(h,"class","project_desc svelte-11jgfun"),f(n,"class","project svelte-11jgfun")},m(e,t){l(e,n,t),o(n,s),o(s,a),o(a,i),o(n,p),o(n,h),o(h,g),o(n,v)},p:e,d(e){e&&r(n)}}}function U(t){let n,s,a,i,d,p,h=t[0],g=[];for(let e=0;e<h.length;e+=1)g[e]=D(z(t,h,e));return{c(){n=u("article"),s=u("h1"),s.textContent="Projects",a=m(),i=u("h3"),i.textContent="Actually I only have one public project in my GitHub account, mostly beacause I never uploaded, finished,\r\n        have sensible date or are in my old GitLab account, or simply I don't like the final state of it. \r\n        Anyways, this is my (actual) list of public projects:",d=m(),p=u("div");for(let e=0;e<g.length;e+=1)g[e].c();f(s,"class","title svelte-11jgfun"),f(i,"class","text svelte-11jgfun"),f(p,"id","projects"),f(p,"class","svelte-11jgfun"),f(n,"class","svelte-11jgfun")},m(e,t){l(e,n,t),o(n,s),o(n,a),o(n,i),o(n,d),o(n,p);for(let e=0;e<g.length;e+=1)g[e].m(p,null)},p(e,[t]){if(1&t){let n;for(h=e[0],n=0;n<h.length;n+=1){const s=z(e,h,n);g[n]?g[n].p(s,t):(g[n]=D(s),g[n].c(),g[n].m(p,null))}for(;n<g.length;n+=1)g[n].d(1);g.length=h.length}},i:e,o:e,d(e){e&&r(n),c(g,e)}}}function K(e){return[[{title:"KOPMod",link:"https://github.com/elsantiF/KOPMod",desc:"As a rocket fan, when Kerbal Space Program 2 was launched I immediately buy it, but the game had a poor performance.\n                So I wrote this little mod to slightly increase the performance, and surprisingly it worked, some people went from 8 FPS to 20.\n                As new patches are released to the game, the performance is getting better, so I suspend the development of the mod for a while.\n                I made the mod in 48 hours after the release of the game, so isn't well programmed, but works."},{title:"TeLoFunca",link:"https://github.com/elsantiF/TeLoFunca",desc:'TeLoFunca was our end-of-year project during the second year of high school. It\'s essentially a copy of Can You RUN It, \n                and the name is a play on words with "funcar," which means "works well" in Spanish (at least in Uruguay).\n                We couldn\'t use any database, so the data is in multiple JSON files. \n                Additionally, it incorporates a (mini)template system. I plan to upload it to this page in the future.'},{title:"Quads",link:"https://github.com/elsantiF/Quads",desc:"It was my first attempt to make a videogame, a 2D Minecraft clone written in Java and LWJGL2\n                (is the same project that is mentioned in the biography). I was 14 years old at the time when I worked on it, so it is a very special project for me.\n                Nowadays I can't compile it anymore but I plan to update it only to leave it working."}]]}class Q extends P{constructor(e){super(),O(this,e,K,U,i,{})}}function Y(e,t,n){const s=e.slice();return s[1]=t[n],s}function R(t){let n,s,a,i,c,p,h,g=t[1].question+"",v=t[1].answer+"";return{c(){n=u("div"),s=u("h3"),a=d(g),i=m(),c=u("h3"),p=d(v),h=m(),f(s,"class","question svelte-ds1qgb"),f(c,"class","answer svelte-ds1qgb")},m(e,t){l(e,n,t),o(n,s),o(s,a),o(n,i),o(n,c),o(c,p),o(n,h)},p:e,d(e){e&&r(n)}}}function X(t){let n,s,a,i,d=t[0],p=[];for(let e=0;e<d.length;e+=1)p[e]=R(Y(t,d,e));return{c(){n=u("article"),s=u("h1"),s.textContent="F.A.Q",a=m(),i=u("h3");for(let e=0;e<p.length;e+=1)p[e].c();f(s,"class","title svelte-ds1qgb"),f(i,"class","text svelte-ds1qgb"),f(n,"class","svelte-ds1qgb")},m(e,t){l(e,n,t),o(n,s),o(n,a),o(n,i);for(let e=0;e<p.length;e+=1)p[e].m(i,null)},p(e,[t]){if(1&t){let n;for(d=e[0],n=0;n<d.length;n+=1){const s=Y(e,d,n);p[n]?p[n].p(s,t):(p[n]=R(s),p[n].c(),p[n].m(i,null))}for(;n<p.length;n+=1)p[n].d(1);p.length=d.length}},i:e,o:e,d(e){e&&r(n),c(p,e)}}}function V(e){return[[{question:"Are you looking for a job",answer:"Yes"},{question:"What is your level of English",answer:"Between B2 and C1"},{question:"Any hobbies",answer:"Music, videogames, electronics and rockets"},{question:"Are you studing",answer:"Yes but I'm in a pause because administrative and personal things"},{question:"Do you want to participate in a X project",answer:"Probably yes"},{question:"What OS you use",answer:"Winodws 11 and Manjaro"}]]}class Z extends P{constructor(e){super(),O(this,e,V,X,i,{})}}function ee(t){let n;return{c(){n=u("div"),n.innerHTML='<a href="https://www.linkedin.com/in/santiago-farall-moncecchi/" target="_blank" class="svelte-pf6pu8"><i class="devicon-linkedin-plain"></i>\n        Linkedin</a> \n\n    <a href="https://github.com/elsantiF/" target="_blank" class="svelte-pf6pu8"><i class="devicon-github-original"></i>\n        GitHub</a>',f(n,"class","svelte-pf6pu8")},m(e,t){l(e,n,t)},p:e,i:e,o:e,d(e){e&&r(n)}}}class te extends P{constructor(e){super(),O(this,e,null,ee,i,{})}}function ne(t){let n,s,a,i,c,d,f,p,h,g,v,b,$,y,w;return s=new E({}),i=new N({}),d=new W({}),p=new J({}),g=new Q({}),b=new Z({}),y=new te({}),{c(){n=u("main"),S(s.$$.fragment),a=m(),S(i.$$.fragment),c=m(),S(d.$$.fragment),f=m(),S(p.$$.fragment),h=m(),S(g.$$.fragment),v=m(),S(b.$$.fragment),$=m(),S(y.$$.fragment)},m(e,t){l(e,n,t),F(s,n,null),o(n,a),F(i,n,null),o(n,c),F(d,n,null),o(n,f),F(p,n,null),o(n,h),F(g,n,null),o(n,v),F(b,n,null),o(n,$),F(y,n,null),w=!0},p:e,i(e){w||(A(s.$$.fragment,e),A(i.$$.fragment,e),A(d.$$.fragment,e),A(p.$$.fragment,e),A(g.$$.fragment,e),A(b.$$.fragment,e),A(y.$$.fragment,e),w=!0)},o(e){L(s.$$.fragment,e),L(i.$$.fragment,e),L(d.$$.fragment,e),L(p.$$.fragment,e),L(g.$$.fragment,e),L(b.$$.fragment,e),L(y.$$.fragment,e),w=!1},d(e){e&&r(n),M(s),M(i),M(d),M(p),M(g),M(b),M(y)}}}return new class extends P{constructor(e){super(),O(this,e,null,ne,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
