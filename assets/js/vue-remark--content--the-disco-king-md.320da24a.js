(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{"NKX/":function(t,e,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=n("KHd+"),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("By: "+t._s(t.songData.band)+" ("+t._s(t.songData.authors)+")")]),n("div",[t._v("Explicit: "+t._s(t.songData.explicit))]),n("h2",[t._v("Description")]),n("div",[t._v(t._s(t.songData.description))]),n("h2",[t._v("Recordings")]),n("div",[t._v(t._s(t.songData.recordings))]),n("h2",[t._v("Lyrics")]),n("div",[t._v(t._s(t.songData.lyrics))])])}),[],!1,null,null,null);e.a=r.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},tDsc:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),i=n("NKX/"),r=n("UQSp"),s=n("Kw5r");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var a={ReenchantmentSong:i.a,VueRemarkRoot:r.a},u=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(a).forEach((function(t){"object"===c(a[t])&&"function"==typeof a[t].render||"function"==typeof a[t]&&"function"==typeof a[t].options.render?e[t]=a[t]:n[t]=function(){return a[t]}}))},p=s.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",f={excerpt:null,title:"The Disco King",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This is a psychedelic rock jam that exudes pure coolness at every level.\n",recordings:[{title:"The Disco King",type:"Recording",style:"Rock",length:"2:37",released:"November 9 2019",link:"https://victorslibrary.s3.amazonaws.com/music/The+Disco+King/The+Disco+King.mp3"}],lyrics:"Instrumental"};var d=function(t){t.options[l]&&(t.options[l]=f),s.a.util.defineReactive(t.options,l,f),t.options.computed=p.computed({$frontmatter:function(){return t.options[l]}},t.options.computed)},m=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(m),"function"==typeof d&&d(m);e.default=m.exports}}]);