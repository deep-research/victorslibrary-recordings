(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{UQSp:function(t,n,o){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},cPO9:function(t,n,o){"use strict";o.r(n);var e=o("KHd+"),i=o("UQSp"),r=o("oCYn");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var a={VueRemarkRoot:i.a},c=function(t){var n=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(a).forEach((function(t){"object"===s(a[t])&&"function"==typeof a[t].render||"function"==typeof a[t]&&"function"==typeof a[t].options.render?n[t]=a[t]:o[t]=function(){return a[t]}}))},u=r.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",f={excerpt:null,title:"Drawing Down the Moon (The Art of the Cunning)",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,description:"With this soundscape, I took a journey into the secrets of witchcraft. It was recorded with the bassoon and the tin whistle, along with various synthesized tones.\n",recordings:[{title:"Drawing Down the Moon (The Art of the Cunning)",type:"Recording",style:"Electronic",length:"1:48",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Drawing+Down+the+Moon+(The+Art+of+the+Cunning)/Drawing+Down+the+Moon+(The+Art+of+the+Cunning).mp3"}],lyrics:"Instrumental"};var l=function(t){t.options[p]&&(t.options[p]=f),r.a.util.defineReactive(t.options,p,f),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},d=Object(e.a)({},(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("VueRemarkRoot",[o("p",[t._v("By: "+t._s(t.$frontmatter.band)+" ("+t._s(t.$frontmatter.authors.join(", "))+")"),o("br"),t._v("\nExplicit: "+t._s(t.$frontmatter.explicit))]),o("h2",{attrs:{id:"description"}},[o("a",{attrs:{href:"#description","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Description")]),o("vue-markdown",[t._v(t._s(t.$frontmatter.description))]),o("h2",{attrs:{id:"recordings"}},[o("a",{attrs:{href:"#recordings","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Recordings")]),o("p",[t._v(t._s(t.$frontmatter.recordings))]),o("h2",{attrs:{id:"lyrics"}},[o("a",{attrs:{href:"#lyrics","aria-hidden":"true"}},[o("span",{staticClass:"icon icon-link"})]),t._v("Lyrics")]),o("vue-markdown",[t._v(t._s(t.$frontmatter.lyrics))])],1)}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof l&&l(d);n.default=d.exports}}]);