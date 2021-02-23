var e=require("@google-cloud/storage"),t=require("path"),r=require("fs"),o=require("tmp-promise"),a=function(e,t){this.config=e,this.providedPlatforms=t},n={platforms:{configurable:!0},name:{configurable:!0}};n.platforms.get=function(){return this.providedPlatforms||["win32","linux","darwin","mas"]},n.name.get=function(){return"googleStorage"},a.prototype.publish=function(a){var n=a.makeResults;try{for(var i=this.config,u=[],c=function(){var e=l[p];u.push.apply(u,e.artifacts.map(function(t){return{path:t,platform:e.platform,arch:e.arch}}))},p=0,l=n;p<l.length;p+=1)c();var s=new e.Storage({projectId:i?i.projectId:void 0});if(!i||!i.bucket)throw'In order to publish to Google Cloud Storage you must set the "googleCloudStorage.bucket" property in your forge config. See the docs for more info';var m=s.bucket(i.bucket),f=n[0].packageJSON.version;return Promise.resolve(Promise.all(u.map(function(e){try{var a=e.platform+"/"+t.basename(e.path);return Promise.resolve(m.upload(e.path,{gzip:!0,destination:a,resumable:!1,metadata:{"cache-control":"public, max-age=31536000"},public:i.public})).then(function(){var t=JSON.stringify({version:f,url:(i.storageUrl||"https://storage.googleapis.com/"+m.name)+"/"+a,publishedAt:(new Date).toISOString()});return Promise.resolve(o.file()).then(function(o){return r.writeFileSync(o.path,t),Promise.resolve(m.upload(o.path,{gzip:!0,destination:e.platform+"/manifest.json",contentType:"application/json",resumable:!1,metadata:{"cache-control":"public, max-age=60"},public:i.public})).then(function(){o.cleanup()})})})}catch(e){return Promise.reject(e)}}))).then(function(){})}catch(e){return Promise.reject(e)}},Object.defineProperties(a.prototype,n),module.exports=a;
//# sourceMappingURL=PublisherGoogleStorage.js.map
