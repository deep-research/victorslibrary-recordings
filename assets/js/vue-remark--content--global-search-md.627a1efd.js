(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2Zix":function(e,t,a){var i=a("NC/Y");e.exports=/MSIE|Trident/.test(i)},BNF5:function(e,t,a){var i=a("NC/Y").match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},ToJy:function(e,t,a){"use strict";var i=a("I+eb"),o=a("We1y"),d=a("ewvW"),n=a("B/qT"),r=a("V37c"),c=a("0Dky"),f=a("rdv8"),l=a("pkCn"),h=a("BNF5"),s=a("2Zix"),p=a("LQDL"),b=a("USzg"),u=[],m=u.sort,v=c((function(){u.sort(void 0)})),g=c((function(){u.sort(null)})),y=l("sort"),w=!c((function(){if(p)return p<70;if(!(h&&h>3)){if(s)return!0;if(b)return b<603;var e,t,a,i,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:a=3;break;case 68:case 71:a=4;break;default:a=2}for(i=0;i<47;i++)u.push({k:t+i,v:a})}for(u.sort((function(e,t){return t.v-e.v})),i=0;i<u.length;i++)t=u[i].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));i({target:"Array",proto:!0,forced:v||!g||!y||!w},{sort:function(e){void 0!==e&&o(e);var t=d(this);if(w)return void 0===e?m.call(t):m.call(t,e);var a,i,c=[],l=n(t);for(i=0;i<l;i++)i in t&&c.push(t[i]);for(a=(c=f(c,function(e){return function(t,a){return void 0===a?-1:void 0===t?1:void 0!==e?+e(t,a)||0:r(t)>r(a)?1:-1}}(e))).length,i=0;i<a;)t[i]=c[i++];for(;i<l;)delete t[i++];return t}})},UQSp:function(e,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},USzg:function(e,t,a){var i=a("NC/Y").match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},c1VD:function(e,t,a){"use strict";a.r(t);var i=a("KHd+"),o=a("uFwe"),d=(a("ToJy"),{props:{filter:{type:String,required:!1}},data:function(){return{filteredData:[]}},methods:{compare:function(e,t){var a=e.title.toLowerCase(),i=t.title.toLowerCase();return a<i?-1:a>i?1:0}},mounted:function(){var e,t=Object(o.a)(this.$static.pages.edges);try{for(t.s();!(e=t.n()).done;){var a=e.value;this.filteredData.push(a.node)}}catch(e){t.e(e)}finally{t.f()}this.filteredData.sort(this.compare)}}),n=a("oCYn"),r=n.a.config.optionMergeStrategies.computed,c={pages:{edges:[{node:{id:"bbe53db26d78d1c3678f33fd3524db7e",title:"WMXM Hard Rock Promo",path:"/wmxm-hard-rock-promo/"}},{node:{id:"8d313f081a94e942f73e997433b0a974",title:"With My Eyes",path:"/with-my-eyes/"}},{node:{id:"04f0db6d3a060a004926b31338f7e05d",title:"Why We Need Despair",path:"/why-we-need-despair/"}},{node:{id:"7a4f3348493a25bbe662d4c0b01d3c26",title:"What For?",path:"/what-for/"}},{node:{id:"e948ca83d1003d979d04c197d007a686",title:"Versions",path:"/versions/"}},{node:{id:"5dd148bcb1c7924ae419539616e447fa",title:"Under the Spell of the Mystical Mist",path:"/under-the-spell-of-the-mystical-mist/"}},{node:{id:"b136540c0a6fc85021532effe27b433e",title:"Trip-tamine",path:"/trip-tamine/"}},{node:{id:"09efb2e7620e6ec690bfe7410cbbe7fb",title:"This Wicked Realm",path:"/this-wicked-realm/"}},{node:{id:"ebce393de37d4bbeacdd26eb417a1e4c",title:"They’ll Come For You",path:"/theyll-come-for-you/"}},{node:{id:"37ab9e921ae044112ea7c01c477947a1",title:"The Wrath of God",path:"/the-wrath-of-god/"}},{node:{id:"65cdf5ce1ea726da399cad2a320f60b2",title:"The Weirdness of the Night",path:"/the-weirdness-of-the-night/"}},{node:{id:"5c175d957c765f20247be8b65930cfe8",title:"The Truth About This World",path:"/the-truth-about-this-world/"}},{node:{id:"7955b0ed5fc32448b90323d4da40c1ad",title:"The Temple of Delirium",path:"/the-temple-of-delirium/"}},{node:{id:"05614b0d73cd19f1b17af918ce31c8a0",title:"The Ritual",path:"/the-ritual/"}},{node:{id:"2554f271957c30e8ace62ba3ea643423",title:"The Philosophical and Spiritual Value of Music (Research Paper)",path:"/the-philosophical-and-spiritual-value-of-music-research-paper/"}},{node:{id:"c92805a0d192c4c79d9b7256d317f3d1",title:"The Paths of Mist",path:"/the-paths-of-mist/"}},{node:{id:"e5dc02ce12d38960a735504cc8b5694b",title:"The Paranoid Hallucinations of an Evil Spirit (Deep Within the Hidden Swamp)",path:"/the-paranoid-hallucinations-of-an-evil-spirit-deep-within-the-hidden-swamp/"}},{node:{id:"7996b16c7521f19369c04945ae755947",title:"The Medicinal Applications of Despair",path:"/the-medicinal-applications-of-despair/"}},{node:{id:"e93bcfd29391b6e173bede7d39e838e7",title:"The Life of a Pilgrim",path:"/the-life-of-a-pilgrim/"}},{node:{id:"7b13a052cbf713c2b9c62f8ac2d40d78",title:"The Legend of Reenchantment",path:"/the-legend-of-reenchantment/"}},{node:{id:"9f6036c37f5d2f55a467f9f758243ab5",title:"The Invasion of the Telepathic Squirrels",path:"/the-invasion-of-the-telepathic-squirrels/"}},{node:{id:"dbf35a518561bc7c12b76ca664d12e72",title:"The Groove Gestapo",path:"/the-groove-gestapo/"}},{node:{id:"90ade81a3b11247c733e99d923ddfa90",title:"The Grieg and Euphorization Revealed",path:"/the-grieg-and-euphorization-revealed/"}},{node:{id:"b49984038d76bdcef3392c8403880625",title:"The Exploratory Committee on Plant-based Liberation",path:"/the-exploratory-committee-on-plant-based-liberation/"}},{node:{id:"2012eb06a000d69230609c5187bfb23f",title:"The Disco King",path:"/the-disco-king/"}},{node:{id:"0578b46cedf7867ee50d5f0d4372e31d",title:"The Curse of the Gothic Rainberries at Death’s Door",path:"/the-curse-of-the-gothic-rainberries-at-death-s-door/"}},{node:{id:"178201dc9f9ee9f4ce2ca0c992daabc4",title:"The Ceremony of Forgiveness",path:"/the-ceremony-of-forgiveness/"}},{node:{id:"15eeeb59d5448f06b228b57432534e26",title:"The 666 Names of Aleister Crowley",path:"/the-666-names-of-aleister-crowley/"}},{node:{id:"76eade997547de9e982d0db64a90627c",title:"Terra Incognita",path:"/terra-incognita/"}},{node:{id:"ca577021df58d9e641aeb81324bfbac8",title:"Suicidal Shaman",path:"/suicidal-shaman/"}},{node:{id:"bbd4e50bb4deb49d93aa931348555d86",title:"Spring Weather PSA",path:"/spring-weather-psa/"}},{node:{id:"3043ab25f0698ac435aa8fa0d869d0b9",title:"Soul Loss in the Midst of an Endless Winter",path:"/soul-loss-in-the-midst-of-an-endless-winter/"}},{node:{id:"81ded9cc01fbfa142eb2b59101db6a32",title:"Song for a Friend",path:"/song-for-a-friend/"}},{node:{id:"b2424491dc0357193d4ba430e7b08af1",title:"Sleeper Cell",path:"/sleeper-cell/"}},{node:{id:"7aa8038216cb93449b8153e882ffcebb",title:"Satanic Drug Users from Outer Space",path:"/satanic-drug-users-from-outer-space/"}},{node:{id:"c372c18c7edfc9ee9f65c29f1b8469e8",title:"Review of The Ritual By She Likes It Heavy (Positive)",path:"/review-of-the-ritual-by-she-likes-it-heavy-positive/"}},{node:{id:"47ab613b4a197fc1c6e03f213f142c98",title:"Review of Spirit Writing by Lords of Metal (Negative)",path:"/review-of-spirit-writing-by-lords-of-metal-negative/"}},{node:{id:"e7064550915ef1a3dfb958cc44fa3894",title:"Review of Spirit Writing by Forgotten Songs (Positive)",path:"/review-of-spirit-writing-by-forgotten-songs-positive/"}},{node:{id:"ba6b5865c322ca58814d15f4cb032b80",title:"Review of Demo 2019 by Ted Nubel (Positive)",path:"/review-of-demo-2019-by-ted-nubel-positive/"}},{node:{id:"788b92b4a6b951ffdd9153e04c11a49e",title:"Remember",path:"/remember/"}},{node:{id:"6f78324b9249f51c8c33572f7ec398c1",title:"Reenchantment",path:"/reenchantment/"}},{node:{id:"65a20af50fd24104e32dd9b6f9fb9df2",title:"A Voice in the Distance",path:"/a-voice-in-the-distance/"}},{node:{id:"b2c8ea7438ff3f29068ea600b45b1ac3",title:"Reenchantment Related Projects",path:"/reenchantment-related-projects/"}},{node:{id:"e9d9de853e98912d815678a8c9282b2c",title:"Pure Misery",path:"/pure-misery/"}},{node:{id:"458d187ad1a3ac224ceaf89852ac3cf3",title:"Prescription Silencer",path:"/prescription-silencer/"}},{node:{id:"870388bb0010306012f810a43c4f4cfe",title:"Pater Shrouder",path:"/pater-shrouder/"}},{node:{id:"8d5ed63faa2a4f091a5ebc773356fc31",title:"Otherworldly Dream Magic",path:"/otherworldly-dream-magic/"}},{node:{id:"e37190f6ed6ebc692d44e85b960d423a",title:"On an Astral Journey to an Expanded Consciousness",path:"/on-an-astral-journey-to-an-expanded-consciousness/"}},{node:{id:"0370dd839b5cfdf6bbd5e5da3d610e42",title:"My Political Warning to America From 2013",path:"/my-political-warning-to-america-from-2013/"}},{node:{id:"268f2ed51f38937d15bac992e4d36ff6",title:"Music",path:"/music/"}},{node:{id:"351e508d5cf0dfac45d92da89cf4fafe",title:"Maximum Emotional Capacity",path:"/maximum-emotional-capacity/"}},{node:{id:"a36e28e014e68667da6bf1a94adbdf58",title:"Mad in Time (Cover)",path:"/mad-in-time-cover/"}},{node:{id:"13af970fec65f1995638986e21db47e4",title:"Low Frequency",path:"/low-frequency/"}},{node:{id:"bf34de1307a94734a198eec6014fa4d5",title:"Jonesian",path:"/jonesian/"}},{node:{id:"dabf7b2af8d17f5ed22e270a36e6c80f",title:"Home",path:"/"}},{node:{id:"69cdef37884b895edaa9687ee6e860a0",title:"In Vain...",path:"/in-vain/"}},{node:{id:"30019fbf632a7654b7fc14aa4b626be0",title:"Hypnotics",path:"/hypnotics/"}},{node:{id:"44f03b31a3bea8c899c62a4c149d7009",title:"How Enlightened Are You?",path:"/how-enlightened-are-you/"}},{node:{id:"f3f802fa21f5f1ad27ccc3fe927bf8be",title:"High Fructose Corn Syrup",path:"/high-fructose-corn-syrup/"}},{node:{id:"6b416be3e68df8e032ca488ab1572eb7",title:"Global Search",path:"/global-search/"}},{node:{id:"d46eadee8736448a972df02151ea4112",title:"Gaze into the Vast Ethers of Perception",path:"/gaze-into-the-vast-ethers-of-perception/"}},{node:{id:"e0daf7700314e262a209588d12e91dd5",title:"From Path to Portal",path:"/from-path-to-portal/"}},{node:{id:"1346573d67eadd31607bb107de59f8f6",title:"Follow the Light",path:"/follow-the-light/"}},{node:{id:"a30f1b6251f3d2b411237125afd889d3",title:"DroneTheist [Coda entitled Desire and Pain]",path:"/drone-theist-coda-entitled-desire-and-pain/"}},{node:{id:"b1eb04a996771923b2a6b4b28ec408cc",title:"Drawing Down the Moon (The Art of the Cunning)",path:"/drawing-down-the-moon-the-art-of-the-cunning/"}},{node:{id:"7d811f29d6a2dcd0a5d501c5cfb3fcb8",title:"Doom Sex (Mind Control Extradimensional Ecstasy)",path:"/doom-sex-mind-control-extradimensional-ecstasy/"}},{node:{id:"afdc217b8d2b69278ef1b261df944811",title:"Distorted Dreams",path:"/distorted-dreams/"}},{node:{id:"2d2bd624ce9ff7454b0a3bbb74d06da4",title:"Disoriented By the Forest Dark (Far From Help)",path:"/disoriented-by-the-forest-dark-far-from-help/"}},{node:{id:"444bbeae53038df5072d00be73d0fc73",title:"derShamanDrone",path:"/der-shaman-drone/"}},{node:{id:"a83a41c4156ac75cca0837b98cf792e5",title:"Delusions of Mystical Transcendence",path:"/delusions-of-mystical-transcendence/"}},{node:{id:"fd6ed19a9a5b33d380696e14481e675c",title:"Charlie",path:"/charlie/"}},{node:{id:"6593eeb4276d5946ff1b0e654a15e84f",title:"By the Light of the Moon",path:"/by-the-light-of-the-moon/"}},{node:{id:"ae5ffb3617d64a41b1fd7e236999c0fa",title:"Black Bile",path:"/black-bile/"}},{node:{id:"fbc2045f7b07f98d342ccebabc477437",title:"Attempting to Survive in Alternative Planes of Existence",path:"/attempting-to-survive-in-alternative-planes-of-existence/"}},{node:{id:"5bfabce1781403f5f8363d9faeab9bcd",title:"As the Aged Wanderer Doth Sulk (Slave of the Seas)",path:"/as-the-aged-wanderer-doth-sulk-slave-of-the-seas/"}},{node:{id:"66d4915519eed443353dab5d1c3f5b53",title:"Aries Girl",path:"/aries-girl/"}},{node:{id:"711703a5cfc0f76920fc765ecc8cf980",title:"Apathy = Freedom",path:"/apathy-equals-freedom/"}},{node:{id:"56b9b2d4b901b11d44d1100071b720a6",title:"An Invocation of a Spirit Yet Unknown",path:"/an-invocation-of-a-spirit-yet-unknown/"}},{node:{id:"b2bf66f64228ac6d2f290d82124881ac",title:"Al Qaeda and Jesus",path:"/al-qaeda-and-jesus/"}},{node:{id:"01effe6c8e6cdad64c4e3463ad7bb969",title:"A Plastic Paradise",path:"/a-plastic-paradise/"}},{node:{id:"f98a13f96cbcd9bdd13f0d6aad0f3e1d",title:"A Portrait of Prince Khalil",path:"/a-portrait-of-prince-khalil/"}},{node:{id:"17bacf42d0e497638e88e61821f7f5b7",title:"A Guide to Occult Research",path:"/a-guide-to-occult-research/"}},{node:{id:"ec87598fdc3e2bc71c8fe49d9ece3fa2",title:"Reenchantment Timeline",path:"/reenchantment-timeline/"}}]}},f=function(e){var t=e.options;t.__staticData?t.__staticData.data=c:(t.__staticData=n.a.observable({data:c}),t.computed=r({$static:function(){return t.__staticData.data}},t.computed))},l=Object(i.a)(d,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Results: "+e._s(e.filteredData.length))]),a("ol",e._l(e.filteredData,(function(t){return a("li",{key:t.id},[a("g-link",{attrs:{to:t.path}},[e._v(e._s(t.title))])],1)})),0)])}),[],!1,null,null,null);"function"==typeof f&&f(l);var h=l.exports,s=a("UQSp");function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.a.config.optionMergeStrategies;var b={GlobalSearch:h,VueRemarkRoot:s.a},u=function(e){var t=e.options.components=e.options.components||{},a=e.options.computed=e.options.computed||{};Object.keys(b).forEach((function(e){"object"===p(b[e])&&"function"==typeof b[e].render||"function"==typeof b[e]&&"function"==typeof b[e].options.render?t[e]=b[e]:a[e]=function(){return b[e]}}))},m=n.a.config.optionMergeStrategies,v="__vueRemarkFrontMatter",g={excerpt:null,title:"Global Search",authors:["Victor Fisher"],updated:"2021-11-02"};var y=function(e){e.options[v]&&(e.options[v]=g),n.a.util.defineReactive(e.options,v,g),e.options.computed=m.computed({$frontmatter:function(){return e.options[v]}},e.options.computed)},w=Object(i.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("VueRemarkRoot",[t("GlobalSearch")],1)}),[],!1,null,null,null);"function"==typeof u&&u(w),"function"==typeof y&&y(w);t.default=w.exports},rdv8:function(e,t){var a=Math.floor,i=function(e,t){var n=e.length,r=a(n/2);return n<8?o(e,t):d(i(e.slice(0,r),t),i(e.slice(r),t),t)},o=function(e,t){for(var a,i,o=e.length,d=1;d<o;){for(i=d,a=e[d];i&&t(e[i-1],a)>0;)e[i]=e[--i];i!==d++&&(e[i]=a)}return e},d=function(e,t,a){for(var i=e.length,o=t.length,d=0,n=0,r=[];d<i||n<o;)d<i&&n<o?r.push(a(e[d],t[n])<=0?e[d++]:t[n++]):r.push(d<i?e[d++]:t[n++]);return r};e.exports=i}}]);