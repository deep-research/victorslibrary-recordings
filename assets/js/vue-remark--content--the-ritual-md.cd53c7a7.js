(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{"NKX/":function(t,e,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},s=n("KHd+"),a=Object(s.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.songData.band?n("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?n("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):n("div",[t.songData.authors?n("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.explicit?n("div",[n("br"),t._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):t._e(),t.songData.description?n("div",[n("h2",[t._v("Description")]),n("vue-markdown",[t._v(t._s(t.songData.description))])],1):t._e(),t.songData.recordings?n("div",[n("h2",[t._v("Recordings")]),t._l(t.songData.recordings,(function(e,o){return n("div",{key:o},[e.title?n("h3",[t._v(t._s(o+1)+". "+t._s(e.title))]):t._e(),e.type?n("div",[t._v("Type: "+t._s(e.type))]):t._e(),e.style?n("div",[t._v("Style: "+t._s(e.style))]):t._e(),e.released?n("div",[t._v("Released: "+t._s(e.released))]):t._e(),e.link?n("div",[n("br"),n("audio",{attrs:{controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:e.link,type:"audio/ogg"}}),n("source",{attrs:{src:e.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?n("div",[n("h2",[t._v("Lyrics")]),n("vue-markdown",[t._v(t._s(t.songData.lyrics))])],1):t._e()])}),[],!1,null,null,null);e.a=a.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},m6Yp:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),s=n("NKX/"),a=n("UQSp"),r=n("oCYn");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var u={ReenchantmentSong:s.a,VueRemarkRoot:a.a},c=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===i(u[t])&&"function"==typeof u[t].render||"function"==typeof u[t]&&"function"==typeof u[t].options.render?e[t]=u[t]:n[t]=function(){return u[t]}}))},l=r.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"The Ritual",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This is an epic song about the dark history of mankind.\n",recordings:[{title:"The Ritual",type:"Recording",style:"Doom Metal",length:"9:13",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Ritual/The+Ritual.mp3"}],lyrics:"Into dark, I was born\nNo redemption from the cold\nAll alone, I walk the earth\nNever to feel pleasure again\n\nThrough all time to the dawn of man\nWhere is fate leading us to\nI cannot see through vast eternity\nBut I know we can’t abandon hope\n\nThrough the ages, man has fought\nWe use weapons to destroy ourselves\nIn troubled times, we don’t concern\nOurselves with others’ suffering\n\nIt’s a crime to think that cruelty\nTowards a brother is so small a thing\nThough we all worship different gods\nWe dwell beneath the same sky\n\nSave me from myself\nI’ve have enough of this\n"};var h=function(t){t.options[p]&&(t.options[p]=d),r.a.util.defineReactive(t.options,p,d),t.options.computed=l.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},f=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof h&&h(f);e.default=f.exports}}]);