(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"NKX/":function(t,e,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},s=n("KHd+"),i=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.songData.band?n("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?n("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):n("div",[t.songData.authors?n("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.explicit?n("div",[t._v("\n    Explicit: "+t._s(t.songData.explicit)+"\n  ")]):t._e(),t.songData.description?n("div",[n("h2",[t._v("Description")]),n("div",[t._v(t._s(t.songData.description))])]):t._e(),t.songData.recordings?n("div",[n("h2",[t._v("Recordings")]),t._l(t.songData.recordings,(function(e,o){return n("div",{key:o},[e.title?n("h3",[t._v(t._s(o+1)+". "+t._s(e.title))]):t._e(),e.type?n("div",[t._v("Type: "+t._s(e.type))]):t._e(),e.style?n("div",[t._v("Style: "+t._s(e.style))]):t._e(),e.released?n("div",[t._v("Released: "+t._s(e.released))]):t._e(),e.link?n("div",[n("br"),n("audio",{attrs:{controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:e.link,type:"audio/ogg"}}),n("source",{attrs:{src:e.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?n("div",[n("h2",[t._v("Lyrics")]),n("div",[t._v(t._s(t.songData.lyrics))])]):t._e()])}),[],!1,null,null,null);e.a=i.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},nhPB:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),s=n("NKX/"),i=n("UQSp"),a=n("Kw5r");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var c={ReenchantmentSong:s.a,VueRemarkRoot:i.a},l=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===r(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:n[t]=function(){return c[t]}}))},u=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"The Paths of Mist",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This atmospheric doom metal song is the earliest one I wrote for my high school band, Shroud of Delirium. The recording is also one of the first ones I made that I still have access to.\n\nIn addition to doom metal, I was heavily influenced by black metal during this period.\n",recordings:[{title:"The Paths of Mist",type:"Recording",style:"Doom Metal",length:"5:22",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Paths+of+Mist/The+Paths+of+Mist.mp3"}],lyrics:"Wandering on the paths of mist\nI reflect upon my wasted life\nPondering the mistakes that I made\nJealous of what could have been\n\nEach step is closer to my destiny\nThe path that is written for us\n\nI cannot control the future\nFor man is nothing\n"};var f=function(t){t.options[p]&&(t.options[p]=d),a.a.util.defineReactive(t.options,p,d),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},h=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof f&&f(h);e.default=h.exports}}]);