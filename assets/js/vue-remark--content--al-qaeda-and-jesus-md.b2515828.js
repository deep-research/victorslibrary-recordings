(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"5BSw":function(e,n,t){"use strict";t.r(n);var o=t("KHd+"),a=t("NKX/"),s=t("UQSp"),i=t("oCYn");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}i.a.config.optionMergeStrategies;var l={ReenchantmentSong:a.a,VueRemarkRoot:s.a},u=function(e){var n=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===r(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?n[e]=l[e]:t[e]=function(){return l[e]}}))},d=i.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",h={excerpt:null,title:"Al Qaeda and Jesus",band:"Reenchantment",authors:["Victor Fisher"],explicit:!0,type:"Song",description:'One time I spent an entire summer listening to [crossover thrash](https://en.wikipedia.org/wiki/Crossover_thrash). Things eventually boiled over when I repeatedly screamed “Al Qaeda” and gave the Nazi salute towards a busy intersection of commuters stuck in traffic. I was on rollerblades.\n\nThis recording was also a lot of fun to make because I had scream "Al Qaeda" at the top of my lungs repeatedly.\n',recordings:[{title:"Al Qaeda and Jesus",type:"Recording",style:"Hard Rock",length:"3:22",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Al+Qaeda+and+Jesus/Al+Qaeda+and+Jesus.mp3"},{title:"Al Qaeda and Jesus (Clean Edit)",type:"Recording",style:"Hard Rock",length:"3:18",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Al+Qaeda+and+Jesus/Al+Qaeda+and+Jesus+(Clean+Edit).mp3"}],lyrics:"The president’s a killer, wants to bleed you till you’re dead\nYou voted for the f***ing war, but send kids in your stead\nThe coward is so blinded, he can’t recognize your bribes\nThey bought the f***ing system, now they’re telling you you’ll thrive\nThere is no way in hell that they can save us with their lies\nShow the f***ing sheeple they are causing our demise\n\nAl Qaeda and Jesus\nYeah\n\nThere is no simple way to function in this freaking life\nThe work and pain and suffering shall carve you like a knife\nExperience will shape your mind and body to be new\nPerspectives you must live by be the ethics you will choose\nDo you know the kind of souls that you will all become?\nThe kindest now among us may obliterate the sun\nAnd worship darkest demons by the citadel of hate\nEncountering angelic souls that now must seal their fate\n\nI’ll tell you what to do, I know the way to save your life\nTake a f***ing magnum gun to shoot your boss and wife\nYour chakras and your astral body surely will be cleansed\nThere is no time to wait ’cause you can never strike again\nAll the people, all your life, have always made you slave\nPay them back with countless sorrows empathy won’t name\nIn anger and in fear all of the dark ones shall rejoice\nBefore all of us go to hell, we’ll let them hear our voice\n\nAl Qaeda and Jesus\nAl Qaeda and Jesus Christ\n"};var p=function(e){e.options[c]&&(e.options[c]=h),i.a.util.defineReactive(e.options,c,h),e.options.computed=d.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},y=Object(o.a)({},(function(){var e=this.$createElement,n=this._self._c||e;return n("VueRemarkRoot",[n("ReenchantmentSong",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(y),"function"==typeof p&&p(y);n.default=y.exports},"NKX/":function(e,n,t){"use strict";var o={props:{songData:{type:Object,required:!0}}},a=t("KHd+"),s=Object(a.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[e.songData.band?t("div",[e._v("\n    By: "+e._s(e.songData.band)+"\n    "),e.songData.authors?t("span",[e._v("\n      ("+e._s(e.songData.authors.join(", "))+")\n    ")]):e._e()]):t("div",[e.songData.authors?t("span",[e._v("\n      By: "+e._s(e.songData.authors.join(", "))+"\n    ")]):e._e()]),e.songData.explicit?t("div",[t("br"),e._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):e._e(),e.songData.description?t("div",[t("h2",[e._v("Description")]),t("vue-markdown",[e._v(e._s(e.songData.description))])],1):e._e(),e.songData.recordings?t("div",[t("h2",[e._v("Recordings")]),e._l(e.songData.recordings,(function(n,o){return t("div",{key:o},[n.title?t("h3",[e._v(e._s(o+1)+". "+e._s(n.title))]):e._e(),n.type?t("div",[e._v("Type: "+e._s(n.type))]):e._e(),n.style?t("div",[e._v("Style: "+e._s(n.style))]):e._e(),n.released?t("div",[e._v("Released: "+e._s(n.released))]):e._e(),n.link?t("div",[t("br"),t("audio",{attrs:{controls:"",controlsList:"nodownload"}},[t("source",{attrs:{src:n.link,type:"audio/ogg"}}),t("source",{attrs:{src:n.link,type:"audio/mpeg"}}),e._v("\n        Your browser does not support the audio element.\n        ")])]):e._e()])}))],2):e._e(),e.songData.lyrics?t("div",[t("h2",[e._v("Lyrics")]),t("vue-markdown",[e._v(e._s(e.songData.lyrics))])],1):e._e()])}),[],!1,null,null,null);n.a=s.exports},UQSp:function(e,n,t){"use strict";n.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);