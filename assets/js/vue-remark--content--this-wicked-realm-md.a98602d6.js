(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"NKX/":function(t,e,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=n("KHd+"),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("By: "+t._s(t.songData.band)+" ("+t._s(t.songData.authors)+")")]),n("div",[t._v("Explicit: "+t._s(t.songData.explicit))]),n("h2",[t._v("Description")]),n("div",[t._v(t._s(t.songData.description))]),n("h2",[t._v("Recordings")]),n("div",[t._v(t._s(t.songData.recordings))]),n("h2",[t._v("Lyrics")]),n("div",[t._v(t._s(t.songData.lyrics))])])}),[],!1,null,null,null);e.a=r.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},iInt:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),i=n("NKX/"),r=n("UQSp"),s=n("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:r.a},u=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===a(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:n[t]=function(){return c[t]}}))},l=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",h={excerpt:null,title:"This Wicked Realm",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"The lyrics for this song describe the inability to express a magical experience to other people. And the music was able to beautifully capture my interest in both doom metal and atmospheric rock.\n",recordings:[{title:"This Wicked Realm",type:"Recording",style:"Doom Metal",length:"5:55",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/This+Wicked+Realm/This+Wicked+Realm.mp3"}],lyrics:"Aya, bring the dawn\n\nTry to live with the truth that you know, it is all that must be\nCan you cope with the knowledge that you’re the only one to see\nMy silence buries you for all eternity\nWhy can’t you realize the truth must set you free\n\nAya, shall arise\n\nYou’re mine now, yeah\n\nThis wicked realm\nThis wicked\n"};var y=function(t){t.options[p]&&(t.options[p]=h),s.a.util.defineReactive(t.options,p,h),t.options.computed=l.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},f=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(f),"function"==typeof y&&y(f);e.default=f.exports}}]);