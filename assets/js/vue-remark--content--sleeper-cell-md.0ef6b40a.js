(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"2kbT":function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),i=n("NKX/"),r=n("UQSp"),s=n("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:r.a},u=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===a(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:n[t]=function(){return c[t]}}))},l=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Sleeper Cell",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"I made this track to try out some new distortion pedals. It has an aggressive sound, and I was able to include a disco sounding electric piano as well!\n",recordings:[{title:"Sleeper Cell",type:"Recording",style:"Hard Rock",length:"1:46",released:null,link:"https://victorslibrary.s3.us-east-2.amazonaws.com/music/Sleeper+Cell/Sleeper+Cell.mp3"}],lyrics:"Instrumental"};var f=function(t){t.options[p]&&(t.options[p]=d),s.a.util.defineReactive(t.options,p,d),t.options.computed=l.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},m=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(m),"function"==typeof f&&f(m);e.default=m.exports},"NKX/":function(t,e,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=n("KHd+"),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("By: "+t._s(t.songData.band)+" ("+t._s(t.songData.authors)+")")]),n("div",[t._v("Explicit: "+t._s(t.songData.explicit))]),n("h2",[t._v("Description")]),n("div",[t._v(t._s(t.songData.description))]),n("h2",[t._v("Recordings")]),n("div",[t._v(t._s(t.songData.recordings))]),n("h2",[t._v("Lyrics")]),n("div",[t._v(t._s(t.songData.lyrics))])])}),[],!1,null,null,null);e.a=r.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);