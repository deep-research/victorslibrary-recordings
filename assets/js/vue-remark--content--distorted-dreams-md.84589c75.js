(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"GTV+":function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),i=n("NKX/"),r=n("UQSp"),s=n("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var u={ReenchantmentSong:i.a,VueRemarkRoot:r.a},c=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(u).forEach((function(t){"object"===a(u[t])&&"function"==typeof u[t].render||"function"==typeof u[t]&&"function"==typeof u[t].options.render?e[t]=u[t]:n[t]=function(){return u[t]}}))},l=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Distorted Dreams",band:"Reenchantment",authors:["Victor Fisher"],explicit:!0,type:"Song",description:"This song is about the cosmic struggle that is at play within the depths of the human psyche.\n",recordings:[{title:"Distorted Dreams",type:"Demo",style:"Doom Metal",length:"6:54",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/demos/Distorted+Dreams.mp3"}],lyrics:"Filter all the darkness\nThrough your mind\nCreating the wicked\nThey’re trapped in time\n\nForeseen is the ending\nOf your being\nDistorting all you feel\nYou can’t believe that it’s real\n\nAnd struggle unconscious\nTo save the world\nWhile you doubt your existing\nFor what you stood\n\nSee you’re blinded by the shadows\nWhich haunt the past\nAnd bargain with the devil but we’ll\nWe’ll never last\n\nSleep, fall into a distant dream\nMellow out and forget your form\nThe fear you inherited\nFrom the day you were born\n\nJust rest, see the pleasure in living now\nTune out of the controlling crowd\nThe ones who think they know\nHow it was meant to be\n\nSuffocate and suffer\nMartyr to the grave\nOmen from another, world\nBinded by the blood, of the sage\n"};var h=function(t){t.options[p]&&(t.options[p]=d),s.a.util.defineReactive(t.options,p,d),t.options.computed=l.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},f=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(f),"function"==typeof h&&h(f);e.default=f.exports},"NKX/":function(t,e,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=n("KHd+"),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("By: "+t._s(t.songData.band)+" ("+t._s(t.songData.authors)+")")]),n("div",[t._v("Explicit: "+t._s(t.songData.explicit))]),n("h2",[t._v("Description")]),n("div",[t._v(t._s(t.songData.description))]),n("h2",[t._v("Recordings")]),n("div",[t._v(t._s(t.songData.recordings))]),n("h2",[t._v("Lyrics")]),n("div",[t._v(t._s(t.songData.lyrics))])])}),[],!1,null,null,null);e.a=r.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);