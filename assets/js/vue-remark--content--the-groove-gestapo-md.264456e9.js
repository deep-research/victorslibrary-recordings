(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{UQSp:function(t,o,e){"use strict";o.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},qxSQ:function(t,o,e){"use strict";e.r(o);var n=e("KHd+"),r=e("UQSp"),i=e("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var a={VueRemarkRoot:r.a},c=function(t){var o=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(a).forEach((function(t){"object"===s(a[t])&&"function"==typeof a[t].render||"function"==typeof a[t]&&"function"==typeof a[t].options.render?o[t]=a[t]:e[t]=function(){return a[t]}}))},p=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",l={excerpt:null,title:"The Groove Gestapo",band:"Reenchantment",authors:["Victor Fisher"],type:"Song",explicit:!1,description:"This song was channeled from a strange dimension where I was a [glam rock](https://en.wikipedia.org/wiki/Glam_rock) guitarist during the 1970s.",recordings:[{title:"The Groove Gestapo",type:"Recording",style:"Electronic",length:"2:55",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Groove+Gestapo/The+Groove+Gestapo.mp3"}],lyrics:"Groove Gestapo house raid:\n> This is the Groove Gestapo\n> Open up the door\n> Are you grooving in there?\n"};var f=function(t){t.options[u]&&(t.options[u]=l),i.a.util.defineReactive(t.options,u,l),t.options.computed=p.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},d=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("VueRemarkRoot",[e("p",[t._v("By: "+t._s(t.$frontmatter.band)+" ("+t._s(t.$frontmatter.authors)+")"),e("br"),t._v("\nExplicit: "+t._s(t.$frontmatter.explicit))]),e("h2",{attrs:{id:"description"}},[e("a",{attrs:{href:"#description","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Description")]),e("p",[t._v(t._s(t.$frontmatter.description))]),e("h2",{attrs:{id:"recordings"}},[e("a",{attrs:{href:"#recordings","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Recordings")]),e("p",[t._v(t._s(t.$frontmatter.recordings))]),e("h2",{attrs:{id:"lyrics"}},[e("a",{attrs:{href:"#lyrics","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Lyrics")]),e("p",[t._v(t._s(t.$frontmatter.lyrics))])])}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof f&&f(d);o.default=d.exports}}]);