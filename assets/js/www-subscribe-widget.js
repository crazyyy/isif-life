(function(){var m,p=this;function q(a){a=a.split(".");for(var b=p,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function ba(a){a.S=function(){return a.T?a.T:a.T=new a}}
function ca(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function da(a){var b=ca(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function r(a){return"string"==typeof a}
function ea(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
var fa="closure_uid_"+(1E9*Math.random()>>>0),ga=0;function ha(a,b,c){return a.call.apply(a.bind,arguments)}
function ia(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function t(a,b,c){t=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ha:ia;return t.apply(null,arguments)}
var ja=Date.now||function(){return+new Date};
function u(a,b){var c=a.split("."),d=p;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
function v(a,b){function c(){}
c.prototype=b.prototype;a.K=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.za=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}}
;var ka;var la=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function ma(a,b){return a<b?-1:a>b?1:0}
;var na=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;
if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},oa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=r(a)?a.split(""):a,h=0;h<d;h++)if(h in g){var k=g[h];
b.call(c,k,h,a)&&(e[f++]=k)}return e},pa=Array.prototype.some?function(a,b,c){return Array.prototype.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=r(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;
return!1};
function qa(a,b){var c;a:{c=a.length;for(var d=r(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:r(a)?a.charAt(c):a[c]}
function ra(a,b){return 0<=na(a,b)}
function sa(a){return Array.prototype.concat.apply(Array.prototype,arguments)}
function ta(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ua(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(da(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
function va(a,b,c,d){return Array.prototype.splice.apply(a,wa(arguments,1))}
function wa(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
;function xa(a){if(a.classList)return a.classList;a=a.className;return r(a)&&a.match(/\S+/g)||[]}
function ya(a,b){return a.classList?a.classList.contains(b):ra(xa(a),b)}
function za(a,b){a.classList?a.classList.add(b):ya(a,b)||(a.className+=0<a.className.length?" "+b:b)}
function Aa(a,b){a.classList?a.classList.remove(b):ya(a,b)&&(a.className=oa(xa(a),function(a){return a!=b}).join(" "))}
function Ba(a,b,c){c?za(a,b):Aa(a,b)}
;function Ca(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Da(a){var b=Ea,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
var Fa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ga(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Fa.length;f++)c=Fa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var Ha;a:{var Ia=p.navigator;if(Ia){var Ja=Ia.userAgent;if(Ja){Ha=Ja;break a}}Ha=""}function x(a){return-1!=Ha.indexOf(a)}
;function Ka(){}
;function y(a,b){this.g=void 0!==a?a:0;this.h=void 0!==b?b:0}
y.prototype.ceil=function(){this.g=Math.ceil(this.g);this.h=Math.ceil(this.h);return this};
y.prototype.floor=function(){this.g=Math.floor(this.g);this.h=Math.floor(this.h);return this};
y.prototype.round=function(){this.g=Math.round(this.g);this.h=Math.round(this.h);return this};function z(a,b){this.b=a;this.f=b}
z.prototype.ceil=function(){this.b=Math.ceil(this.b);this.f=Math.ceil(this.f);return this};
z.prototype.floor=function(){this.b=Math.floor(this.b);this.f=Math.floor(this.f);return this};
z.prototype.round=function(){this.b=Math.round(this.b);this.f=Math.round(this.f);return this};var La=x("Opera"),A=x("Trident")||x("MSIE"),Ma=x("Edge"),Na=x("Gecko")&&!(-1!=Ha.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Oa=-1!=Ha.toLowerCase().indexOf("webkit")&&!x("Edge"),Pa=x("Windows");function Qa(){var a=p.document;return a?a.documentMode:void 0}
var Ra;a:{var Sa="",Ta=function(){var a=Ha;if(Na)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Ma)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Oa)return/WebKit\/(\S+)/.exec(a);if(La)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ta&&(Sa=Ta?Ta[1]:"");if(A){var Ua=Qa();if(null!=Ua&&Ua>parseFloat(Sa)){Ra=String(Ua);break a}}Ra=Sa}var Va=Ra,Wa={};
function Xa(a){var b;if(!(b=Wa[a])){b=0;for(var c=la(String(Va)).split("."),d=la(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var n=k.exec(g)||["","",""],M=l.exec(h)||["","",""];if(0==n[0].length&&0==M[0].length)break;b=ma(0==n[1].length?0:parseInt(n[1],10),0==M[1].length?0:parseInt(M[1],10))||ma(0==n[2].length,0==M[2].length)||ma(n[2],M[2])}while(0==b)}b=Wa[a]=0<=b}return b}
var Ya=p.document,Za=Ya&&A?Qa()||("CSS1Compat"==Ya.compatMode?parseInt(Va,10):5):void 0;!Na&&!A||A&&9<=Number(Za)||Na&&Xa("1.9.1");var $a=A&&!Xa("9");function ab(a){return a?new bb(cb(a)):ka||(ka=new bb)}
function B(a){var b=document;return r(a)?b.getElementById(a):a}
function db(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):eb(a)}
function eb(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&ra(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function fb(a){return"CSS1Compat"==a.compatMode}
function cb(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function gb(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(cb(a).createTextNode(String(b)))}}
var hb={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},ib={IMG:" ",BR:"\n"};function jb(a){if($a&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];kb(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");$a||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function kb(a,b,c){if(!(a.nodeName in hb))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in ib)b.push(ib[a.nodeName]);else for(a=a.firstChild;a;)kb(a,b,c),a=a.nextSibling}
function lb(a){var b=mb.da;return b?nb(a,function(a){return!b||r(a.className)&&ra(a.className.split(/\s+/),b)},!0,void 0):null}
function nb(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function bb(a){this.b=a||p.document||document}
bb.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(a)};
bb.prototype.createElement=function(a){return this.b.createElement(String(a))};
bb.prototype.isElement=function(a){return ea(a)&&1==a.nodeType};function ob(a){p.setTimeout(function(){throw a;},0)}
var pb;
function qb(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.P;c.P=null;a()}};
return function(a){d.next={P:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function rb(a,b,c){this.j=c;this.i=a;this.l=b;this.f=0;this.b=null}
rb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.i();return a};function sb(){this.f=this.b=null}
var ub=new rb(function(){return new tb},function(a){a.reset()},100);
sb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function tb(){this.next=this.f=this.b=null}
tb.prototype.set=function(a,b){this.b=a;this.f=b;this.next=null};
tb.prototype.reset=function(){this.next=this.f=this.b=null};function vb(a){wb||xb();yb||(wb(),yb=!0);var b=zb,c=ub.get();c.set(a,void 0);b.f?b.f.next=c:b.b=c;b.f=c}
var wb;function xb(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);wb=function(){a.then(Ab)}}else wb=function(){var a=Ab;
"function"!=ca(p.setImmediate)||p.Window&&p.Window.prototype&&!x("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(pb||(pb=qb()),pb(a)):p.setImmediate(a)}}
var yb=!1,zb=new sb;function Ab(){for(var a;a=zb.remove();){try{a.b.call(a.f)}catch(c){ob(c)}var b=ub;b.l(a);b.f<b.j&&(b.f++,a.next=b.b,b.b=a)}yb=!1}
;function Bb(){this.f=this.f;this.i=this.i}
Bb.prototype.f=!1;Bb.prototype.dispose=function(){this.f||(this.f=!0,this.I())};
Bb.prototype.I=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function C(a){Bb.call(this);this.B=1;this.j=[];this.l=0;this.b=[];this.m={};this.U=!!a}
v(C,Bb);m=C.prototype;m.subscribe=function(a,b,c){var d=this.m[a];d||(d=this.m[a]=[]);var e=this.B;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.B=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.m[a]){var d=this.b;if(a=qa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.A(a)}return!1};
m.A=function(a){var b=this.b[a];if(b){var c=this.m[b];if(0!=this.l)this.j.push(a),this.b[a+1]=aa;else{if(c){var d=na(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
m.D=function(a,b){var c=this.m[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.U)for(e=0;e<c.length;e++){var g=c[e];Cb(this.b[g+1],this.b[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.A(c)}}return 0!=e}return!1};
function Cb(a,b,c){vb(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.m[a];b&&(w(b,this.A,this),delete this.m[a])}else this.b.length=0,this.m={}};
function Db(a,b){if(b){var c=a.m[b];return c?c.length:0}var c=0,d;for(d in a.m)c+=Db(a,d);return c}
m.I=function(){C.K.I.call(this);this.clear();this.j.length=0};var Eb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Eb);u("yt.tokens_",window.yt&&window.yt.tokens_||{});var Fb=window.yt&&window.yt.msgs_||q("window.ytcfg.msgs")||{};u("yt.msgs_",Fb);function Gb(a){var b=arguments;if(1<b.length){var c=b[0];Eb[c]=b[1]}else for(c in b=b[0],b)Eb[c]=b[c]}
function D(a,b){return a in Eb?Eb[a]:b}
function E(a,b){"function"==ca(a)&&(a=Hb(a));return window.setTimeout(a,b)}
function Hb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw Ib(b),b;}}:a}
function Ib(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=D("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Gb("ERRORS",b))}
;function Jb(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():E(a,b||0)}
;function F(a,b){this.version=a;this.args=b}
function Kb(a){if(!a.aa){var b={};a.call(b);a.aa=b.version}return a.aa}
function Lb(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Kb(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function G(a,b){this.f=a;this.b=b}
G.prototype.toString=function(){return this.f};var Mb=q("yt.pubsub2.instance_")||new C;C.prototype.subscribe=C.prototype.subscribe;C.prototype.unsubscribeByKey=C.prototype.A;C.prototype.publish=C.prototype.D;C.prototype.clear=C.prototype.clear;u("yt.pubsub2.instance_",Mb);var Nb=q("yt.pubsub2.subscribedKeys_")||{};u("yt.pubsub2.subscribedKeys_",Nb);var Ob=q("yt.pubsub2.topicToKeys_")||{};u("yt.pubsub2.topicToKeys_",Ob);var Pb=q("yt.pubsub2.isAsync_")||{};u("yt.pubsub2.isAsync_",Pb);u("yt.pubsub2.skipSubKey_",null);
function H(a,b){var c=Qb();c&&c.publish.call(c,a.toString(),a,b)}
function I(a,b,c){var d=Qb();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var h=function(){if(Nb[e])try{if(g&&a instanceof G&&a!=d)try{g=Lb(a.b,g)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,g)}catch(k){Ib(k)}};
Pb[a.toString()]?q("yt.scheduler.instance")?Jb(h):E(h,0):h()}});
Nb[e]=!0;Ob[a.toString()]||(Ob[a.toString()]=[]);Ob[a.toString()].push(e);return e}
function Rb(a){var b=Qb();b&&("number"==typeof a&&(a=[a]),w(a,function(a){b.unsubscribeByKey(a);delete Nb[a]}))}
function Qb(){return q("yt.pubsub2.instance_")}
;var J=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Sb(a){return a?decodeURI(a):a}
function Tb(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Ub(a,b,c){if("array"==ca(b))for(var d=0;d<b.length;d++)Ub(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Vb(a,b,c){for(c=c||0;c<b.length;c+=2)Ub(b[c],b[c+1],a);return a}
function Wb(a,b){for(var c in b)Ub(c,b[c],a);return a}
function Xb(a){a=Wb([],a);a[0]="";return a.join("")}
function Yb(a,b){return Tb(2==arguments.length?Vb([a],arguments[1],0):Vb([a],arguments,1))}
;var Zb={},$b=0;function ac(a){var b=new Image,c=""+$b++;Zb[c]=b;b.onload=b.onerror=function(){delete Zb[c]};
b.src=a}
;function bc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ca(b[f])?ua(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function cc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=bc(d[1]||""),e;for(e in b)d[e]=b[e];return Tb(Wb([a],d))+c}
;function dc(a){F.call(this,1,arguments);this.b=a}
v(dc,F);function K(a){F.call(this,1,arguments);this.b=a}
v(K,F);function ec(a,b){F.call(this,1,arguments);this.b=a;this.f=b}
v(ec,F);function fc(a,b,c,d,e){F.call(this,2,arguments);this.f=a;this.b=b;this.j=c||null;this.i=d||null;this.l=e||null}
v(fc,F);function gc(a,b,c){F.call(this,1,arguments);this.b=a;this.f=b}
v(gc,F);function hc(a,b,c,d,e,f,g){F.call(this,1,arguments);this.f=a;this.B=b;this.b=c;this.U=d||null;this.j=e||null;this.i=f||null;this.l=g||null}
v(hc,F);
var ic=new G("subscription-batch-subscribe",dc),jc=new G("subscription-batch-unsubscribe",dc),kc=new G("subscription-pref-email",ec),lc=new G("subscription-subscribe",fc),mc=new G("subscription-subscribe-loading",K),nc=new G("subscription-subscribe-loaded",K),oc=new G("subscription-subscribe-success",gc),pc=new G("subscription-subscribe-external",fc),qc=new G("subscription-unsubscribe",hc),rc=new G("subscription-unsubscirbe-loading",K),sc=new G("subscription-unsubscribe-loaded",K),tc=new G("subscription-unsubscribe-success",K),
uc=new G("subscription-external-unsubscribe",hc),vc=new G("subscription-enable-ypc",K),wc=new G("subscription-disable-ypc",K);var xc=q("yt.pubsub.instance_")||new C;C.prototype.subscribe=C.prototype.subscribe;C.prototype.unsubscribeByKey=C.prototype.A;C.prototype.publish=C.prototype.D;C.prototype.clear=C.prototype.clear;u("yt.pubsub.instance_",xc);var yc=q("yt.pubsub.subscribedKeys_")||{};u("yt.pubsub.subscribedKeys_",yc);var zc=q("yt.pubsub.topicToKeys_")||{};u("yt.pubsub.topicToKeys_",zc);var Ac=q("yt.pubsub.isSynchronous_")||{};u("yt.pubsub.isSynchronous_",Ac);var Bc=q("yt.pubsub.skipSubId_")||null;
u("yt.pubsub.skipSubId_",Bc);function Cc(a,b,c){var d=Dc();if(d){var e=d.subscribe(a,function(){if(!Bc||Bc!=e){var d=arguments,g;g=function(){yc[e]&&b.apply(c||window,d)};
try{Ac[a]?g():E(g,0)}catch(h){Ib(h)}}},c);
yc[e]=!0;zc[a]||(zc[a]=[]);zc[a].push(e);return e}return 0}
function Ec(a){var b=Dc();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),w(a,function(a){b.unsubscribeByKey(a);delete yc[a]}))}
function Fc(a,b){var c=Dc();return c?c.publish.apply(c,arguments):!1}
function Dc(){return q("yt.pubsub.instance_")}
;function Gc(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=Yb(b,"mode","subscribe"),b=Yb("/signin?context=popup","next",b),b=Yb(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Cc("LOGGED_IN",function(b){Ec(D("LOGGED_IN_PUBSUB_KEY",void 0));Gb("LOGGED_IN",!0);a(b)});
Gb("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",Fc);function Hc(a){return eval("("+a+")")}
;var Ic=null;"undefined"!=typeof XMLHttpRequest?Ic=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Ic=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Jc(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Hb(b)(k)}
var k=Ic&&Ic();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=Kc(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function Kc(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(J)[1]||null,e=Sb(a.match(J)[3]||null);d&&e?(d=c,c=a.match(J),d=d.match(J),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Sb(c.match(J)[3]||null)==e&&(Number(c.match(J)[4]||null)||null)==(Number(a.match(J)[4]||null)||null):!0;for(var f in Lc){if((e=d=D(Lc[f]))&&!(e=c)){var e=f,g=D("CORS_HEADER_WHITELIST")||{},h=Sb(a.match(J)[3]||null);e=h?(g=g[h])?ra(g,e):!1:!0}e&&(b[f]=d)}return b}
function Mc(a,b){var c=D("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.Ba&&(!Sb(a.match(J)[3]||null)||b.withCredentials||Sb(a.match(J)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.u&&b.u[c])}
function Nc(a,b){var c=b.format||"JSON";b.Ca&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=D("XSRF_FIELD_NAME",void 0),e=D("XSRF_TOKEN",void 0),f=b.$;f&&(f[d]&&delete f[d],a=cc(a,f||{}));var g=b.Da||"",f=b.u;Mc(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=bc(g),Ga(d,f),g=b.sa&&"JSON"==b.sa?JSON.stringify(d):Xb(d));var h=!1,k,l=Jc(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d;a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Oc(c,a,b.Aa);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||p;d?b.w&&b.w.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.J&&b.J.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.qa&&0<b.timeout&&(k=E(function(){h||(h=!0,l.abort(),window.clearTimeout(k),b.qa.call(b.context||p,l))},b.timeout))}
function Oc(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Hc(a));break;case "XML":if(b=(b=b.responseXML)?Pc(b):null)d={},w(b.getElementsByTagName("*"),function(a){d[a.tagName]=Qc(a)})}c&&Rc(d);
return d}
function Rc(a){if(ea(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=new Ka:Rc(a[b])}}
function Pc(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Qc(a){var b="";w(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Lc={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function L(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
L.prototype.getHeight=function(){return this.bottom-this.top};
L.prototype.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
L.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
L.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Sc(a,b,c,d){this.left=a;this.top=b;this.f=c;this.b=d}
Sc.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.f=Math.ceil(this.f);this.b=Math.ceil(this.b);return this};
Sc.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.f=Math.floor(this.f);this.b=Math.floor(this.b);return this};
Sc.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.f=Math.round(this.f);this.b=Math.round(this.b);return this};function N(a,b){var c=cb(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Tc(a,b){return N(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Uc(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}A&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Vc(a){"number"==typeof a&&(a+="px");return a}
function Wc(a){var b=Xc;if("none"!=Tc(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Xc(a){var b=a.offsetWidth,c=a.offsetHeight,d=Oa&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Uc(a),new z(a.right-a.left,a.bottom-a.top)):new z(b,c)}
function Yc(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function Zc(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Yc(a,c):0}
var $c={thin:2,medium:4,thick:6};function ad(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in $c?$c[c]:Yc(a,c)}
;var bd=q("yt.dom.getNextId_");if(!bd){bd=function(){return++cd};
u("yt.dom.getNextId_",bd);var cd=0}function dd(){var a=document,b;pa(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function ed(){var a=dd();return a?a:null}
;function fd(a,b){(a=B(a))&&a.style&&(a.style.display=b?"":"none",Ba(a,"hid",!b))}
function gd(a){w(arguments,function(a){!da(a)||a instanceof Element?fd(a,!0):w(a,function(a){gd(a)})})}
function hd(a){w(arguments,function(a){!da(a)||a instanceof Element?fd(a,!1):w(a,function(a){hd(a)})})}
;function id(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.b=a;for(var b in a)b in jd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=
a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
id.prototype.preventDefault=function(){this.b&&(this.b.returnValue=!1,this.b.preventDefault&&this.b.preventDefault())};
id.prototype.stopPropagation=function(){this.b&&(this.b.cancelBubble=!0,this.b.stopPropagation&&this.b.stopPropagation())};
id.prototype.stopImmediatePropagation=function(){this.b&&(this.b.cancelBubble=!0,this.b.stopImmediatePropagation&&this.b.stopImmediatePropagation())};
var jd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Ea=q("yt.events.listeners_")||{};u("yt.events.listeners_",Ea);var kd=q("yt.events.counter_")||{count:0};u("yt.events.counter_",kd);function ld(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Da(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function O(a,b){var c=document,d=md;if(c&&(c.addEventListener||c.attachEvent)){var e=!!b,f=ld(c,a,d,e);if(!f){var f=++kd.count+"",g=!("mouseenter"!=a&&"mouseleave"!=a||!c.addEventListener||"onmouseenter"in document),h;h=g?function(b){b=new id(b);if(!nb(b.relatedTarget,function(a){return a==c},!0))return b.currentTarget=c,b.type=a,d.call(c,b)}:function(a){a=new id(a);
a.currentTarget=c;return d.call(c,a)};
h=Hb(h);c.addEventListener?("mouseenter"==a&&g?a="mouseover":"mouseleave"==a&&g?a="mouseout":"mousewheel"==a&&"MozBoxSizing"in document.documentElement.style&&(a="MozMousePixelScroll"),c.addEventListener(a,h,e)):c.attachEvent("on"+a,h);Ea[f]=[c,a,d,h,e]}}}
;var P={},nd="ontouchstart"in document;function od(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return nb(c,function(a){return ya(a,b)},!0,d)}
function md(a){var b="mouseover"==a.type&&"mouseenter"in P||"mouseout"==a.type&&"mouseleave"in P,c=a.type in P||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=P[b],d;for(d in c.m){var e=od(b,d,a.target);e&&!nb(a.relatedTarget,function(a){return a==e},!0)&&c.D(d,e,b,a)}}if(b=P[a.type])for(d in b.m)(e=od(a.type,d,a.target))&&b.D(d,e,a.type,a)}}
O("blur",!0);O("change",!0);O("click");O("focus",!0);O("mouseover");O("mouseout");O("mousedown");O("keydown");O("keyup");O("keypress");O("cut");O("paste");nd&&(O("touchstart"),O("touchend"),O("touchcancel"));function Q(a,b,c){a&&(a.dataset?a.dataset[pd(b)]=c:a.setAttribute("data-"+b,c))}
function R(a,b){return a?a.dataset?a.dataset[pd(b)]:a.getAttribute("data-"+b):null}
function S(a,b){a&&(a.dataset?delete a.dataset[pd(b)]:a.removeAttribute("data-"+b))}
var qd={};function pd(a){return qd[a]||(qd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function T(a){this.l=a;this.i={};this.F=[];this.j=[]}
function U(a,b){return"yt-uix"+(a.l?"-"+a.l:"")+(b?"-"+b:"")}
T.prototype.unregister=function(){Ec(this.F);this.F.length=0;Rb(this.j);this.j.length=0};
T.prototype.init=aa;T.prototype.dispose=aa;function V(a,b,c){a.j.push(I(b,c,a))}
function W(a,b,c){var d=U(a,void 0),e=t(c,a);b in P||(P[b]=new C);P[b].subscribe(d,e);a.i[c]=e}
function X(a,b,c){if(b in P){var d=P[b];d.unsubscribe(U(a,void 0),a.i[c]);0>=Db(d)&&(d.dispose(),delete P[b])}delete a.i[c]}
function rd(a,b){Q(a,"tooltip-text",b)}
;function sd(){T.call(this,"tooltip");this.b=0;this.f={}}
v(sd,T);ba(sd);m=sd.prototype;m.register=function(){W(this,"mouseover",this.C);W(this,"mouseout",this.o);W(this,"focus",this.R);W(this,"blur",this.O);W(this,"click",this.o);W(this,"touchstart",this.Z);W(this,"touchend",this.G);W(this,"touchcancel",this.G)};
m.unregister=function(){X(this,"mouseover",this.C);X(this,"mouseout",this.o);X(this,"focus",this.R);X(this,"blur",this.O);X(this,"click",this.o);X(this,"touchstart",this.Z);X(this,"touchend",this.G);X(this,"touchcancel",this.G);this.dispose();sd.K.unregister.call(this)};
m.dispose=function(){for(var a in this.f)this.o(this.f[a]);this.f={}};
m.C=function(a){if(!(this.b&&1E3>ja()-this.b)){var b=parseInt(R(a,"tooltip-hide-timer"),10);b&&(S(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){td(this,a);S(a,"tooltip-show-timer")},this),c=parseInt(R(a,"tooltip-show-delay"),10)||0,b=E(b,c);
Q(a,"tooltip-show-timer",b.toString());a.title&&(rd(a,ud(a)),a.title="");b=(a[fa]||(a[fa]=++ga)).toString();this.f[b]=a}};
m.o=function(a){var b=parseInt(R(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),S(a,"tooltip-show-timer"));b=t(function(){if(a){var b=B(vd(this,a));b&&(wd(b),b&&b.parentNode&&b.parentNode.removeChild(b),S(a,"content-id"));(b=B(vd(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}S(a,"tooltip-hide-timer")},this);
b=E(b,50);Q(a,"tooltip-hide-timer",b.toString());if(b=R(a,"tooltip-text"))a.title=b;b=(a[fa]||(a[fa]=++ga)).toString();delete this.f[b]};
m.R=function(a){this.b=0;this.C(a)};
m.O=function(a){this.b=0;this.o(a)};
m.Z=function(a,b,c){c.changedTouches&&(this.b=0,a=od(b,U(this),c.changedTouches[0].target),this.C(a))};
m.G=function(a,b,c){c.changedTouches&&(this.b=ja(),a=od(b,U(this),c.changedTouches[0].target),this.o(a))};
function xd(a,b){rd(a,b);var c=R(a,"content-id");(c=B(c))&&gb(c,b)}
function ud(a){return R(a,"tooltip-text")||a.title}
function td(a,b){if(b){var c=ud(b);if(c){var d=B(vd(a,b));if(!d){d=document.createElement("div");d.id=vd(a,b);d.className=U(a,"tip");var e=document.createElement("div");e.className=U(a,"tip-body");var f=document.createElement("div");f.className=U(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=U(a,"tip-content");var h=yd(a,b),k=vd(a,b,"content");g.id=k;Q(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var l=
jb(b),k=vd(a,b,"arialabel"),f=document.createElement("div");za(f,U(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;gb(f,l);b.setAttribute("aria-labelledby",k);k=ed()||document.body;k.appendChild(f);k.appendChild(d);xd(b,c);(c=parseInt(R(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",za(g,U(a,"normal-wrap")));g=ya(b,U(a,"reverse"));zd(a,b,d,e,h,g)||zd(a,b,d,e,h,!g);var n=U(a,"tip-visible");
E(function(){za(d,n)},0)}}}}
function zd(a,b,c,d,e,f){Ba(c,U(a,"tip-reverse"),f);var g=0;f&&(g=1);a=Wc(b);f=new y((a.b-10)/2,f?a.f:0);var h=cb(b),k=new y(0,0),l;l=h?cb(h):document;l=!A||9<=Number(Za)||fb(ab(l).b)?l.documentElement:l.body;if(b!=l){l=Uc(b);var n=ab(h).b,h=n.scrollingElement?n.scrollingElement:!Oa&&fb(n)?n.documentElement:n.body||n.documentElement,n=n.parentWindow||n.defaultView,h=A&&Xa("10")&&n.pageYOffset!=h.scrollTop?new y(h.scrollLeft,h.scrollTop):new y(n.pageXOffset||h.scrollLeft,n.pageYOffset||h.scrollTop);
k.g=l.left+h.g;k.h=l.top+h.h}f=new y(k.g+f.g,k.h+f.h);f=new y(f.g,f.h);k=(g&8&&"rtl"==Tc(c,"direction")?g^4:g)&-9;g=Wc(c);h=new z(g.b,g.f);l=f;l=new y(l.g,l.h);h=new z(h.b,h.f);0!=k&&(k&4?l.g-=h.b+0:k&2&&(l.g-=h.b/2),k&1&&(l.h-=h.f+0));f=new Sc(0,0,0,0);f.left=l.g;f.top=l.h;f.f=h.b;f.b=h.f;l=new y(f.left,f.top);l instanceof y?(k=l.g,l=l.h):(k=l,l=void 0);c.style.left=Vc(k);c.style.top=Vc(l);h=new z(f.f,f.b);if(!(g==h||g&&h&&g.b==h.b&&g.f==h.f))if(g=h,k=fb(ab(cb(c)).b),!A||Xa("10")||k&&Xa("8"))f=c.style,
Na?f.MozBoxSizing="border-box":Oa?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(g.b,0)+"px",f.height=Math.max(g.f,0)+"px";else if(f=c.style,k){A?(k=Zc(c,"paddingLeft"),l=Zc(c,"paddingRight"),h=Zc(c,"paddingTop"),n=Zc(c,"paddingBottom"),k=new L(h,l,n,k)):(k=N(c,"paddingLeft"),l=N(c,"paddingRight"),h=N(c,"paddingTop"),n=N(c,"paddingBottom"),k=new L(parseFloat(h),parseFloat(l),parseFloat(n),parseFloat(k)));if(!A||9<=Number(Za))l=N(c,"borderLeftWidth"),h=N(c,"borderRightWidth"),
n=N(c,"borderTopWidth"),M=N(c,"borderBottomWidth"),l=new L(parseFloat(n),parseFloat(h),parseFloat(M),parseFloat(l));else{l=ad(c,"borderLeft");var h=ad(c,"borderRight"),n=ad(c,"borderTop"),M=ad(c,"borderBottom");l=new L(n,h,M,l)}f.pixelWidth=g.b-l.left-k.left-k.right-l.right;f.pixelHeight=g.f-l.top-k.top-k.bottom-l.bottom}else f.pixelWidth=g.b,f.pixelHeight=g.f;g=window.document;g=fb(g)?g.documentElement:g.body;f=new z(g.clientWidth,g.clientHeight);1==c.nodeType?(c=Uc(c),l=new y(c.left,c.top)):(c=
c.changedTouches?c.changedTouches[0]:c,l=new y(c.clientX,c.clientY));c=Wc(d);h=Math.floor(c.b/2);g=!!(f.f<l.h+a.f);a=!!(l.h<a.f);k=!!(l.g<h);f=!!(f.b<l.g+h);l=(c.b+3)/-2- -5;b=R(b,"force-tooltip-direction");if("left"==b||k)l=-5;else if("right"==b||f)l=20-c.b-3;b=Math.floor(l)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.f+"px",e.style.width=c.b+"px");return!(g||a)}
function vd(a,b,c){a=U(a);var d=b.__yt_uid_key;d||(d=bd(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function yd(a,b){var c=null;Pa&&ya(b,U(a,"masked"))&&((c=B("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),gd(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=U(a,"tip-mask")));return c}
function wd(a){var b=B("yt-uix-tooltip-shared-mask"),c=b&&nb(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),hd(b),document.body.appendChild(b))}
;function Ad(){T.call(this,"subscription-button")}
v(Ad,T);ba(Ad);Ad.prototype.register=function(){W(this,"click",this.H);V(this,mc,this.W);V(this,nc,this.V);V(this,oc,this.pa);V(this,rc,this.W);V(this,sc,this.V);V(this,tc,this.ra);V(this,vc,this.oa);V(this,wc,this.na)};
Ad.prototype.unregister=function(){X(this,"click",this.H);Ad.K.unregister.call(this)};
var mb={L:"hover-enabled",ba:"yt-uix-button-subscribe",ca:"yt-uix-button-subscribed",ta:"ypc-enabled",da:"yt-uix-button-subscription-container",ea:"yt-subscription-button-disabled-mask-container"},Y={ua:"channel-external-id",fa:"subscriber-count-show-when-subscribed",ga:"subscriber-count-tooltip",ha:"subscriber-count-title",va:"href",M:"is-subscribed",wa:"parent-url",xa:"clicktracking",ia:"style-type",N:"subscription-id",ya:"target",ja:"ypc-enabled"};m=Ad.prototype;
m.H=function(a){var b=R(a,"href"),c;c=(c=D("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!D("SESSION_INDEX")&&!D("LOGGED_IN"));if(b)a=R(a,"target")||"_self",window.open(b,a);else if(c){b=R(a,"channel-external-id");c=R(a,"clicktracking");var d;if(R(a,"ypc-enabled")){d=R(a,"ypc-item-type");var e=R(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=R(a,"parent-url");if(R(a,"is-subscribed")){var f=R(a,"subscription-id");H(qc,new hc(b,f,d,a,c,e))}else H(lc,new fc(b,
d,c,e))}else Bd(this,a)};
m.W=function(a){this.v(a.b,this.X,!0)};
m.V=function(a){this.v(a.b,this.X,!1)};
m.pa=function(a){this.v(a.b,this.Y,!0,a.f)};
m.ra=function(a){this.v(a.b,this.Y,!1)};
m.oa=function(a){this.v(a.b,this.ma)};
m.na=function(a){this.v(a.b,this.la)};
m.Y=function(a,b,c){b?(Q(a,Y.M,"true"),c&&Q(a,Y.N,c)):(S(a,Y.M),S(a,Y.N));Cd(a)};
m.X=function(a,b){var c;c=lb(a);Ba(c,mb.ea,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Cd(a){var b=R(a,Y.ia),c=!!R(a,"is-subscribed"),b="-"+b,d=mb.ca+b;Ba(a,mb.ba+b,!c);Ba(a,d,c);R(a,Y.ga)&&!R(a,Y.fa)&&(b=U(sd.S()),Ba(a,b,!c),a.title=c?"":R(a,Y.ha));c?E(function(){za(a,mb.L)},1E3):Aa(a,mb.L)}
m.ma=function(a){var b=!!R(a,"ypc-item-type"),c=!!R(a,"ypc-item-id");!R(a,"ypc-enabled")&&b&&c&&(za(a,"ypc-enabled"),Q(a,Y.ja,"true"))};
m.la=function(a){R(a,"ypc-enabled")&&(Aa(a,"ypc-enabled"),S(a,"ypc-enabled"))};
function Dd(a,b){var c=db(U(a));return oa(c,function(a){return b==R(a,"channel-external-id")},a)}
m.ka=function(a,b,c){var d=wa(arguments,2);w(a,function(a){b.apply(this,sa(a,d))},this)};
m.v=function(a,b,c){var d=Dd(this,a);this.ka.apply(this,sa([d],wa(arguments,1)))};
function Bd(a,b){var c=t(function(a){a.discoverable_subscriptions&&Gb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.H(b)},a);
Gc(c)}
;var Ed=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",Ed);function Fd(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&ac(c)}}
;function Gd(a){F.call(this,1,arguments)}
v(Gd,F);function Hd(a,b){F.call(this,2,arguments);this.f=a;this.b=b}
v(Hd,F);function Id(a,b,c,d){F.call(this,1,arguments);this.b=b;this.i=c||null;this.f=d||null}
v(Id,F);function Jd(a,b){F.call(this,1,arguments);this.f=a;this.b=b||null}
v(Jd,F);function Kd(a){F.call(this,1,arguments)}
v(Kd,F);var Ld=new G("ypc-core-load",Gd),Md=new G("ypc-guide-sync-success",Hd),Nd=new G("ypc-purchase-success",Id),Od=new G("ypc-subscription-cancel",Kd),Pd=new G("ypc-subscription-cancel-success",Jd),Qd=new G("ypc-init-subscription",Kd);var Rd=!1,Sd=[],Td=[];function Ud(a){a.b?Rd?H(pc,a):H(Ld,new Gd(function(){H(Qd,new Kd(a.b))})):Vd(a.f,a.j,a.i,a.l)}
function Wd(a){a.b?Rd?H(uc,a):H(Ld,new Gd(function(){H(Od,new Kd(a.b))})):Xd(a.f,a.B,a.j,a.i,a.l)}
function Yd(a){Zd(ta(a.b))}
function $d(a){ae(ta(a.b))}
function be(a){ce(a.b,a.f,null)}
function de(a,b,c,d){ce(a,b,c,d)}
function ee(a){var b=a.f,c=a.b.subscriptionId;b&&c&&H(oc,new gc(b,c,a.b.channelInfo))}
function fe(a){var b=a.b;Ca(a.f,function(a,d){H(oc,new gc(d,a,b[d]))})}
function ge(a){H(tc,new K(a.f.itemId));a.b&&a.b.length&&(he(a.b,tc),he(a.b,vc))}
function Vd(a,b,c,d){var e=new K(a);H(mc,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=D("PLAYBACK_ID"))&&(c.plid=d);(d=D("EVENT_ID"))&&(c.ei=d);b&&ie(b,c);Nc("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",$:f,u:c,w:function(b,c){var d=c.response;H(oc,new gc(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Fc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Fd(d.actions)},
J:function(){H(nc,e)}})}
function Xd(a,b,c,d,e){var f=new K(a);H(rc,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=D("PLAYBACK_ID"))&&(d.plid=a);(a=D("EVENT_ID"))&&(d.ei=a);c&&ie(c,d);Nc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",$:g,u:d,w:function(a,b){var c=b.response;H(tc,f);c.actions&&Fd(c.actions)},
J:function(){H(sc,f)}})}
function ce(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.email_on_upload=b);null===c||(e.receive_no_updates=c);Nc("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",u:e,onError:function(){d&&d()}})}}
function Zd(a){if(a.length){var b=va(a,0,40);H("subscription-batch-subscribe-loading");he(b,mc);var c={};c.a=b.join(",");var d=function(){H("subscription-batch-subscribe-loaded");he(b,nc)};
Nc("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",u:c,w:function(c,f){d();var g=f.response,h=g.id;if("array"==ca(h)&&h.length==b.length){var k=g.channel_info_map;w(h,function(a,c){var d=b[c];H(oc,new gc(d,a,k[d]))});
a.length?Zd(a):H("subscription-batch-subscribe-finished")}},
onError:function(){d();H("subscription-batch-subscribe-failure")}})}}
function ae(a){if(a.length){var b=va(a,0,40);H("subscription-batch-unsubscribe-loading");he(b,rc);var c={};c.c=b.join(",");var d=function(){H("subscription-batch-unsubscribe-loaded");he(b,sc)};
Nc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",u:c,w:function(){d();he(b,tc);a.length&&ae(a)},
onError:function(){d()}})}}
function he(a,b){w(a,function(a){H(b,new K(a))})}
function ie(a,b){var c=bc(a),d;for(d in c)b[d]=c[d]}
;Rd=!0;Td.push(I(lc,Ud),I(qc,Wd));Rd||(Td.push(I(pc,Ud),I(uc,Wd),I(ic,Yd),I(jc,$d),I(kc,be)),Sd.push(Cc("subscription-prefs",de)),Td.push(I(Nd,ee),I(Pd,ge),I(Md,fe)));var Z=Ad.S(),je=U(Z);je in Ed||(Z.register(),Z.F.push(Cc("yt-uix-init-"+je,Z.init,Z)),Z.F.push(Cc("yt-uix-dispose-"+je,Z.dispose,Z)),Ed[je]=Z);u("yt.setConfig",Gb);})();
