(function(){var m,p=this;function q(a){a=a.split(".");for(var b=p,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function aa(){}
function ba(a){a.P=function(){return a.R?a.R:a.R=new a}}
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
c.prototype=b.prototype;a.I=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.xa=function(a,c,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[c].apply(a,g)}}
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
;function Ka(){this.f="";this.b=null}
function La(a,b){var c=new Ka;c.f=a;c.b=b;return c}
La("<!DOCTYPE html>",0);La("",0);La("<br>",0);function y(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
y.prototype.clone=function(){return new y(this.x,this.y)};
y.prototype.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
y.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
y.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function z(a,b){this.width=a;this.height=b}
z.prototype.clone=function(){return new z(this.width,this.height)};
z.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
z.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
z.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};var Ma=x("Opera"),A=x("Trident")||x("MSIE"),Na=x("Edge"),Oa=x("Gecko")&&!(-1!=Ha.toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),Pa=-1!=Ha.toLowerCase().indexOf("webkit")&&!x("Edge"),Qa=x("Windows");function Ra(){var a=p.document;return a?a.documentMode:void 0}
var Sa;a:{var Ta="",Ua=function(){var a=Ha;if(Oa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(Na)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Pa)return/WebKit\/(\S+)/.exec(a);if(Ma)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Ua&&(Ta=Ua?Ua[1]:"");if(A){var Va=Ra();if(null!=Va&&Va>parseFloat(Ta)){Sa=String(Va);break a}}Sa=Ta}var Wa=Sa,Xa={};
function Ya(a){var b;if(!(b=Xa[a])){b=0;for(var c=la(String(Wa)).split("."),d=la(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"",k=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var n=k.exec(g)||["","",""],M=l.exec(h)||["","",""];if(0==n[0].length&&0==M[0].length)break;b=ma(0==n[1].length?0:parseInt(n[1],10),0==M[1].length?0:parseInt(M[1],10))||ma(0==n[2].length,0==M[2].length)||ma(n[2],M[2])}while(0==b)}b=Xa[a]=0<=b}return b}
var Za=p.document,$a=Za&&A?Ra()||("CSS1Compat"==Za.compatMode?parseInt(Wa,10):5):void 0;!Oa&&!A||A&&9<=Number($a)||Oa&&Ya("1.9.1");var ab=A&&!Ya("9");function bb(a){return a?new cb(db(a)):ka||(ka=new cb)}
function B(a){var b=document;return r(a)?b.getElementById(a):a}
function eb(a){var b=document;return b.querySelectorAll&&b.querySelector?b.querySelectorAll("."+a):fb(a)}
function fb(a){var b,c,d,e;b=document;if(b.querySelectorAll&&b.querySelector&&a)return b.querySelectorAll(""+(a?"."+a:""));if(a&&b.getElementsByClassName){var f=b.getElementsByClassName(a);return f}f=b.getElementsByTagName("*");if(a){e={};for(c=d=0;b=f[c];c++){var g=b.className;"function"==typeof g.split&&ra(g.split(/\s+/),a)&&(e[d++]=b)}e.length=d;return e}return f}
function gb(a){return"CSS1Compat"==a.compatMode}
function db(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function hb(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=b;else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=b}else{for(var c;c=a.firstChild;)a.removeChild(c);c=db(a);a.appendChild(c.createTextNode(String(b)))}}
var ib={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},jb={IMG:" ",BR:"\n"};function kb(a){if(ab&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];lb(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");ab||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function lb(a,b,c){if(!(a.nodeName in ib))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in jb)b.push(jb[a.nodeName]);else for(a=a.firstChild;a;)lb(a,b,c),a=a.nextSibling}
function mb(a){var b=nb.ba;return b?ob(a,function(a){return!b||r(a.className)&&ra(a.className.split(/\s+/),b)},!0,void 0):null}
function ob(a,b,c,d){c||(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function cb(a){this.b=a||p.document||document}
cb.prototype.getElementsByTagName=function(a,b){return(b||this.b).getElementsByTagName(a)};
cb.prototype.createElement=function(a){return this.b.createElement(String(a))};
cb.prototype.isElement=function(a){return ea(a)&&1==a.nodeType};
cb.prototype.contains=function(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function pb(a){p.setTimeout(function(){throw a;},0)}
var qb;
function rb(){var a=p.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!x("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=t(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&!x("Trident")&&!x("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.N;c.N=null;a()}};
return function(a){d.next={N:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){p.setTimeout(a,0)}}
;function sb(a,b,c){this.h=c;this.g=a;this.i=b;this.f=0;this.b=null}
sb.prototype.get=function(){var a;0<this.f?(this.f--,a=this.b,this.b=a.next,a.next=null):a=this.g();return a};function tb(){this.f=this.b=null}
var vb=new sb(function(){return new ub},function(a){a.reset()},100);
tb.prototype.remove=function(){var a=null;this.b&&(a=this.b,this.b=this.b.next,this.b||(this.f=null),a.next=null);return a};
function ub(){this.next=this.f=this.b=null}
ub.prototype.set=function(a,b){this.b=a;this.f=b;this.next=null};
ub.prototype.reset=function(){this.next=this.f=this.b=null};function wb(a){xb||yb();zb||(xb(),zb=!0);var b=Ab,c=vb.get();c.set(a,void 0);b.f?b.f.next=c:b.b=c;b.f=c}
var xb;function yb(){if(p.Promise&&p.Promise.resolve){var a=p.Promise.resolve(void 0);xb=function(){a.then(Bb)}}else xb=function(){var a=Bb;
"function"!=ca(p.setImmediate)||p.Window&&p.Window.prototype&&!x("Edge")&&p.Window.prototype.setImmediate==p.setImmediate?(qb||(qb=rb()),qb(a)):p.setImmediate(a)}}
var zb=!1,Ab=new tb;function Bb(){for(var a;a=Ab.remove();){try{a.b.call(a.f)}catch(c){pb(c)}var b=vb;b.i(a);b.f<b.h&&(b.f++,a.next=b.b,b.b=a)}zb=!1}
;function Cb(){this.f=this.f;this.g=this.g}
Cb.prototype.f=!1;Cb.prototype.isDisposed=function(){return this.f};
Cb.prototype.dispose=function(){this.f||(this.f=!0,this.G())};
Cb.prototype.G=function(){if(this.g)for(;this.g.length;)this.g.shift()()};function C(a){Cb.call(this);this.w=1;this.h=[];this.i=0;this.b=[];this.j={};this.S=!!a}
v(C,Cb);m=C.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.w;this.b[e]=a;this.b[e+1]=b;this.b[e+2]=c;this.w=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.j[a]){var d=this.b;if(a=qa(a,function(a){return d[a+1]==b&&d[a+2]==c}))return this.v(a)}return!1};
m.v=function(a){var b=this.b[a];if(b){var c=this.j[b];if(0!=this.i)this.h.push(a),this.b[a+1]=aa;else{if(c){var d=na(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.b[a];delete this.b[a+1];delete this.b[a+2]}}return!!b};
m.B=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.S)for(e=0;e<c.length;e++){var g=c[e];Db(this.b[g+1],this.b[g+2],d)}else{this.i++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.b[g+1].apply(this.b[g+2],d)}finally{if(this.i--,0<this.h.length&&0==this.i)for(;c=this.h.pop();)this.v(c)}}return 0!=e}return!1};
function Db(a,b,c){wb(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(w(b,this.v,this),delete this.j[a])}else this.b.length=0,this.j={}};
function Eb(a,b){if(b){var c=a.j[b];return c?c.length:0}var c=0,d;for(d in a.j)c+=Eb(a,d);return c}
m.G=function(){C.I.G.call(this);this.clear();this.h.length=0};var Fb=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};u("yt.config_",Fb);u("yt.tokens_",window.yt&&window.yt.tokens_||{});var Gb=window.yt&&window.yt.msgs_||q("window.ytcfg.msgs")||{};u("yt.msgs_",Gb);function Hb(a){var b=arguments;if(1<b.length){var c=b[0];Fb[c]=b[1]}else for(c in b=b[0],b)Fb[c]=b[c]}
function D(a,b){return a in Fb?Fb[a]:b}
function E(a,b){"function"==ca(a)&&(a=Ib(a));return window.setTimeout(a,b)}
function Ib(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){throw Jb(b),b;}}:a}
function Jb(a){var b=q("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=D("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),Hb("ERRORS",b))}
;function Kb(a){var b=void 0;isNaN(b)&&(b=void 0);var c=q("yt.scheduler.instance.addJob");c?c(a,1,b):void 0===b?a():E(a,b||0)}
;function F(a,b){this.version=a;this.args=b}
function Lb(a){if(!a.Z){var b={};a.call(b);a.Z=b.version}return a.Z}
function Mb(a,b){function c(){a.apply(this,b.args)}
if(!b.args||!b.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");var d;try{d=Lb(a)}catch(e){}if(!d||b.version!=d)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");c.prototype=a.prototype;try{return new c}catch(e){throw e.message="yt.pubsub2.Data.deserialize(): "+e.message,e;}}
function G(a,b){this.f=a;this.b=b}
G.prototype.toString=function(){return this.f};var Nb=q("yt.pubsub2.instance_")||new C;C.prototype.subscribe=C.prototype.subscribe;C.prototype.unsubscribeByKey=C.prototype.v;C.prototype.publish=C.prototype.B;C.prototype.clear=C.prototype.clear;u("yt.pubsub2.instance_",Nb);var Ob=q("yt.pubsub2.subscribedKeys_")||{};u("yt.pubsub2.subscribedKeys_",Ob);var Pb=q("yt.pubsub2.topicToKeys_")||{};u("yt.pubsub2.topicToKeys_",Pb);var Qb=q("yt.pubsub2.isAsync_")||{};u("yt.pubsub2.isAsync_",Qb);u("yt.pubsub2.skipSubKey_",null);
function H(a,b){var c=Rb();c&&c.publish.call(c,a.toString(),a,b)}
function I(a,b,c){var d=Rb();if(!d)return 0;var e=d.subscribe(a.toString(),function(d,g){if(!window.yt.pubsub2.skipSubKey_||window.yt.pubsub2.skipSubKey_!=e){var h=function(){if(Ob[e])try{if(g&&a instanceof G&&a!=d)try{g=Mb(a.b,g)}catch(k){throw k.message="yt.pubsub2 cross-binary conversion error for "+a.toString()+": "+k.message,k;}b.call(c||window,g)}catch(k){Jb(k)}};
Qb[a.toString()]?q("yt.scheduler.instance")?Kb(h):E(h,0):h()}});
Ob[e]=!0;Pb[a.toString()]||(Pb[a.toString()]=[]);Pb[a.toString()].push(e);return e}
function Sb(a){var b=Rb();b&&("number"==typeof a&&(a=[a]),w(a,function(a){b.unsubscribeByKey(a);delete Ob[a]}))}
function Rb(){return q("yt.pubsub2.instance_")}
;var J=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Tb(a){return a?decodeURI(a):a}
function Ub(a){if(a[1]){var b=a[0],c=b.indexOf("#");0<=c&&(a.push(b.substr(c)),a[0]=b=b.substr(0,c));c=b.indexOf("?");0>c?a[1]="?":c==b.length-1&&(a[1]=void 0)}return a.join("")}
function Vb(a,b,c){if("array"==ca(b))for(var d=0;d<b.length;d++)Vb(a,String(b[d]),c);else null!=b&&c.push("&",a,""===b?"":"=",encodeURIComponent(String(b)))}
function Wb(a,b,c){for(c=c||0;c<b.length;c+=2)Vb(b[c],b[c+1],a);return a}
function Xb(a,b){for(var c in b)Vb(c,b[c],a);return a}
function Yb(a){a=Xb([],a);a[0]="";return a.join("")}
function Zb(a,b){return Ub(2==arguments.length?Wb([a],arguments[1],0):Wb([a],arguments,1))}
;var $b={},ac=0;function bc(a){var b=new Image,c=""+ac++;$b[c]=b;b.onload=b.onerror=function(){delete $b[c]};
b.src=a}
;function cc(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ca(b[f])?ua(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function dc(a,b){var c=a.split("#",2);a=c[0];var c=1<c.length?"#"+c[1]:"",d=a.split("?",2);a=d[0];var d=cc(d[1]||""),e;for(e in b)d[e]=b[e];return Ub(Xb([a],d))+c}
;function ec(a){F.call(this,1,arguments);this.b=a}
v(ec,F);function K(a){F.call(this,1,arguments);this.b=a}
v(K,F);function fc(a,b){F.call(this,1,arguments);this.b=a;this.f=b}
v(fc,F);function gc(a,b,c,d,e){F.call(this,2,arguments);this.f=a;this.b=b;this.h=c||null;this.g=d||null;this.i=e||null}
v(gc,F);function hc(a,b,c){F.call(this,1,arguments);this.b=a;this.f=b}
v(hc,F);function ic(a,b,c,d,e,f,g){F.call(this,1,arguments);this.f=a;this.w=b;this.b=c;this.S=d||null;this.h=e||null;this.g=f||null;this.i=g||null}
v(ic,F);
var jc=new G("subscription-batch-subscribe",ec),kc=new G("subscription-batch-unsubscribe",ec),lc=new G("subscription-pref-email",fc),mc=new G("subscription-subscribe",gc),nc=new G("subscription-subscribe-loading",K),oc=new G("subscription-subscribe-loaded",K),pc=new G("subscription-subscribe-success",hc),qc=new G("subscription-subscribe-external",gc),rc=new G("subscription-unsubscribe",ic),sc=new G("subscription-unsubscirbe-loading",K),tc=new G("subscription-unsubscribe-loaded",K),uc=new G("subscription-unsubscribe-success",K),
vc=new G("subscription-external-unsubscribe",ic),wc=new G("subscription-enable-ypc",K),xc=new G("subscription-disable-ypc",K);var yc=q("yt.pubsub.instance_")||new C;C.prototype.subscribe=C.prototype.subscribe;C.prototype.unsubscribeByKey=C.prototype.v;C.prototype.publish=C.prototype.B;C.prototype.clear=C.prototype.clear;u("yt.pubsub.instance_",yc);var zc=q("yt.pubsub.subscribedKeys_")||{};u("yt.pubsub.subscribedKeys_",zc);var Ac=q("yt.pubsub.topicToKeys_")||{};u("yt.pubsub.topicToKeys_",Ac);var Bc=q("yt.pubsub.isSynchronous_")||{};u("yt.pubsub.isSynchronous_",Bc);var Cc=q("yt.pubsub.skipSubId_")||null;
u("yt.pubsub.skipSubId_",Cc);function Dc(a,b,c){var d=Ec();if(d){var e=d.subscribe(a,function(){if(!Cc||Cc!=e){var d=arguments,g;g=function(){zc[e]&&b.apply(c||window,d)};
try{Bc[a]?g():E(g,0)}catch(h){Jb(h)}}},c);
zc[e]=!0;Ac[a]||(Ac[a]=[]);Ac[a].push(e);return e}return 0}
function Fc(a){var b=Ec();b&&("number"==typeof a?a=[a]:"string"==typeof a&&(a=[parseInt(a,10)]),w(a,function(a){b.unsubscribeByKey(a);delete zc[a]}))}
function Gc(a,b){var c=Ec();return c?c.publish.apply(c,arguments):!1}
function Ec(){return q("yt.pubsub.instance_")}
;function Hc(a){var b=document.location.protocol+"//"+document.domain+"/post_login",b=Zb(b,"mode","subscribe"),b=Zb("/signin?context=popup","next",b),b=Zb(b,"feature","sub_button");if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Dc("LOGGED_IN",function(b){Fc(D("LOGGED_IN_PUBSUB_KEY",void 0));Hb("LOGGED_IN",!0);a(b)});
Hb("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
u("yt.pubsub.publish",Gc);function Ic(a){return eval("("+a+")")}
;var Jc=null;"undefined"!=typeof XMLHttpRequest?Jc=function(){return new XMLHttpRequest}:"undefined"!=typeof ActiveXObject&&(Jc=function(){return new ActiveXObject("Microsoft.XMLHTTP")});function Kc(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Ib(b)(k)}
var k=Jc&&Jc();if(!("open"in k))return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;c=(c||"GET").toUpperCase();d=d||"";k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);f="POST"==c;if(e=Lc(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(f=!1);f&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);return k}
function Lc(a,b){b=b||{};var c;c||(c=window.location.href);var d=a.match(J)[1]||null,e=Tb(a.match(J)[3]||null);d&&e?(d=c,c=a.match(J),d=d.match(J),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Tb(c.match(J)[3]||null)==e&&(Number(c.match(J)[4]||null)||null)==(Number(a.match(J)[4]||null)||null):!0;for(var f in Mc){if((e=d=D(Mc[f]))&&!(e=c)){var e=f,g=D("CORS_HEADER_WHITELIST")||{},h=Tb(a.match(J)[3]||null);e=h?(g=g[h])?ra(g,e):!1:!0}e&&(b[f]=d)}return b}
function Nc(a,b){var c=D("XSRF_FIELD_NAME",void 0),d;b.headers&&(d=b.headers["Content-Type"]);return!b.za&&(!Tb(a.match(J)[3]||null)||b.withCredentials||Tb(a.match(J)[3]||null)==document.location.hostname)&&"POST"==b.method&&(!d||"application/x-www-form-urlencoded"==d)&&!(b.m&&b.m[c])}
function Oc(a,b){var c=b.format||"JSON";b.Aa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var d=D("XSRF_FIELD_NAME",void 0),e=D("XSRF_TOKEN",void 0),f=b.Y;f&&(f[d]&&delete f[d],a=dc(a,f||{}));var g=b.Ba||"",f=b.m;Nc(a,b)&&(f||(f={}),f[d]=e);f&&r(g)&&(d=cc(g),Ga(d,f),g=b.qa&&"JSON"==b.qa?JSON.stringify(d):Yb(d));var h=!1,k,l=Kc(a,function(a){if(!h){h=!0;k&&window.clearTimeout(k);var d;a:switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:d=
!0;break a;default:d=!1}var e=null;if(d||400<=a.status&&500>a.status)e=Pc(c,a,b.ya);if(d)a:{switch(c){case "XML":d=0==parseInt(e&&e.return_code,10);break a;case "RAW":d=!0;break a}d=!!e}var e=e||{},f=b.context||p;d?b.u&&b.u.call(f,a,e):b.onError&&b.onError.call(f,a,e);b.H&&b.H.call(f,a,e)}},b.method,g,b.headers,b.responseType,b.withCredentials);
b.oa&&0<b.timeout&&(k=E(function(){h||(h=!0,l.abort(),window.clearTimeout(k),b.oa.call(b.context||p,l))},b.timeout))}
function Pc(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=Ic(a));break;case "XML":if(b=(b=b.responseXML)?Qc(b):null)d={},w(b.getElementsByTagName("*"),function(a){d[a.tagName]=Rc(a)})}c&&Sc(d);
return d}
function Sc(a){if(ea(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d;d=La(a[b],null);a[c]=d}else Sc(a[b])}}
function Qc(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Rc(a){var b="";w(a.childNodes,function(a){b+=a.nodeValue});
return b}
var Mc={"X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"};function L(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=L.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new L(this.top,this.right,this.bottom,this.left)};
m.contains=function(a){return this&&a?a instanceof L?a.left>=this.left&&a.right<=this.right&&a.top>=this.top&&a.bottom<=this.bottom:a.x>=this.left&&a.x<=this.right&&a.y>=this.top&&a.y<=this.bottom:!1};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function Tc(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
m=Tc.prototype;m.clone=function(){return new Tc(this.left,this.top,this.width,this.height)};
m.contains=function(a){return a instanceof y?a.x>=this.left&&a.x<=this.left+this.width&&a.y>=this.top&&a.y<=this.top+this.height:this.left<=a.left&&this.left+this.width>=a.left+a.width&&this.top<=a.top&&this.top+this.height>=a.top+a.height};
m.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function N(a,b){var c=db(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Uc(a,b){return N(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Vc(a){var b;try{b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}A&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Wc(a){"number"==typeof a&&(a+="px");return a}
function Xc(a){var b=Yc;if("none"!=Uc(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Yc(a){var b=a.offsetWidth,c=a.offsetHeight,d=Pa&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Vc(a),new z(a.right-a.left,a.bottom-a.top)):new z(b,c)}
function Zc(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return e}
function $c(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Zc(a,c):0}
var ad={thin:2,medium:4,thick:6};function bd(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in ad?ad[c]:Zc(a,c)}
;var cd=q("yt.dom.getNextId_");if(!cd){cd=function(){return++dd};
u("yt.dom.getNextId_",cd);var dd=0}function ed(){var a=document,b;pa(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
;function fd(){var a=ed();return a?a:null}
;function gd(a,b){(a=B(a))&&a.style&&(a.style.display=b?"":"none",Ba(a,"hid",!b))}
function hd(a){w(arguments,function(a){!da(a)||a instanceof Element?gd(a,!0):w(a,function(a){hd(a)})})}
function id(a){w(arguments,function(a){!da(a)||a instanceof Element?gd(a,!1):w(a,function(a){id(a)})})}
;function jd(a){this.type="";this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=null;if(a=a||window.event){this.b=a;for(var b in a)b in kd||(this[b]=a[b]);(b=a.target||a.srcElement)&&3==b.nodeType&&(b=b.parentNode);this.target=b;if(b=a.relatedTarget)try{b=b.nodeName?b:null}catch(c){b=null}else"mouseover"==this.type?b=a.fromElement:"mouseout"==this.type&&(b=
a.toElement);this.relatedTarget=b;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey}}
jd.prototype.preventDefault=function(){this.b&&(this.b.returnValue=!1,this.b.preventDefault&&this.b.preventDefault())};
jd.prototype.stopPropagation=function(){this.b&&(this.b.cancelBubble=!0,this.b.stopPropagation&&this.b.stopPropagation())};
jd.prototype.stopImmediatePropagation=function(){this.b&&(this.b.cancelBubble=!0,this.b.stopImmediatePropagation&&this.b.stopImmediatePropagation())};
var kd={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};var Ea=q("yt.events.listeners_")||{};u("yt.events.listeners_",Ea);var ld=q("yt.events.counter_")||{count:0};u("yt.events.counter_",ld);function md(a,b,c,d){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Da(function(e){return e[0]==a&&e[1]==b&&e[2]==c&&e[4]==!!d})}
function O(a,b){var c=document,d=nd;if(c&&(c.addEventListener||c.attachEvent)){var e=!!b,f=md(c,a,d,e);if(!f){var f=++ld.count+"",g=!("mouseenter"!=a&&"mouseleave"!=a||!c.addEventListener||"onmouseenter"in document),h;h=g?function(b){b=new jd(b);if(!ob(b.relatedTarget,function(a){return a==c},!0))return b.currentTarget=c,b.type=a,d.call(c,b)}:function(a){a=new jd(a);
a.currentTarget=c;return d.call(c,a)};
h=Ib(h);c.addEventListener?("mouseenter"==a&&g?a="mouseover":"mouseleave"==a&&g?a="mouseout":"mousewheel"==a&&"MozBoxSizing"in document.documentElement.style&&(a="MozMousePixelScroll"),c.addEventListener(a,h,e)):c.attachEvent("on"+a,h);Ea[f]=[c,a,d,h,e]}}}
;var P={},od="ontouchstart"in document;function pd(a,b,c){var d;switch(a){case "mouseover":case "mouseout":d=3;break;case "mouseenter":case "mouseleave":d=9}return ob(c,function(a){return ya(a,b)},!0,d)}
function nd(a){var b="mouseover"==a.type&&"mouseenter"in P||"mouseout"==a.type&&"mouseleave"in P,c=a.type in P||b;if("HTML"!=a.target.tagName&&c){if(b){var b="mouseover"==a.type?"mouseenter":"mouseleave",c=P[b],d;for(d in c.j){var e=pd(b,d,a.target);e&&!ob(a.relatedTarget,function(a){return a==e},!0)&&c.B(d,e,b,a)}}if(b=P[a.type])for(d in b.j)(e=pd(a.type,d,a.target))&&b.B(d,e,a.type,a)}}
O("blur",!0);O("change",!0);O("click");O("focus",!0);O("mouseover");O("mouseout");O("mousedown");O("keydown");O("keyup");O("keypress");O("cut");O("paste");od&&(O("touchstart"),O("touchend"),O("touchcancel"));function Q(a,b,c){a&&(a.dataset?a.dataset[qd(b)]=c:a.setAttribute("data-"+b,c))}
function R(a,b){return a?a.dataset?a.dataset[qd(b)]:a.getAttribute("data-"+b):null}
function S(a,b){a&&(a.dataset?delete a.dataset[qd(b)]:a.removeAttribute("data-"+b))}
var rd={};function qd(a){return rd[a]||(rd[a]=String(a).replace(/\-([a-z])/g,function(a,c){return c.toUpperCase()}))}
;function T(a){this.i=a;this.g={};this.C=[];this.h=[]}
function U(a,b){return"yt-uix"+(a.i?"-"+a.i:"")+(b?"-"+b:"")}
T.prototype.unregister=function(){Fc(this.C);this.C.length=0;Sb(this.h);this.h.length=0};
T.prototype.init=aa;T.prototype.dispose=aa;function V(a,b,c){a.h.push(I(b,c,a))}
function W(a,b,c){var d=U(a,void 0),e=t(c,a);b in P||(P[b]=new C);P[b].subscribe(d,e);a.g[c]=e}
function X(a,b,c){if(b in P){var d=P[b];d.unsubscribe(U(a,void 0),a.g[c]);0>=Eb(d)&&(d.dispose(),delete P[b])}delete a.g[c]}
function sd(a,b){Q(a,"tooltip-text",b)}
;function td(){T.call(this,"tooltip");this.b=0;this.f={}}
v(td,T);ba(td);m=td.prototype;m.register=function(){W(this,"mouseover",this.A);W(this,"mouseout",this.l);W(this,"focus",this.O);W(this,"blur",this.M);W(this,"click",this.l);W(this,"touchstart",this.X);W(this,"touchend",this.D);W(this,"touchcancel",this.D)};
m.unregister=function(){X(this,"mouseover",this.A);X(this,"mouseout",this.l);X(this,"focus",this.O);X(this,"blur",this.M);X(this,"click",this.l);X(this,"touchstart",this.X);X(this,"touchend",this.D);X(this,"touchcancel",this.D);this.dispose();td.I.unregister.call(this)};
m.dispose=function(){for(var a in this.f)this.l(this.f[a]);this.f={}};
m.A=function(a){if(!(this.b&&1E3>ja()-this.b)){var b=parseInt(R(a,"tooltip-hide-timer"),10);b&&(S(a,"tooltip-hide-timer"),window.clearTimeout(b));var b=t(function(){ud(this,a);S(a,"tooltip-show-timer")},this),c=parseInt(R(a,"tooltip-show-delay"),10)||0,b=E(b,c);
Q(a,"tooltip-show-timer",b.toString());a.title&&(sd(a,vd(a)),a.title="");b=(a[fa]||(a[fa]=++ga)).toString();this.f[b]=a}};
m.l=function(a){var b=parseInt(R(a,"tooltip-show-timer"),10);b&&(window.clearTimeout(b),S(a,"tooltip-show-timer"));b=t(function(){if(a){var b=B(wd(this,a));b&&(xd(b),b&&b.parentNode&&b.parentNode.removeChild(b),S(a,"content-id"));(b=B(wd(this,a,"arialabel")))&&b.parentNode&&b.parentNode.removeChild(b)}S(a,"tooltip-hide-timer")},this);
b=E(b,50);Q(a,"tooltip-hide-timer",b.toString());if(b=R(a,"tooltip-text"))a.title=b;b=(a[fa]||(a[fa]=++ga)).toString();delete this.f[b]};
m.O=function(a){this.b=0;this.A(a)};
m.M=function(a){this.b=0;this.l(a)};
m.X=function(a,b,c){c.changedTouches&&(this.b=0,a=pd(b,U(this),c.changedTouches[0].target),this.A(a))};
m.D=function(a,b,c){c.changedTouches&&(this.b=ja(),a=pd(b,U(this),c.changedTouches[0].target),this.l(a))};
function yd(a,b){sd(a,b);var c=R(a,"content-id");(c=B(c))&&hb(c,b)}
function vd(a){return R(a,"tooltip-text")||a.title}
function ud(a,b){if(b){var c=vd(b);if(c){var d=B(wd(a,b));if(!d){d=document.createElement("div");d.id=wd(a,b);d.className=U(a,"tip");var e=document.createElement("div");e.className=U(a,"tip-body");var f=document.createElement("div");f.className=U(a,"tip-arrow");var g=document.createElement("div");g.setAttribute("aria-hidden","true");g.className=U(a,"tip-content");var h=zd(a,b),k=wd(a,b,"content");g.id=k;Q(b,"content-id",k);e.appendChild(g);h&&d.appendChild(h);d.appendChild(e);d.appendChild(f);var l=
kb(b),k=wd(a,b,"arialabel"),f=document.createElement("div");za(f,U(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;hb(f,l);b.setAttribute("aria-labelledby",k);k=fd()||document.body;k.appendChild(f);k.appendChild(d);yd(b,c);(c=parseInt(R(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",za(g,U(a,"normal-wrap")));g=ya(b,U(a,"reverse"));Ad(a,b,d,e,h,g)||Ad(a,b,d,e,h,!g);var n=U(a,"tip-visible");
E(function(){za(d,n)},0)}}}}
function Ad(a,b,c,d,e,f){Ba(c,U(a,"tip-reverse"),f);var g=0;f&&(g=1);a=Xc(b);f=new y((a.width-10)/2,f?a.height:0);var h=db(b),k=new y(0,0),l;l=h?db(h):document;l=!A||9<=Number($a)||gb(bb(l).b)?l.documentElement:l.body;if(b!=l){l=Vc(b);var n=bb(h).b,h=n.scrollingElement?n.scrollingElement:!Pa&&gb(n)?n.documentElement:n.body||n.documentElement,n=n.parentWindow||n.defaultView,h=A&&Ya("10")&&n.pageYOffset!=h.scrollTop?new y(h.scrollLeft,h.scrollTop):new y(n.pageXOffset||h.scrollLeft,n.pageYOffset||h.scrollTop);
k.x=l.left+h.x;k.y=l.top+h.y}f=new y(k.x+f.x,k.y+f.y);f=f.clone();k=(g&8&&"rtl"==Uc(c,"direction")?g^4:g)&-9;g=Xc(c);l=g.clone();h=f.clone();l=l.clone();0!=k&&(k&4?h.x-=l.width+0:k&2&&(h.x-=l.width/2),k&1&&(h.y-=l.height+0));f=new Tc(0,0,0,0);f.left=h.x;f.top=h.y;f.width=l.width;f.height=l.height;l=new y(f.left,f.top);l instanceof y?(k=l.x,l=l.y):(k=l,l=void 0);c.style.left=Wc(k);c.style.top=Wc(l);l=new z(f.width,f.height);if(!(g==l||g&&l&&g.width==l.width&&g.height==l.height))if(g=l,f=db(c),k=gb(bb(f).b),
!A||Ya("10")||k&&Ya("8"))f=c.style,Oa?f.MozBoxSizing="border-box":Pa?f.WebkitBoxSizing="border-box":f.boxSizing="border-box",f.width=Math.max(g.width,0)+"px",f.height=Math.max(g.height,0)+"px";else if(f=c.style,k){A?(k=$c(c,"paddingLeft"),l=$c(c,"paddingRight"),h=$c(c,"paddingTop"),n=$c(c,"paddingBottom"),k=new L(h,l,n,k)):(k=N(c,"paddingLeft"),l=N(c,"paddingRight"),h=N(c,"paddingTop"),n=N(c,"paddingBottom"),k=new L(parseFloat(h),parseFloat(l),parseFloat(n),parseFloat(k)));if(!A||9<=Number($a))l=
N(c,"borderLeftWidth"),h=N(c,"borderRightWidth"),n=N(c,"borderTopWidth"),M=N(c,"borderBottomWidth"),l=new L(parseFloat(n),parseFloat(h),parseFloat(M),parseFloat(l));else{l=bd(c,"borderLeft");var h=bd(c,"borderRight"),n=bd(c,"borderTop"),M=bd(c,"borderBottom");l=new L(n,h,M,l)}f.pixelWidth=g.width-l.left-k.left-k.right-l.right;f.pixelHeight=g.height-l.top-k.top-k.bottom-l.bottom}else f.pixelWidth=g.width,f.pixelHeight=g.height;g=window.document;g=gb(g)?g.documentElement:g.body;f=new z(g.clientWidth,
g.clientHeight);1==c.nodeType?(c=Vc(c),l=new y(c.left,c.top)):(c=c.changedTouches?c.changedTouches[0]:c,l=new y(c.clientX,c.clientY));c=Xc(d);h=Math.floor(c.width/2);g=!!(f.height<l.y+a.height);a=!!(l.y<a.height);k=!!(l.x<h);f=!!(f.width<l.x+h);l=(c.width+3)/-2- -5;b=R(b,"force-tooltip-direction");if("left"==b||k)l=-5;else if("right"==b||f)l=20-c.width-3;b=Math.floor(l)+"px";d.style.left=b;e&&(e.style.left=b,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(g||a)}
function wd(a,b,c){a=U(a);var d=b.__yt_uid_key;d||(d=cd(),b.__yt_uid_key=d);b=a+d;c&&(b+="-"+c);return b}
function zd(a,b){var c=null;Qa&&ya(b,U(a,"masked"))&&((c=B("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),hd(c)):(c=document.createElement("iframe"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",c.className=U(a,"tip-mask")));return c}
function xd(a){var b=B("yt-uix-tooltip-shared-mask"),c=b&&ob(b,function(b){return b==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),id(b),document.body.appendChild(b))}
;function Bd(){T.call(this,"subscription-button")}
v(Bd,T);ba(Bd);Bd.prototype.register=function(){W(this,"click",this.F);V(this,nc,this.U);V(this,oc,this.T);V(this,pc,this.na);V(this,sc,this.U);V(this,tc,this.T);V(this,uc,this.pa);V(this,wc,this.ma);V(this,xc,this.la)};
Bd.prototype.unregister=function(){X(this,"click",this.F);Bd.I.unregister.call(this)};
var nb={J:"hover-enabled",$:"yt-uix-button-subscribe",aa:"yt-uix-button-subscribed",ra:"ypc-enabled",ba:"yt-uix-button-subscription-container",ca:"yt-subscription-button-disabled-mask-container"},Y={sa:"channel-external-id",da:"subscriber-count-show-when-subscribed",ea:"subscriber-count-tooltip",fa:"subscriber-count-title",ta:"href",K:"is-subscribed",ua:"parent-url",va:"clicktracking",ga:"style-type",L:"subscription-id",wa:"target",ha:"ypc-enabled"};m=Bd.prototype;
m.F=function(a){var b=R(a,"href"),c;c=(c=D("PLAYER_CONFIG"))&&c.args&&void 0!==c.args.authuser?!0:!(!D("SESSION_INDEX")&&!D("LOGGED_IN"));if(b)a=R(a,"target")||"_self",window.open(b,a);else if(c){b=R(a,"channel-external-id");c=R(a,"clicktracking");var d;if(R(a,"ypc-enabled")){d=R(a,"ypc-item-type");var e=R(a,"ypc-item-id");d={itemType:d,itemId:e,subscriptionElement:a}}else d=null;e=R(a,"parent-url");if(R(a,"is-subscribed")){var f=R(a,"subscription-id");H(rc,new ic(b,f,d,a,c,e))}else H(mc,new gc(b,
d,c,e))}else Cd(this,a)};
m.U=function(a){this.o(a.b,this.V,!0)};
m.T=function(a){this.o(a.b,this.V,!1)};
m.na=function(a){this.o(a.b,this.W,!0,a.f)};
m.pa=function(a){this.o(a.b,this.W,!1)};
m.ma=function(a){this.o(a.b,this.ka)};
m.la=function(a){this.o(a.b,this.ja)};
m.W=function(a,b,c){b?(Q(a,Y.K,"true"),c&&Q(a,Y.L,c)):(S(a,Y.K),S(a,Y.L));Dd(a)};
m.V=function(a,b){var c;c=mb(a);Ba(c,nb.ca,b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function Dd(a){var b=R(a,Y.ga),c=!!R(a,"is-subscribed"),b="-"+b,d=nb.aa+b;Ba(a,nb.$+b,!c);Ba(a,d,c);R(a,Y.ea)&&!R(a,Y.da)&&(b=U(td.P()),Ba(a,b,!c),a.title=c?"":R(a,Y.fa));c?E(function(){za(a,nb.J)},1E3):Aa(a,nb.J)}
m.ka=function(a){var b=!!R(a,"ypc-item-type"),c=!!R(a,"ypc-item-id");!R(a,"ypc-enabled")&&b&&c&&(za(a,"ypc-enabled"),Q(a,Y.ha,"true"))};
m.ja=function(a){R(a,"ypc-enabled")&&(Aa(a,"ypc-enabled"),S(a,"ypc-enabled"))};
function Ed(a,b){var c=eb(U(a));return oa(c,function(a){return b==R(a,"channel-external-id")},a)}
m.ia=function(a,b,c){var d=wa(arguments,2);w(a,function(a){b.apply(this,sa(a,d))},this)};
m.o=function(a,b,c){var d=Ed(this,a),d=sa([d],wa(arguments,1));this.ia.apply(this,d)};
function Cd(a,b){var c=t(function(a){a.discoverable_subscriptions&&Hb("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",a.discoverable_subscriptions);this.F(b)},a);
Hc(c)}
;var Fd=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};u("yt.uix.widgets_",Fd);function Gd(a){for(var b=0;b<a.length;b++){var c=a[b];"send_follow_on_ping_action"==c.name&&c.data&&c.data.follow_on_url&&(c=c.data.follow_on_url)&&bc(c)}}
;function Hd(a){F.call(this,1,arguments)}
v(Hd,F);function Id(a,b){F.call(this,2,arguments);this.f=a;this.b=b}
v(Id,F);function Jd(a,b,c,d){F.call(this,1,arguments);this.b=b;this.g=c||null;this.f=d||null}
v(Jd,F);function Kd(a,b){F.call(this,1,arguments);this.f=a;this.b=b||null}
v(Kd,F);function Ld(a){F.call(this,1,arguments)}
v(Ld,F);var Md=new G("ypc-core-load",Hd),Nd=new G("ypc-guide-sync-success",Id),Od=new G("ypc-purchase-success",Jd),Pd=new G("ypc-subscription-cancel",Ld),Qd=new G("ypc-subscription-cancel-success",Kd),Rd=new G("ypc-init-subscription",Ld);var Sd=!1,Td=[],Ud=[];function Vd(a){a.b?Sd?H(qc,a):H(Md,new Hd(function(){H(Rd,new Ld(a.b))})):Wd(a.f,a.h,a.g,a.i)}
function Xd(a){a.b?Sd?H(vc,a):H(Md,new Hd(function(){H(Pd,new Ld(a.b))})):Yd(a.f,a.w,a.h,a.g,a.i)}
function Zd(a){$d(ta(a.b))}
function ae(a){be(ta(a.b))}
function ce(a){de(a.b,a.f,null)}
function ee(a,b,c,d){de(a,b,c,d)}
function fe(a){var b=a.f,c=a.b.subscriptionId;b&&c&&H(pc,new hc(b,c,a.b.channelInfo))}
function ge(a){var b=a.b;Ca(a.f,function(a,d){H(pc,new hc(d,a,b[d]))})}
function he(a){H(uc,new K(a.f.itemId));a.b&&a.b.length&&(ie(a.b,uc),ie(a.b,wc))}
function Wd(a,b,c,d){var e=new K(a);H(nc,e);var f={};f.c=a;c&&(f.eurl=c);d&&(f.source=d);c={};(d=D("PLAYBACK_ID"))&&(c.plid=d);(d=D("EVENT_ID"))&&(c.ei=d);b&&je(b,c);Oc("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Y:f,m:c,u:function(b,c){var d=c.response;H(pc,new hc(a,d.id,d.channel_info));d.show_feed_privacy_dialog&&Gc("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a);d.actions&&Gd(d.actions)},
H:function(){H(oc,e)}})}
function Yd(a,b,c,d,e){var f=new K(a);H(sc,f);var g={};d&&(g.eurl=d);e&&(g.source=e);d={};d.c=a;d.s=b;(a=D("PLAYBACK_ID"))&&(d.plid=a);(a=D("EVENT_ID"))&&(d.ei=a);c&&je(c,d);Oc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Y:g,m:d,u:function(a,b){var c=b.response;H(uc,f);c.actions&&Gd(c.actions)},
H:function(){H(tc,f)}})}
function de(a,b,c,d){if(null!==b||null!==c){var e={};a&&(e.channel_id=a);null===b||(e.receive_all_updates=b);null===c||(e.receive_no_updates=c);Oc("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",m:e,onError:function(){d&&d()}})}}
function $d(a){if(a.length){var b=va(a,0,40);H("subscription-batch-subscribe-loading");ie(b,nc);var c={};c.a=b.join(",");var d=function(){H("subscription-batch-subscribe-loaded");ie(b,oc)};
Oc("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",m:c,u:function(c,f){d();var g=f.response,h=g.id;if("array"==ca(h)&&h.length==b.length){var k=g.channel_info_map;w(h,function(a,c){var d=b[c];H(pc,new hc(d,a,k[d]))});
a.length?$d(a):H("subscription-batch-subscribe-finished")}},
onError:function(){d();H("subscription-batch-subscribe-failure")}})}}
function be(a){if(a.length){var b=va(a,0,40);H("subscription-batch-unsubscribe-loading");ie(b,sc);var c={};c.c=b.join(",");var d=function(){H("subscription-batch-unsubscribe-loaded");ie(b,tc)};
Oc("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",m:c,u:function(){d();ie(b,uc);a.length&&be(a)},
onError:function(){d()}})}}
function ie(a,b){w(a,function(a){H(b,new K(a))})}
function je(a,b){var c=cc(a),d;for(d in c)b[d]=c[d]}
;Sd=!0;Ud.push(I(mc,Vd),I(rc,Xd));Sd||(Ud.push(I(qc,Vd),I(vc,Xd),I(jc,Zd),I(kc,ae),I(lc,ce)),Td.push(Dc("subscription-prefs",ee)),Ud.push(I(Od,fe),I(Qd,he),I(Nd,ge)));var Z=Bd.P(),ke=U(Z);ke in Fd||(Z.register(),Z.C.push(Dc("yt-uix-init-"+ke,Z.init,Z)),Z.C.push(Dc("yt-uix-dispose-"+ke,Z.dispose,Z)),Fd[ke]=Z);u("yt.setConfig",Hb);})();
