if(_sz&&_sz.core&&_sz.core._isloaded!=null){if(_sz.core.warn){_sz.core.warn("Script requested to load and execute again, this is not desirable and will be blocked")}}else{var _sz=_sz||[];_sz.push(["accountid",77584]);_sz.push(["region","r1"]);_sz.push(["endpoint","global"]);_sz.push(["heatmap",{matches:{permanent:["https://broadbandforall.cdt.ca.gov","https://cdt.ca.gov","https://cdt.ca.gov","https://cdt.ca.gov/policy/technology-letters/","https://cdt.ca.gov/resources/","https://cdt.ca.gov/services/calnet/","https://cdt.ca.gov/services/calnet-services/","https://cdt.ca.gov/support/","https://cwdb.ca.gov","https://immigrantguide.ca.gov"],include:[],exclude:[]}}]);var _sz=_sz||[];(function(l,b,h,j){var a={curr:window.location.href,ref:b.referrer,esc:function(d){return encodeURIComponent(new String(d).replace(/(\r?\n)+/g," ").replace(/\s+/g," ").replace(/^\s+|\s+$/,""))},empty:function(d){return(d==j||d==null||d=="")},isarray:function(d){if(d==j||d==null){return false}if(Array&&typeof Array.isArray=="function"){return Array.isArray(d)}return Object.prototype.toString.call(d)==="[object Array]"},tag:function(d){return(b.getElementsByTagName)?b.getElementsByTagName(d):[]},id:function(d){return(b.getElementById)?b.getElementById(d):false},clone:function(p){var m={};for(var d in p){if(p.hasOwnProperty(d)){m[d]=p[d]}}return m},rnd:function(){return Math.floor(Math.random()*100000)},txt:function(d){return(d.textContent)?d.textContent:d.innerText},trim:function(d){if(!d||typeof d!="string"){return d}if(typeof d.trim=="function"){return d.trim()}return d.replace(/^\s+|\s+$/gi,"")},uuid:function(){var d=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(d()+d()+"-"+d()+"-"+d()+"-"+d()+"-"+d()+d()+d())},navtime:function(){var d=l.performance||l.webkitPerformance||l.mozPerformance||l.msPerformance;return !d||!d.timing||d.timing.navigationStart<1?null:(new Date).getTime()-d.timing.navigationStart},_isready:false,_readyhandlers:[],register:function(m,d){d.base=this.actions[m];this.actions[m]=d},actions:{},action:function(m,d){this.actions[m].apply(this.actions,d)},data:[],ready:function(d){if(d===j){return this._isready||a.done()}else{this.when(this.ready,d)}},queueready:function(d){this._isready&&a.done()?d():this._readyhandlers.push(d)},done:function(){return(this._isloaded&&b&&b.body!=null&&(b.readyState=="interactive"||b.readyState=="complete"))},_isloaded:false,_whenTimer:null,when:function(d,n){var m=this.uuid();if(d()){n()}else{setTimeout(function(){a.when(d,n)},50)}},fmt:function(){var d=Array.prototype.slice.call(arguments);var p=d[0];var m=d.slice(1);for(var n=0;n<m.length;n++){var o=new RegExp("\\{"+n+"\\}","gm");p=p.replace(o,m[n])}return p},listen:function(d,m){if(d.addEventListener){d.addEventListener("mousedown",m,false)}else{if(d.attachEvent){d.attachEvent("onmousedown",m)}}},load:function(m){var n=b.createElement("script");n.type="text/javascript";n.async=true;n.src=m;var d=b.getElementsByTagName("script")[0];d.parentNode.insertBefore(n,d)},global:function(d){return(l[d]!==j&&l[d]!==null)?l[d]:null},_images:[],_idx:0,requesturl:function(q,n){var r=[];n.rnd=h.core.rnd();for(m in n){var v=n[m];if(this.empty(v)){continue}if(this.isarray(v)){var t={};for(var d=0;d<v.length;d++){if(!this.empty(v[d])){var s=this.esc(v[d]);if(t[s]==null){r.push(m+"="+s);t[s]=true}}}}else{r.push(m+"="+this.esc(v))}}var m=this._idx++;var u=q+"?"+r.join("&");return u},request:function(m,d){var n=this.requesturl(m,d);this._images[e]=new Image();this._images[e].src="https://"+n;this.log("Requesting {0}",n)},_logqueue:[],_logshown:false,log:function(){this._logqueue.push({type:"msg",msg:Array.prototype.slice.call(arguments)});if(this._logshown){this.showlog()}},warn:function(){this._logqueue.push({type:"warn",msg:Array.prototype.slice.call(arguments)});if(this._logshown){this.showlog()}},showlog:function(){this._logshown=true;var n=b.getElementById("szdebugarea");if(n){n.parentNode.removeChild(n)}a.cookie("szngdebug",1);var r="";for(var p=0;p<this._logqueue.length;p++){var q=this._logqueue[p];r+='<p style="padding:8px;margin:0;margin-bottom:8px;background:#'+(q.type=="msg"?"FFF7C9":"ca0000;color:white")+';">'+((q.type=="warn")?"<b>Warning:</b> ":"")+decodeURIComponent(new String(this.fmt.apply(this,q.msg)).replace(/(&[a-z_]+=|\?)/g,"<br />&nbsp;&nbsp;&nbsp;$1"))+"</p>"}var m,d;d=b.createElement("a");d.href="#";d.innerHTML="\u00D7 Close";d.style.cssText="display:block;float:right;color:black;text-decoration:none;";d.onclick=function(o){m.parentNode.removeChild(m);a._logshown=false;a.cookie("szngdebug",null);return false};m=b.createElement("div");m.style.cssText="position:fixed;top:10px;right:10px;background:white;border:1px #ccc solid;width:800px;padding:20px;padding-bottom:10px;font-size:12px;font-family:Arial;line-height:135%;max-height:90%;overflow-y:auto;text-align:left;z-index:999";m.innerHTML=r;m.id="szdebugarea";m.appendChild(d);b.body.appendChild(m)},cookie:function(u,A,w){if(typeof A!="undefined"){w=w||{path:"/"};if(A===null){A="";w.expires=-1}var s="";if(w.expires&&(typeof w.expires=="number"||w.expires.toUTCString)){var q;if(typeof w.expires=="number"){q=new Date();q.setTime(q.getTime()+(w.expires*24*60*60*1000))}else{q=w.expires}s="; expires="+q.toUTCString()}var x=w.path?"; path="+(w.path):"; path=/";var r=w.domain?"; domain="+(w.domain):"";var z=w.secure?"; secure":"";var y=w.sameSite?"; samesite="+(w.samesite):"; samesite=lax";b.cookie=[u,"=",encodeURIComponent(A),s,x,r,z,y].join("")}else{var p=null;if(b.cookie&&b.cookie!==""){var m=b.cookie.split(";");for(var t=0;t<m.length;t++){var d=m[t].replace(/^\s+|\s+$/g,"");if(d.substring(0,u.length+1)==(u+"=")){p=decodeURIComponent(d.substring(u.length+1));break}}}return p}}};a.register("set",function(m,p){var n=m.split("."),o=h,d;while(n.length>0){d=n.shift();if(o[d]===j){o=0;break}if(n.length==0){break}o=o[d]}(o&&d)?o[d]=p:a.warn("No property named {0}",m)});a.register("register",function(d){a.register(d[0],d[1])});a.register("custom",function(m,o){var n="Running custom function";if(o&&o!=""){n+=": <strong>"+o+"</strong>"}a.log(n);try{m()}catch(d){a.warn("Custom function failed! "+d.message)}});a.register("setcurr",function(d){a.curr=d});a.register("setref",function(d){a.ref=d});a.register("loaded",function(){a._isloaded=true});a.register("showlog",function(){a.showlog()});function g(d){var m=d[0];if(a.actions[m]===j){a.action("set",d)}else{a.action(m,d.slice(1))}}var c=[];var f=[];for(var e=0;e<h.length;e++){c.push(h[e]);f.push(h[e])}a.data=c;a.ready(function(){for(var d=0;d<f.length;d++){g(f[d])}while(a._readyhandlers.length>0){a._readyhandlers.shift().call()}a._isready=true});h.push=function(d){a.data.push(d);a.ready()?g(d):a.data.push(d)};h.core=a})(window,document,_sz);(function(x,a,t,v){var n={url:x.location.href,ref:a.referrer,title:a.title,res:x.screen.width+"x"+x.screen.height,accountid:"{ACCOUNT_ID}",groups:null,path:null,hits:null,sw:null,ct:null,uid:null,cid:null,cvid:null,rt:t.core.navtime(),prev:null,ourl:null,luid:t.core.uuid(),feedbackid:null,addcid:null,dnt:null,};var m={grk:null,kvps:null,};var b=function(){t.push(["invoketracking"])};var u=b;var j=function(){var d=/[-\w]+\.(?:[-\w]+\.xn--[-\w]+|[-\w]{3,}|[-\w]+\.[-\w]{2})$/i;var w=d.exec(a.domain);return(w&&w.length==1?w[0]:document.domain).replace(/^www\./i,"")};t.analytics={config:{cantrack:true,noonclick:false,ready:true,onClickKey:"szaocHandled"+t.core.rnd(),},cookie:{name:"nmstat",domain:j(),expires:1000,secure:false,},endpoint:{configured:false,host:"{ACCOUNT_ID}.global",domain:"siteimproveanalytics.io",path:"image.aspx",fullpath:function(d,w){t.analytics.endpoint.configure();if(!w){w=d;d=this.host}return((d||this.host)+"."+this.domain+"/"+(w||this.path))},configure:function(){if(!t.analytics.endpoint.configured){t.analytics.endpoint.host=t.analytics.endpoint.host.replace("{ACCOUNT_ID}",n.accountid||"shared");t.core.log("Configured host: {0}.{1}",t.analytics.endpoint.host,t.analytics.endpoint.domain);t.analytics.endpoint.configured=true}},},state:{requested:false,requestTime:new Date(),tracked:false,onclickattached:false,},region:"",getRootDomain:j,replaceTracker:function(d){u=typeof d==="function"?d:b},opts:function(d){return n[d]},getsessid:function(){if(t.analytics.config.cantrack){var w=t.core.cookie(t.analytics.cookie.name);if(!w){w=t.core.uuid();var d={expires:t.analytics.cookie.expires,domain:t.analytics.cookie.domain,secure:t.analytics.cookie.secure,};t.core.cookie(t.analytics.cookie.name,w,d);var y=t.core.cookie(t.analytics.cookie.name);if(!y){t.core.log("Failed to set cookie at domain '{0}', using fallback domain '{1}' instead",t.analytics.cookie.domain,document.domain);d.domain=document.domain;t.core.cookie(t.analytics.cookie.name,w,d)}}return w}else{return""}},};function p(w,d){d.prev=t.analytics.getsessid();d.rt=d.rt!==null?t.core.navtime():null;t.core.request(w,d)}function q(w,d){d.prev=t.analytics.getsessid();return t.core.requesturl(w,d)}function o(z){if(!t.analytics.config.cantrack){return}var A=function(D){try{if(D.href==null||D.href==""||D[t.analytics.config.onClickKey]===true||D.href.toLowerCase().indexOf("javascript:")==0||D.href.indexOf("#")==0||D.href.charAt(D.href.length-1)=="#"||D.href==x.location.href||D.href.indexOf(x.location.href+"#")==0){return true}if(t.core.isarray(z)!==true){return false}for(var C=0;C<z.length;C++){if(D.href.indexOf(z[C])!==-1){return true}}return false}catch(B){return true}};var d=t.core.tag("a");var w=t.core.tag("area");var y=function(D){for(var B=0;B<D.length;B++){var C=D[B];if(A(C)){continue}(function(E){t.core.listen(E,function(){t.push(["request",{ourl:E.href,ref:x.location.href,autoonclick:1,rt:null,},])});C[t.analytics.config.onClickKey]=true})(C)}};t.core.log("Attaching onclick handlers");y(d);y(w);t.analytics.state.onclickattached=true}t.core.register("attachonclick",function(d){if(t.analytics.config.noonclick===true){return}o(t.analytics.config.noonclick)});var c=0;function e(w,d,y){return{aid:n.accountid,url:n.url,luid:n.luid,c:w,a:d,l:y,cid:n.cid,cvid:n.cvid,o:++c,d:Math.round((new Date()-t.analytics.state.requestTime)/1000),}}var r=0;function s(y,d){var w={aid:n.accountid,url:n.url,luid:n.luid,search_term:y,cid:n.cid,cvid:n.cvid,o:++r,d:Math.round((new Date()-t.analytics.state.requestTime)/1000),};if(d!=null){w.results=d}return w}var f=0;function g(w,z,A,d){var y={aid:n.accountid,url:n.url,luid:n.luid,feedback_id:w,sluid:z,cid:n.cid,cvid:n.cvid,o:++f,d:Math.round((new Date()-t.analytics.state.requestTime)/1000),};if(A!=null&&typeof A=="number"){y.rating=A}if(d){y.comment=d}return y}function l(){var d=window.doNotTrack||navigator.doNotTrack||navigator.msDoNotTrack;return(d=="yes"||d=="1"||(window.external&&window.external.msTrackingProtectionEnabled&&window.external.msTrackingProtectionEnabled()))}t.core.register("endpoint",function(d){if(d){if(d.indexOf("{ACCOUNT_ID}")<0){t.analytics.endpoint.host="{ACCOUNT_ID}."+d}else{t.analytics.endpoint.host=d}t.analytics.endpoint.configured=false;t.analytics.endpoint.configure()}else{t.core.warn("Could not reconfigure endpoint host.")}});t.core.register("region",function(d){if(d){t.core.log("Setting analytics region to: {0}",d);t.analytics.region=d}else{t.core.warn("Could not configure analytics region.")}});t.core.register("eventurl",function(y,d,z,w){if(!w){t.core.warn("You must provide a callback function");return}if(!y||!d){t.core.warn("Category and action must be provided for event.");return}else{if(!t.analytics.config.cantrack){return}}var A=q(t.analytics.endpoint.fullpath("event.aspx"),e(y,d,z));w(A)});t.core.register("event",function(w,d,y){if(!w||!d){t.core.warn("Category and action must be provided for event.");return}else{if(!t.analytics.config.cantrack){return}}p(t.analytics.endpoint.fullpath("event.aspx"),e(w,d,y))});t.core.register("search",function(w,d){if(!w){t.core.warn("Search term must be provided for searches.");return}else{if(!t.analytics.config.cantrack){return}}p(t.analytics.endpoint.fullpath("search.aspx"),s(w,d))});t.core.register("feedback_view",function(d,w){if(!t.analytics.config.cantrack){return}if(!d){t.core.warn("Feedback id must be provided for feedback views.");return}if(!w){t.core.warn("Feedback log id must be provided for feedback views.");return}p(t.analytics.endpoint.fullpath("surveyview.aspx"),g(d,w))});t.core.register("feedback_response",function(w,y,z,d){if(!t.analytics.config.cantrack){return}if(!w){t.core.warn("Feedback id must be provided for feedback responses.");return}if(!y){t.core.warn("Feedback log id must be provided for feedback responses.");return}if((z==null||z<1)&&!d){t.core.warn("Feedback responses must provide either a rating or a comment.");return}p(t.analytics.endpoint.fullpath("surveyresponse.aspx"),g(w,y,z,d))});t.core.register("dump",function(){console.debug(t.analytics);console.debug(n);console.debug(m)});t.core.register("noonclick",function(d){t.analytics.config.noonclick=d});t.core.register("set",function(d,w){if(n.hasOwnProperty(d)){n[d]=w}else{this.set.base(d,w)}});t.core.register("breadcrumbs",function(y){if(!y||!a.querySelector){return}var d=a.querySelector(y);if(d){var w=t.core.trim(t.core.txt(d));if(!t.core.empty(w)){t.push(["path",w])}}});t.core.register("path",function(d){if(!t.core.empty(d)){n.path=d;t.push(["kvp","path",d]);t.core.log("Path set: {0}",d)}});t.core.register("groupselector",function(A){if(!A||!a.querySelectorAll){return}var z=a.querySelectorAll(A),d=[];if(!t.core.empty(n.groups)){d=n.groups.split(",")}for(var w=0;w<z.length;w++){var B=t.core.trim(t.core.txt(z[w]));if(!t.core.empty(B)){var C=B.split(",");for(var y=0;y<C.length;y++){d.push(C[y])}}}if(d.length>0){n.groups=d.join(",");t.push(["kvp","szGroupName",d]);t.core.log("Groups set: {0}",d.join(", "))}});t.core.register("metagroupname",function(B){var z=t.core.tag("meta"),d=[];if(!t.core.empty(n.groups)){d=n.groups.split(",")}for(var w=0;w<z.length;w++){if(z[w].name==B){var A=t.core.trim(z[w].content);if(!t.core.empty(A)){t.core.log("Metagroup pushing group for meta name {0}: {0}",z[w].name,z[w].content);var C=A.split(",");for(var y=0;y<C.length;y++){d.push(C[y])}}}}if(d.length>0){n.groups=d.join(",");t.push(["kvp","szGroupName",d]);t.core.log("Metagroup set: {0}",d.join(", "))}});t.core.register("param",function(d,w){if(typeof d=="object"){for(i in d){if(d.hasOwnProperty(i)){t.push(["param",i,d[i]])}}}else{t.core.log("Param {0} = {1}",d,w);if(m.grk==null){m.grk={}}m.grk[d]=w}});var h=function(d){var w=[];if(t.core.isarray(d)){for(i=0;i<d.length;i++){if(!t.core.empty(d[i])){w.push(d[i])}}}else{if(!t.core.empty(d)){w.push(d)}}return w};t.core.register("kvp",function(w,z,y){if(typeof w=="object"){for(i in w){if(w.hasOwnProperty(i)){t.push(["kvp",i,w[i],y])}}}else{var A=h(z);if(m.kvps==null){m.kvps={}}if(y===true){m.kvps[w]=A}else{m.kvps[w]=m.kvps[w]||[];for(var d=0;d<A.length;d++){m.kvps[w].push(A[d])}}t.core.log("Kvp {0} = {1}",w,JSON.stringify(m.kvps[w]))}});t.core.register("request",function(d){if(d.accountid===v){d.accountid=n.accountid}p(t.analytics.endpoint.fullpath(),d)});t.core.register("trackpageview",function(){var d=t.analytics;if(!d.state.tracked&&d.config.cantrack&&d.config.ready){var z=t.core.clone(n);if(m.grk!=null){for(var w in m.grk){if(m.grk.hasOwnProperty(w)){z["grk_"+w]=m.grk[w]}}}if(m.kvps!=null){for(var y in m.kvps){if(m.kvps.hasOwnProperty(y)){z["kvp_"+y]=m.kvps[y]}}}p(d.endpoint.fullpath(),z);d.state.tracked=true;d.state.requestTime=new Date();if(z.sw){t.push(["search",z.sw,z.hits])}}else{if(d.state.tracked){t.core.log("Already tracked...")}}});t.core.register("notrack",function(d){if(d===v){d=true}if(d){t.core.cookie("sz_notrack","true",{expires:1825})}else{t.core.cookie("sz_notrack",null)}t.analytics.config.cantrack=!d});t.tracking=function(){return t.analytics.config.cantrack};t.donottrack=function(){return n.dnt===true&&!!l()};t.core.register("trackdynamic",function(y){var d=n.url;n.url=x.location.href;n.ref=d;n.title=a.title;n.luid=t.core.uuid();n.rt=null;n.ourl=null;n.groups=null;n.path=null;n.hits=null;n.sw=null;m.grk=null;m.kvps=null;t.analytics.state.tracked=false;t.analytics.state.onclickattached=false;if(y){if(typeof y=="object"&&!(y instanceof Array)){for(k in y){if(y.hasOwnProperty(k)){t.push([k,y[k]])}}}else{if(y.length>0){for(var w=0;w<y.length;w++){t.push(y[w])}}}}if(!n.ourl){n.ourl=n.url}t.push(["invoketracking"])});t.core.register("invoketracking",function(){if(!!t.analytics.config.cantrack&&t.donottrack()){t.core.log("Do not track enabled");t.analytics.config.cantrack=false}if(!t.analytics.config.cantrack){t.core.log("Tracking not enabled, skipping invocation");return}t.push(["trackpageview"]);t.push(["attachonclick"])});t.core.ready(function(){t.core.log("Running ready at {0}",new Date().getTime());if(t.core.cookie("sz_notrack")!==null){t.push(["notrack"])}u()})})(window,document,_sz);(function(q,c,o,p){var a={scrollDelay:350,resizeDelay:350};var n={running:false,initViewPort:null,supportQuerySelector:true,clickCount:0,scrollHandle:null,lastViewPort:{l:0,t:0},scrollCount:0};o.analytics.heatmap={config:a,state:n};var b={hostnameRx:/^([\w@:.-]+)$/i,pathnameRx:/((?:\/\w+)*\/[-\w.]+[^#&?\s]*)$/i,maxSrcLen:50,boundingElements:{A:true,AREA:true,ARTICLE:false,BODY:false,BUTTON:true,DIV:false,FOOTER:false,FRAME:false,IFRAME:false,H1:false,H2:false,H3:false,H4:false,H5:false,H6:false,HEADER:false,HTML:false,IMG:true,INPUT:true,LABEL:false,LI:false,MAIN:false,SECTION:false,SELECT:true,SPAN:false,TABLE:false,TD:false,TH:false,TEXTAREA:true}};var f={on:function(s,t,r){var d=t.split(" "),u=d.length;while(u--){if(s.addEventListener){s.addEventListener(d[u],r,false)}else{if(s.attachEvent){s.attachEvent("on"+d[u],r)}}}},off:function(s,t,r){var d=t.split(" "),u=d.length;while(u--){if(s.removeEventListener){s.removeEventListener(d[u],r,false)}else{if(s.detachEvent){s.detachEvent("on"+d[u],r)}}}},stop:function(d){if(d.stopPropagation){d.stopPropagation()}else{if(d.cancelBubble!=null){d.cancelBubble=true}}},sourceElement:function(d){return d.srcElement||d.target},map:function(d,r){var t=[];for(var s=0;s<d.length;s++){t.push(r(d[s],s))}return t},cssEscape:function(s){var d=s.charAt(0),r="";if(/^-+$/.test(s)){return"\\-"+s.slice(1)}if(/\d/.test(d)){r="\\3"+d+" ";s=s.slice(1)}r+=f.map(s.split(""),(function(t){if(/[\t\n\v\f]/.test(t)){return"\\"+t.charCodeAt().toString(16)+" "}return(/[ !"#$%&'()*+,.\/:;<=>?@\[\\\]^_`{|}~]/.test(t)?"\\":"")+t})).join("");return r},isUniqueSelector:function(s,d){if(!n.supportQuerySelector||!s){return false}var r=c.querySelectorAll(s);return r.length===1&&r[0]===d},trim:function(d){return String.prototype.trim?d.trim():d.replace(/^\s+|\s+$/g,"")},pathFromSrc:function(s){var d=c.createElement("a");d.href=s;var r=d.pathname;d=null;return r||""},parent:function(d){var r=d.parentNode;return r.nodeType==1&&!(/\b(html|body|head)\b/i.test(r.tagName))?r:null},childSelector:function(d,w){if(!d.parentNode){return null}var u=d.parentNode.children,v=u.length,s=0,x=true;for(var r=0;r<v;r++){var t=u[r];if(t===d){s=r+1}else{if(t.tagName.toLowerCase()==w){x=false;if(s!==0){break}}}}if(x){return null}if(s===1){return":first-child"}if(s===v){return":last-child"}return":nth-child("+s+")"},pathSelector:function(r){var t=r.tagName.toLowerCase(),s=f.parent(r),d=f.childSelector(r,t);return(s?f.pathSelector(s)+">":"")+t+(d||"")},cssSelector:function(v){var E=v,I="",H="",w="",F="";do{if(!v.tagName){return""}var J=v.tagName.toLowerCase();if(/\b(html|body|head)\b/i.test(J)){return J+I}var A=v.id,t=f.trim(v.className),r=v.classList||t.split(/\s+/);if(typeof(A)!=="string"){A=null}if(A){A=f.cssEscape(A);H="#"+A+I;if(f.isUniqueSelector(H,E)){return H}H=J+"[id='"+A.replace("'","\\'")+"']"+I;if(f.isUniqueSelector(H,E)){return H}}var K="";if(t&&c.getElementsByClassName){var L=Infinity;for(var z=0,B=r.length;z<B;z++){var d=r[z],u=c.getElementsByClassName(d).length;if(u<L){L=u;K=f.cssEscape(d)}}H=J+"."+K+I;if(f.isUniqueSelector(H,E)){return H}if(A){H=J+"[id='"+A.replace("'","\\'")+"']."+K+I;if(f.isUniqueSelector(H,E)){return H}}}switch(J){case"a":var x=v.hash;if(x){H=J+"[href='"+x.replace("'","\\'")+"']"+I;if(f.isUniqueSelector(H,E)){return H}}F=((v.pathname||"").match(b.pathnameRx)||["",""])[1];if(F&&F.length<=b.maxSrcLen){H=J+"[href*='"+F.replace("'","\\'")+"']"+I;if(f.isUniqueSelector(H,E)){return H}}var y=((v.hostname||"").match(b.hostnameRx)||["",""])[1];if(y&&y.length<=b.maxSrcLen){H=J+"[href*='"+y.replace("'","\\'")+"']"+I;if(f.isUniqueSelector(H,E)){return H}}break;case"img":F=f.pathFromSrc(v.src);w=(F.match(b.pathnameRx)||["",""])[1];if(w&&F.length<=b.maxSrcLen){H=J+"[src*='"+w.replace("'","\\'")+"']"+I;if(f.isUniqueSelector(H,E)){return H}}break;case"input":case"button":case"select":case"textarea":var D=v.getAttribute("name");if(D){H=J+"[name='"+D.replace("'","\\'")+"']"+I;if(f.isUniqueSelector(H,E)){return H}}break;case"label":var C=v.getAttribute("for");if(C){H=J+"[for='"+C.replace("'","\\'")+"']"+I;if(f.isUniqueSelector(H,E)){return H}}break}var G=f.childSelector(v,J);if(G){I=J+G+I;if(f.isUniqueSelector(I,E)){return I}}else{if(A){I=J+"[id='"+A.replace("'","\\'")+"']"+I}else{if(K){I=J+"."+K+I}else{I=J+I;if(f.isUniqueSelector(I,E)){return I}}}}}while((v=v.parentNode)&&(I=">"+I));return I},viewPort:function(){return{l:Math.round((q.pageXOffset||c.documentElement.scrollLeft)-(c.documentElement.clientLeft||0)),t:Math.round((q.pageYOffset||c.documentElement.scrollTop)-(c.documentElement.clientTop||0)),w:Math.round(q.innerWidth||c.documentElement.clientWidth||q.screen.width),h:Math.round(q.innerHeight||c.documentElement.clientHeight||q.screen.height)}},elementPoint:function(r,d){r=r||q.event;var s=f.pagePoint(r);var t=d.getBoundingClientRect();var v=c.documentElement.scrollTop?c.documentElement.scrollTop:c.body.scrollTop;var u=c.documentElement.scrollLeft?c.documentElement.scrollLeft:c.body.scrollLeft;return{x:Math.round(s.x-(t.left+u)),y:Math.round(s.y-(t.top+v))}},pagePoint:function(d){d=d||q.event;var r=d.pageX;var s=d.pageY;if(r===p){r=d.clientX+c.body.scrollLeft+c.documentElement.scrollLeft;s=d.clientY+c.body.scrollTop+c.documentElement.scrollTop}return{x:r,y:s}},preEventHandler:function(d){if(n.scrollCount<1&&n.clickCount<1){e({pos:n.initViewPort,type:"scroll"})}}};var j={click:function(r){if(r.szbHandled===true){return}f.preEventHandler(r);n.clickCount++;var u=f.sourceElement(r);var d=u;while(d!=null&&b.boundingElements[d.tagName]==null){d=d.parentNode}if(d==null){return}var t=f.cssSelector(d);if(!t||t=="html"){return}var s={path:t,point:f.elementPoint(r,d),type:"click"};e(s);r.szbHandled=true},scroll:function(d){if(n.scrollHandle!=null){clearTimeout(n.scrollHandle)}n.scrollHandle=setTimeout(function(){f.preEventHandler(d);n.scrollCount++;var r=f.viewPort();if(r.t!=n.lastViewPort.t||r.h!=n.lastViewPort.h){e({pos:r,type:"scroll"});n.lastViewPort=r}},a.scrollDelay)},resize:function(r){var d=f.viewPort();if(!n.scrollCount||d.h!=n.lastViewPort.h){j.scroll()}}};function h(){if(n.supportQuerySelector){o.core.log("Attaching behaviour map mousedown handlers");f.on(c,"mousedown",j.click);for(var r in b.boundingElements){if(b.boundingElements.hasOwnProperty(r)&&b.boundingElements[r]==true){var d=o.core.tag(r);for(var s in d){f.on(d[s],"mousedown",j.click)}}}}o.core.log("Attaching behaviour map scroll + resize handlers");f.on(q,"scroll",j.scroll);f.on(q,"resize",j.resize)}function e(d){if(!d){return}var t;switch(d.type){case"click":t="c|"+d.point.x+"|"+d.point.y+"|"+d.path;break;case"scroll":t="s|"+d.pos.l+"|"+d.pos.t;break;default:return}var r=m(t);var s=o.analytics.endpoint.fullpath("heat.aspx");o.core.request(s,r)}var g=0;function m(d){var r=f.viewPort();return{aid:o.analytics.opts("accountid"),url:o.analytics.opts("url"),luid:o.analytics.opts("luid"),p:d,ww:r.w,wh:r.h,cid:o.analytics.opts("cid"),cvid:o.analytics.opts("cvid"),o:++g,d:Math.round((new Date()-o.analytics.state.requestTime)/1000),prev:o.analytics.getsessid()}}var l={keys:Object.keys?Object.keys:function(r){if(r!==Object(r)){throw new TypeError("Object.keys called on a non-object")}var d=[];for(var s in r){if(Object.prototype.hasOwnProperty.call(r,s)){d.push(s)}}return d},extract:function(d){var u={};for(var r=0;r<d.length;r++){var t=d[r].split("=");if(t.length>1){var s=t.shift();var w=t.join("=");if(w.length>0){u[s]=w}}}return u},decompose:function(t){t=encodeURI(decodeURI(f.trim(t||"").replace(/^.*?:\/\//g,"").split("#")[0]));var s=t.split("?");var d=s.shift().replace(/^www\./,"").replace(/\/+$/,"");var r=this.extract(s.join("?").split("&"));return{resource:d,params:r}},check_url:function(d,u){if(d.resource===u.resource){var t=this.keys(u.params);for(var r=0;r<t.length;r++){var s=t[r];if(d.params[s]==p||d.params[s]!==u.params[s]){return false}}return true}return false},check_list:function(r,t,d){t=t||[];for(var s=0;s<t.length;s++){if(t[s]!=p&&this.check_url(r,this.decompose(t[s].toLowerCase()))){if(d){d(t[s])}return true}}return false},enable:function(){var d=this.decompose(this.cur_url());var s,r;var t=d.resource&&this.check_list(d,this.matches.permanent.concat(this.matches.include),function(u){s=u})&&!this.check_list(d,this.matches.exclude,function(u){r=u});o.core.log('Behaviour map tracking match:<br/>include = "{0}"<br/>exclude = "{1}"',encodeURI(s||""),encodeURI(r||""));return t},matches:{permanent:[],include:[],exclude:[]},add_matches:function(d){if(d!=null){if(this.is_array(d.permanent)){this.matches.permanent=this.matches.permanent.concat(d.permanent)}if(this.is_array(d.include)){this.matches.include=this.matches.include.concat(d.include)}if(this.is_array(d.exclude)){this.matches.exclude=this.matches.exclude.concat(d.exclude)}}},replacements:[],add_replacement:function(d){if(this.is_function(d)){this.replacements.push(d)}},is_function:function(d){return d!=null&&(typeof d==="function")&&(d instanceof Function)},is_array:function(d){return d!=null&&(d instanceof Array)&&(d.concat!=p)&&(d.length!=p)},cur_url:function(){var r=((o.analytics&&o.analytics.opts?o.analytics.opts("url"):"")||o.core.curr).toLowerCase();if(this.replacements&&this.replacements.length>0){for(var d=0;d<this.replacements.length;d++){r=this.replacements[d](r)}}return r}};o.core.register("heatmapreplacement",function(d){l.add_replacement(d)});o.core.register("heatmap",function(d){l.add_matches(d.matches)});o.core.register("heatmapinit",function(){if(!o.analytics.config.cantrack||o.donottrack()){return}if(n.running){o.core.log("Behaviour map tracking already running");return}try{if(!l.enable()){o.core.log("Skipping behaviour map tracking");return}}catch(d){o.core.log("Skipping behaviour map tracking due to: {0}",d);return}try{n.supportQuerySelector=!!c.querySelectorAll&&c.querySelectorAll("body > *:nth-child(1)").length===1}catch(d){n.supportQuerySelector=false}o.core.log("Enabling behaviour map tracking");n.running=true;n.lastViewPort=f.viewPort();n.initViewPort=f.viewPort();h()});o.core.ready(function(){o.core.log("Running behaviour map ready at {0}",new Date().getTime());o.push(["heatmapinit"])})})(window,document,_sz);_sz.core._isloaded=true};