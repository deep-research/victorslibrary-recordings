(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"NKX/":function(t,n,o){"use strict";var e={props:{songData:{type:Object,required:!0}}},i=o("KHd+"),r=Object(i.a)(e,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[o("div",[t._v("By: "+t._s(t.songData.band)+" ("+t._s(t.songData.authors)+")")]),o("div",[t._v("Explicit: "+t._s(t.songData.explicit))]),o("h2",[t._v("Description")]),o("div",[t._v(t._s(t.songData.description))]),o("h2",[t._v("Recordings")]),o("div",[t._v(t._s(t.songData.recordings))]),o("h2",[t._v("Lyrics")]),o("div",[t._v(t._s(t.songData.lyrics))])])}),[],!1,null,null,null);n.a=r.exports},UQSp:function(t,n,o){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},Ucsm:function(t,n,o){"use strict";o.r(n);var e=o("KHd+"),i=o("NKX/"),r=o("UQSp"),a=o("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}a.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:r.a},l=function(t){var n=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===s(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?n[t]=c[t]:o[t]=function(){return c[t]}}))},u=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",f={excerpt:null,title:"Black Bile",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This song describes the symptoms that one may encounter when facing a loss of meaning in their life. It was recorded with the use of traditional instrumentation.\n",recordings:[{title:"Black Bile",type:"Recording",style:"Ballad",length:"2:18",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Black+Bile/Black+Bile.mp3"}],lyrics:"Life alone an endless circle, going on and on\nWhat do I have, to be looking forward to?\nNothing’s good without a struggle, anymore\nWhy can’t I force myself, to do the things I need to do?\n\nNo one cares for any other, in honesty\nWho do we think we are? Promising so much won’t matter\nYour ideology will drown me, in my own fear\nCan’t you reason with me? Save me now the end is near\n\nSave me\n"};var d=function(t){t.options[p]&&(t.options[p]=f),a.a.util.defineReactive(t.options,p,f),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},m=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("VueRemarkRoot",[n("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(m),"function"==typeof d&&d(m);n.default=m.exports}}]);