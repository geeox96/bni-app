(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ea2694e0"],{"014b":function(t,e,n){"use strict";var r=n("e53d"),i=n("07e3"),o=n("8e60"),a=n("63b6"),c=n("9138"),f=n("ebfd").KEY,u=n("294c"),s=n("dbdb"),l=n("45f2"),b=n("62a0"),p=n("5168"),d=n("ccb9"),y=n("6718"),v=n("47ee"),h=n("9003"),g=n("e4ae"),m=n("f772"),O=n("36c3"),w=n("1bc3"),x=n("aebd"),S=n("a159"),j=n("0395"),P=n("bf0b"),E=n("d9f6"),_=n("c3a1"),k=P.f,F=E.f,N=j.f,A=r.Symbol,C=r.JSON,D=C&&C.stringify,J="prototype",I=p("_hidden"),T=p("toPrimitive"),V={}.propertyIsEnumerable,K=s("symbol-registry"),M=s("symbols"),W=s("op-symbols"),q=Object[J],z="function"==typeof A,Y=r.QObject,G=!Y||!Y[J]||!Y[J].findChild,L=o&&u(function(){return 7!=S(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=k(q,e);r&&delete q[e],F(t,e,n),r&&t!==q&&F(q,e,r)}:F,Q=function(t){var e=M[t]=S(A[J]);return e._k=t,e},$=z&&"symbol"==typeof A.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof A},B=function(t,e,n){return t===q&&B(W,e,n),g(t),e=w(e,!0),g(n),i(M,e)?(n.enumerable?(i(t,I)&&t[I][e]&&(t[I][e]=!1),n=S(n,{enumerable:x(0,!1)})):(i(t,I)||F(t,I,x(1,{})),t[I][e]=!0),L(t,e,n)):F(t,e,n)},H=function(t,e){g(t);var n,r=v(e=O(e)),i=0,o=r.length;while(o>i)B(t,n=r[i++],e[n]);return t},R=function(t,e){return void 0===e?S(t):H(S(t),e)},U=function(t){var e=V.call(this,t=w(t,!0));return!(this===q&&i(M,t)&&!i(W,t))&&(!(e||!i(this,t)||!i(M,t)||i(this,I)&&this[I][t])||e)},X=function(t,e){if(t=O(t),e=w(e,!0),t!==q||!i(M,e)||i(W,e)){var n=k(t,e);return!n||!i(M,e)||i(t,I)&&t[I][e]||(n.enumerable=!0),n}},Z=function(t){var e,n=N(O(t)),r=[],o=0;while(n.length>o)i(M,e=n[o++])||e==I||e==f||r.push(e);return r},tt=function(t){var e,n=t===q,r=N(n?W:O(t)),o=[],a=0;while(r.length>a)!i(M,e=r[a++])||n&&!i(q,e)||o.push(M[e]);return o};z||(A=function(){if(this instanceof A)throw TypeError("Symbol is not a constructor!");var t=b(arguments.length>0?arguments[0]:void 0),e=function(n){this===q&&e.call(W,n),i(this,I)&&i(this[I],t)&&(this[I][t]=!1),L(this,t,x(1,n))};return o&&G&&L(q,t,{configurable:!0,set:e}),Q(t)},c(A[J],"toString",function(){return this._k}),P.f=X,E.f=B,n("6abf").f=j.f=Z,n("355d").f=U,n("9aa9").f=tt,o&&!n("b8e3")&&c(q,"propertyIsEnumerable",U,!0),d.f=function(t){return Q(p(t))}),a(a.G+a.W+a.F*!z,{Symbol:A});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),nt=0;et.length>nt;)p(et[nt++]);for(var rt=_(p.store),it=0;rt.length>it;)y(rt[it++]);a(a.S+a.F*!z,"Symbol",{for:function(t){return i(K,t+="")?K[t]:K[t]=A(t)},keyFor:function(t){if(!$(t))throw TypeError(t+" is not a symbol!");for(var e in K)if(K[e]===t)return e},useSetter:function(){G=!0},useSimple:function(){G=!1}}),a(a.S+a.F*!z,"Object",{create:R,defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:tt}),C&&a(a.S+a.F*(!z||u(function(){var t=A();return"[null]"!=D([t])||"{}"!=D({a:t})||"{}"!=D(Object(t))})),"JSON",{stringify:function(t){var e,n,r=[t],i=1;while(arguments.length>i)r.push(arguments[i++]);if(n=e=r[1],(m(e)||void 0!==t)&&!$(t))return h(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!$(e))return e}),r[1]=e,D.apply(C,r)}}),A[J][T]||n("35e8")(A[J],T,A[J].valueOf),l(A,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},"0395":function(t,e,n){var r=n("36c3"),i=n("6abf").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?c(t):i(r(t))}},"0e8f":function(t,e,n){"use strict";n("db6d");var r=n("e8f2");e["a"]=Object(r["a"])("flex")},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var r=n("241e"),i=n("c3a1");n("ce7e")("keys",function(){return function(t){return i(r(t))}})},"355d":function(t,e){e.f={}.propertyIsEnumerable},"454f":function(t,e,n){n("46a7");var r=n("584a").Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},"46a7":function(t,e,n){var r=n("63b6");r(r.S+r.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"47ee":function(t,e,n){var r=n("c3a1"),i=n("9aa9"),o=n("355d");t.exports=function(t){var e=r(t),n=i.f;if(n){var a,c=n(t),f=o.f,u=0;while(c.length>u)f.call(t,a=c[u++])&&e.push(a)}return e}},6718:function(t,e,n){var r=n("e53d"),i=n("584a"),o=n("b8e3"),a=n("ccb9"),c=n("d9f6").f;t.exports=function(t){var e=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||c(e,t,{value:a.f(t)})}},"6abf":function(t,e,n){var r=n("e6f3"),i=n("1691").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"85f2":function(t,e,n){t.exports=n("454f")},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},9003:function(t,e,n){var r=n("6b4c");t.exports=Array.isArray||function(t){return"Array"==r(t)}},"9aa9":function(t,e){e.f=Object.getOwnPropertySymbols},a4bb:function(t,e,n){t.exports=n("8aae")},bf0b:function(t,e,n){var r=n("355d"),i=n("aebd"),o=n("36c3"),a=n("1bc3"),c=n("07e3"),f=n("794b"),u=Object.getOwnPropertyDescriptor;e.f=n("8e60")?u:function(t,e){if(t=o(t),e=a(e,!0),f)try{return u(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},bf90:function(t,e,n){var r=n("36c3"),i=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return i(r(t),e)}})},ccb9:function(t,e,n){e.f=n("5168")},ce7e:function(t,e,n){var r=n("63b6"),i=n("584a"),o=n("294c");t.exports=function(t,e){var n=(i.Object||{})[t]||Object[t],a={};a[t]=e(n),r(r.S+r.F*o(function(){n(1)}),"Object",a)}},cebc:function(t,e,n){"use strict";var r=n("268f"),i=n.n(r),o=n("e265"),a=n.n(o),c=n("a4bb"),f=n.n(c),u=n("85f2"),s=n.n(u);function l(t,e,n){return e in t?s()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=f()(n);"function"===typeof a.a&&(r=r.concat(a()(n).filter(function(t){return i()(n,t).enumerable}))),r.forEach(function(e){l(t,e,n[e])})}return t}n.d(e,"a",function(){return b})},e265:function(t,e,n){t.exports=n("ed33")},ebfd:function(t,e,n){var r=n("62a0")("meta"),i=n("f772"),o=n("07e3"),a=n("d9f6").f,c=0,f=Object.isExtensible||function(){return!0},u=!n("294c")(function(){return f(Object.preventExtensions({}))}),s=function(t){a(t,r,{value:{i:"O"+ ++c,w:{}}})},l=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!f(t))return"F";if(!e)return"E";s(t)}return t[r].i},b=function(t,e){if(!o(t,r)){if(!f(t))return!0;if(!e)return!1;s(t)}return t[r].w},p=function(t){return u&&d.NEED&&f(t)&&!o(t,r)&&s(t),t},d=t.exports={KEY:r,NEED:!1,fastKey:l,getWeak:b,onFreeze:p}},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},f5bd:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xl":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[t._t("default")],2),t._l(t.paginatedArticles,function(e,r){return n("feed-card",{key:e.title,attrs:{size:t.layout[r],value:e}})})],2),n("v-layout",{attrs:{"align-center":""}},[n("v-flex",{attrs:{xs3:""}},[1!==t.page?n("base-btn",{staticClass:"ml-0",attrs:{title:"Previous page",square:""},on:{click:function(e){t.page--}}},[n("v-icon",[t._v("mdi-chevron-left")])],1):t._e()],1),n("v-flex",{attrs:{xs6:"","text-xs-center":"",subheading:""}},[t._v("\n      Pagina "+t._s(t.page)+" de "+t._s(t.pages)+"\n    ")]),n("v-flex",{attrs:{xs3:"","text-xs-right":""}},[t.pages>1&&t.page<t.pages?n("base-btn",{staticClass:"mr-0",attrs:{title:"Next page",square:""},on:{click:function(e){t.page++}}},[n("v-icon",[t._v("mdi-chevron-right")])],1):t._e()],1)],1)],1)},i=[],o=n("cebc"),a=(n("cadf"),n("551c"),n("097d"),n("2f62")),c={name:"Feed",components:{FeedCard:function(){return n.e("chunk-d6081dac").then(n.bind(null,"eb3a"))}},data:function(){return{layout:[6,6,6,6,6,6,6,6,6,6,6],page:1}},computed:Object(o["a"])({},Object(a["d"])(["articles"]),{pages:function(){return Math.ceil(this.articles.length/11)},paginatedArticles:function(){var t=11*(this.page-1),e=11*this.page;return this.articles.slice(t,e)}}),watch:{page:function(){window.scrollTo(0,0)}}},f=c,u=n("2877"),s=n("6544"),l=n.n(s),b=n("a523"),p=n("0e8f"),d=n("132d"),y=n("a722"),v=Object(u["a"])(f,r,i,!1,null,null,null);e["default"]=v.exports;l()(v,{VContainer:b["a"],VFlex:p["a"],VIcon:d["a"],VLayout:y["a"]})},fde4:function(t,e,n){n("bf90");var r=n("584a").Object;t.exports=function(t,e){return r.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-ea2694e0.f3b6e486.js.map