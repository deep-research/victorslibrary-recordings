(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2Zix":function(e,t,i){var o=i("NC/Y");e.exports=/MSIE|Trident/.test(o)},BNF5:function(e,t,i){var o=i("NC/Y").match(/firefox\/(\d+)/i);e.exports=!!o&&+o[1]},ToJy:function(e,t,i){"use strict";var o=i("I+eb"),a=i("We1y"),n=i("ewvW"),d=i("B/qT"),r=i("V37c"),c=i("0Dky"),s=i("rdv8"),f=i("pkCn"),h=i("BNF5"),l=i("2Zix"),g=i("LQDL"),p=i("USzg"),b=[],u=b.sort,m=c((function(){b.sort(void 0)})),S=c((function(){b.sort(null)})),y=f("sort"),v=!c((function(){if(g)return g<70;if(!(h&&h>3)){if(l)return!0;if(p)return p<603;var e,t,i,o,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:i=3;break;case 68:case 71:i=4;break;default:i=2}for(o=0;o<47;o++)b.push({k:t+o,v:i})}for(b.sort((function(e,t){return t.v-e.v})),o=0;o<b.length;o++)t=b[o].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}}));o({target:"Array",proto:!0,forced:m||!S||!y||!v},{sort:function(e){void 0!==e&&a(e);var t=n(this);if(v)return void 0===e?u.call(t):u.call(t,e);var i,o,c=[],f=d(t);for(o=0;o<f;o++)o in t&&c.push(t[o]);for(i=(c=s(c,function(e){return function(t,i){return void 0===i?-1:void 0===t?1:void 0!==e?+e(t,i)||0:r(t)>r(i)?1:-1}}(e))).length,o=0;o<i;)t[o]=c[o++];for(;o<f;)delete t[o++];return t}})},UQSp:function(e,t,i){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},USzg:function(e,t,i){var o=i("NC/Y").match(/AppleWebKit\/(\d+)\./);e.exports=!!o&&+o[1]},c1VD:function(e,t,i){"use strict";i.r(t);var o=i("KHd+"),a=i("uFwe"),n=(i("ToJy"),{props:{filter:{type:String,required:!1}},data:function(){return{filteredData:[]}},methods:{compare:function(e,t){var i=e.title.toLowerCase(),o=t.title.toLowerCase();return i<o?-1:i>o?1:0}},mounted:function(){var e,t=Object(a.a)(this.$static.pages.edges);try{for(t.s();!(e=t.n()).done;){var i=e.value;this.filteredData.push(i.node)}}catch(e){t.e(e)}finally{t.f()}this.filteredData.sort(this.compare)}}),d=i("oCYn"),r=d.a.config.optionMergeStrategies.computed,c={pages:{edges:[{node:{id:"041c5a28ff0b033d2b73b81c2e772aa7",title:"Recording: Trip-tamine",path:"/recording/trip-tamine/"}},{node:{id:"3e1770ae6a26c29e6dc21b03ddca31dd",title:"Recording: This Wicked Realm",path:"/recording/this-wicked-realm/"}},{node:{id:"21fe63cd09a8b0569f9aee920cf092fc",title:"Recording: They’ll Come For You (Pilgrimage Version)",path:"/recording/theyll-come-for-you-pigrimage-version/"}},{node:{id:"94ec6c4c16e2df5c08bbb0982c6c394b",title:"Song: WMXM Hard Rock Promo",path:"/song/wmxm-hard-rock-promo/"}},{node:{id:"c64a7db9e5bbda0cd02db4676108b7ba",title:"Song: With My Eyes",path:"/song/with-my-eyes/"}},{node:{id:"eedfbbf260f9324e7b44bf270c91370d",title:"Song: What For?",path:"/song/what-for/"}},{node:{id:"ec19eca6c8876b629ecccfff0553c9d2",title:"Song: Under the Spell of the Mystical Mist",path:"/song/under-the-spell-of-the-mystical-mist/"}},{node:{id:"1f3393d366e20616e8699ba8e7794602",title:"Song: Trip-tamine",path:"/song/trip-tamine/"}},{node:{id:"073ee84db02e66f232579d946f8c1563",title:"Song: This Wicked Realm",path:"/song/this-wicked-realm/"}},{node:{id:"01c40d8365f4755618b1c31a31f47aa2",title:"Song: They’ll Come For You",path:"/song/theyll-come-for-you/"}},{node:{id:"95e633482dd5a241773a8a635d07a55e",title:"Song: The Wrath of God",path:"/song/the-wrath-of-god/"}},{node:{id:"d84a256b43e64d28d1582bd66f6bf740",title:"Song: The Weirdness of the Night",path:"/song/the-weirdness-of-the-night/"}},{node:{id:"6679331fa2e240e935e6ca4aa41817b9",title:"Song: The Truth About This World",path:"/song/the-truth-about-this-world/"}},{node:{id:"6a995f816f0c2ec964e20d437827b3df",title:"Song: The Temple of Delirium",path:"/song/the-temple-of-delirium/"}},{node:{id:"76d95a91606a555ff4d42242230a6da6",title:"Song: The Ritual",path:"/song/the-ritual/"}},{node:{id:"68494f9902aabbc6484e9adceddea252",title:"Song: The Paths of Mist",path:"/song/the-paths-of-mist/"}},{node:{id:"eee6d64ef89c30db29581682c73e9bdb",title:"Song: The Paranoid Hallucinations of an Evil Spirit (Deep Within the Hidden Swamp)",path:"/song/the-paranoid-hallucinations-of-an-evil-spirit-deep-within-the-hidden-swamp/"}},{node:{id:"507a97dd6187044c43a8e676bc574204",title:"Song: The Medicinal Applications of Despair",path:"/song/the-medicinal-applications-of-despair/"}},{node:{id:"fb935ee31ab2c11f96f2d9453e648d9c",title:"Song: The Life of a Pilgrim",path:"/song/the-life-of-a-pilgrim/"}},{node:{id:"f01c8c7ba1e1febd9817ee939f136263",title:"Song: The Invasion of the Telepathic Squirrels",path:"/song/the-invasion-of-the-telepathic-squirrels/"}},{node:{id:"45ef381684036e744ac39d9185a11412",title:"Song: The Groove Gestapo",path:"/song/the-groove-gestapo/"}},{node:{id:"31597d135c04d581fb85135b49ab3c6d",title:"Song: The Grieg and Euphorization Revealed",path:"/song/the-grieg-and-euphorization-revealed/"}},{node:{id:"8e139fd5392dfdb91394ed55bd68c860",title:"Song: The Exploratory Committee on Plant-based Liberation",path:"/song/the-exploratory-committee-on-plant-based-liberation/"}},{node:{id:"10218374cff83570ce6ced2b77a4547a",title:"Song: The Curse of the Gothic Rainberries at Death’s Door",path:"/song/the-curse-of-the-gothic-rainberries-at-deaths-door/"}},{node:{id:"36c37ba25ae90688ccff3be17c109924",title:"Song: The Disco King",path:"/song/the-disco-king/"}},{node:{id:"6297d37cb51111f912df70518e1c1914",title:"Song: The Ceremony of Forgiveness",path:"/song/the-ceremony-of-forgiveness/"}},{node:{id:"da06eb1bf915a28b2eceb659c70bfd0e",title:"Song: The 666 Names of Aleister Crowley",path:"/song/the-666-names-of-aleister-crowley/"}},{node:{id:"1f0b7403367e790afb9e6fedc770d78c",title:"Song: Terra Incognita",path:"/song/terra-incognita/"}},{node:{id:"f788d531459e04cb8ca5cdb7463a89dc",title:"Song: Suicidal Shaman",path:"/song/suicidal-shaman/"}},{node:{id:"6512d6d9c0b478a9a3ce21ad87f0a5ac",title:"Song: Spring Weather PSA",path:"/song/spring-weather-psa/"}},{node:{id:"89400e791759b17d2478d3c58904cf26",title:"Song: Soul Loss in the Midst of an Endless Winter",path:"/song/soul-loss-in-the-midst-of-an-endless-winter/"}},{node:{id:"285630799865b4c15a600595bb1cc074",title:"Song: Song for a Friend",path:"/song/song-for-a-friend/"}},{node:{id:"3aedf71c1f35c0e81855a98375c06f5b",title:"Song: Sleeper Cell",path:"/song/sleeper-cell/"}},{node:{id:"18da2073edf250d8b427c7f91429119f",title:"Song: Satanic Drug Users from Outer Space",path:"/song/satanic-drug-users-from-outer-space/"}},{node:{id:"14bfcd15ac8ff67579b260ab1712afad",title:"Song: Remember",path:"/song/remember/"}},{node:{id:"0c4690a1b889f565857fa3ac2e6d8a79",title:"Song: Pure Misery",path:"/song/pure-misery/"}},{node:{id:"69e50ca37db7810c15c6b16b5c1a2acf",title:"Song: Prescription Silencer",path:"/song/prescription-silencer/"}},{node:{id:"7329bb83f4c08b4340c5d3ce2e20275c",title:"Song: Otherworldly Dream Magic",path:"/song/otherworldly-dream-magic/"}},{node:{id:"71939d3dd35242f92e82c759b303bf04",title:"Song: On an Astral Journey to an Expanded Consciousness",path:"/song/on-an-astral-journey-to-an-expanded-consciousness/"}},{node:{id:"27f17912c6a85e4961a2a9617e2f5db0",title:"Song: Maximum Emotional Capacity",path:"/song/maximum-emotional-capacity/"}},{node:{id:"6815ef21ad36d9d7e0f582a4746fa11f",title:"Song: Mad in Time (Cover)",path:"/song/mad-in-time-cover/"}},{node:{id:"aa5d507cdcf7776d2ebbb2d19852f91d",title:"Song: Low Frequency",path:"/song/low-frequency/"}},{node:{id:"b4ed38c7078d16c5f95c3f815b0c20fd",title:"Song: Jonesian",path:"/song/jonesian/"}},{node:{id:"631a1fe6c3cc7c8d4b20060c90892ad4",title:"Song: In Vain...",path:"/song/in-vain/"}},{node:{id:"f988e9f1ed8c0ed0d5fce24151b9c0b7",title:"Song: Hypnotics",path:"/song/hypnotics/"}},{node:{id:"a8e0cd7dd9175c1142e0bd5b9ebaede2",title:"Song: How Enlightened Are You?",path:"/song/how-enlightened-are-you/"}},{node:{id:"ee790f615e8cbc0523b653d7defdc72a",title:"Song: High Fructose Corn Syrup",path:"/song/high-fructose-corn-syrup/"}},{node:{id:"abfda723b9184f77f86e0e176a926577",title:"Song: Gaze into the Vast Ethers of Perception",path:"/song/gaze-into-the-vast-ethers-of-perception/"}},{node:{id:"a534ba58a1b79f13c74f8e972575a37e",title:"Song: Doom Sex (Mind Control Extradimensional Ecstasy)",path:"/song/doom-sex-mind-control-extradimensional-ecstasy/"}},{node:{id:"df58317f854f05452a3c7b062ab8ab69",title:"Song: From Path to Portal",path:"/song/from-path-to-portal/"}},{node:{id:"fa1f63b8bb888f682bf2c6b43833bec5",title:"Song: Follow the Light",path:"/song/follow-the-light/"}},{node:{id:"8793fc14a5f08abfdc7b5f7137104d04",title:"Song: DroneTheist [Coda entitled Desire and Pain]",path:"/song/drone-theist-coda-entitled-desire-and-pain/"}},{node:{id:"bf3301c11ca3d6acf8195ef2ecdd5821",title:"Song: Drawing Down the Moon (The Art of the Cunning)",path:"/song/drawing-down-the-moon-the-art-of-the-cunning/"}},{node:{id:"8e03cf2a36add3499ff4400ae2f01a95",title:"Song: Distorted Dreams",path:"/song/distorted-dreams/"}},{node:{id:"fb492f00d5106cfdfb34d9f27b9c7426",title:"Song: Disoriented By the Forest Dark (Far From Help)",path:"/song/disoriented-by-the-forest-dark-far-from-help/"}},{node:{id:"124b36ab1e84342809129555cda19fc7",title:"Song: derShamanDrone",path:"/song/der-shaman-drone/"}},{node:{id:"32db549f6da180bd6d32c0dbeca2da28",title:"Song: Delusions of Mystical Transcendence",path:"/song/delusions-of-mystical-transcendence/"}},{node:{id:"0ccdbaf1720b9c04d5a37fec49d678dc",title:"Song: Charlie",path:"/song/charlie/"}},{node:{id:"601564a1a118abba0fd1ba04c09e56cb",title:"Song: By the Light of the Moon",path:"/song/by-the-light-of-the-moon/"}},{node:{id:"4959e259eedf749a87af03da5518bbc8",title:"Song: Black Bile",path:"/song/black-bile/"}},{node:{id:"579fa6467029907a3d8bbde9fbd22e8f",title:"Song: Attempting to Survive in Alternative Planes of Existence",path:"/song/attempting-to-survive-in-alternative-planes-of-existence/"}},{node:{id:"4d99a6a6ab1e0b5b1b5c4574fe09039c",title:"Song: As the Aged Wanderer Doth Sulk (Slave of the Seas)",path:"/song/as-the-aged-wanderer-doth-sulk-slave-of-the-seas/"}},{node:{id:"d18c29b5fc6243159a60fb99c658750a",title:"Song: Aries Girl",path:"/song/aries-girl/"}},{node:{id:"c92b17437df3a994114647ec828356b7",title:"Song: Apathy = Freedom",path:"/song/apathy-equals-freedom/"}},{node:{id:"1ee1543df4a2112b5ac903069f0d215a",title:"Song: An Invocation of a Spirit Yet Unknown",path:"/song/an-invocation-of-a-spirit-yet-unknown/"}},{node:{id:"ab00c8fa19adbf973c4344d35460bbd4",title:"Song: Al Qaeda and Jesus",path:"/song/al-qaeda-and-jesus/"}},{node:{id:"40299aec2543f7bd24df1003b4842110",title:"Song: A Voice in the Distance",path:"/song/a-voice-in-the-distance/"}},{node:{id:"30ac34c02e8033606fff46b2e7221ae6",title:"Song: A Portrait of Prince Khalil",path:"/song/a-portrait-of-prince-khalil/"}},{node:{id:"f82e57f4821d22f99112a6409e94c279",title:"Song: A Plastic Paradise",path:"/song/a-plastic-paradise/"}},{node:{id:"959ec690daeed966747c9bdee610faa7",title:"Recording: WMXM Hard Rock Promo",path:"/recording/wmxm-hard-rock-promo/"}},{node:{id:"4461e49f4b5ee4fdb06dbdd9161c3f8a",title:"Recording: With My Eyes",path:"/recording/with-my-eyes/"}},{node:{id:"b4db3199dcae63749672a469cc927801",title:"Recording: What For?",path:"/recording/what-for/"}},{node:{id:"25632f1be38a3b795bb5fd643ae08167",title:"Recording: They’ll Come For You (Mermaid Version)",path:"/recording/theyll-come-for-you-mermaid-version/"}},{node:{id:"7fe063d973a0b1dbc7dc4c331bc90a5a",title:"Recording: The Wrath of God",path:"/recording/the-wrath-of-god/"}},{node:{id:"c1e5b6f3be8a3e298ceed80271b6771e",title:"Recording: They’ll Come For You (Live at the Sacred Forest)",path:"/recording/theyll-come-for-you-live-at-the-sacred-forest/"}},{node:{id:"bc5468e689c4f8f6cb409824cbabcb70",title:"Recording: The Weirdness of the Night",path:"/recording/the-weirdness-of-the-night/"}},{node:{id:"4ff29232ebd26d84484abc6bbd7df4d9",title:"Recording: Terra Incognita",path:"/recording/terra-incognita/"}},{node:{id:"625a4679ba67d25f7d8232105b771822",title:"Recording: The Truth About This World",path:"/recording/the-truth-about-this-world/"}},{node:{id:"6b416be3e68df8e032ca488ab1572eb7",title:"Global Search",path:"/global-search/"}},{node:{id:"3a6dbd883f4545df9c7596d0f851746b",title:"Recording: The Ritual",path:"/recording/the-ritual/"}},{node:{id:"66cb45bedc7a1f5611956da5b80bc1ad",title:"Recording: The Paths of Mist",path:"/recording/the-paths-of-mist/"}},{node:{id:"e476e9a7346a40adb324637954b9b98a",title:"Recording: The Paranoid Hallucinations of an Evil Spirit (Deep Within the Hidden Swamp)",path:"/recording/the-paranoid-hallucinations-of-an-evil-spirit-deep-within-the-hidden-swamp/"}},{node:{id:"95763e90e8fb0d932152d907018ec5e3",title:"Recording: The Medicinal Applications of Despair",path:"/recording/the-medicinal-applications-of-despair/"}},{node:{id:"09bb405c2ef5501bd43378e996a3c509",title:"Recording: The Life of a Pilgrim",path:"/recording/the-life-of-a-pilgrim/"}},{node:{id:"025fc6e24ac462e1335a937558c44baf",title:"Recording: The Invasion of the Telepathic Squirrels",path:"/recording/the-invasion-of-the-telepathic-squirrels/"}},{node:{id:"8298d3eb16c5845168aecc5e8e5d98af",title:"Recording: The Groove Gestapo",path:"/recording/the-groove-gestapo/"}},{node:{id:"c8ad6969a708543dfba54307db43d728",title:"Recording: The Grieg and Euphorization Revealed",path:"/recording/the-grieg-and-euphorization-revealed/"}},{node:{id:"9fc8b650dae8635337c5fa34557f3624",title:"Recording: The Exploratory Committee on Plant-based Liberation",path:"/recording/the-exploratory-committee-on-plant-based-liberation/"}},{node:{id:"3d4b1772e9e5bffec15d8fc606a47078",title:"Recording: The Disco King",path:"/recording/the-disco-king/"}},{node:{id:"9dc679899c69bab05ee9a1a6f332cf6f",title:"Recording: The Curse of the Gothic Rainberries at Death’s Door",path:"/recording/the-curse-of-the-gothic-rainberries-at-deaths-door/"}},{node:{id:"a48b27f2aee8b0690f3f908f54dec8c1",title:"Recording: The Curse of the Gothic Rainberries at Death’s Door (Music Video)",path:"/recording/the-curse-of-the-gothic-rainberries-at-deaths-door-music-video/"}},{node:{id:"e66b23a4d7303bf3ad59f8b7f37580af",title:"Recording: The Ceremony of Forgiveness",path:"/recording/the-ceremony-of-forgiveness/"}},{node:{id:"cbf3807d536adc453b8768c3c9cf07e1",title:"Recording: The 666 Names of Aleister Crowley",path:"/recording/the-666-names-of-aleister-crowley/"}},{node:{id:"6008aa4d44b1767dd2158da1d2cb9e64",title:"Recording: Suicidal Shaman",path:"/recording/suicidal-shaman/"}},{node:{id:"6e81ccc04a879a9b84d81e89ed102c89",title:"Recording: Spring Weather PSA",path:"/recording/spring-weather-psa/"}},{node:{id:"b2fe0033c935654456d9f0b7a2272b13",title:"Recording: Soul Loss in the Midst of an Endless Winter (Doom Version)",path:"/recording/soul-loss-in-the-midst-of-an-endless-winter-doom-version/"}},{node:{id:"25eac6af301af79a50101527a68449c2",title:"Recording: Soul Loss in the Midst of an Endless Winter (Acoustic Version)",path:"/recording/soul-loss-in-the-midst-of-an-endless-winter-acoustic-version/"}},{node:{id:"be3d05435a1aaabb1df88b510469e4fb",title:"Recording: Song for a Friend",path:"/recording/song-for-a-friend/"}},{node:{id:"afa93450cfce480f32eea1a150057041",title:"Recording: Sleeper Cell",path:"/recording/sleeper-cell/"}},{node:{id:"6a1031caec116cbd09221258356e22fb",title:"Recording: Satanic Drug Users from Outer Space",path:"/recording/satanic-drug-users-from-outer-space/"}},{node:{id:"b040e60913ae91ebc9996ca27589eb26",title:"Recording: Remember (High School Version)",path:"/recording/remember/"}},{node:{id:"14b071a35d45d1e7995e884be7e6fa74",title:"Recording: Pure Misery",path:"/recording/pure-misery/"}},{node:{id:"f4c9fca115548ab7ef7753b19d286d9c",title:"Recording: Prescription Silencer",path:"/recording/prescription-silencer/"}},{node:{id:"c05fbbf9a6339455446295b0d775c704",title:"Recording: Otherworldly Dream Magic Consciousness",path:"/recording/otherworldly-dream-magic/"}},{node:{id:"79e2474450311516d10f186274def4ac",title:"Recording: On an Astral Journey to an Expanded Consciousness",path:"/recording/on-an-astral-journey-to-an-expanded-consciousness/"}},{node:{id:"41d2f367d8e6b3943ad1632424ccd79f",title:"Recording: Maximum Emotional Capacity",path:"/recording/maximum-emotional-capacity/"}},{node:{id:"5992b8bf95e58cf4a448527da36db59b",title:"Recording: Mad in Time (Cover)",path:"/recording/mad-in-time-cover/"}},{node:{id:"ac1e93cad4973dfebcab9fe6f40552cd",title:"Recording: Jonesian",path:"/recording/jonesian/"}},{node:{id:"bed9ed899a955a420aa1e99995c855f1",title:"Recording: In Vain...",path:"/recording/in-vain/"}},{node:{id:"1b211ceb5897c2e10ce1c1b0c710777c",title:"Recording: Hypnotics",path:"/recording/hypnotics/"}},{node:{id:"b3761dc0420b18183596bbb4fe512064",title:"Recording: How Enlightened Are You?",path:"/recording/how-enlightened-are-you/"}},{node:{id:"a846b66677f70b46356fa9336abbcc7a",title:"Recording: High Fructose Corn Syrup",path:"/recording/high-fructose-corn-syrup/"}},{node:{id:"3c7343ce71c911fe97bec771c6b54926",title:"Recording: Gaze into the Vast Ethers of Perception (High School Version)",path:"/recording/gaze-into-the-vast-ethers-of-perception-high-school-version/"}},{node:{id:"6b90a3d6d19a6cadd7eb8b8ac4cf4020",title:"Recording: Gaze into the Vast Ethers of Perception (Copyright Version)",path:"/recording/gaze-into-the-vast-ethers-of-perception-copyright-version/"}},{node:{id:"b800e103a1f8e0b814b19a06916ad0a4",title:"Recording: From Path to Portal",path:"/recording/from-path-to-portal/"}},{node:{id:"86b188767e5c92df0e931987711a3db4",title:"Recording: Follow the Light (High School Version)",path:"/recording/follow-the-light-high-school-version/"}},{node:{id:"ca27a46eda362fa8de5c363a1d68ff39",title:"Recording: Follow the Light (Copyright Version)",path:"/recording/follow-the-light-copyright-version/"}},{node:{id:"e22f2949f44a27830bd6ed82fe1241dc",title:"Recording: Follow the Light (Ambient Version)",path:"/recording/follow-the-light-ambient-version/"}},{node:{id:"785e3fde16fa27df94e1607f61d2550a",title:"Recording: DroneTheist [Coda entitled Desire and Pain]",path:"/recording/drone-theist-coda-entitled-desire-and-pain/"}},{node:{id:"94d319762c6041144b4aa20ca95d5e07",title:"Recording: Drawing Down the Moon (The Art of the Cunning)",path:"/recording/drawing-down-the-moon-the-art-of-the-cunning/"}},{node:{id:"6056e5eb9cd169e3085e4f32d348115f",title:"Recording: Doom Sex (Mind Control Extradimensional Ecstasy)",path:"/recording/doom-sex-mind-control-extradimensional-ecstasy/"}},{node:{id:"15813d8419f6329e8dbea5bb0e4fc00b",title:"Recording: Distorted Dreams",path:"/recording/distorted-dreams/"}},{node:{id:"9c6e8db0e902cecb921e0bd38f66388b",title:"Recording: Disoriented By the Forest Dark (Far From Help)",path:"/recording/disoriented-by-the-forest-dark-far-from-help/"}},{node:{id:"7b7e06f634ff3ea78ba659072a2104f7",title:"Recording: derShamanDrone",path:"/recording/der-shaman-drone/"}},{node:{id:"de653efce9b4470519c5dcffd90f6022",title:"Recording: Delusions of Mystical Transcendence",path:"/recording/delusions-of-mystical-transcendence/"}},{node:{id:"233e0cc03fa4b2337be797a193b570ef",title:"Recording: Charlie",path:"/recording/charlie/"}},{node:{id:"f7dcfc330682716bcc9948c0793bf17d",title:"Recording: By the Light of the Moon",path:"/recording/by-the-light-of-the-moon/"}},{node:{id:"325ab662c961fa22dc3dc5815e9b5ad6",title:"Recording: Black Bile",path:"/recording/black-bile/"}},{node:{id:"86c01f107f180c4fa5da086e044cd80d",title:"Recording: Attempting to Survive in Alternative Planes of Existence",path:"/recording/attempting-to-survive-in-alternative-planes-of-existence/"}},{node:{id:"6da2b31502d55183ffdbb061f0a76e45",title:"Recording: As the Aged Wanderer Doth Sulk (Slave of the Seas)",path:"/recording/as-the-aged-wanderer-doth-sulk-slave-of-the-seas/"}},{node:{id:"4a907fab37853aca3ac310871f45a4ad",title:"Recording: Aries Girl",path:"/recording/aries-girl/"}},{node:{id:"fd0a1b5fba34a3531c112a6a88396723",title:"Recording: Apathy = Freedom",path:"/recording/apathy-equals-freedom/"}},{node:{id:"07a2609e9da144f0063157a2857bf8d8",title:"Recording: An Invocation of a Spirit Yet Unknown",path:"/recording/an-invocation-of-a-spirit-yet-unknown/"}},{node:{id:"d64d37a13628d40601612c972716d929",title:"Recording: Al Qaeda and Jesus",path:"/recording/al-qaeda-and-jesus/"}},{node:{id:"dba4875f861542ce3fc59441131e0b96",title:"Recording: Al Qaeda and Jesus (Clean Edit)",path:"/recording/al-qaeda-and-jesus-clean-edit/"}},{node:{id:"f1a4e56bd17676a00851293d7bcba76f",title:"Recording: A Voice in the Distance",path:"/recording/a-voice-in-the-distance/"}},{node:{id:"26c721ef9f693fe51d8ed915515e1d7f",title:"Recording: A Portrait of Prince Khalil",path:"/recording/a-portrait-of-prince-khalil/"}},{node:{id:"ab37c204c5e2dddcca6e98e0324cae9b",title:"Recording: A Plastic Paradise",path:"/recording/a-plastic-paradise/"}},{node:{id:"dd6e36c4eac56f472f918b77c65f0f64",title:"Band: Strange People in Pain",path:"/band/strange-people-in-pain/"}},{node:{id:"cb6d250e25972fe14e14cb8f5ee02e84",title:"Band: Shroud of Delirium",path:"/band/shroud-of-delirium/"}},{node:{id:"f0fa126fe3542d577d8adf22635ec766",title:"Band: Pater Shrouder",path:"/band/pater-shrouder/"}},{node:{id:"696004edc36bc68769186a3a15ea51a9",title:"Band: The Lord Reverend Wizard of Alchemical Despair",path:"/band/reverend-of-despair/"}},{node:{id:"45faf17ee2f8b92dd7e86bc9503e3ced",title:"Band: Reenchantment",path:"/band/reenchantment/"}},{node:{id:"04f0db6d3a060a004926b31338f7e05d",title:"Why We Need Despair",path:"/why-we-need-despair/"}},{node:{id:"e948ca83d1003d979d04c197d007a686",title:"Website Versions",path:"/versions/"}},{node:{id:"2554f271957c30e8ace62ba3ea643423",title:"The Philosophical and Spiritual Value of Music (Research Paper)",path:"/the-philosophical-and-spiritual-value-of-music-research-paper/"}},{node:{id:"7b13a052cbf713c2b9c62f8ac2d40d78",title:"The Legend of Reenchantment",path:"/the-legend-of-reenchantment/"}},{node:{id:"c372c18c7edfc9ee9f65c29f1b8469e8",title:"Review of The Ritual By She Likes It Heavy (Positive)",path:"/review-of-the-ritual-by-she-likes-it-heavy-positive/"}},{node:{id:"b2c8ea7438ff3f29068ea600b45b1ac3",title:"Reenchantment Related Projects",path:"/reenchantment-related-projects/"}},{node:{id:"47ab613b4a197fc1c6e03f213f142c98",title:"Review of Spirit Writing by Lords of Metal (Negative)",path:"/review-of-spirit-writing-by-lords-of-metal-negative/"}},{node:{id:"e7064550915ef1a3dfb958cc44fa3894",title:"Review of Spirit Writing by Forgotten Songs (Positive)",path:"/review-of-spirit-writing-by-forgotten-songs-positive/"}},{node:{id:"ba6b5865c322ca58814d15f4cb032b80",title:"Review of Demo 2019 by Ted Nubel (Positive)",path:"/review-of-demo-2019-by-ted-nubel-positive/"}},{node:{id:"ec87598fdc3e2bc71c8fe49d9ece3fa2",title:"Reenchantment Timeline",path:"/reenchantment-timeline/"}},{node:{id:"268f2ed51f38937d15bac992e4d36ff6",title:"Music",path:"/music/"}},{node:{id:"0370dd839b5cfdf6bbd5e5da3d610e42",title:"My Political Warning to America From 2013",path:"/my-political-warning-to-america-from-2013/"}},{node:{id:"dabf7b2af8d17f5ed22e270a36e6c80f",title:"Home",path:"/"}},{node:{id:"17bacf42d0e497638e88e61821f7f5b7",title:"A Guide to Occult Research",path:"/a-guide-to-occult-research/"}},{node:{id:"16e567aa00a96fe75da9190fe4fa3079",title:"Recording: The Temple of Delirium",path:"/recording/the-temple-of-delirium/"}}]}},s=function(e){var t=e.options;t.__staticData?t.__staticData.data=c:(t.__staticData=d.a.observable({data:c}),t.computed=r({$static:function(){return t.__staticData.data}},t.computed))},f=Object(o.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h3",[e._v("Results: "+e._s(e.filteredData.length))]),i("ol",e._l(e.filteredData,(function(t){return i("li",{key:t.id},[i("g-link",{attrs:{to:t.path}},[e._v(e._s(t.title))])],1)})),0)])}),[],!1,null,null,null);"function"==typeof s&&s(f);var h=f.exports,l=i("UQSp");function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}d.a.config.optionMergeStrategies;var p={GlobalSearch:h,VueRemarkRoot:l.a},b=function(e){var t=e.options.components=e.options.components||{},i=e.options.computed=e.options.computed||{};Object.keys(p).forEach((function(e){"object"===g(p[e])&&"function"==typeof p[e].render||"function"==typeof p[e]&&"function"==typeof p[e].options.render?t[e]=p[e]:i[e]=function(){return p[e]}}))},u=d.a.config.optionMergeStrategies,m="__vueRemarkFrontMatter",S={excerpt:null,title:"Global Search",authors:["Victor Fisher"],updated:"2021-11-02"};var y=function(e){e.options[m]&&(e.options[m]=S),d.a.util.defineReactive(e.options,m,S),e.options.computed=u.computed({$frontmatter:function(){return e.options[m]}},e.options.computed)},v=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("VueRemarkRoot",[t("g-link",{attrs:{to:"/"}},[this._v("Home Page")]),t("h2",{attrs:{id:"-frontmattertitle-"}},[t("a",{attrs:{href:"#-frontmattertitle-","aria-hidden":"true"}},[t("span",{staticClass:"icon icon-link"})]),this._v(this._s(this.$frontmatter.title))]),t("GlobalSearch")],1)}),[],!1,null,null,null);"function"==typeof b&&b(v),"function"==typeof y&&y(v);t.default=v.exports},rdv8:function(e,t){var i=Math.floor,o=function(e,t){var d=e.length,r=i(d/2);return d<8?a(e,t):n(o(e.slice(0,r),t),o(e.slice(r),t),t)},a=function(e,t){for(var i,o,a=e.length,n=1;n<a;){for(o=n,i=e[n];o&&t(e[o-1],i)>0;)e[o]=e[--o];o!==n++&&(e[o]=i)}return e},n=function(e,t,i){for(var o=e.length,a=t.length,n=0,d=0,r=[];n<o||d<a;)n<o&&d<a?r.push(i(e[n],t[d])<=0?e[n++]:t[d++]):r.push(n<o?e[n++]:t[d++]);return r};e.exports=o}}]);