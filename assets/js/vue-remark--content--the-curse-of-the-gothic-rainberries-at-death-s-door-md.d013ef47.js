(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"NKX/":function(t,e,n){"use strict";var o={props:{songData:{type:Object,required:!0}}},i=n("KHd+"),r=Object(i.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("By: "+t._s(t.songData.band)+" ("+t._s(t.songData.authors)+")")]),n("div",[t._v("Explicit: "+t._s(t.songData.explicit))]),n("h2",[t._v("Description")]),n("div",[t._v(t._s(t.songData.description))]),n("h2",[t._v("Recordings")]),n("div",[t._v(t._s(t.songData.recordings))]),n("h2",[t._v("Lyrics")]),n("div",[t._v(t._s(t.songData.lyrics))])])}),[],!1,null,null,null);e.a=r.exports},UQSp:function(t,e,n){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},rkHk:function(t,e,n){"use strict";n.r(e);var o=n("KHd+"),i=n("NKX/"),r=n("UQSp"),s=n("Kw5r");function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var c={ReenchantmentSong:i.a,VueRemarkRoot:r.a},l=function(t){var e=t.options.components=t.options.components||{},n=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===a(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:n[t]=function(){return c[t]}}))},u=s.a.config.optionMergeStrategies,h="__vueRemarkFrontMatter",p={excerpt:null,title:"The Curse of the Gothic Rainberries at Death’s Door",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"Listen to this song in a misty graveyard, late at night. It will allow you to master the dark arts.\n",recordings:[{title:"The Curse of the Gothic Rainberries at Death’s Door",type:"Recording",style:"Doom Metal",length:"6:57",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Curse+of+the+Gothic+Rainberries+at+Death's+Door/The+Curse+of+the+Gothic+Rainberries+at+Death's+Door.mp3"},{title:"The Curse of the Gothic Rainberries at Death’s Door (Music Video)",type:"Video",style:"Doom Metal",length:"6:55",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/The+Curse+of+the+Gothic+Rainberries+at+Death's+Door/The+Curse+of+the+Gothic+Rainberries+at+Deaths+Door.mp4"}],lyrics:"The curse of the gothic rainberries at death’s door\n\nPassageway, into the hidden the land\nA secret monument, to mystic shadow chant\nWe cannot understand, the mark of misery\nAn omen from the sky, warning now all faith shall die\n\nI didn’t want to, give up, my faith in this world\n\nYou made me do this, this isn’t me\nI feel dissociated, I’ve lost my personality\nThere is no time for comfort\nNo one will pardon all my sins\nThis is an ugly universe\nNo place, for a man like me\n\nI can’t stay here\nSay your goodbyes\nThis is the end for me\n\nIf you must do it, just do it now\n\nWorship the coming end of time\nPicture apocalyptic ways\nLet go of all you have confined\nAll will be lost in final haze\n\nSave me now\nIt is the end we fear\nAn entire world crippled\nOur final days are here\n"};var f=function(t){t.options[h]&&(t.options[h]=p),s.a.util.defineReactive(t.options,h,p),t.options.computed=u.computed({$frontmatter:function(){return t.options[h]}},t.options.computed)},d=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof l&&l(d),"function"==typeof f&&f(d);e.default=d.exports}}]);