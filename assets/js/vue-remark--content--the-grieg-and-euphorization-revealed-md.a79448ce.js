(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"NKX/":function(e,t,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=n("KHd+"),r=Object(i.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[e._v("By: "+e._s(e.songData.band)+" ("+e._s(e.songData.authors)+")")]),n("div",[e._v("Explicit: "+e._s(e.songData.explicit))]),n("h2",[e._v("Description")]),n("div",[e._v(e._s(e.songData.description))]),n("h2",[e._v("Recordings")]),n("div",[e._v(e._s(e.songData.recordings))]),n("h2",[e._v("Lyrics")]),n("div",[e._v(e._s(e.songData.lyrics))])])}),[],!1,null,null,null);t.a=r.exports},UQSp:function(e,t,n){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},hOrJ:function(e,t,n){"use strict";n.r(t);var o=n("KHd+"),i=n("NKX/"),r=n("UQSp"),a=n("Kw5r");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:r.a},u=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(c).forEach((function(e){"object"===s(c[e])&&"function"==typeof c[e].render||"function"==typeof c[e]&&"function"==typeof c[e].options.render?t[e]=c[e]:n[e]=function(){return c[e]}}))},p=a.a.config.optionMergeStrategies,l="__vueRemarkFrontMatter",d={excerpt:null,title:"The Grieg and Euphorization Revealed",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This song depicts the contrast between a feeling of extreme terror and a calm and reflective period that may be experienced in its wake.\n\nIt is named after the exquisite composer [Edvard Grieg](https://en.wikipedia.org/wiki/Funeral_March_in_Memory_of_Rikard_Nordraak).\n",recordings:[{title:"The Grieg and Euphorization Revealed",type:"Recording",style:"Doom Metal",length:"3:25",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Grieg+and+Euphorization+Revealed/The+Grieg+and+Euphorization+Revealed.mp3"}],lyrics:"I hate to see you, looking so bad\nThe Guilt upon us now, the worst we've ever had\nAll men and creatures, must die in vain today\nYou’ve brought upon your soul, a life of pain\n"};var f=function(e){e.options[l]&&(e.options[l]=d),a.a.util.defineReactive(e.options,l,d),e.options.computed=p.computed({$frontmatter:function(){return e.options[l]}},e.options.computed)},m=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("VueRemarkRoot",[t("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(m),"function"==typeof f&&f(m);t.default=m.exports}}]);