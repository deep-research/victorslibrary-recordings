(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"7GA/":function(e,t,n){"use strict";n("rB9j"),n("EnZy"),n("DQNa");var o=n("sWYD");t.a={methods:{formatDate:function(e){var t=e.split("-"),n=new Date(t[0],t[1]-1,t[2]);return Object(o.a)(n,"MM/dd/yyy")}}}},Kglc:function(e,t,n){"use strict";var o=n("7GA/"),a={props:{songData:{type:Object,required:!0}},mixins:[o.a]},i=n("KHd+"),r=Object(i.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.songData.band?n("div",[e._v("\n    By: "+e._s(e.songData.band)+"\n    "),e.songData.authors?n("span",[e._v("\n      ("+e._s(e.songData.authors.join(", "))+")\n    ")]):e._e()]):n("div",[e.songData.authors?n("span",[e._v("\n      By: "+e._s(e.songData.authors.join(", "))+"\n    ")]):e._e()]),e.songData.type?n("div",[e._v("\n    Type: "),n("g-link",{attrs:{to:"/songs"}},[e._v("Song")])],1):e._e(),e.songData.published?n("div",[e._v("\n    Published: "+e._s(e.formatDate(e.songData.published))+"\n  ")]):e._e(),e.songData.updated?n("div",[e._v("\n    Updated: "+e._s(e.formatDate(e.songData.updated))+"\n  ")]):e._e(),e.songData.explicit?n("div",[n("br"),e._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):e._e(),e.songData.description?n("div",[n("h2",[e._v("Description")]),n("vue-markdown",[e._v(e._s(e.songData.description))])],1):e._e(),e.songData.recordings?n("div",[n("h2",[e._v("Recordings")]),e._l(e.songData.recordings,(function(t,o){return n("div",{key:o},[t.title?n("h3",[e._v(e._s(o+1)+". "+e._s(t.title))]):e._e(),t.type?n("div",[e._v("Type: "+e._s(t.type))]):e._e(),t.style?n("div",[e._v("Style: "+e._s(t.style))]):e._e(),t.released?n("div",[e._v("Released: "+e._s(e.formatDate(t.released)))]):e._e(),t.link?n("div",[n("br"),n("audio",{attrs:{controls:"",controlsList:"nodownload"}},[n("source",{attrs:{src:t.link,type:"audio/ogg"}}),n("source",{attrs:{src:t.link,type:"audio/mpeg"}}),e._v("\n        Your browser does not support the audio element.\n        ")])]):e._e()])}))],2):e._e(),e.songData.lyrics?n("div",[n("h2",[e._v("Lyrics")]),n("vue-markdown",[e._v(e._s(e.songData.lyrics))])],1):e._e()])}),[],!1,null,null,null);t.a=r.exports},vRoH:function(e,t,n){"use strict";n.r(t);var o=n("KHd+"),a=n("Kglc"),i=n("UQSp"),r=n("oCYn");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.a.config.optionMergeStrategies;var u={Song:a.a,VueRemarkRoot:i.a},d=function(e){var t=e.options.components=e.options.components||{},n=e.options.computed=e.options.computed||{};Object.keys(u).forEach((function(e){"object"===s(u[e])&&"function"==typeof u[e].render||"function"==typeof u[e]&&"function"==typeof u[e].options.render?t[e]=u[e]:n[e]=function(){return u[e]}}))},l=r.a.config.optionMergeStrategies,c="__vueRemarkFrontMatter",p={excerpt:null,title:"In Vain...",band:"Reenchantment",authors:["Victor Fisher"],explicit:!0,type:"Song",description:"This song reflects upon the awesome power that is possessed by an empire and the vast impact of its gravitational field.\n\nThe audio clips were sourced from an [RT News](https://www.rt.com/) interview with Senator Mike Gravel.\n",recordings:[{title:"In Vain...",type:"Recording",style:"Doom Metal",length:"8:27",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/In+Vain.../In+Vain....mp3"}],lyrics:"RT Reporter:\n> Mike Gravel is the senator who exposed widespread atrocities by the US in the Vietnam War.\n> Senator, has the US committed crimes against humanity in Afghanistan, Libya, Iraq, and why is no US politician today exposing that?\n\nSenator Mike Gravel:\n> I am extremely concerned, I am extremely horrified, and I am extremely embarrassed.\n> I think my country is an imperial country.\n> We spend more on defense than all of the rest of the world put together, and we’re broke.\n> One-third of our children don’t even graduate from high-school.\n> All these American soldiers have died in vain, died in vain.\n> And this is a comment that I got from a general.\n> He said, “Mike, they died in vain.”\n\nI am dead to you\nGot buried in the tomb,\nOf your emotion baby\nCan’t let the feeling be\nWhy did it have to happen?\nI lost myself to you\nCan’t go on like this anymore\n\nSenator Mike Gravel:\n> They died in vain, in vain.\n\nThere is no hope for us to leave this f\\*\\*\\*ing trap\nThey sold us out to have the wealth of our nation\nYou buy into their b\\*\\*\\*s\\*\\*\\* plans, you won’t have a chance\nThink for yourself, and you’ll be free, m\\*\\*\\*erf\\*\\*\\*er yeah\n\nSenator Mike Gravel:\n> As a result of 9/11, we have altered our moral compass.\n> We Americans used to think, oh, what happened in Germany could never happen with us. Well, it’s happening with us.\n> A government official, whether it’s military or not, puts your name on a list, because he thinks you’re a traitor or you’re a terrorist.\n> Puts your name on a list, then we dispatch a drone to follow you and then we eventually take it upon ourselves to kill you, without any trial, without any evidence, and then kill about ten other civilians that happen to be standing next to you.\n> It’s difficult for people to understand that when you drop bombs from the air on people, you don’t see ’em die. You don’t see ’em die. They’re down there. You don’t see ’em. You don’t see ’em die.\n> Here, our actions, our actions are causing people to die. Causing people to die. Our actions are causing people to die.\n\nTake it to the streets now\nGo get your f\\*\\*\\*in’ piece now\nGet ready, to take back your rights\nTake it to the streets now\nGet out your f\\*\\*\\*in’ piece now\nGet ready to take back, your God-given rights come on\nClean their clock\nYeah yeah\nYou know their m\\*\\*\\*erf\\*\\*\\*ing clock\n"};var h=function(e){e.options[c]&&(e.options[c]=p),r.a.util.defineReactive(e.options,c,p),e.options.computed=l.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},y=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("VueRemarkRoot",[t("Song",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof d&&d(y),"function"==typeof h&&h(y);t.default=y.exports}}]);