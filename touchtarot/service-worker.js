"use strict";function setOfCachedUrls(a){return a.keys().then(function(a){return a.map(function(a){return a.url})}).then(function(a){return new Set(a)})}var precacheConfig=[["/touchtarot/index.html","b6d1bf224c20a7be82b532b5afa0825a"],["/touchtarot/static/css/main.bead971a.css","e19533bfef14046ea3fb41a664922f97"],["/touchtarot/static/js/main.4fd0da9e.js","458bb630a2bdda47a53e51ba9f706313"],["/touchtarot/static/media/ar00.9fa2ba34.jpg","9fa2ba341c88cc52ce13e097296cc8b7"],["/touchtarot/static/media/ar01.2303bec9.jpg","2303bec96d93e6f9f492311f22812577"],["/touchtarot/static/media/ar02.ce25d6a3.jpg","ce25d6a3012b07e76f2f39e408e87d4c"],["/touchtarot/static/media/ar03.0b5622cf.jpg","0b5622cf3c8d4c9d1ab3f679def62735"],["/touchtarot/static/media/ar04.510c93f3.jpg","510c93f353f66ea8d9bb9419afc48b2b"],["/touchtarot/static/media/ar05.5034f853.jpg","5034f853428a7e33ed68b3d06d526679"],["/touchtarot/static/media/ar06.5b9762d9.jpg","5b9762d9f79c6c0b051c4b2b9f459c9b"],["/touchtarot/static/media/ar07.ed6a9c8f.jpg","ed6a9c8f71612c76b52aa9e898a6ec7c"],["/touchtarot/static/media/ar08.df1d91e0.jpg","df1d91e0f4edeb69f8e4d8093b96c2db"],["/touchtarot/static/media/ar09.59ed006f.jpg","59ed006f06040e6e17cb5efc984d9489"],["/touchtarot/static/media/ar10.aa81870f.jpg","aa81870f33ab11c5c23e09ea616cc8c6"],["/touchtarot/static/media/ar11.648b67fd.jpg","648b67fdbdedd207267a3abd730f6274"],["/touchtarot/static/media/ar12.2c608f94.jpg","2c608f9411ee653bc373c1cfa59fbb39"],["/touchtarot/static/media/ar13.ca605399.jpg","ca605399936c1672b39da1d1001a8f6b"],["/touchtarot/static/media/ar14.71c46665.jpg","71c46665fe246a4c7344184ad79c1050"],["/touchtarot/static/media/ar15.ac1f5120.jpg","ac1f51208b6a6751f0c553c64aa9f24b"],["/touchtarot/static/media/ar16.8f2f2635.jpg","8f2f2635517b2be5e8c7e469530abad4"],["/touchtarot/static/media/ar17.a276f886.jpg","a276f886afba04f40b4a913f90588e20"],["/touchtarot/static/media/ar18.76e2d494.jpg","76e2d494071242a221e5ea867c8de289"],["/touchtarot/static/media/ar19.e62b400a.jpg","e62b400ad904a7c4a4ffb0d948b0bf28"],["/touchtarot/static/media/ar20.f7fb8421.jpg","f7fb8421a2892f2a00ab7b222fbe3987"],["/touchtarot/static/media/ar21.d2f7d56f.jpg","d2f7d56f7016d474338706c09e486fe4"],["/touchtarot/static/media/background.707c06c2.png","707c06c2861ca119d885b17760403372"],["/touchtarot/static/media/cu02.fddadfb5.jpg","fddadfb58b2336debb3aa04e2ae038ec"],["/touchtarot/static/media/cu03.55494f2b.jpg","55494f2b46e9c148802ad7c6dd8be8ef"],["/touchtarot/static/media/cu04.93fe3525.jpg","93fe3525249fa21a725edeedbf8bf09c"],["/touchtarot/static/media/cu05.9909b074.jpg","9909b07403aeb4f56f18fa193ff49d3a"],["/touchtarot/static/media/cu06.dabe38b1.jpg","dabe38b14284b671313fc3310fcb4329"],["/touchtarot/static/media/cu07.2d951bbd.jpg","2d951bbd175e1e4da7806c6c57c39eb7"],["/touchtarot/static/media/cu08.a788787d.jpg","a788787d39b3c66b56a806b2992fd441"],["/touchtarot/static/media/cu09.d6726eb3.jpg","d6726eb3e08125261e4467d45687554b"],["/touchtarot/static/media/cu10.465f1b86.jpg","465f1b867c073e5fc5438a187cfc21f8"],["/touchtarot/static/media/cuac.5788637b.jpg","5788637bb269dbba9221e0e0349f8baf"],["/touchtarot/static/media/cuki.91eb440b.jpg","91eb440b2482aa97a25a33e6df919e80"],["/touchtarot/static/media/cukn.8f007e4d.jpg","8f007e4d782b6b69141bdaded2caa78a"],["/touchtarot/static/media/cupa.8585028b.jpg","8585028b5ff3a406428b059c62eccf7f"],["/touchtarot/static/media/cuqu.806846b1.jpg","806846b1acf8b7895c01744e82def1ff"],["/touchtarot/static/media/pe02.b131e34e.jpg","b131e34eb14d724fb6b3d9e5831c539b"],["/touchtarot/static/media/pe03.00a5a01c.jpg","00a5a01c5bd0e55a61dc71a5b8015707"],["/touchtarot/static/media/pe04.2e140024.jpg","2e1400246e88f90d97a94166047a2de2"],["/touchtarot/static/media/pe05.4a9f741f.jpg","4a9f741f1d15939256c999e56ec8d06c"],["/touchtarot/static/media/pe06.795b0ffd.jpg","795b0ffdca235bd258b49ac6f694c946"],["/touchtarot/static/media/pe07.05bcfadb.jpg","05bcfadbcbf686d4268253a0e58a0b3d"],["/touchtarot/static/media/pe08.ba6a881d.jpg","ba6a881de7aaef469ef1d25aa1bd39ae"],["/touchtarot/static/media/pe09.e42c8c04.jpg","e42c8c04fafac64fec3e1a54d590b2a0"],["/touchtarot/static/media/pe10.aaa93f91.jpg","aaa93f917dd8277104e783718fcf109e"],["/touchtarot/static/media/peac.bdb8fae0.jpg","bdb8fae0d5c68fd320105c17104a4f6e"],["/touchtarot/static/media/peki.c33d11f7.jpg","c33d11f77414b9a22b3a6e6df8b10713"],["/touchtarot/static/media/pekn.4bbb85d8.jpg","4bbb85d80498418211327a61cb1419a7"],["/touchtarot/static/media/pepa.dceea3c8.jpg","dceea3c8bfa7167534f9e8f14ac3841c"],["/touchtarot/static/media/pequ.73f309ea.jpg","73f309ea451caf5b7e0970c77fa4db0f"],["/touchtarot/static/media/sw02.9aba8b31.jpg","9aba8b3149635299f0f5754e4aa203f8"],["/touchtarot/static/media/sw03.1b36f485.jpg","1b36f48573ccbfa6fc3d6cd2e014037c"],["/touchtarot/static/media/sw04.0218d7b7.jpg","0218d7b79f76537d54ffef790538e033"],["/touchtarot/static/media/sw05.2e74a243.jpg","2e74a243cf90819beacc4a476300e47f"],["/touchtarot/static/media/sw06.d7a27551.jpg","d7a27551afceadcfc525e54e6be516a4"],["/touchtarot/static/media/sw07.c5e79188.jpg","c5e79188371a39f2a63ffef6cd05425f"],["/touchtarot/static/media/sw08.a548eacd.jpg","a548eacd01e3f80a46a6d43554bb5cec"],["/touchtarot/static/media/sw09.edf34956.jpg","edf349569a3ad85b3606092b549f3182"],["/touchtarot/static/media/sw10.4fb01a0e.jpg","4fb01a0e94851a88275fedc76f1cb9c6"],["/touchtarot/static/media/swac.137335e9.jpg","137335e990088b0a6972b027ff41f45d"],["/touchtarot/static/media/swki.9ef01559.jpg","9ef01559a1bf154062538312ad65e575"],["/touchtarot/static/media/swkn.4112467a.jpg","4112467ab46f5bd968fd1f88be0bebf8"],["/touchtarot/static/media/swpa.6c271cd0.jpg","6c271cd05a609f1b6dc983e33b72064d"],["/touchtarot/static/media/swqu.780ddaa7.jpg","780ddaa7140a336182218bcfa99fcf33"],["/touchtarot/static/media/wa02.9196e496.jpg","9196e4964f60c237ac14fbfc4a7f5e27"],["/touchtarot/static/media/wa03.372dac83.jpg","372dac83bbf376a570272b58a63c0dd0"],["/touchtarot/static/media/wa04.be21c299.jpg","be21c29934bb7fc93ccb5343d44f2a06"],["/touchtarot/static/media/wa05.fc545e93.jpg","fc545e936fcbe00c5ce46483a0616e7e"],["/touchtarot/static/media/wa06.e6cdaeed.jpg","e6cdaeedd046b882162f063012694019"],["/touchtarot/static/media/wa07.dc1782dd.jpg","dc1782ddc40686e682b033d068e89dcb"],["/touchtarot/static/media/wa08.34fe3d3f.jpg","34fe3d3fece0a48d857606d21aaffa77"],["/touchtarot/static/media/wa09.5cefcfd3.jpg","5cefcfd37bca80f71dd9679c8432c6c3"],["/touchtarot/static/media/wa10.93684db3.jpg","93684db341f8a917e28dbd0217b2c14e"],["/touchtarot/static/media/waac.ca95e196.jpg","ca95e1968cffa0887aeba376efdbd88f"],["/touchtarot/static/media/waki.0b8a0312.jpg","0b8a03127b892ec21dbaa2f09f274eb8"],["/touchtarot/static/media/wakn.7995fda2.jpg","7995fda27487958f9a75bc71ae2702bc"],["/touchtarot/static/media/wapa.d5d363c7.jpg","d5d363c7efc3e930e5abe58479e820c1"],["/touchtarot/static/media/waqu.b0c8df90.jpg","b0c8df90e1393d03f63d47ed909cda79"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(a,t){var e=new URL(a);return"/"===e.pathname.slice(-1)&&(e.pathname+=t),e.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(t){return new Response(t,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(a,t,e,c){var d=new URL(a);return c&&d.pathname.match(c)||(d.search+=(d.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(e)),d.toString()},isPathWhitelisted=function(a,t){if(0===a.length)return!0;var e=new URL(t).pathname;return a.some(function(a){return e.match(a)})},stripIgnoredUrlParameters=function(a,t){var e=new URL(a);return e.hash="",e.search=e.search.slice(1).split("&").map(function(a){return a.split("=")}).filter(function(a){return t.every(function(t){return!t.test(a[0])})}).map(function(a){return a.join("=")}).join("&"),e.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(a){var t=a[0],e=a[1],c=new URL(t,self.location),d=createCacheKey(c,hashParamName,e,/\.\w{8}\./);return[c.toString(),d]}));self.addEventListener("install",function(a){a.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(e){if(!t.has(e)){var c=new Request(e,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+e+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return a.put(e,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(a){var t=new Set(urlsToCacheKeys.values());a.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var t,e=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(e))||(e=addDirectoryIndex(e,"index.html"),t=urlsToCacheKeys.has(e));!t&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(e=new URL("/touchtarot/index.html",self.location).toString(),t=urlsToCacheKeys.has(e)),t&&a.respondWith(caches.open(cacheName).then(function(a){return a.match(urlsToCacheKeys.get(e)).then(function(a){if(a)return a;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,t),fetch(a.request)}))}});