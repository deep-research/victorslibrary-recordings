(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"NKX/":function(t,o,n){"use strict";var e={props:{songData:{type:Object,required:!0}}},i=n("KHd+"),r=Object(i.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[t.songData.band?n("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?n("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):n("div",[t.songData.authors?n("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.explicit?n("div",[t._v("\n    Explicit: "+t._s(t.songData.explicit)+"\n  ")]):t._e(),t.songData.description?n("div",[n("h2",[t._v("Description")]),n("div",[t._v(t._s(t.songData.description))])]):t._e(),t.songData.recordings?n("div",[n("h2",[t._v("Recordings")]),t._l(t.songData.recordings,(function(o,e){return n("div",{key:e},[o.title?n("h3",[t._v(t._s(e+1)+". "+t._s(o.title))]):t._e(),o.type?n("div",[t._v("Type: "+t._s(o.type))]):t._e(),o.style?n("div",[t._v("Style: "+t._s(o.style))]):t._e(),o.released?n("div",[t._v("Released: "+t._s(o.released))]):t._e(),o.link?n("div",[n("br"),n("audio",{attrs:{controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:o.link,type:"audio/ogg"}}),n("source",{attrs:{src:o.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?n("div",[n("h2",[t._v("Lyrics")]),n("div",[t._v(t._s(t.songData.lyrics))])]):t._e()])}),[],!1,null,null,null);o.a=r.exports},UQSp:function(t,o,n){"use strict";o.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},fytT:function(t,o,n){"use strict";n.r(o);var e=n("KHd+"),i=n("NKX/"),r=n("UQSp"),s=n("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:r.a},l=function(t){var o=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===a(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?o[t]=c[t]:n[t]=function(){return c[t]}}))},u=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"A Portrait of Prince Khalil",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This is a musical portrait of the honorable Joseph Khalil.\n",recordings:[{title:"A Portrait of Prince Khalil",type:"Recording",style:"Electronic",length:"1:42",released:"2020-04-17",link:"https://victorslibrary.s3.amazonaws.com/music/A+Portrait+of+Prince+Khalil/A+Portrait+of+Prince+Khalil.mp3"}],lyrics:"Instrumental"};var f=function(t){t.options[p]&&(t.options[p]=d),s.a.util.defineReactive(t.options,p,d),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},_=Object(e.a)({},(function(){var t=this.$createElement,o=this._self._c||t;return o("VueRemarkRoot",[o("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(_),"function"==typeof f&&f(_);o.default=_.exports}}]);