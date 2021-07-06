(function(e){function t(t){for(var i,a,s=t[0],l=t[1],c=t[2],u=0,v=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&v.push(o[a][0]),o[a]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);p&&p(t);while(v.length)v.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},o={app:0},r=[];function a(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"4136de21"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,i){n=o[e]=[t,i]}));t.push(n[2]=i);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=a(e);var c=new Error;r=function(t){l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+i+": "+r+")",c.name="ChunkLoadError",c.type=i,c.request=r,n[1](c)}o[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:l})}),12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=c;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("85ec"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("nav",{staticClass:"main-nav"},[n("router-link",{attrs:{to:"/"}},[e._v("About")]),n("router-link",{attrs:{to:"/work"}},[e._v("Work")])],1),n("router-view"),n("Footer")],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("h1",[e._v("David Colacilli")]),n("p",[e._v("UX designer / UI Developer")])])}],a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[n("h2",[e._v("Contact")]),n("nav",[n("a",{attrs:{href:"https://www.linkedin.com/in/david-colacilli/"}},[e._v("LinkedIn")]),n("a",{attrs:{href:"https://www.behance.net/david-colacilli"}},[e._v("Behance")]),n("a",{attrs:{href:"mailto:davidcolacilli@gmail.com"}},[e._v("Mail")])])])}],l=(n("85be"),n("2877")),c={},u=Object(l["a"])(c,a,s,!1,null,"7823add7",null),p=u.exports,v={name:"App",components:{Footer:p}},d=v,f=(n("034f"),Object(l["a"])(d,o,r,!1,null,null,null)),h=f.exports,m=(n("d3b7"),n("8c4f")),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content-wrapper"},[n("article",{staticClass:"content"},[n("h2",[e._v("UX Design")]),n("section",[n("h3",[e._v("Benchmarking Tool")]),n("h4",[e._v("UX Designer in a project involving redesign of a benchmarking web application (January 2019 - June 2020)")]),n("p",[e._v("The client offers many products/services in the benchmarking industry, which is the automation of the process of data gathering resulting in significant metrics. The main purpose is to identify solutions to close performance gaps and jumpstart improvement in different industries. ")]),n("p",[e._v("The application serves as a great tool not only to evaluate internal metrics but also to compare performance between different companies in the same industry. ")]),n("div",{staticClass:"additional-info"},[n("h5",[e._v("Tasks")]),n("ul",[n("li",[e._v("Understand and analyze the business’ goals and requirements")]),n("li",[e._v("Detect issues in current app ")]),n("li",[e._v("Provide design solutions ")]),n("li",[e._v("Test and discuss with the Dev Team and Product Owner ")]),n("li",[e._v("Provide support to the Dev Team during the implementation of each section ")]),n("li",[e._v("Work with Agile methodology (Scrum)")])]),n("h5",[e._v("Tools")]),n("p",[e._v("Figma, InVision, Whimsical.")])])]),n("section",[n("h3",[e._v("Librarian's App")]),n("h4",[e._v("UX Designer and frontend developer in a project involving redesign and development of a long list management tool (August 2017 - December 2018)")]),n("p",[e._v("The Client is the engine behind a network of important organizations and initiatives. It aims to improve our planet through catalytic philanthropy, inspirational experiences, and scientific and technological breakthroughs.")]),n("p",[e._v("The project consisted of the redesign of an internal tool for the creation of playlists and the management of big amounts of recordings.")]),n("div",{staticClass:"additional-info"},[n("h5",[e._v("Tasks")]),n("p",[e._v("UI, UX, Frontend tasks, including:")]),n("ul",[n("li",[e._v("UX for complex/uncommon components")]),n("li",[e._v("Building new components in Angular")]),n("li",[e._v("Styling (Less CSS)")]),n("li",[e._v("Bug fixing")]),n("li",[e._v("solve reported bugs")]),n("li",[e._v("participate in estimation process")]),n("li",[e._v("participate in demos for stakeholders")]),n("li",[e._v("working with Agile methodology (Scrum)")])]),n("h5",[e._v("Tools")]),n("p",[e._v("Angular, HTML, CSS, Moqups.")])])])]),n("article",{staticClass:"content"},[n("h2",[e._v("Web UI Development")]),n("section",[n("h3",[e._v("iOS WebApps")]),n("h4",[e._v("UI Developer in a project involving team management and web ui development for various applications and websites (November 2015 – July 2017)")]),n("p",[e._v('The client is a pharmaceutical marketing agency, with 15+ years of pharma experience, a variety of integrated products and services, industry expertise and leadership, and a "start digital" philosophy.')]),n("div",{staticClass:"additional-info"},[n("h5",[e._v("Tasks")]),n("ul",[n("li",[e._v("Web UI development")]),n("li",[e._v("Direct communication with diverse Product Owners within the client’s company")]),n("li",[e._v("Coordination of multiple tasks amog a small team")]),n("li",[e._v("Providing support to the Dev Team")]),n("li",[e._v("Technical interviews for new hires")])]),n("h5",[e._v("Tools")]),n("p",[e._v("HTML, CSS, jQuery, Javascript, Visual Studio, TFS, Adobe Photoshop, Sketch")])])])])])}],b=(n("7291"),{}),w=Object(l["a"])(b,g,_,!1,null,"00732398",null),y=w.exports;i["a"].use(m["a"]);var k=[{path:"/",base:"/",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/work",name:"Work",component:y}],T=new m["a"]({routes:k}),j=T,S=n("2f62");i["a"].use(S["a"]);var C=new S["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:j,store:C,render:function(e){return e(h)}}).$mount("#app")},7291:function(e,t,n){"use strict";var i=n("ca54"),o=n.n(i);o.a},8096:function(e,t,n){},"85be":function(e,t,n){"use strict";var i=n("8096"),o=n.n(i);o.a},"85ec":function(e,t,n){},ca54:function(e,t,n){}});
//# sourceMappingURL=app.1d6ba046.js.map