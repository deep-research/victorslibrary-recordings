(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{UQSp:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},m6Yp:function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),r=e("UQSp"),i=e("oCYn");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var a={VueRemarkRoot:r.a},c=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(a).forEach((function(t){"object"===s(a[t])&&"function"==typeof a[t].render||"function"==typeof a[t]&&"function"==typeof a[t].options.render?n[t]=a[t]:e[t]=function(){return a[t]}}))},u=i.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",p={excerpt:null,title:"The Ritual",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,description:"This is an epic song about the dark history of mankind.\n",recordings:[{title:"The Ritual",type:"Recording",style:"Doom Metal",length:"9:13",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Ritual/The+Ritual.mp3"}],lyrics:"Into dark, I was born\nNo redemption from the cold\nAll alone, I walk the earth\nNever to feel pleasure again\n\nThrough all time to the dawn of man\nWhere is fate leading us to\nI cannot see through vast eternity\nBut I know we can’t abandon hope\n\nThrough the ages, man has fought\nWe use weapons to destroy ourselves\nIn troubled times, we don’t concern\nOurselves with others’ suffering\n\nIt’s a crime to think that cruelty\nTowards a brother is so small a thing\nThough we all worship different gods\nWe dwell beneath the same sky\n\nSave me from myself\nI’ve have enough of this\n"};var f=function(t){t.options[l]&&(t.options[l]=p),i.a.util.defineReactive(t.options,l,p),t.options.computed=u.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},h=Object(o.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("VueRemarkRoot",[e("p",[t._v("By: "+t._s(t.$frontmatter.band)+" ("+t._s(t.$frontmatter.authors.join(", "))+")"),e("br"),t._v("\nExplicit: "+t._s(t.$frontmatter.explicit))]),e("h2",{attrs:{id:"description"}},[e("a",{attrs:{href:"#description","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Description")]),e("vue-markdown",[t._v(t._s(t.$frontmatter.description))]),e("h2",{attrs:{id:"recordings"}},[e("a",{attrs:{href:"#recordings","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Recordings")]),e("p",[t._v(t._s(t.$frontmatter.recordings))]),e("h2",{attrs:{id:"lyrics"}},[e("a",{attrs:{href:"#lyrics","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),t._v("Lyrics")]),e("vue-markdown",[t._v(t._s(t.$frontmatter.lyrics))])],1)}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof f&&f(h);n.default=h.exports}}]);