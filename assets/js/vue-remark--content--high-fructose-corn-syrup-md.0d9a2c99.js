(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"7GA/":function(t,n,o){"use strict";o("rB9j"),o("EnZy"),o("DQNa");var e=o("sWYD");n.a={methods:{formatDate:function(t){var n=t.split("-"),o=new Date(n[0],n[1]-1,n[2]);return Object(e.a)(o,"MM/dd/yyy")}}}},Kglc:function(t,n,o){"use strict";var e=o("7GA/"),a={props:{songData:{type:Object,required:!0}},mixins:[e.a]},s=o("KHd+"),r=Object(s.a)(a,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",[t.songData.band?o("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?o("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):o("div",[t.songData.authors?o("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.type?o("div",[t._v("\n    Type: "),o("g-link",{attrs:{to:"/songs"}},[t._v("Song")])],1):t._e(),t.songData.published?o("div",[t._v("\n    Published: "+t._s(t.formatDate(t.songData.published))+"\n  ")]):t._e(),t.songData.updated?o("div",[t._v("\n    Updated: "+t._s(t.formatDate(t.songData.updated))+"\n  ")]):t._e(),t.songData.explicit?o("div",[o("br"),t._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):t._e(),t.songData.description?o("div",[o("h2",[t._v("Description")]),o("vue-markdown",[t._v(t._s(t.songData.description))])],1):t._e(),t.songData.recordings?o("div",[o("h2",[t._v("Recordings")]),t._l(t.songData.recordings,(function(n,e){return o("div",{key:e},[n.title?o("h3",[t._v(t._s(e+1)+". "+t._s(n.title))]):t._e(),n.type?o("div",[t._v("Type: "+t._s(n.type))]):t._e(),n.style?o("div",[t._v("Style: "+t._s(n.style))]):t._e(),n.released?o("div",[t._v("Released: "+t._s(t.formatDate(n.released)))]):t._e(),n.link?o("div",[o("br"),o("audio",{attrs:{controls:"",controlsList:"nodownload"}},[o("source",{attrs:{src:n.link,type:"audio/ogg"}}),o("source",{attrs:{src:n.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?o("div",[o("h2",[t._v("Lyrics")]),o("vue-markdown",[t._v(t._s(t.songData.lyrics))])],1):t._e()])}),[],!1,null,null,null);n.a=r.exports},"eS/q":function(t,n,o){"use strict";o.r(n);var e=o("KHd+"),a=o("Kglc"),s=o("UQSp"),r=o("oCYn");function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var u={Song:a.a,VueRemarkRoot:s.a},c=function(t){var n=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===i(u[t])&&"function"==typeof u[t].render||"function"==typeof u[t]&&"function"==typeof u[t].options.render?n[t]=u[t]:o[t]=function(){return u[t]}}))},l=r.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"High Fructose Corn Syrup",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This is a blues rock song about Hurricane Katrina. I wrote this with Lamp, my first band in High School.\n",recordings:[{title:"High Fructose Corn Syrup",type:"Demo",style:"Rock",length:"2:54",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/demos/High+Fructose+Corn+Syrup.mp3"}],lyrics:"I left my home, went out the door\nI drove away into the cold\nThere’s so many people here but I’m alone\nLife’s too fast and it got sold\n\nHigh Fructose Corn Syrup\nNothing’s real anymore\nYou wanted something to believe in\nBut only lies are told\n\nBy the banks where I was born\nThere was a man who lived alone\nHis house was washed away by the storm\nHe called for help but he was alone, oh yeah\n\nHigh Fructose Corn Syrup\nNothing’s real anymore\nYou wanted something to believe in, but I know\nI know that only lies are told\n\nHigh Fructose Corn Syrup\nNothing’s real anymore\nYou wanted something to believe in, and I know\nI know that something’s gotta go\n"};var y=function(t){t.options[p]&&(t.options[p]=d),r.a.util.defineReactive(t.options,p,d),t.options.computed=l.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},g=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("VueRemarkRoot",[n("Song",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(g),"function"==typeof y&&y(g);n.default=g.exports}}]);