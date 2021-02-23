!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("@google-cloud/storage"),require("path"),require("fs"),require("tmp-promise")):"function"==typeof define&&define.amd?define(["@google-cloud/storage","path","fs","tmp-promise"],t):e.electronForgePublishGoogleStorage=t(e.storage,e.path,e.fs,e.tmpPromise)}(this,function(e,t,o,r){var n=function(e,t){this.config=e,this.providedPlatforms=t},i={platforms:{configurable:!0},name:{configurable:!0}};return i.platforms.get=function(){return this.providedPlatforms||["win32","linux","darwin","mas"]},i.name.get=function(){return"googleStorage"},n.prototype.publish=function(n){var i=n.makeResults;try{for(var a=this.config,u=[],p=function(){var e=c[s];u.push.apply(u,e.artifacts.map(function(t){return{path:t,platform:e.platform,arch:e.arch}}))},s=0,c=i;s<c.length;s+=1)p();var l=new e.Storage({projectId:a?a.projectId:void 0});if(!a||!a.bucket)throw'In order to publish to Google Cloud Storage you must set the "googleCloudStorage.bucket" property in your forge config. See the docs for more info';var f=l.bucket(a.bucket),m=i[0].packageJSON.version;return Promise.resolve(Promise.all(u.map(function(e){try{var n=e.platform+"/"+t.basename(e.path);return Promise.resolve(f.upload(e.path,{gzip:!0,destination:n,resumable:!1,metadata:{"cache-control":"public, max-age=31536000"},public:a.public})).then(function(){var t=JSON.stringify({version:m,url:(a.storageUrl||"https://storage.googleapis.com/"+f.name)+"/"+n,publishedAt:(new Date).toISOString()});return Promise.resolve(r.file()).then(function(r){return o.writeFileSync(r.path,t),Promise.resolve(f.upload(r.path,{gzip:!0,destination:e.platform+"/manifest.json",contentType:"application/json",resumable:!1,metadata:{"cache-control":"public, max-age=60"},public:a.public})).then(function(){r.cleanup()})})})}catch(e){return Promise.reject(e)}}))).then(function(){})}catch(e){return Promise.reject(e)}},Object.defineProperties(n.prototype,i),n});
//# sourceMappingURL=PublisherGoogleStorage.umd.js.map