(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"7GA/":function(t,e,o){"use strict";o("rB9j"),o("EnZy"),o("DQNa");var n=o("sWYD");e.a={methods:{formatDate:function(t){var e=t.split("-"),o=new Date(e[0],e[1]-1,e[2]);return Object(n.a)(o,"MM/dd/yyy")}}}},Kglc:function(t,e,o){"use strict";var n=o("7GA/"),a={props:{songData:{type:Object,required:!0}},mixins:[n.a]},s=o("KHd+"),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.songData.band?o("div",[t._v("\n    By: "+t._s(t.songData.band)+"\n    "),t.songData.authors?o("span",[t._v("\n      ("+t._s(t.songData.authors.join(", "))+")\n    ")]):t._e()]):o("div",[t.songData.authors?o("span",[t._v("\n      By: "+t._s(t.songData.authors.join(", "))+"\n    ")]):t._e()]),t.songData.type?o("div",[t._v("\n    Type: "),o("g-link",{attrs:{to:"/songs"}},[t._v("Song")])],1):t._e(),t.songData.published?o("div",[t._v("\n    Published: "+t._s(t.formatDate(t.songData.published))+"\n  ")]):t._e(),t.songData.updated?o("div",[t._v("\n    Updated: "+t._s(t.formatDate(t.songData.updated))+"\n  ")]):t._e(),t.songData.explicit?o("p",[t._v("\n    ⚠️ Warning: Contains explicit content.\n  ")]):t._e(),t.songData.description?o("div",[o("h3",[t._v("Description")]),o("vue-markdown",[t._v(t._s(t.songData.description))])],1):t._e(),t.songData.recordings?o("div",[o("h3",[t._v("Recordings")]),t._l(t.songData.recordings,(function(e,n){return o("div",{key:n},[e.title?o("h4",[t._v(t._s(n+1)+". "+t._s(e.title))]):t._e(),e.type?o("div",[t._v("Type: "+t._s(e.type))]):t._e(),e.style?o("div",[t._v("Style: "+t._s(e.style))]):t._e(),e.released?o("div",[t._v("Released: "+t._s(t.formatDate(e.released)))]):t._e(),e.link?o("p",[o("audio",{attrs:{controls:"",controlsList:"nodownload"}},[o("source",{attrs:{src:e.link,type:"audio/ogg"}}),o("source",{attrs:{src:e.link,type:"audio/mpeg"}}),t._v("\n        Your browser does not support the audio element.\n        ")])]):t._e()])}))],2):t._e(),t.songData.lyrics?o("div",[o("h3",[t._v("Lyrics")]),o("vue-markdown",[t._v(t._s(t.songData.lyrics))])],1):t._e()])}),[],!1,null,null,null);e.a=i.exports},arTZ:function(t,e,o){"use strict";o.r(e);var n=o("KHd+"),a=o("Kglc"),s=o("UQSp"),i=o("oCYn");function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var c={Song:a.a,VueRemarkRoot:s.a},u=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===r(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:o[t]=function(){return c[t]}}))},l=i.a.config.optionMergeStrategies,d="__vueRemarkFrontMatter",p={excerpt:null,title:"Jonesian",band:"Reenchantment",authors:["Victor Fisher"],explicit:!1,type:"Song",description:"This rap song was a protest against the attempt to control my creative process through the genre system.\n",recordings:[{title:"Jonesian",type:"Recording",style:"Electronic",length:"3:55",released:null,link:"https://victorslibrary.s3.amazonaws.com/music/Jonesian/Jonesian.mp3"}],lyrics:"What is?\n\nTimes are lookin’ tough, you gotta stop, take a long had look upon yourself\n’cause you’ve been had by the powers that be, and think that only God will set you free\nSo stop reading Alex Jones all night, and take a look outside your window at the ground\nAnd realize that your demise ignores that chances there that will be found\n\nNow all the rockers and the fans of rap, we can unite around a purpose, common goals\nWe must incinerate those wicked ones, who plan a world that is boring with no soul\nThey feed those lies to us, that compromise is a productive way to live\nWhy can’t they understand that we’ve already given them all we’ve to give\n\nHow could it be our identities, would be considered as a threat to common good\nHow insecure of your personal life must you be to make the theory they would\nI cannot understand this plea, to rid the world of all of its variety\nStop thinking that we live our lives, comparing every little choice to others’ voice\n\nNow dance\n\nFemale Voice:\n> Oh yeah\n"};var h=function(t){t.options[d]&&(t.options[d]=p),i.a.util.defineReactive(t.options,d,p),t.options.computed=l.computed({$frontmatter:function(){return t.options[d]}},t.options.computed)},y=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("Song",{attrs:{songData:this.$frontmatter}})],1)}),[],!1,null,null,null);"function"==typeof u&&u(y),"function"==typeof h&&h(y);e.default=y.exports}}]);