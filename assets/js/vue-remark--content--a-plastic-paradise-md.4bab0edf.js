(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"NKX/":function(t,e,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=n("KHd+"),a=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.songData.band?n("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?n("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):n("div",[t.songData.authors?n("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.explicit?n("div",[t._v("\n    Explicit: "+t._s(t.songData.explicit)+"\n  ")]):t._e(),t.songData.description?n("div",[n("h2",[t._v("Description")]),n("div",[t._v(t._s(t.songData.description))])]):t._e(),t.songData.recordings?n("div",[n("h2",[t._v("Recordings")]),t._l(t.songData.recordings,(function(e,o){return n("div",{key:o},[e.title?n("h3",[t._v(t._s(o+1)+". "+t._s(e.title))]):t._e(),e.type?n("div",[t._v("Type: "+t._s(e.type))]):t._e(),e.style?n("div",[t._v("Style: "+t._s(e.style))]):t._e(),e.released?n("div",[t._v("Released: "+t._s(e.released))]):t._e(),e.link?n("div",[n("br"),n("audio",{attrs:{controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:e.link,type:"audio/ogg"}}),n("source",{attrs:{src:e.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?n("div",[n("h2",[t._v("Lyrics")]),n("div",[t._v(t._s(t.songData.lyrics))])]):t._e()])}),[],!1,null,null,null);e.a=a.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},eiPE:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),i=n("NKX/"),a=n("UQSp"),r=n("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var l={ReenchantmentSong:i.a,VueRemarkRoot:a.a},c=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===s(l[t])&&"function"==typeof l[t].render||"function"==typeof l[t]&&"function"==typeof l[t].options.render?e[t]=l[t]:n[t]=function(){return l[t]}}))},u=r.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"A Plastic Paradise",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This song was written to introduce the Lake Forest College football team. It sounds like Rage Against the Machine playing in the 70s.\n",recordings:[{title:"A Plastic Paradise",type:"Recording",style:"Hard Rock",length:"4:54",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/A+Plastic+Paradise/A+Plastic+Paradise.mp3"}],lyrics:'All these years of these fears are falling away\nI can’t say that one day if that I’ll be dismayed\nI’ll follow you, I’ll see it through\nBy the pain of our nation’s youth\n\nDon’t hide, don’t cry, don’t compromise\n’cause you know that we’ll find you anyway\nWe’ll liberate, profits made, it’s far too late\nFor canceling the game\n\nWe’ll think of reasons it’s alright\nQuestion their faith and patriotism\nScaremongering public into fear\nPay taxes or the end is near, end is near\n\nEducate, asphyxiate your brain\nFilled with trash, stripped of all good you won’t last\nSticking you in a cube, watch the tube\nNow you’re never in the mood\n\nTo fight for the plight of our rights\nIt’s okay, for today, the Newocrats just may\nHelp the cause, stop the blood, end the plight\nOf this world all alight\n\nAll of you get what you deserve\nFor complaining doing nothing\nThis ain’t the first time that this happened\nIt’s like Rome or Hitler without weed, without weed\n\nFreedom of speech means shouting fire, in a crowded theater,\nScrew all those damn satanic kids, with their, dirty rock and roll\n\nYeah\nAlright\n\nStand up and fight today, before your rights are taken away\n\nOh\nYeah\nRa\n\nLet’s end this empire’s reign and buy some freedom in pain\n\nAh\nKaka kapata, kakakaka\nAh\n\n<photo src="spirit-writing-new-cover.jpg" alt="The Former Shroud of Delirium"></photo>\n'};var h=function(t){t.options[d]&&(t.options[d]=p),r.a.util.defineReactive(t.options,d,p),t.options.computed=u.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},f=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof h&&h(f);e.default=f.exports}}]);