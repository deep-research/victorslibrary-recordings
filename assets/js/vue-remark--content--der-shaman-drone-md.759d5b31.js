(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"7GA/":function(t,n,e){"use strict";e("rB9j"),e("EnZy"),e("DQNa");var o=e("sWYD");n.a={methods:{formatDate:function(t){var n=t.split("-"),e=new Date(n[0],n[1]-1,n[2]);return Object(o.a)(e,"MM/dd/yyy")}}}},Kglc:function(t,n,e){"use strict";var o=e("7GA/"),a={props:{songData:{type:Object,required:!0}},mixins:[o.a]},s=e("KHd+"),r=Object(s.a)(a,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[t.songData.band?e("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?e("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):e("div",[t.songData.authors?e("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.type?e("div",[t._v("\n    Type: "),e("g-link",{attrs:{to:"/songs"}},[t._v("Song")])],1):t._e(),t.songData.published?e("div",[t._v("\n    Published: "+t._s(t.formatDate(t.songData.published))+"\n  ")]):t._e(),t.songData.updated?e("div",[t._v("\n    Updated: "+t._s(t.formatDate(t.songData.updated))+"\n  ")]):t._e(),t.songData.explicit?e("p",[t._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):t._e(),t.songData.description?e("div",[e("h3",[t._v("Description")]),e("vue-markdown",[t._v(t._s(t.songData.description))])],1):t._e(),t.songData.recordings?e("div",[e("h3",[t._v("Recordings")]),t._l(t.songData.recordings,(function(n,o){return e("div",{key:o},[n.title?e("h4",[t._v(t._s(o+1)+". "+t._s(n.title))]):t._e(),n.type?e("div",[t._v("Type: "+t._s(n.type))]):t._e(),n.style?e("div",[t._v("Style: "+t._s(n.style))]):t._e(),n.released?e("div",[t._v("Released: "+t._s(t.formatDate(n.released)))]):t._e(),n.link?e("p",[e("audio",{attrs:{controls:"",controlsList:"nodownload"}},[e("source",{attrs:{src:n.link,type:"audio/ogg"}}),e("source",{attrs:{src:n.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?e("div",[e("h3",[t._v("Lyrics")]),e("vue-markdown",[t._v(t._s(t.songData.lyrics))])],1):t._e()])}),[],!1,null,null,null);n.a=r.exports},zwLW:function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),a=e("Kglc"),s=e("UQSp"),r=e("oCYn");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var c={Song:a.a,VueRemarkRoot:s.a},u=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===i(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?n[t]=c[t]:e[t]=function(){return c[t]}}))},p=r.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",l={excerpt:null,title:"derShamanDrone",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This recording is an exploration of the ancient mysteries of tribalism and the shamanic tradition.\n",recordings:[{title:"derShamanDrone",type:"Recording",style:"Drone",length:"2:44",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/derShamanDrone/derShamanDrone.mp3"}],lyrics:"Instrumental"};var _=function(t){t.options[d]&&(t.options[d]=l),r.a.util.defineReactive(t.options,d,l),t.options.computed=p.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},f=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("VueRemarkRoot",[n("Song",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(f),"function"==typeof _&&_(f);n.default=f.exports}}]);