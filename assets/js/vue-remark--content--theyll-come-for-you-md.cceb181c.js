(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{"7GA/":function(e,o,t){"use strict";t("rB9j"),t("EnZy"),t("DQNa");var n=t("sWYD");o.a={methods:{formatDate:function(e){var o=e.split("-"),t=new Date(o[0],o[1]-1,o[2]);return Object(n.a)(t,"MM/dd/yyy")}}}},Kglc:function(e,o,t){"use strict";var n=t("7GA/"),a={props:{songData:{type:Object,required:!0}},mixins:[n.a]},i=t("KHd+"),r=Object(i.a)(a,(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",[e.songData.band?t("div",[e._v("\n    By: "+e._s(e.songData.band)+"\n    "),e.songData.authors?t("span",[e._v("\n      ("+e._s(e.songData.authors.join(", "))+")\n    ")]):e._e()]):t("div",[e.songData.authors?t("span",[e._v("\n      By: "+e._s(e.songData.authors.join(", "))+"\n    ")]):e._e()]),e.songData.type?t("div",[e._v("\n    Type: "),t("g-link",{attrs:{to:"/songs"}},[e._v("Song")])],1):e._e(),e.songData.published?t("div",[e._v("\n    Published: "+e._s(e.formatDate(e.songData.published))+"\n  ")]):e._e(),e.songData.updated?t("div",[e._v("\n    Updated: "+e._s(e.formatDate(e.songData.updated))+"\n  ")]):e._e(),e.songData.explicit?t("p",[e._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):e._e(),e.songData.description?t("div",[t("h3",[e._v("Description")]),t("vue-markdown",[e._v(e._s(e.songData.description))])],1):e._e(),e.songData.recordings?t("div",[t("h3",[e._v("Recordings")]),e._l(e.songData.recordings,(function(o,n){return t("div",{key:n},[o.title?t("h4",[e._v(e._s(n+1)+". "+e._s(o.title))]):e._e(),o.type?t("div",[e._v("Type: "+e._s(o.type))]):e._e(),o.style?t("div",[e._v("Style: "+e._s(o.style))]):e._e(),o.released?t("div",[e._v("Released: "+e._s(e.formatDate(o.released)))]):e._e(),o.link?t("p",[t("audio",{attrs:{controls:"",controlsList:"nodownload"}},[t("source",{attrs:{src:o.link,type:"audio/ogg"}}),t("source",{attrs:{src:o.link,type:"audio/mpeg"}}),e._v("\n        Your browser does not support the audio element.\n        ")])]):e._e()])}))],2):e._e(),e.songData.lyrics?t("div",[t("h3",[e._v("Lyrics")]),t("vue-markdown",[e._v(e._s(e.songData.lyrics))])],1):e._e()])}),[],!1,null,null,null);o.a=r.exports},wleE:function(e,o,t){"use strict";t.r(o);var n=t("KHd+"),a=t("Kglc"),i=t("UQSp"),r=t("oCYn");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var l={Song:a.a,VueRemarkRoot:i.a},u=function(e){var o=e.options.components=e.options.components||{},t=e.options.computed=e.options.computed||{};Object.keys(l).forEach((function(e){"object"===s(l[e])&&"function"==typeof l[e].render||"function"==typeof l[e]&&"function"==typeof l[e].options.render?o[e]=l[e]:t[e]=function(){return l[e]}}))},c=r.a.config.optionMergeStrategies,y="__vueRemarkFrontMatter",d={excerpt:null,title:"They’ll Come For You",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:'The song discusses the way we are unconsciously shaped by <A href="https://en.wikipedia.org/wiki/Social_conditioning" target="_blank">social conditioning</a>.\n\nThis is one of the best examples of my acoustic rock songwriting. The *Mermaid Version* ended up capturing my sound in the most accurate way, although the last minute of the *Pilgrimage Version* is also very interesting because is revealed how I would sound with a more radio friendly approach.\n',recordings:[{title:"They’ll Come For You (Mermaid Version)",type:"Recording",style:"Rock",length:"5:15",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Theyll+Come+For+You/Theyll+Come+For+You+(Mermaid+Version).mp3"},{title:"They’ll Come For You (Pilgrimage Version)",type:"Recording",style:"Rock",length:"5:07",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Theyll+Come+For+You/Theyll+Come+For+You+(Pilgrimage+Version).mp3"},{title:"They’ll Come For You (Live at the Sacred Forest)",type:"Live",style:"Rock",length:"5:18",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Theyll+Come+For+You/Theyll+Come+For+You+(Live+at+the+Sacred+Forest).mp3"}],lyrics:"They’ll come for you when you’re too young\nTo think about the world\nWhen uprooting you from your life\nTo teach you what they worship\n\nIntroducing you to judging\nMolding you into their image\nImprisoning you in your, own mind\nGod, how blind\n\nYou know that still there was a time\nBefore that thinking was a crime\nLong before you, lost yourself\n\nBack when you knew how it felt to love\nBack when you knew you had control\nBack when you, could survive\n\nYou’re taught to fear and taught to follow\nNever trusting any other\n'cept the masters that will own you\nTake your grass and rights away too\n\nAnd they say there was a time\nWhen we were free\nBut empathy is hard to find\n\nAnd today all things are so dark\nThat we can’t live with open hearts\nNo hope, just misery\n\nThe government will try to set you free\nAnd manipulate your reality\nAgainst humanity, it’s a crime\nForget morality, do your time\n\nPrepare to fight them everyday\nIn fear they’ll run and hide away\nJust eat the blotter, save your mind\n\nTogether we have power to\nStand up cause you’re a human too\nWe’ll rot away, if we don’t try\nCome together, and expose the lie\n"};var h=function(e){e.options[y]&&(e.options[y]=d),r.a.util.defineReactive(e.options,y,d),e.options.computed=c.computed({$frontmatter:function(){return e.options[y]}},e.options.computed)},p=Object(n.a)({},(function(){var e=this.$createElement,o=this._self._c||e;return o("VueRemarkRoot",[o("Song",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(p),"function"==typeof h&&h(p);o.default=p.exports}}]);