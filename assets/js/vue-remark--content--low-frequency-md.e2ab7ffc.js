(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"NKX/":function(t,n,e){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=e("KHd+"),r=Object(i.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v("By: "+t._s(t.songData.band)+" ("+t._s(t.songData.authors)+")")]),e("div",[t._v("Explicit: "+t._s(t.songData.explicit))]),e("h2",[t._v("Description")]),e("div",[t._v(t._s(t.songData.description))]),e("h2",[t._v("Recordings")]),e("div",[t._v(t._s(t.songData.recordings))]),e("h2",[t._v("Lyrics")]),e("div",[t._v(t._s(t.songData.lyrics))])])}),[],!1,null,null,null);n.a=r.exports},UQSp:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},"gx/W":function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),i=e("NKX/"),r=e("UQSp"),s=e("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:r.a},u=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===a(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?n[t]=c[t]:e[t]=function(){return c[t]}}))},p=s.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",f={excerpt:null,title:"Low Frequency",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"*Prepare yourself for an evil sound exploration that is certain to trigger both insanity and enlightenment!*\n\nAlan Moore has discussed the alchemical principals of solve and coagula in his speeches on magic. These concepts would be referred to as analysis and synthesis today. This sound exploration was created at a time when Victor was primarily interested in the possibilities of analytical thought. It is meant for playing in the background during ritual work.\n\nPlease note: This recording is currently not available but can be provided upon request.\n",lyrics:"Instrumental"};var d=function(t){t.options[l]&&(t.options[l]=f),s.a.util.defineReactive(t.options,l,f),t.options.computed=p.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},y=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("VueRemarkRoot",[n("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(y),"function"==typeof d&&d(y);n.default=y.exports}}]);