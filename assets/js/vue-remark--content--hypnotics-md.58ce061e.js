(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"3U/6":function(t,n,e){"use strict";e.r(n);var o=e("KHd+"),i=e("NKX/"),r=e("UQSp"),s=e("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:r.a},u=function(t){var n=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===a(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?n[t]=c[t]:e[t]=function(){return c[t]}}))},l=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Hypnotics",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This song is about the managed social decline and mind control techniques that are perpetrated against the general public. It also references the mythology of The Lord Reverend Wizard of Alchemical Despair's basement.\n",recordings:[{title:null,type:"Hypnotics",style:"Doom Metal",length:"6:48",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/demos/Hypnotics.mp3"}],lyrics:"Screw this world\nIt is lost\nDestroyed by hatred\nTrashed with mistrust\n\nEach man must fight\nOn his own\nWithout the law\nYou are alone\n\nEthereal forest\nEnchanted tomb\nInside my basement\nIn cryptic gloom\n\nWither shall we wander\nWho will redeem\nAfter the doom\nOf human dream\n"};var f=function(t){t.options[p]&&(t.options[p]=d),s.a.util.defineReactive(t.options,p,d),t.options.computed=l.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},m=Object(o.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("VueRemarkRoot",[n("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(m),"function"==typeof f&&f(m);n.default=m.exports},"NKX/":function(t,n,e){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=e("KHd+"),r=Object(i.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",[t._v("By: "+t._s(t.songData.band)+" ("+t._s(t.songData.authors)+")")]),e("div",[t._v("Explicit: "+t._s(t.songData.explicit))]),e("h2",[t._v("Description")]),e("div",[t._v(t._s(t.songData.description))]),e("h2",[t._v("Recordings")]),e("div",[t._v(t._s(t.songData.recordings))]),e("h2",[t._v("Lyrics")]),e("div",[t._v(t._s(t.songData.lyrics))])])}),[],!1,null,null,null);n.a=r.exports},UQSp:function(t,n,e){"use strict";n.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);