(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{"NKX/":function(e,t,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},r=n("KHd+"),i=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("By: "+e._s(e.songData.band)+" ("+e._s(e.songData.authors)+")")]),n("div",[e._v("Explicit: "+e._s(e.songData.explicit))]),n("h2",[e._v("Description")]),n("div",[e._v(e._s(e.songData.description))]),n("h2",[e._v("Recordings")]),n("div",[e._v(e._s(e.songData.recordings))]),n("h2",[e._v("Lyrics")]),n("div",[e._v(e._s(e.songData.lyrics))])])}),[],!1,null,null,null);t.a=i.exports},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},wkyg:function(e,t,n){"use strict";n.r(t);var o=n("KHd+"),r=n("NKX/"),i=n("UQSp"),a=n("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var l={ReenchantmentSong:r.a,VueRemarkRoot:i.a},c=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===s(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?t[e]=l[e]:n[e]=function(){return l[e]}}))},u=a.a.config.optionMergeStrategies,f="__vueRemarkFrontMatter",p={excerpt:null,title:"The Wrath of God",band:"Reenchantment",authors:["Victor Fisher"],explicit:!0,type:"Song",description:"This recording describes a terrifying journey through an apocalyptic vision.\n",recordings:[{title:"The Wrath of God",type:"Recording",style:"Doom Metal",length:"19:58",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Wrath+of+God/The+Wrath+of+God+%7BNihilism+Remix%7D.mp3"}],lyrics:"I see, into infinity\nCosmic wave distorting all the infamy\nWe cannot live, with our past\nTransgress the sacred, no hope will last\nYou are alone, so far from home\nNothing can take you anywhere\nForget your dreams, although it may seem\nYou’ve always been unstoppable\n\nIraq war sound sample:\n> S***, where the f*** was that one\n\nSatan lives, Satan, he is my master forever\n\nThis world, it is the real hell\nThere never was salvation, as all the good men fell\nWar will swallow us all, leading to our demise\nAs our terror grows, morals we sacrifice\n\nI will destroy you, end your living for all time\nSlowly drain the feeling away\nCrush the lives of all that you love\n\nDesolation vast, surrounding ocean blue\nCoats the sea in terror\nNo freedom from, the industries of man\nWe create as we destroy\n\nHail to the end of all time, hail to the end of all\n"};var h=function(e){e.options[f]&&(e.options[f]=p),a.a.util.defineReactive(e.options,f,p),e.options.computed=u.computed({$frontmatter:function(){return e.options[f]}},e.options.computed)},d=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("VueRemarkRoot",[t("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof h&&h(d);t.default=d.exports}}]);