(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{Jt0S:function(e,t,o){"use strict";o.r(t);var i=o("KHd+"),n=o("zYve"),r=o("UQSp"),a=o("Kw5r");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var u={ArticleHeader:n.a,VueRemarkRoot:r.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(u).forEach((function(e){"object"===l(u[e])&&"function"==typeof u[e].render||"function"==typeof u[e]&&"function"==typeof u[e].options.render?t[e]=u[e]:o[e]=function(){return u[e]}}))},s=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",v={excerpt:null,title:"Victor's Favorite Bands",author:"Victor Fisher",published:"2019-09-23",updated:"2021-09-07"};var f=function(e){e.options[p]&&(e.options[p]=v),a.a.util.defineReactive(e.options,p,v),e.options.computed=s.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},_=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("ArticleHeader",{attrs:{articleData:e.$frontmatter}}),o("p",[e._v("These are some of my favorite bands:")]),o("ul",[o("li",[e._v("ABBA")]),o("li",[e._v("AC/DC")]),o("li",[e._v("Aerosmith")]),o("li",[e._v("Airbourne")]),o("li",[e._v("Black Sabbath")]),o("li",[e._v("Cage the Elephant")]),o("li",[e._v("Creedence Clearwater Revival")]),o("li",[e._v("Electric Wizard")]),o("li",[e._v("Fu Manchu")]),o("li",[e._v("Grateful Dead")]),o("li",[e._v("Green Day")]),o("li",[e._v("KT Tunstall")]),o("li",[e._v("Kvelertak")]),o("li",[e._v("Kyuss")]),o("li",[e._v("Led Zeppelin")]),o("li",[e._v("MGMT")]),o("li",[e._v("Nirvana")]),o("li",[e._v("Queen")]),o("li",[e._v("Queens of the Stone Age")]),o("li",[e._v("Ride")]),o("li",[e._v("Salt")]),o("li",[e._v("Simon & Garfunkel")]),o("li",[e._v("Smashing Pumpkins")]),o("li",[e._v("Steppenwolf")]),o("li",[e._v("The Beatles")]),o("li",[e._v("The Brian Jonestown Massacre")]),o("li",[e._v("The Dandy Warhols")]),o("li",[e._v("The Foo Fighters")]),o("li",[e._v("The Vines")]),o("li",[e._v("Weezer")]),o("li",[e._v("Wolfmother")]),o("li",[e._v("ZZ Top")])])],1)}),[],!1,null,null,null);"function"==typeof c&&c(_),"function"==typeof f&&f(_);t.default=_.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},zYve:function(e,t,o){"use strict";var i={props:{articleData:{type:Object,required:!0}}},n=o("KHd+"),r=Object(n.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e.articleData.author?o("div",[e._v("Author: "+e._s(e.articleData.author))]):e._e(),e.articleData.published?o("div",[e._v("Published: "+e._s(e.articleData.published))]):e._e(),e.articleData.updated?o("div",[e._v("Updated: "+e._s(e.articleData.updated))]):e._e()])}),[],!1,null,null,null);t.a=r.exports}}]);