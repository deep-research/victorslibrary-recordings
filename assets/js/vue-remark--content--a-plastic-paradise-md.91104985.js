(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7GA/":function(t,e,n){"use strict";n("rB9j"),n("EnZy"),n("DQNa");var o=n("sWYD");e.a={methods:{formatDate:function(t){var e=t.split("-"),n=new Date(e[0],e[1]-1,e[2]);return Object(o.a)(n,"MM/dd/yyy")}}}},Kglc:function(t,e,n){"use strict";var o=n("7GA/"),a={props:{songData:{type:Object,required:!0}},mixins:[o.a]},i=n("KHd+"),s=Object(i.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.songData.band?n("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?n("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):n("div",[t.songData.authors?n("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.type?n("div",[t._v("\n    Type: "),n("g-link",{attrs:{to:"/songs"}},[t._v("Song")])],1):t._e(),t.songData.published?n("div",[t._v("\n    Published: "+t._s(t.formatDate(t.songData.published))+"\n  ")]):t._e(),t.songData.updated?n("div",[t._v("\n    Updated: "+t._s(t.formatDate(t.songData.updated))+"\n  ")]):t._e(),t.songData.explicit?n("p",[t._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):t._e(),t.songData.description?n("div",[n("h3",[t._v("Description")]),n("vue-markdown",[t._v(t._s(t.songData.description))])],1):t._e(),t.songData.recordings?n("div",[n("h3",[t._v("Recordings")]),t._l(t.songData.recordings,(function(e,o){return n("div",{key:o},[e.title?n("h4",[t._v(t._s(o+1)+". "+t._s(e.title))]):t._e(),e.type?n("div",[t._v("Type: "+t._s(e.type))]):t._e(),e.style?n("div",[t._v("Style: "+t._s(e.style))]):t._e(),e.released?n("div",[t._v("Released: "+t._s(t.formatDate(e.released)))]):t._e(),e.link?n("p",[n("audio",{attrs:{controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:e.link,type:"audio/ogg"}}),n("source",{attrs:{src:e.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?n("div",[n("h3",[t._v("Lyrics")]),n("vue-markdown",[t._v(t._s(t.songData.lyrics))])],1):t._e()])}),[],!1,null,null,null);e.a=s.exports},eiPE:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),a=n("Kglc"),i=n("UQSp"),s=n("oCYn");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var l={Song:a.a,VueRemarkRoot:i.a},c=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===r(l[t])&&"function"==typeof l[t].render||"function"==typeof l[t]&&"function"==typeof l[t].options.render?e[t]=l[t]:n[t]=function(){return l[t]}}))},d=s.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",p={excerpt:null,title:"A Plastic Paradise",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This song was written to introduce the Lake Forest College football team. It sounds like Rage Against the Machine playing in the 70s.\n",recordings:[{title:"A Plastic Paradise",type:"Recording",style:"Hard Rock",length:"4:54",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/A+Plastic+Paradise/A+Plastic+Paradise.mp3"}],lyrics:"All these years of these fears are falling away\nI can’t say that one day if that I’ll be dismayed\nI’ll follow you, I’ll see it through\nBy the pain of our nation’s youth\n\nDon’t hide, don’t cry, don’t compromise\n’cause you know that we’ll find you anyway\nWe’ll liberate, profits made, it’s far too late\nFor canceling the game\n\nWe’ll think of reasons it’s alright\nQuestion their faith and patriotism\nScaremongering public into fear\nPay taxes or the end is near, end is near\n\nEducate, asphyxiate your brain\nFilled with trash, stripped of all good you won’t last\nSticking you in a cube, watch the tube\nNow you’re never in the mood\n\nTo fight for the plight of our rights\nIt’s okay, for today, the Newocrats just may\nHelp the cause, stop the blood, end the plight\nOf this world all alight\n\nAll of you get what you deserve\nFor complaining doing nothing\nThis ain’t the first time that this happened\nIt’s like Rome or Hitler without weed, without weed\n\nFreedom of speech means shouting fire, in a crowded theater,\nScrew all those damn satanic kids, with their, dirty rock and roll\n\nYeah\nAlright\n\nStand up and fight today, before your rights are taken away\n\nOh\nYeah\nRa\n\nLet’s end this empire’s reign and buy some freedom in pain\n\nAh\nKaka kapata, kakakaka\nAh  \n"};var h=function(t){t.options[u]&&(t.options[u]=p),s.a.util.defineReactive(t.options,u,p),t.options.computed=d.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},y=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("Song",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(y),"function"==typeof h&&h(y);e.default=y.exports}}]);