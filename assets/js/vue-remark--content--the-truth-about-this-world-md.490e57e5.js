(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{"3Hr6":function(t,o,e){"use strict";e.r(o);var n=e("KHd+"),i=e("NKX/"),r=e("UQSp"),s=e("Kw5r");function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var a={ReenchantmentSong:i.a,VueRemarkRoot:r.a},c=function(t){var o=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(a).forEach((function(t){"object"===u(a[t])&&"function"==typeof a[t].render||"function"==typeof a[t]&&"function"==typeof a[t].options.render?o[t]=a[t]:e[t]=function(){return a[t]}}))},l=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",h={excerpt:null,title:"The Truth About This World",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This contains philosophical musings about the mysteries of the universe.",recordings:[{title:"The Truth About This World",type:"Demo",style:"Rock",length:"2:04",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/demos/The+Truth+About+this+World.mp3"}],lyrics:"Did the wise men know the truth about this world?\nAbout this world of ours\nThat I find myself within\nAbout this world of ours\nThat I am bound to dwell within\n\nIs there a place for those who wish to know?\nFor those of us who feel the dream\nOr does it lie beyond the grave?\n"};var f=function(t){t.options[p]&&(t.options[p]=h),s.a.util.defineReactive(t.options,p,h),t.options.computed=l.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},d=Object(n.a)({},(function(){var t=this.$createElement,o=this._self._c||t;return o("VueRemarkRoot",[o("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof c&&c(d),"function"==typeof f&&f(d);o.default=d.exports},"NKX/":function(t,o,e){"use strict";var n={props:{songData:{type:Object,required:!0}}},i=e("KHd+"),r=Object(i.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",[t._v("By: "+t._s(t.songData.band)+" ("+t._s(t.songData.authors)+")")]),e("div",[t._v("Explicit: "+t._s(t.songData.explicit))]),e("h2",[t._v("Description")]),e("div",[t._v(t._s(t.songData.description))]),e("h2",[t._v("Recordings")]),e("div",[t._v(t._s(t.songData.recordings))]),e("h2",[t._v("Lyrics")]),e("div",[t._v(t._s(t.songData.lyrics))])])}),[],!1,null,null,null);o.a=r.exports},UQSp:function(t,o,e){"use strict";o.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);