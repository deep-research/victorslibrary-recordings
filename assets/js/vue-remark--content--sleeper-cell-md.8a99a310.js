(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{"2kbT":function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),s=n("Kglc"),a=n("UQSp"),i=n("oCYn");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var c={Song:s.a,VueRemarkRoot:a.a},l=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===r(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:n[t]=function(){return c[t]}}))},u=i.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Sleeper Cell",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"I made this track to try out some new distortion pedals. It has an aggressive sound, and I was able to include a disco sounding electric piano as well!\n",recordings:[{title:"Sleeper Cell",type:"Recording",style:"Hard Rock",length:"1:46",released:null,link:"https://victorslibrary.s3.us-east-2.amazonaws.com/music/Sleeper+Cell/Sleeper+Cell.mp3"}],lyrics:"Instrumental"};var _=function(t){t.options[p]&&(t.options[p]=d),i.a.util.defineReactive(t.options,p,d),t.options.computed=u.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},v=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("Song",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(v),"function"==typeof _&&_(v);e.default=v.exports},"7GA/":function(t,e,n){"use strict";n("rB9j"),n("EnZy"),n("DQNa");var o=n("sWYD");e.a={methods:{formatDate:function(t){var e=t.split("-"),n=new Date(e[0],e[1]-1,e[2]);return Object(o.a)(n,"MM/dd/yyy")}}}},Kglc:function(t,e,n){"use strict";var o=n("7GA/"),s={props:{songData:{type:Object,required:!0}},mixins:[o.a]},a=n("KHd+"),i=Object(a.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.songData.band?n("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?n("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):n("div",[t.songData.authors?n("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.type?n("div",[t._v("\n    Type: "),n("g-link",{attrs:{to:"/songs"}},[t._v("Song")])],1):t._e(),t.songData.published?n("div",[t._v("\n    Published: "+t._s(t.formatDate(t.songData.published))+"\n  ")]):t._e(),t.songData.updated?n("div",[t._v("\n    Updated: "+t._s(t.formatDate(t.songData.updated))+"\n  ")]):t._e(),t.songData.explicit?n("div",[n("br"),t._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):t._e(),t.songData.description?n("div",[n("h2",[t._v("Description")]),n("vue-markdown",[t._v(t._s(t.songData.description))])],1):t._e(),t.songData.recordings?n("div",[n("h2",[t._v("Recordings")]),t._l(t.songData.recordings,(function(e,o){return n("div",{key:o},[e.title?n("h3",[t._v(t._s(o+1)+". "+t._s(e.title))]):t._e(),e.type?n("div",[t._v("Type: "+t._s(e.type))]):t._e(),e.style?n("div",[t._v("Style: "+t._s(e.style))]):t._e(),e.released?n("div",[t._v("Released: "+t._s(t.formatDate(e.released)))]):t._e(),e.link?n("div",[n("br"),n("audio",{attrs:{controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:e.link,type:"audio/ogg"}}),n("source",{attrs:{src:e.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?n("div",[n("h2",[t._v("Lyrics")]),n("vue-markdown",[t._v(t._s(t.songData.lyrics))])],1):t._e()])}),[],!1,null,null,null);e.a=i.exports}}]);