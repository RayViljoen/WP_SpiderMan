/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();


(function(){window.Juice={Version:'0.1.1.20080325',$:function(){var a=[];var i,e;for(i=0;i<arguments.length;i++){e=arguments[i];if(typeof e=='string'){e=document.getElementById(e);}
if(arguments.length===1){return e;}
a.push(e);}
return a;},Bookmark:function(ele,e){Juice.Event.cancel(e);var w=window;if(w.sidebar){w.sidebar.addPanel(ele.title,ele.href,'');}else if(w.opera&&w.print){ele.rel='sidebar';}else if(w.external){w.external.AddFavorite(ele.href,ele.title);}else{alert('Your Browser does not support dynamic bookmarking, please try bookmarking manually.');}
return false;},Browser:new function(){this.detect=function(){var a=navigator.userAgent,b={};b.opera=(a.indexOf('Opera')!=-1);b.konqueror=(a.indexOf('Konqueror')!=-1);b.safari=(a.indexOf('Safari')!=-1);b.mozilla=(a.indexOf('Gecko')!=-1&&!b.konqueror&&!b.safari);b.ie7=(a.indexOf('MSIE 7')!=-1&&!b.opera);b.ie6=(a.indexOf('MSIE')!=-1&&!b.ie7&&!b.opera);b.ie=(b.ie7||b.ie6);b.quirks=(this.mode()=='quirks'?true:false);return b;};this.details=function(){var n=navigator;return{agent:n.userAgent,code:n.appCodeName,cookies:n.cookieEnabled,name:n.appName,platform:n.platform,version:n.appVersion};};this.dimensions=function(){var s={width:0,height:0};if(typeof window.innerWidth=='number'){s.width=window.innerWidth;s.height=window.innerHeight;}else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){s.width=document.documentElement.clientWidth;s.height=document.documentElement.clientHeight;}else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){s.width=document.body.clientWidth;s.height=document.body.clientHeight;}
return s;};this.flash=function(){var c,d,f={enabled:false,version:false},n=navigator;if(n.plugins&&n.plugins.length){c=n.plugins['Shockwave Flash'];if(c){f.enabled=true;if(c.description){d=d.description;f.version=d.charAt(d.indexOf('.')-1);}}}else if(n.mimeTypes&&n.mimeTypes.length){c=n.mimeTypes['application/x-shockwave-flash'];if(c&&d.enabledPlugin){f.enabled=true;}}else{for(var v=9;v>0;v--){try{c=new ActiveXObject('ShockwaveFlash.ShockwaveFlash.'+v);f.enabled=true;f.version=v;break;}catch(e){}}}
return f;};this.inner=function(){var s={x:0,y:0},w=Juice.Browser.dimensions();if(window.innerHeight&&window.scrollMaxY){s.x=document.body.scrollWidth;s.y=window.innerHeight+window.scrollMaxY;}else if(document.body.scrollHeight>document.body.offsetHeight){s.x=document.body.scrollWidth;s.y=document.body.scrollHeight;}else{s.x=document.body.offsetWidth;s.y=document.body.offsetHeight;}
return{width:(s.x<w.width)?w.width:s.x,height:(s.y<w.height)?w.height:s.y};};this.mode=function(){var c,m=false;if(c=document.compatMode){switch(c.toLowerCase()){case'backcompat':m='quirks';break;case'css1compat':m='compliant';break;default:m='hybrid';}}
return m;};},Container:new function(){this.create=function(s){if(!s){s={};}
var c={outer:Juice.Element.create('DIV',null,s.id||null,s.className||null),inner:Juice.Element.create('DIV',s.value||null,null,'inner'),shadow:Juice.Element.create('DIV')};c.outer.style.zIndex=s.zIndex||1;c.outer.style.position=s.fixed===true?'relative':'absolute';if(s.width){c.outer.style.width=s.width+'px';}
c.inner.style.border='1px solid '+(s.border||'#808080');c.inner.style.background=s.background||'white';if(s.padding){c.inner.style.padding=s.padding+'px';}
if(s.height){c.inner.style.height=(s.height-(s.padding?s.padding*2:0)-2)+'px';}
c.shadow.style.position='absolute';c.shadow.style.background=s.shadow||'#999999';c.shadow.style.zIndex=-1;c.shadow.style.top='2px';c.shadow.style.right=c.shadow.style.bottom=c.shadow.style.left='-3px';Juice.Element.opacity(c.shadow,s.opacity||30);Juice.Element.append(c.outer,[c.inner,c.shadow]);return c;};this.render=function(c,e){if(!e){e=document.body;}
e.appendChild(c.outer);Juice.Container.fix(c);};this.fix=function(c){if(c&&(Juice.Browser.detect().ie6||Juice.Browser.detect().quirks)){var d=Juice.Element.dimensions(c.outer);c.shadow.style.width=d.width+6+'px';c.shadow.style.height=d.height+1+'px';Juice.Element.obstructions(c.outer);}};},Convert:new function(){this.namehex=function(n){var c={'aqua':'#00FFFF','black':'#000000','blue':'#0000FF','fuchsia':'#FF00FF','gray':'#808080','green':'#008000','lime':'#00FF00','maroon':'#800000','navy':'#000080','olive':'#808000','purple':'#800080','red':'#FF0000','silver':'#C0C0C0','teal':'#008080','white':'#FFFFFF','yellow':'#FFFF00'};if(c[n]){return c[n];}
return false;};this.hexrgb=function(h){if(!Juice.Type.hexColour(h)){h=this.namehex(h);}
if(!Juice.Type.hexColour(h)){return;}
var x=new RegExp('^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$','i'),m=false;if(m=h.match(x)){return{r:parseInt(m[1],16),g:parseInt(m[2],16),b:parseInt(m[3],16)};}else{Juice.Debug(new Error('Juice.Core: Invalid hex value: '+h));}
return false;};this.hsvrgb=function(h,s,v){var r,g,b;if(s==0){if(v==0){r=g=b=0;}else{r=g=b=parseInt(v*255/100);}}else{if(h==360){h=0;}
h/=60,s/=100,v/=100;var i=parseInt(h);var f=h-i;var p=v*(1-s);var q=v*(1-(s*f));var t=v*(1-(s*(1-f)));switch(i){case 0:r=v;g=t;b=p;break;case 1:r=q;g=v;b=p;break;case 2:r=p;g=v;b=t;break;case 3:r=p;g=q;b=v;break;case 4:r=t;g=p;b=v;break;case 5:r=v;g=p;b=q;break;}
r=parseInt(r*255);g=parseInt(g*255);b=parseInt(b*255);}
return{r:r,g:g,b:b};};this.rgbhex=function(r,g,b){var hex='',i;for(i=0;i<arguments.length;i++){hex+=Juice.Format.pad(parseInt(arguments[i]).toString(16),2);}
if(Juice.Type.hexColour(hex)){return'#'+hex;}else{return false;}};this.rgbhsv=function(r,g,b){var h,s,v,min,delta;min=Math.min(r,g,b);v=Math.max(r,g,b);delta=v-min;s=v==0?0:(delta/v)*100;if(s==0){h=0;}else{if(r==v){h=60*(g-b)/delta;}else{if(g==v){h=120+60*(b-r)/delta;}else{h=240+60*(r-g)/delta;}}}
if(h<0){h=h+360;}
return{h:h,s:s,v:(v/255)*100};};this.fullrgbhex=function(r){var x=new RegExp('^rgb\\(([0-9]{3}), ([0-9]{3}), ([0-9]{3})\\)'),m=false;if(m=r.toLowerCase().match(x)){return this.rgbhex(m[1],m[2],m[3]);}
return false;};},Debug:function(e){if(Juice.Prefs.debug===true){throw e;}},Element:new function(){this.addClassName=function(e,n,c){if((typeof c=='boolean')&&c!==true){alert('not added');return false;}
if(!this.hasClassName(e,n)){e.className+=' '+n;}else{return false;}
return true;};this.append=function(p,c){if(Juice.Type.array(c)){for(var i=0;i<c.length;i++){p.appendChild(c[i]);}}else{p.appendChild(c);}};this.blur=function(){return window.focus();};this.byClassName=function(c,e){if(!e){e=document;}
var a=[];var n=e.getElementsByTagName('*');var i;for(i=0;i<n.length;i++){if(this.hasClassName(n[i],c)){a.push(n[i]);}}
return a;};this.contains=function(p,c){while(c!=document){if(c==p){return true;}
c=c.parentNode;}
return false;};this.create=function(t,h,i,c,n){if(!t){return false;}
var p,s;if((p=t.indexOf(':'))!==-1){s=t.substring(p+1,t.length);t=t.substring(0,p);}
var e=document.createElement(t.toUpperCase());if(i){e.id=i;}
if(c){e.className=c;}
switch(e.nodeName){case'A':if(h){e.innerHTML=h;}
if(n){e.href=n;}
break;case'IFRAME':if(h){e.src=h;}
if(n){e.name=n;}
break;case'IMG':if(h){e.src=h;}
break;case'INPUT':e.type=s;if(h){e.value=h;}
if(n){e.name=n;}
break;case'OPTION':if(h){e.innerHTML=h;e.value=n||n==''?n:h;}
break;case'SELECT':if(n){e.name=n;}
break;default:if(h){e.innerHTML=h;}}
return e;};this.dimensions=function(ele){var s={height:0,width:0};if(ele.offsetHeight){s.height=ele.offsetHeight;s.width=ele.offsetWidth;}else{s.height=ele.style.pixelHeight;s.width=ele.style.pixelWidth;}
return s;};this.empty=function(e){var c=Juice.$(e);if(c.hasChildNodes()){while(c.hasChildNodes()){c.removeChild(c.firstChild);}}};this.hasClassName=function(e,c){var x=new RegExp('\\b'+c+'\\b','ig');if(e.className&&e.className.match(x)){return true;}
return false;};this.insertAtCaret=function(n,b,a){n=Juice.$(n);if(n.nodeName=='TEXTAREA'){n.focus();if(!a){a='';}
if(document.selection){var r=document.selection.createRange();if(r.parentElement()!=n){return false;}
r.text=b+r.text+a;r.moveStart('character',r.text.length-a.length);r.moveEnd('character',r.text.length-(a.length>0?b.length-a.length:0));r.select();}else if(n.selectionStart>=0){var s=n.selectionStart,e=n.selectionEnd,c=b+n.value.substring(s,e)+a;if(c!=b+a){n.value=n.value.substring(0,s)+c+n.value.substring(e,n.value.length);n.setSelectionRange(s+c.length,s+c.length);}else{;n.value=n.value.substring(0,s)+b+a+n.value.substr(e);n.setSelectionRange(s+b.length,s+c.length-a.length);}}else{n.value=n.value+b+a;}
n.focus();}
return;};this.nextNode=function(n,t){n=Juice.$(n);if(n.firstChild){n=n.firstChild;}else if(n.nextSibling){n=n.nextSibling;}else if(n.parentNode!=t){while((n=n.parentNode)&&n!=t){if(n.nextSibling){n=n.nextSibling;break;}}}else{return null;}
if(n==t){return null;}
if(n!=null){if(n.nodeType!=1){n=this.nextNode(n,t);}}
return n;};this.prevNode=function(n,t){n=Juice.$(n);if(n.lastChild){n=n.lastChild;}else if(n.previousSibling){n=n.previousSibling;}else if(n.parentNode!=t){while((n=n.parentNode)&&n!=t){if(n.previousSibling){n=n.previousSibling;break;}}}else{return null;}
if(n==t){return null;}
if(n!=null){if(n.nodeType!=1){n=this.prevNode(n,t);}}
return n;};this.obstructions=function(n){if(Juice.Browser.detect().ie6){if(n.firstChild&&n.firstChild.className=='JuiceObstruction'){n.removeChild(n.firstChild);}
var d=Juice.Element.dimensions(n);var f=Juice.Element.create('IFRAME');f.src='about:blank';f.className='JuiceObstruction';f.scrolling='no';f.frameBorder=0;f.style.width=d.width+'px';f.style.height=d.height+'px';f.style.zIndex=-1;f.style.position='absolute';f.style.filter='filter:progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';if(n.firstChild){n.insertBefore(f,n.firstChild);}else{n.appendChild(f);}
n.style.zIndex=900;}};this.opacity=function(e,o){e.style.opacity=e.style.MozOpacity=e.style.KHTMLOpacity=(o/100);e.style.filter='alpha(opacity='+o+')';return true;};this.output=function(e){if(typeof e=='string'){if(e.indexOf('#')!=-1){return(document.getElementById(e)||false);}else{return(document.getElementsByTagName(e).item(0)||false);}}
return false;};this.position=function(e){if(!e){return false;}
var p={top:0,left:0};if(e.offsetParent){p.top=e.offsetTop;p.left=e.offsetLeft;while(e.offsetParent){e=e.offsetParent;p.top+=e.offsetTop;p.left+=e.offsetLeft;}}
return p;};this.remove=function(a,v){for(var i=0;i<a.length;i++){if(v==a[i]){a.splice(i,1);}}
return a;};this.removeClassName=function(e,c){if(this.hasClassName(e,c)){e.className=Juice.Format.trim(e.className.replace(new RegExp('\\b'+c+'\\b','ig'),''));}else{return false;}
return true;};this.replaceClassName=function(e,c,r){if(this.hasClassName(e,c)){Juice.Element.removeClassName(e,c);Juice.Element.addClassName(e,r);}else{return false;}
return true;};this.scroll=function(e){var p={top:0,left:0};if(e){for(var n=e;n;n=n.offsetParent){p.top+=n.offsetTop;p.left+=n.offsetLeft;}}else{var w=window,d=document;if(typeof w.pageYOffset=='number'){p.top=w.pageYOffset;p.left=w.pageXOffset;}else if(d.body&&d.body.scrollTop){p.top=d.body.scrollTop;p.left=d.body.scrollLeft;}else if(d.documentElement&&d.documentElement.scrollTop){p.top=d.documentElement.scrollTop;p.left=d.documentElement.scrollLeft;}}
return p;};this.scrollTo=function(n,e,p){if(e){Juice.Event.cancel(e);}
var o,a,r=1,d=3,s=this.scroll(),f=this.scroll(Juice.$(n));if(s.top<f.top){o=s.top+Math.max(r,((f.top-s.top)/d));a=(f.top-r<=o);}else{o=s.top-Math.max(r,((s.top-f.top)/d));a=(f.top-r>=o);}
if(a||s.top==f.top||p==o){window.scrollTo(0,f.top);}else{window.scrollTo(0,o);setTimeout(function(){Juice.Element.scrollTo(n,false,o);},50);}};this.search=function(n,h){if(typeof h!='object'){return false;}
for(var i=0;i<h.length;i++){if(h[i]==n){return true;}}
return false;};this.searchReplace=function(t,s,r){return t.replace(new RegExp(s,'ig'),r);};this.style=function(e,s){if(!Juice.Browser.detect().ie){s=s.replace(new RegExp('[A-Z]','g'),function(m,c){return'-'+s.charAt(c).toLowerCase();});}
if(e.currentStyle){return e.currentStyle[s];}else if(window.getComputedStyle){return document.defaultView.getComputedStyle(e,null).getPropertyValue(s);}
return false;};this.toggle=function(e){var c=Juice.$(e);if(c.style.display!='none'){c.style.display='none';}else{c.style.display='';}};},Event:new function(){this.add=function(e,n,o,c){e=Juice.$(e);if(e.addEventListener){e.addEventListener(n,o,c);}else if(e.attachEvent){e.attachEvent('on'+n,o);}else{return false;}
return true;};this.blur=function(e,l){var n=Juice.Event.source(e);while(n!=document){if(n==l){break;}
n=n.parentNode;}
if(n!=l){return true;}
return false;};this.cancel=function(e){if(!e){return false;}
e=e||window.event;if(e.stopPropagation){e.preventDefault();e.stopPropagation();}else{e.returnValue=false;e.cancelBubble=true;}
return true;};this.remove=function(e,n,o,c){e=Juice.$(e);if(e.removeEventListener){e.removeEventListener(n,o,c);}else if(e.detachEvent){e.detachEvent('on'+n,o);}else{return false;}
return true;};this.key=function(e){e=e||window.event;if(!e)return;var k=e.keyCode||e.which||null;return{code:k,value:String.fromCharCode(k).toLowerCase()};};this.mouse=function(e){e=e||window.event,d=document.body;var p={left:0,top:0};if(e.pageX||e.pageY){p.left=e.pageX;p.top=e.pageY;}else if(e.clientX||e.clientY){var s=Juice.Element.scroll();p.left=e.clientX+s.left;p.top=e.clientY+s.top;}
return p;};this.preload=function(s){var image=new Image();if(typeof s=='object'){for(var i in s){image.src=s[i];}}else{image.src=s;}};this.source=function(e){e=e||window.event;return(e.target||e.srcElement);};this.type=function(e){e=e||window.event;return(e.type);};},Format:new function(){this.decode=function(v){return decodeURIComponent(v);};this.email=function(r,d,e){var a=r+'@'+d+e;return'<a href="mailto:'+a+'">'+a+'</a>';};this.encode=function(v){return encodeURIComponent(v);};this.stripTags=function(s){return s.value.replace(/<\S[^><]*>/g,'');};this.entities=function(t){var d=document.createElement('DIV');d.appendChild(document.createTextNode(t));return d.innerHTML;};this.implode=function(s,a){if(Juice.Type.array(a)){return a.join(s);}
return false;};this.ltrim=function(s){while(s.substr(0,1)==' '){s=s.substring(1,s.length);}
return s;};this.number=function(n,d,p,g){var ns=n.toString();var s=n<0?'-':'';if(d){n=this.round(n,d);}
var i=(n>0?Math.floor(n):Math.abs(Math.ceil(n))).toString();p=p?p:'.';var f=n.toString().substring(i.length+s.length);if(f=d||f.length>1?(p+f.substring(1)):''){for(var j=f.length-1;j<d;j++){f+='0';}}
if(g=(g&&g!=p)?g:','){for(var j=i.length-3;j>0;j-=3){i=i.substring(0,j)+g+i.substring(j);}}
return s+i+f;};this.pad=function(v,l,c){var s=''+v;if(!c){c='0';}
while(s.length<l){s=c+s;}
return s;};this.querySting=function(a){var u='';for(var i in a){u+=(!u.length?'?':'&')+this.encode(i)+'='+this.encode(a[i]);}
return u;};this.random=function(l,u){if(!l||!u){l=1;u=99999;}
return Math.floor(Math.random()*(u-l+1)+l);};this.round=function(n,d){if(Juice.Type.number(n)){var m=Math.pow(10,d);return Math.round(n*m)/m;}
return n;};this.rtrim=function(s){while(s.substr(s.length-1,1)==' '){s=s.substring(0,s.length-1);}
return s;};this.trim=function(s){return this.rtrim(this.ltrim(s));};},Type:new function(){this.array=function(o){return(o instanceof Array?true:false);};this.callback=function(v){return(typeof v=='function'?true:false);};this.hexColour=function(v){if(v){return v.match(new RegExp('^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$','i'))?true:false;}
return false;};this.number=function(v){return(!isNaN(v)?true:false);};},Window:new function(){this.open=function(url,focus){var win=window.open(url);if(focus){win.focus();}
return win;};},Prefs:{container:'body',debug:false,image:'/includes/library/juice/images/'}}})();
(function(){if(typeof Juice=='undefined'){throw new Error('ajax.juice.js requires the core.juice.js component.');}
Juice.Ajax=function(){var xhttpo,timer,myself=this;this.setup=function(){try{xhttpo=new ActiveXObject('Msxml2.XMLHTTP');}catch(e){try{xhttpo=new ActiveXObject('Microsoft.XMLHTTP');}catch(e){xhttpo=false;}}
if((!xhttpo)&&(typeof XMLHttpRequest!='undefined')){try{xhttpo=new XMLHttpRequest();}catch(e){xhttpo=false;myself.error('XHTTP object could not be created');}}};this.request=function(url,method,cache,timeout){if(!xhttpo){return false;}
var params;if(!url){myself.error('No request url supplied');}
if(!method){method='GET';}
method=method.toUpperCase();timeout=typeof timeout=='number'?timeout:false;if(method=='POST'){var position=url.indexOf('?');if(position!==-1){this.page=url.substring(0,position);this.url=cache?this.page:myself.nocache(this.page);this.params=url.substring(position+1,url.length);}else{this.url=allowCache?url:myself.nocache(url);}
this.method='POST';this.contentType='application/x-www-form-urlencoded;';}else{this.method='GET';this.url=cache?url:myself.nocache(url);this.params=false;this.contentType='text/plain';}
try{xhttpo.open(this.method,this.url,true);xhttpo.setRequestHeader('Content-Type',this.contentType);if(this.contentLength)xhttpo.setRequestHeader('Content-Length',this.contentLength);xhttpo.onreadystatechange=myself.response;xhttpo.send(this.params);if(timeout)timer=setTimeout(this.abort,(timeout*1000));}catch(e){myself.error(e);}};this.abort=function(){xhttpo.abort();myself.error('Request aborted');};this.response=function(){if(xhttpo.readyState!=4){return;}
if(timer){clearTimeout(timer);}
try{if(xhttpo.status=='200'){if(xhttpo.responseText){return myself.ready(xhttpo.responseText);}else{myself.error('No response text defined.');}}else{myself.error('Request URL responded with a '+xhttpo.status+' status');}}catch(e){myself.error(e);}};this.evaluate=function(res){try{return eval('res = '+res);}catch(e){myself.error('Response could not be evaluated');}
return false;};this.error=function(err){Juice.Debug(new Error('Juice.Ajax: '+err));};this.nocache=function(url){var preventCache='nocache='+new Date().getTime();if(url.indexOf('?')!==-1){url+='&'+preventCache;}else{url+='?'+preventCache;}
return url;};this.encode=function(values){return Juice.Format.encode(values);};this.setup();}})();
(function(){if(typeof Juice=='undefined'){throw new Error('suggest.juice.js requires the core.juice.js component.');}else if(typeof Juice.Ajax=='undefined'){throw new Error('suggest.juice.js requires the ajax.juice.js component.');}
Juice.Suggest=function(node,url,setup){var suggest,container,previous,xhr,myself=this;this.setup=function(){node=Juice.$(node);suggest={input:node,name:node.name||'value',url:url,items:[],maxHeight:setup.maxHeight||150,current:false,minLength:setup.minLength||0,visible:true};suggest.input.setAttribute('autocomplete','off');container=Juice.Container.create({className:'juiceSuggest'});container.outer.style.visibility='hidden';Juice.Event.add(suggest.input,'keyup',myself.call);Juice.Event.add(suggest.input,'keypress',myself.call);Juice.Event.add(suggest.input,'focus',myself.display);Juice.Event.add(suggest.input,'blur',myself.hide);Juice.Event.add(window,'resize',myself.position);};this.display=function(){if(suggest.items.length>0){Juice.Container.render(container);myself.position();Juice.Container.fix(container);setTimeout(function(){container.outer.style.visibility='visible';},100);suggest.visible=true;}};this.call=function(e){var key=Juice.Event.key(e);if(Juice.Element.search(key.code,[9,13,27,32,38,40])){if(suggest.visible==false){return;}
if(key.code!=32){Juice.Event.cancel(e);}
var current=suggest.items[suggest.current];switch(key.code){case 38:if(Juice.Event.type(e)=='keyup'){var p=suggest.current-1;myself.hover(suggest.items[(p<0?suggest.items.length-1:p)].option);}
break;case 40:if(Juice.Event.type(e)=='keyup'){var n=suggest.current?parseInt(suggest.current)+1:0;myself.hover(suggest.items[(n>=suggest.items.length?0:n)].option);}
break;case 9:case 13:case 32:if(current){myself.select(current.value+(key.code==32?' ':''));}
default:myself.hide();}
return;}
if(suggest.input.value.length>=suggest.minLength){if(xhr){xhr.abort();previous=false;}
container.outer.style.visibility='hidden';setTimeout(function(){if(suggest.input.value!=previous){previous=suggest.input.value;xhr=new Juice.Ajax();xhr.ready=function(res){res=xhr.evaluate(res);myself.clear();myself.show(res.list);}
xhr.request(suggest.url+(suggest.url.indexOf('?')==-1?'?':'&')+suggest.name+'='+xhr.encode(suggest.input.value));}},500);}else{myself.clear();previous=null;}};this.show=function(list){myself.clear();suggest.current=false;if(list.length>0){var option;for(var i in list){option=myself.option(list[i]);}
if(list.length==1){myself.hover(option);}
container.inner.style.height='auto';myself.display();}else{myself.hide();}};this.option=function(option){var value;var item=Juice.Element.create('DIV',null,null,'item');var inner=Juice.Element.create('A',null,null,null,'javascript:void(0);');if(typeof option=='object'){for(var i in option){if(i!='value'){inner.appendChild(Juice.Element.create('SPAN',option[i],null,i));}}
value=option.value;}else{inner.innerHTML=value=option;}
item.appendChild(inner);item.onmousedown=function(e){Juice.Event.cancel(e);myself.select(value);}
item.onmouseover=function(){myself.hover(item);}
suggest.items.push({value:value,option:item});container.inner.appendChild(item);return item;};this.select=function(val){var original=suggest.input.value;suggest.input.value=val;myself.hide();suggest.input.focus();if(Juice.Type.callback(setup.callback)){return setup.callback(val,original);}
return true;};this.hover=function(item){var p={node:Juice.Element.position(suggest.input),dim:Juice.Element.dimensions(suggest.input),inner:Juice.Element.dimensions(container.inner),top:0};for(var i in suggest.items){var height=Juice.Element.dimensions(suggest.items[i].option).height;p.top+=height;if(suggest.items[i].option==item){if(container.inner.scrollTop+p.inner.height<p.top){container.inner.scrollTop=p.top;}else if(container.inner.scrollTop>p.top-height){container.inner.scrollTop=p.top-height;}
suggest.current=i;Juice.Element.addClassName(item,'mouseover');}else{Juice.Element.removeClassName(suggest.items[i].option,'mouseover');}}};this.clear=function(){for(var i in suggest.items){container.inner.removeChild(suggest.items[i].option);}
myself.hide();suggest.items=[];};this.position=function(){var p={node:Juice.Element.position(suggest.input),dim:Juice.Element.dimensions(suggest.input),body:Juice.Browser.inner(),box:Juice.Element.dimensions(container.outer),inner:Juice.Element.dimensions(container.inner)};var l={top:p.node.top+p.dim.height,left:p.node.left};if(l.top+p.box.height>p.body.height){container.outer.style.top=(p.node.top-p.box.height-4)+'px';}else{container.outer.style.top=(l.top+1)+'px';}
container.outer.style.left=(l.left)+'px';container.outer.style.width=(p.inner.width>p.dim.width?'auto':p.dim.width)+'px';if(p.box.height>suggest.maxHeight){container.inner.style.height=suggest.maxHeight+'px';container.inner.style.overflow='auto';}};this.hide=function(){container.outer.style.visibility='hidden';suggest.current=suggest.visible=false;try{container.outer.parentNode.removeChild(container.outer);}catch(e){}};this.setup();}})();
(function(){if(typeof Juice=='undefined'){throw new Error('tooltip.juice.js requires the core.juice.js component.');}
Juice.Tooltip=new function(){var constructor=this;this.init=function(){var ele=Juice.Element.byClassName('juiceTooltip');for(var i=0;i<ele.length;i++){new constructor.create(ele[i]);}};this.create=function(ele){if(!ele||!ele.title){return false;}
var tip,container,pointer,myself=this;this.setup=function(){tip={}
tip.output=Juice.Element.output(Juice.Prefs.container);tip.details=ele.title||ele.alt;tip.offset=5;ele.title=ele.alt='';container=Juice.Element.create('DIV');container.id='tooltip';container.innerHTML=tip.details;container.style.position='absolute';container.style.padding='3px 5px';container.style.background='#222222';container.style.color='white';container.style.fontFamily='arial';container.style.fontSize='11px';container.style.zIndex='999';pointer=Juice.Element.create('DIV');pointer.style.background='url('+Juice.Prefs.image+'tooltip/pointer.gif) 0 0 no-repeat';pointer.style.position='absolute';pointer.style.bottom='-4px';pointer.style.left='5px';pointer.style.width='7px';pointer.style.height='4px';pointer.style.fontSize='0';Juice.Element.append(container,pointer);Juice.Event.add(ele,'mousemove',myself.show);Juice.Event.add(ele,'mouseout',myself.hide);};this.show=function(e){if(!tip.details){return false};myself.check(e);tip.mouse=Juice.Event.mouse(e);tip.output.appendChild(container);var dim=Juice.Element.dimensions(container);var browser=Juice.Browser.dimensions();var scroll=Juice.Element.scroll();var left=tip.mouse.left-(dim.width/2);var top=Juice.Element.position(ele).top-dim.height-tip.offset;if(left<0){left=0;}else if((dim.width+left)>(browser.width+scroll.left)){left=((browser.width+scroll.left)-dim.width)+'px';}
container.style.top=top+'px';container.style.left=left+'px';pointer.style.left=((dim.width/2)-3)+'px';return true;};this.check=function(e){var node=Juice.Event.source(e);while(node!=ele.parentNode){if(node==ele)break;node=node.parentNode;}
if(node!=ele){myself.hide();}};this.hide=function(){Juice.Event.remove(ele,'mousemove',myself.show);Juice.Event.remove(ele,'mouseout',myself.hide);ele.title=ele.alt=tip.details;try{tip.output.removeChild(container);}catch(e){}};Juice.Event.add(ele,'mouseover',myself.setup);return true;};}
Juice.Event.add(window,'load',Juice.Tooltip.init);})();
(function(){if(typeof Juice=='undefined'){throw new Error('crop.juice.js requires the core.juice.js component.');}
Juice.Crop=function(node,setup){var config,click,container,corner={},current,dim,mask={},resize,size={},myself=this;this.setup=function(){node=Juice.$(node);if(!node||node.nodeName!='IMG'){return false;}
if(!setup){setup={};}
dim=Juice.Element.dimensions(node);config={directory:Juice.Prefs.image+'crop/',width:setup.width||Math.floor(dim.width/100*50),height:setup.height||Math.floor(dim.height/100*50),corner:setup.corner||10,fixed:setup.fixed==true?true:false,top:typeof setup.top=='number'?Math.abs(setup.top):false,left:typeof setup.left=='number'?Math.abs(setup.left):false,maxWidth:Math.abs(setup.maxWidth)||false,maxHeight:Math.abs(setup.maxHeight)||false,minWidth:Math.abs(setup.minWidth)||false,minHeight:Math.abs(setup.minHeight)||false};Juice.Event.preload([config.directory+'grab.ico',config.directory+'move.ico']);if(config.minWidth&&config.width<config.minWidth){config.width=config.minWidth;}else if(config.maxWidth&&config.width>config.maxWidth){config.width=config.maxWidth;}
size.top=typeof config.top=='number'?config.top:Math.floor((dim.height-config.height)/2);if(size.top+config.height>dim.height){size.top=dim.height-config.height;}
size.left=typeof setup.left=='number'?setup.left:Math.floor((dim.width-config.width)/2);if(size.left+config.width>dim.width){size.left=dim.width-config.width;}
size.bottom=typeof setup.top=='number'?dim.height-config.height-size.top:Math.floor((dim.height-config.height)/2);size.right=typeof setup.left=='number'?dim.width-config.width-size.left:Math.floor((dim.width-config.width)/2);container=Juice.Element.create('DIV',null,null,'juiceCrop');container.style.position='relative';container.style.width=dim.width+'px';container.style.height=dim.height+'px';container.style.background='url('+node.src+') top left no-repeat';container.style.cursor='url('+config.directory+'grab.ico), default';node.parentNode.insertBefore(container,node);node.parentNode.removeChild(node);mask.top=myself.mask();mask.top.style.top=mask.top.style.left=0;mask.top.style.width=dim.width+'px';mask.right=myself.mask();mask.right.style.right=0;mask.bottom=myself.mask();mask.bottom.style.bottom=mask.bottom.style.left=0;mask.bottom.style.width=dim.width+'px';mask.left=myself.mask();mask.left.style.left=0;mask.top.style.cursor=mask.right.style.cursor=mask.bottom.style.cursor=mask.left.style.cursor='default';Juice.Element.append(container,[mask.top,mask.right,mask.bottom,mask.left]);Juice.Event.add(container,'mousedown',myself.pickup);if(config.fixed==false){corner.tl=myself.corner();corner.tl.style.borderWidth='0 1px 1px 0';corner.tl.style.cursor='nw-resize';corner.tr=myself.corner();corner.tr.style.borderWidth='0 0 1px 1px';corner.tr.style.cursor='ne-resize';corner.br=myself.corner();corner.br.style.borderWidth='1px 0 0 1px';corner.br.style.cursor='se-resize';corner.bl=myself.corner();corner.bl.style.borderWidth='1px 1px 0 0';corner.bl.style.cursor='sw-resize';Juice.Element.append(container,[corner.tl,corner.tr,corner.br,corner.bl]);Juice.Event.add(corner.tl,'mousedown',myself.resize);Juice.Event.add(corner.tr,'mousedown',myself.resize);Juice.Event.add(corner.br,'mousedown',myself.resize);Juice.Event.add(corner.bl,'mousedown',myself.resize);}
myself.position();};this.mask=function(){var mask=Juice.Element.create('DIV');mask.style.backgroundColor='black';mask.style.position='absolute';Juice.Element.opacity(mask,50);return mask;};this.corner=function(){var corner=Juice.Element.create('DIV');corner.style.backgroundColor='white';corner.style.position='absolute';corner.style.borderColor='black';corner.style.borderStyle='solid';corner.style.borderWidth=0;corner.style.width=corner.style.height=config.corner+'px';Juice.Element.opacity(corner,50);return corner;};this.resize=function(e){Juice.Event.cancel(e);var down=Juice.Event.mouse(e);var pos=Juice.Element.position(container);click={left:(down.left-pos.left),top:(down.top-pos.top)};myself.highlight();current=Juice.Event.source(e);Juice.Event.add(document,'mousemove',myself.scale);Juice.Event.add(document,'mouseup',myself.stop);Juice.Event.add(document,'selectstart',myself.noselect);Juice.Event.add(document,'mousedown',myself.noselect);};this.scale=function(e){Juice.Event.cancel(e);var mouse=Juice.Event.mouse(e);var pos=Juice.Element.position(container);var drag={left:(mouse.left-pos.left)-click.left,top:(mouse.top-pos.top)-click.top};resize={top:parseInt(mask.top.style.height),bottom:parseInt(mask.bottom.style.height),left:parseInt(mask.left.style.width),right:parseInt(mask.right.style.width)};var offset=config.corner*2.5;switch(current){case corner.tl:resize.top=size.top+drag.top;if(config.minHeight&&dim.height-resize.top-resize.bottom<config.minHeight){resize.top=dim.height-resize.bottom-config.minHeight;}else if(config.maxHeight&&dim.height-resize.top-resize.bottom>config.maxHeight){resize.top=dim.height-resize.bottom-config.maxHeight;}else if(resize.top<0){resize.top=0;}else if(resize.top>dim.height-resize.bottom-offset){resize.top=dim.height-resize.bottom-offset;}
resize.left=size.left+drag.left;if(config.minWidth&&dim.width-resize.left-resize.right<config.minWidth){resize.left=dim.width-resize.right-config.minWidth;}else if(config.maxWidth&&dim.width-resize.left-resize.right>config.maxWidth){resize.left=dim.width-resize.right-config.maxWidth;}else if(resize.left<0){resize.left=0;}else if(resize.left>dim.width-resize.right-offset){resize.left=dim.width-resize.right-offset;}
break;case corner.tr:resize.top=size.top+drag.top;if(config.minHeight&&dim.height-resize.top-resize.bottom<config.minHeight){resize.top=dim.height-resize.bottom-config.minHeight;}else if(config.maxHeight&&dim.height-resize.top-resize.bottom>config.maxHeight){resize.top=dim.height-resize.bottom-config.maxHeight;}else if(resize.top<0){resize.top=0;}else if(resize.top>dim.height-resize.bottom-offset){resize.top=dim.height-resize.bottom-offset;}
resize.right=size.right-drag.left;if(config.minWidth&&dim.width-resize.left-resize.right<config.minWidth){resize.right=dim.width-resize.left-config.minWidth;}else if(config.maxWidth&&dim.width-resize.right-resize.left>config.maxWidth){resize.right=dim.width-resize.left-config.maxWidth;}else if(resize.right<0){resize.right=0;}else if(resize.right>dim.width-resize.left-offset){resize.right=dim.width-resize.left-offset;}
break;case corner.br:resize.bottom=size.bottom-drag.top;if(config.minHeight&&dim.height-resize.top-resize.bottom<config.minHeight){resize.bottom=dim.height-resize.top-config.minHeight;}else if(config.maxHeight&&dim.height-resize.top-resize.bottom>config.maxHeight){resize.bottom=dim.height-resize.top-config.maxHeight;}else if(resize.bottom<0){resize.bottom=0;}else if(resize.bottom>dim.height-resize.top-offset){resize.bottom=dim.height-resize.top-offset;}
resize.right=size.right-drag.left;if(config.minWidth&&dim.width-resize.left-resize.right<config.minWidth){resize.right=dim.width-resize.left-config.minWidth;}else if(config.maxWidth&&dim.width-resize.right-resize.left>config.maxWidth){resize.right=dim.width-resize.left-config.maxWidth;}else if(resize.right<0){resize.right=0;}else if(resize.right>dim.width-resize.left-offset){resize.right=dim.width-resize.left-offset;}
break;case corner.bl:resize.bottom=size.bottom-drag.top;if(config.minHeight&&dim.height-resize.top-resize.bottom<config.minHeight){resize.bottom=dim.height-resize.top-config.minHeight;}else if(config.maxHeight&&dim.height-resize.top-resize.bottom>config.maxHeight){resize.bottom=dim.height-resize.top-config.maxHeight;}else if(resize.bottom<0){resize.bottom=0;}else if(resize.bottom>dim.height-resize.top-offset){resize.bottom=dim.height-resize.top-offset;}
resize.left=size.left+drag.left;if(config.minWidth&&dim.width-resize.left-resize.right<config.minWidth){resize.left=dim.width-resize.right-config.minWidth;}else if(config.maxWidth&&dim.width-resize.left-resize.right>config.maxWidth){resize.left=dim.width-resize.right-config.maxWidth;}else if(resize.left<0){resize.left=0;}else if(resize.left>dim.width-resize.right-offset){resize.left=dim.width-resize.right-offset;}
break;}
config.height=dim.height-(resize.top+resize.bottom);config.width=dim.width-(resize.left+resize.right);myself.position();myself.corners();};this.stop=function(){size={top:parseInt(mask.top.style.height),bottom:parseInt(mask.bottom.style.height),left:parseInt(mask.left.style.width),right:parseInt(mask.right.style.width)};myself.lowlight();myself.position();Juice.Event.remove(document,'mousemove',myself.scale);Juice.Event.remove(document,'mouseup',myself.stop);Juice.Event.remove(document,'selectstart',myself.noselect);Juice.Event.remove(document,'mousedown',myself.noselect);};this.pickup=function(e){Juice.Event.cancel(e);container.style.cursor='url('+config.directory+'move.ico), default';var down=Juice.Event.mouse(e);var pos=Juice.Element.position(container);click={left:(down.left-pos.left),top:(down.top-pos.top)};myself.highlight();Juice.Event.add(document,'mousemove',myself.drag);Juice.Event.add(document,'mouseup',myself.drop);Juice.Event.add(document,'selectstart',myself.noselect);Juice.Event.add(document,'mousedown',myself.noselect);};this.drag=function(e){var mouse=Juice.Event.mouse(e);var pos=Juice.Element.position(container);var drag={left:(mouse.left-pos.left)-click.left,top:(mouse.top-pos.top)-click.top};resize={top:size.top+drag.top,bottom:size.bottom-drag.top,left:size.left+drag.left,right:(dim.width-config.width-(size.left+drag.left))};myself.position();};this.drop=function(){container.style.cursor='url('+config.directory+'grab.ico), default';size=resize;config.height=dim.height-(size.top+size.bottom);config.width=dim.width-(size.left+size.right);myself.lowlight();Juice.Event.remove(document,'mousemove',myself.drag);Juice.Event.remove(document,'mouseup',myself.drop);Juice.Event.remove(document,'selectstart',myself.noselect);Juice.Event.remove(document,'mousedown',myself.noselect);};this.position=function(){if(!resize){resize=size;}
var max={height:dim.height-config.height,width:dim.width-config.width};if(resize.top<0){resize.top=0;}else if(resize.top>max.height){resize.top=max.height;}
if(resize.bottom<0){resize.bottom=0;}else if(resize.bottom>max.height){resize.bottom=max.height;}
if(resize.left<0){resize.left=0;}else if(resize.left>max.width){resize.left=max.width;}
if(resize.right<0){resize.right=0;}else if(resize.right>max.width){resize.right=max.width;}
mask.top.style.height=mask.left.style.top=mask.right.style.top=Math.floor(resize.top)+'px';mask.bottom.style.height=resize.bottom+'px';mask.left.style.width=resize.left+'px';mask.right.style.width=resize.right+'px';mask.left.style.height=mask.right.style.height=dim.height-(parseInt(mask.top.style.height)+parseInt(mask.bottom.style.height))+'px';myself.corners();if(Juice.Type.callback(setup.callback)){setup.callback({left:Math.floor(resize.left),right:dim.width-parseInt(mask.right.style.width),top:Math.floor(resize.top),bottom:dim.height-Math.floor(resize.bottom)});}};this.corners=function(){if(config.fixed==false){corner.tl.style.top=corner.tr.style.top=parseInt(mask.top.style.height)+'px';corner.tl.style.left=corner.bl.style.left=parseInt(mask.left.style.width)+'px';corner.tr.style.left=corner.br.style.left=dim.width-parseInt(mask.right.style.width)-config.corner-1+'px';corner.br.style.bottom=corner.bl.style.bottom=parseInt(mask.bottom.style.height)+'px';}};this.highlight=function(){for(var i in corner){Juice.Element.opacity(corner[i],90);}};this.lowlight=function(){for(var i in corner){Juice.Element.opacity(corner[i],50);}};this.noselect=function(e){Juice.Event.cancel(e);return false;};this.setup();}})();
(function(){if(typeof Juice=='undefined'){throw new Error('lightbox.juice.js requires the core.juice.js component.');}
Juice.Lightbox=new function(){var constructor=this;this.init=function(setup){var groups=[];var expr=new RegExp('juiceLightbox(?:\\[([^\\]]+)\\])?','i');var nodes=document.getElementsByTagName('A');var thumb=function(group){if(!groups[group]){groups[group]=[];}
if(nodes[i].title){var caption=nodes[i].title;if(caption.length>30){caption=caption.substring(0,30)+'...';}}
groups[group].push({src:nodes[i].href,caption:caption});Juice.Event.add(nodes[i],'click',function(e){Juice.Event.cancel(e);new constructor.create({image:groups[group],current:this.href,autoplay:false});});}
for(var i=0;i<nodes.length;i++){var matches=expr.exec(nodes[i].rel)
if(matches){var group=matches[1]||null;thumb(group);}}};this.create=function(setup,group){var control=lightbox=next=orig=resize=size={},overlay,background,container,content,myself=this;this.setup=function(){lightbox.parent=Juice.Element.output(Juice.Prefs.container);lightbox.top=Juice.Element.scroll(lightbox.parent).top;lightbox.failures=0;lightbox.directory=Juice.Prefs.image+'lightbox/';lightbox.play=false;lightbox.max={};size.width=300;size.height=300;size.padding=6;overlay=Juice.Element.create('DIV',null,'lightbox');overlay.style.position='absolute';overlay.style.top=0;overlay.style.right=0;overlay.style.bottom=0;overlay.style.left=0;overlay.style.height='100%';overlay.style.width='100%';background=Juice.Element.create('DIV');background.style.position='absolute';background.style.top=0;background.style.left=0;background.style.overflow='hidden';background.style.background='black';background.style.width='100%';background.style.height='100%';Juice.Element.opacity(background,80);container=Juice.Element.create('DIV');container.style.position='absolute';container.style.top=0;container.style.left=0;container.style.width=size.width+'px';container.style.height=size.height+'px';container.style.padding=size.padding+'px';container.style.border='1px solid #333333';container.style.backgroundColor='black';container.style.backgroundPosition='center center';container.style.backgroundRepeat='no-repeat';content=Juice.Element.create('DIV');content.style.backgroundRepeat='no-repeat';container.appendChild(content);overlay.appendChild(background);overlay.appendChild(container);lightbox.current={};lightbox.current.fade=false;lightbox.current.delay=false;lightbox.current.id=0;for(var i in setup.image){if((setup.current)&&(setup.image[i].src==setup.current)){lightbox.current.id=i;}}
myself.control();resize.animate=false;resize.interval=8;resize.speed=1;lightbox.center={};lightbox.center.top=0;lightbox.center.left=0;myself.limits();myself.position();Juice.Event.add(overlay,'click',myself.close);Juice.Event.add(window,'resize',myself.limits);Juice.Event.add(document,'keyup',myself.keys);lightbox.parent.style.overflow='hidden';lightbox.parent.scrollTop=0;lightbox.parent.appendChild(overlay);Juice.Element.obstructions(overlay);if(setup.autoplay==true){myself.play();}else{myself.change();}
return false;};this.position=function(){var pos={};pos.screen=Juice.Browser.dimensions();pos.top=(pos.screen.height/2)-((size.height/2)+(size.padding));pos.left=(pos.screen.width/2)-((size.width/2)+(size.padding));container.style.top=pos.top+'px';container.style.left=pos.left+'px';overlay.style.height=pos.screen.height+'px';overlay.style.width=pos.screen.width+'px';};this.limits=function(){var limits=Juice.Browser.dimensions();lightbox.max.width=limits.width-40;lightbox.max.height=limits.height-40;control.container.style.left=((limits.width/2)-(parseInt(control.container.style.width)/2))+'px';myself.change();};this.change=function(id){if(setup.image[lightbox.current.id].loaded!=true){container.style.backgroundImage='url('+lightbox.directory+'loading.gif)';}
resize.speed=1;lightbox.current.fade=clearInterval(lightbox.current.fade);content.style.backgroundImage='none';myself.load(setup.image[lightbox.current.id].src);};this.load=function(src){var image=new Image();image.onload=function(){orig.width=lightbox.current.width=image.width;orig.height=lightbox.current.height=image.height;setup.image[lightbox.current.id].loaded=true;myself.loaded(true);}
image.onerror=function(){myself.error('Image failed to load ('+src+')');myself.loaded(false);}
image.src=src;};this.loaded=function(loaded){if(loaded){container.style.backgroundImage='none';resize.animate=clearInterval(resize.animate);resize.animate=setInterval(function(){myself.resize('x');},resize.interval);}else{lightbox.failures++;if(lightbox.failures==setup.image.length){myself.hide();}else{myself.next();}}};this.show=function(){lightbox.current.opacity=0;Juice.Element.opacity(content,0);control.caption.innerHTML=(parseInt(lightbox.current.id)+1)+'/'+setup.image.length;if(setup.image[lightbox.current.id].caption){control.caption.innerHTML+=' ['+setup.image[lightbox.current.id].caption+']';}
lightbox.center.top=((orig.height-size.height)/2)*-1;lightbox.center.left=((orig.width-size.width)/2)*-1;content.style.backgroundPosition=lightbox.center.left+'px '+lightbox.center.top+'px';content.style.backgroundImage='url('+setup.image[lightbox.current.id].src+')';lightbox.current.fade=setInterval(myself.fade,20);Juice.Event.add(content,'mousedown',myself.move);};this.move=function(e){if(orig.width>size.width||orig.height>size.height){Juice.Event.add(document,'mousemove',myself.drag);Juice.Event.add(document,'mouseup',myself.stopDrag);lightbox.parent.style.cursor='move';var mouse=Juice.Event.mouse(e);lightbox.drag={};lightbox.drag.startX=mouse.left;lightbox.drag.startY=mouse.top;}else{myself.stopDrag();}};this.drag=function(e){var mouse=Juice.Event.mouse(e);var position=Juice.Element.position(content);lightbox.center.left+=(lightbox.drag.startX-mouse.left)/5;lightbox.center.top+=(lightbox.drag.startY-mouse.top)/5;if(lightbox.center.left>0){lightbox.center.left=0;}else if(lightbox.center.left<(orig.width-size.width)*-1){lightbox.center.left=(orig.width-size.width)*-1;}
if(lightbox.center.top>0){lightbox.center.top=0;}else if(lightbox.center.top<(orig.height-size.height)*-1){lightbox.center.top=(orig.height-size.height)*-1;}
content.style.backgroundPosition=lightbox.center.left+'px '+lightbox.center.top+'px';};this.stopDrag=function(){Juice.Event.remove(document,'mousemove',myself.drag);Juice.Event.remove(document,'mouseup',myself.stopDrag);lightbox.parent.style.cursor='auto';};this.fade=function(){lightbox.current.opacity+=10;if(lightbox.current.opacity>=100){Juice.Element.opacity(content,100);lightbox.current.fade=clearInterval(lightbox.current.fade);}else{Juice.Element.opacity(content,lightbox.current.opacity);}};this.resize=function(axis){var stop=false;var current=axis=='y'?lightbox.current.height:lightbox.current.width;var original=axis=='y'?orig.height:orig.width;var image=axis=='y'?size.height:size.width;var max=axis=='y'?lightbox.max.height:lightbox.max.width;if(current<original){current=original;}
if(current>max){current=max;}
if(current>image){image+=(resize.speed*3);if(current<=image){image=current;stop=true;}}else if(current<image){image-=(resize.speed*3);if(current>=image){image=current;stop=true;}}else{stop=true;}
resize.speed++;if(axis=='y'){lightbox.current.height=current;size.height=image;myself.position();container.style.height=size.height+'px';content.style.height=size.height+'px';if(stop==true){myself.show();resize.speed=1;resize.animate=clearInterval(resize.animate);}}else{lightbox.current.width=current;size.width=image;myself.position();container.style.width=size.width+'px';if(stop==true){resize.speed=1;resize.animate=clearInterval(resize.animate);resize.animate=setInterval(function(){myself.resize('y');},resize.interval);}}};this.hide=function(){Juice.Event.remove(overlay,'click',myself.close);Juice.Event.remove(window,'resize',myself.position);Juice.Event.remove(document,'keyup',myself.keys);lightbox.parent.removeChild(overlay);lightbox.parent.style.overflow='auto';lightbox.parent.scrollTop=lightbox.top;};this.close=function(e){var node=Juice.Event.source(e);Juice.Event.cancel(e);while(node!=document){if(node==container||node==control.container){break;}
node=node.parentNode;}
if(node!=container&&node!=control.container){myself.hide();}};this.play=function(){control.pause.style.display='block';control.play.style.display='none';lightbox.play=setInterval(myself.slideshow,5000);};this.slideshow=function(){lightbox.current.id++;if(lightbox.current.id==setup.image.length){lightbox.current.id=0;}
myself.change();return true;};this.next=function(){if(setup.image.length==1){return false;}
lightbox.current.id++;if(lightbox.current.id==setup.image.length){lightbox.current.id=0;}
myself.change();return true;};this.pause=function(){control.pause.style.display='none';control.play.style.display='block';lightbox.play=clearInterval(lightbox.play);};this.prev=function(){myself.pause();if(setup.image.length==1){return false;}
lightbox.current.id--;if(lightbox.current.id<0){lightbox.current.id=setup.image.length-1;}
myself.change();return true;};this.next=function(){myself.pause();if(setup.image.length==1){return false;}
lightbox.current.id++;if(lightbox.current.id==setup.image.length){lightbox.current.id=0;}
myself.change();return true;};this.start=function(){myself.pause();if(lightbox.current.id!=0){lightbox.current.id=0;myself.change();}
return true;};this.end=function(){myself.pause();var last=setup.image.length-1;if(lightbox.current.id!=last){lightbox.current.id=last;myself.change();}
return true;};this.actual=function(){myself.pause();Juice.Window.open(setup.image[lightbox.current.id].src);};this.control=function(){control={};control.container=Juice.Element.create('A');control.container.style.background='url('+lightbox.directory+'bg.png) center center no-repeat';control.container.style.position='absolute';control.container.style.bottom='20px';control.container.style.width='285px';control.container.style.height='70px';control.actual=Juice.Element.create('A');control.actual.style.background='url('+lightbox.directory+'actual.png) center center no-repeat';control.actual.style.position='absolute';control.actual.style.top='15px';control.actual.style.left='20px';control.actual.style.width='26px';control.actual.style.height='26px';control.actual.href='#actual';Juice.Event.add(control.actual,'click',myself.actual);control.start=Juice.Element.create('A');control.start.style.background='url('+lightbox.directory+'start.png) center center no-repeat';control.start.style.position='absolute';control.start.style.top='15px';control.start.style.left='62px';control.start.style.width='26px';control.start.style.height='26px';control.start.href='#first';Juice.Event.add(control.start,'click',myself.start);control.prev=Juice.Element.create('A');control.prev.style.background='url('+lightbox.directory+'prev.png) center center no-repeat';control.prev.style.position='absolute';control.prev.style.top='15px';control.prev.style.left='92px';control.prev.style.width='26px';control.prev.style.height='26px';control.prev.href='#previous';Juice.Event.add(control.prev,'click',myself.prev);control.play=Juice.Element.create('A');control.play.style.background='url('+lightbox.directory+'play.png) center center no-repeat';control.play.style.position='absolute';control.play.style.top='8px';control.play.style.left='122px';control.play.style.width='40px';control.play.style.height='40px';control.play.href='#play';Juice.Event.add(control.play,'click',myself.play);control.pause=Juice.Element.create('A');control.pause.style.background='url('+lightbox.directory+'pause.png) center center no-repeat';control.pause.style.position='absolute';control.pause.style.top='8px';control.pause.style.left='122px';control.pause.style.width='40px';control.pause.style.height='40px';control.pause.style.display='none';control.pause.href='#pause';Juice.Event.add(control.pause,'click',myself.pause);control.next=Juice.Element.create('A');control.next.style.background='url('+lightbox.directory+'next.png) center center no-repeat';control.next.style.position='absolute';control.next.style.top='15px';control.next.style.left='166px';control.next.style.width='26px';control.next.style.height='26px';control.next.href='#next';Juice.Event.add(control.next,'click',myself.next);control.end=Juice.Element.create('A');control.end.style.background='url('+lightbox.directory+'end.png) center center no-repeat';control.end.style.position='absolute';control.end.style.top='15px';control.end.style.left='196px';control.end.style.width='26px';control.end.style.height='26px';control.end.href='#last';Juice.Event.add(control.end,'click',myself.end);control.close=Juice.Element.create('A');control.close.style.background='url('+lightbox.directory+'close.png) center center no-repeat';control.close.style.position='absolute';control.close.style.top='15px';control.close.style.left='236px';control.close.style.width='26px';control.close.style.height='26px';control.close.href='#close';Juice.Event.add(control.close,'click',function(e){Juice.Event.cancel(e);myself.hide();});control.caption=Juice.Element.create('DIV','...');control.caption.style.position='absolute';control.caption.style.bottom='5px';control.caption.style.left='10px';control.caption.style.width='268px';control.caption.style.height='15px';control.caption.style.textAlign='center';control.caption.style.color='#999999';control.caption.style.font='11px arial';control.container.appendChild(control.actual);control.container.appendChild(control.start);control.container.appendChild(control.prev);control.container.appendChild(control.play);control.container.appendChild(control.pause);control.container.appendChild(control.next);control.container.appendChild(control.end);control.container.appendChild(control.close);control.container.appendChild(control.caption);overlay.appendChild(control.container);if(setup.image.length==1){return false;}
lightbox.prev=Juice.Element.create('DIV');lightbox.prev.style.position='absolute';lightbox.prev.style.top=0;lightbox.prev.style.left=0;lightbox.prev.style.width='60px';lightbox.prev.style.height='100%';lightbox.prev.style.cursor='pointer';lightbox.prev.style.backgroundPosition='center center';lightbox.prev.style.backgroundRepeat='no-repeat';Juice.Event.add(lightbox.prev,'mouseover',function(){lightbox.prev.style.backgroundImage='url('+lightbox.directory+'prev.png)';});Juice.Event.add(lightbox.prev,'mouseout',function(){lightbox.prev.style.backgroundImage='';});Juice.Event.add(lightbox.prev,'click',myself.prev);container.appendChild(lightbox.prev);lightbox.next=Juice.Element.create('DIV');lightbox.next.style.position='absolute';lightbox.next.style.top=0;lightbox.next.style.right=0;lightbox.next.style.width='60px';lightbox.next.style.height='100%';lightbox.next.style.cursor='pointer';lightbox.next.style.backgroundPosition='center center';lightbox.next.style.backgroundRepeat='no-repeat';Juice.Event.add(lightbox.next,'mouseover',function(){lightbox.next.style.backgroundImage='url('+lightbox.directory+'next.png)';});Juice.Event.add(lightbox.next,'mouseout',function(){lightbox.next.style.backgroundImage='';});Juice.Event.add(lightbox.next,'click',myself.next);container.appendChild(lightbox.next);};this.keys=function(e){Juice.Event.cancel(e);var key=Juice.Event.key(e);switch(key.code){case 27:case 67:case 88:myself.hide();break;case 36:myself.start();break;case 35:myself.end();break;case 37:case 80:case 190:myself.prev();break;case 39:case 78:case 188:myself.next();break;}};this.error=function(err){Juice.Debug(new Error('Juice.Lightbox: '+err));};this.setup();};}
Juice.Event.add(window,'load',Juice.Lightbox.init);})();
(function(){if(typeof Juice=='undefined'){throw new Error('calendar.juice.js requires the core.juice.js component.');}
Juice.Calendar=function(node,setup){var dates,output,calendar,months,display,myself=this;this.init=function(){if(!setup){setup={};};node=Juice.$(node);months={names:['January','February','March','April','May','June','July','August','September','October','November','December'],days:[31,0,31,30,31,30,31,31,30,31,30,31]};dates={today:this.create.date(),min:this.create.fromdate(setup.min),max:this.create.fromdate(setup.max),current:this.create.fromdate(node.value)};output={element:node,position:Juice.Element.position(node),dimensions:Juice.Element.dimensions(node)};calendar={position:{top:output.position.top,left:output.position.left+output.dimensions.width+4},container:Juice.Container.create({className:'juiceCalendar',padding:10})};calendar.container.outer.style.top=calendar.position.top+'px';calendar.container.outer.style.left=calendar.position.left+'px';Juice.Event.add(output.element,'click',myself.show);};this.show=function(date){myself.clear();var current;if(current=myself.create.fromdate(node.value)){dates.current=current;}
if(!date.year){date=dates.current||dates.today;}
display={};display.date=myself.create.date(date.year,date.month);display.starts=display.date.full.getDay();display.month=months.names[display.date.month];months.days[1]=(((display.date.year%100!=0)&&(display.date.year%4==0))||(display.date.year%400==0))?29:28;calendar.month={container:Juice.Element.create('TABLE'),head:{container:Juice.Element.create('THEAD'),row:Juice.Element.create('TR'),prev:Juice.Element.create('TH'),laquo:Juice.Element.create('A','&laquo;',null,null,'#'),title:Juice.Element.create('TH',display.month+' '+display.date.year),next:Juice.Element.create('TH'),raquo:Juice.Element.create('A','&raquo;',null,null,'#'),days:Juice.Element.create('TR')},body:{container:Juice.Element.create('TBODY'),row:Juice.Element.create('TR')}};Juice.Element.append(calendar.month.head.prev,calendar.month.head.laquo);Juice.Element.append(calendar.month.head.next,calendar.month.head.raquo);Juice.Event.add(calendar.month.head.prev,'click',myself.prev);Juice.Event.add(calendar.month.head.next,'click',myself.next);Juice.Event.add(document,'mouseup',myself.hide);calendar.month.head.title.colSpan='5';for(var i=0;i<7;i++){var day=Juice.Element.create('TH',('SMTWTFS'.substr(i,1)));calendar.month.head.days.appendChild(day);}
Juice.Element.append(calendar.month.head.row,[calendar.month.head.prev,calendar.month.head.title,calendar.month.head.next]);Juice.Element.append(calendar.month.head.container,[calendar.month.head.row,calendar.month.head.days]);Juice.Element.append(calendar.month.container,[calendar.month.head.container,calendar.month.body.container]);for(var day=1;day<=42;day++){myself.create.day(day);}
calendar.container.inner.appendChild(calendar.month.container);Juice.Container.render(calendar.container);};this.hide=function(e){if(Juice.Event.blur(e,calendar.container.outer)){Juice.Event.cancel(e);myself.clear();}};this.clear=function(){Juice.Element.empty(calendar.container.inner);if(calendar.container.outer.parentNode){calendar.container.outer.parentNode.removeChild(calendar.container.outer);}
Juice.Event.remove(document,'mouseup',myself.hide);};this.prev=function(e){Juice.Event.cancel(e);myself.clear();myself.show(myself.create.date(display.date.year,display.date.month-1));};this.next=function(e){Juice.Event.cancel(e);myself.clear();myself.show(myself.create.date(display.date.year,display.date.full.getMonth()+1));};this.set=function(d,m,y){dates.current=myself.create.date(y,m,d);var date={day:Juice.Format.pad(d,2),month:Juice.Format.pad((m+1),2),year:setup.shortyear===true?y.toString().substring(2,4):y,sep:setup.sep||'/'}
if(Juice.Type.callback(setup.callback)){setup.callback(date.day,date.month,date.year,date.sep);}else{output.element.value=date.day+date.sep+date.month+date.sep+date.year;}
if(setup.close!==false){myself.clear();}};this.create={date:function(year,month,day){var date;if(year){date=new Date(year,parseInt(month),day||1);}else{date=new Date();date.setHours(0,0,0,0);}
return{full:date,day:date.getDate(),month:date.getMonth(),year:date.getFullYear(),time:date.getTime()};},day:function(num){var day={date:myself.create.date(display.date.year,display.date.month,(num-display.starts)),label:num-display.starts,month:months.days[display.date.month],prev:(display.date.month==0?months.days[11]:months.days[display.date.month-1])};if((day.label>0)&&(day.label<=day.month)){if(day.date.time<dates.min.time||day.date.time>dates.max.time){day.container=Juice.Element.create('TD',day.label,null,'disabled');}else{day.container=Juice.Element.create('TD');day.option=Juice.Element.create('A',day.label,null,null,'#');day.container.appendChild(day.option);if(day.date.time==dates.current.time){Juice.Element.addClassName(day.option,'selected');}
if(day.date.time==dates.today.time){Juice.Element.addClassName(day.option,'today');}
Juice.Event.add(day.container,'click',function(e){Juice.Event.cancel(e);myself.set(day.label,display.date.month,display.date.year);});}}else{day.label=day.label>=day.month?day.label-day.month:day.prev-display.starts+num;day.container=Juice.Element.create('TD',day.label,null,'unavailable');}
calendar.month.body.row.appendChild(day.container);if(((num%7)==0&&num<36&&num>0)||num==42){calendar.month.body.container.appendChild(calendar.month.body.row);calendar.month.body.row=Juice.Element.create('TR');}},fromdate:function(d){if(!d){return false;}else if(d=='today'){return myself.create.date();}else{var x=new RegExp('^([0-9]{1,2})/([0-9]{1,2})/([0-9]{2,4})'),m=false;if(m=d.match(x)){return myself.create.date(m[3],m[2]-1,m[1]);}}
return false;}};this.select=function(n,h){if(!n||!h){return false;}
var l=h.getElementsByTagName('OPTION');for(var i=0;i<l.length;i++){if(parseFloat(l[i].value)==parseFloat(n)){h.selectedIndex=i;return true;}}
return false;}
this.init();}})();
function wrap_text(wrapper){var output=document.getElementById('topic_message');var open='['+wrapper+']';var close='[/'+wrapper+']';Juice.Element.insertAtCaret(output,open,close);}
function icon(e){var textarea=document.getElementById('topic_message');Juice.Element.insertAtCaret(textarea,' :'+e.alt.toLowerCase()+': ');}
function do_bbcode(bbcode){var textarea=document.getElementById('topic_message');switch(bbcode){case'img':var img=prompt('Please enter the image URL','http://');if(img!=''&&img!='http://'&&img!=null){Juice.Element.insertAtCaret(textarea,'[img]'+img+'[/img]');}
break;case'video':var video=prompt('Please enter the youtube video URL','http://');if(video!=''&&video!='http://'&&video!=null){Juice.Element.insertAtCaret(textarea,'[youtube]'+video+'[/youtube]');}
break;case'link':var href=prompt('Please enter the full website URL','http://');if(href!=''&&href!='http://'&&href!=null){var name=prompt('Please enter the name for the link','');if(name!=''&&name!=null){Juice.Element.insertAtCaret(textarea,'[url='+href+']'+name+'[/url]');}}
break;case'ol':var listItem=prompt('Enter a list item','');if(listItem!=''&&listItem!=null){Juice.Element.insertAtCaret(textarea,'*'+listItem+"\n");}
break;case'ul':var listItem=prompt('Enter a list item','');if(listItem!=''&&listItem!=null){Juice.Element.insertAtCaret(textarea,'#'+listItem+"\n");}
break;}}





/*  Copyright (c) 2007, 2008 Stephen Whiteley (http://jui.ce.it)
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 *  Juice Library core.juice.js, version 0.1.2.20080911
 *
/*--------------------------------------------------------------------------*/

(function() {

	window.Juice = {

		Version: '0.1.1.20080325',

		$: function() {

			var a = [];

			var i, e;
			for ( i = 0; i < arguments.length; i++ ) {
				e = arguments[i];
				if ( typeof e == 'string' ) { e = document.getElementById( e ); }
				if ( arguments.length === 1 ) { return e; }
				a.push( e );
			}

			return a;

		},

		Bookmark: function( ele, e ) {

			Juice.Event.cancel( e );

			var w = window;

			if ( w.sidebar ) {
				w.sidebar.addPanel( ele.title, ele.href, '' );
			} else if ( w.opera && w.print ) {
				ele.rel = 'sidebar';
			} else if ( w.external ) {
				w.external.AddFavorite( ele.href, ele.title );
			} else {
				alert( 'Your Browser does not support dynamic bookmarking, please try bookmarking manually.' );
			}

			return false;

		},

		Browser: new function() {

			this.detect = function() {

				var a = navigator.userAgent, b = {};

				b.opera		= ( a.indexOf( 'Opera' ) != -1 );
				b.konqueror	= ( a.indexOf( 'Konqueror' ) != -1 );
				b.safari	= ( a.indexOf( 'Safari' ) != -1 );
				b.mozilla	= ( a.indexOf( 'Gecko' ) != -1 && !b.konqueror && !b.safari );
				b.ie7		= ( a.indexOf( 'MSIE 7' ) != -1 && !b.opera );
				b.ie6		= ( a.indexOf( 'MSIE' ) != -1 && !b.ie7 && !b.opera );
				b.ie		= ( b.ie7 || b.ie6 );
				b.quirks	= ( this.mode() == 'quirks' ? true : false );

				return b;

			};

			this.details = function() {

				var n = navigator;

				return {
					agent:		n.userAgent,
					code:		n.appCodeName,
					cookies:	n.cookieEnabled,
					name:		n.appName,
					platform:	n.platform,
					version:	n.appVersion
				};

			};

			this.dimensions = function() {

				var s = { width: 0, height: 0 };

				if ( typeof window.innerWidth == 'number' ) {
					s.width = window.innerWidth;
					s.height = window.innerHeight;
				} else if ( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
					s.width = document.documentElement.clientWidth;
					s.height = document.documentElement.clientHeight;
				} else if ( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
					s.width = document.body.clientWidth;
					s.height = document.body.clientHeight;
				}

				return s;

			};

			this.flash = function() {

				var c, d, f = { enabled: false, version: false }, n = navigator;

				if ( n.plugins && n.plugins.length ) {
					c = n.plugins['Shockwave Flash'];
					if ( c ) {
						f.enabled = true;
						if ( c.description ) {
							d = d.description;
							f.version = d.charAt( d.indexOf( '.' ) - 1 );
						}
					}
				} else if ( n.mimeTypes && n.mimeTypes.length ) {
					c = n.mimeTypes['application/x-shockwave-flash'];
					if ( c && d.enabledPlugin ) {
						f.enabled = true;
					}
				} else {
					for ( var v = 9; v > 0; v-- ) {
						try {
							c = new ActiveXObject( 'ShockwaveFlash.ShockwaveFlash.' + v );
							f.enabled = true;
							f.version = v;
							break;
						} catch( e ) {}
					}
				}

				return f;

			};

			this.inner = function() {

				var s = { x: 0, y: 0 }, w = Juice.Browser.dimensions();

				if ( window.innerHeight && window.scrollMaxY ) {
					s.x = document.body.scrollWidth;
					s.y = window.innerHeight + window.scrollMaxY;
				} else if ( document.body.scrollHeight > document.body.offsetHeight ) {
					s.x = document.body.scrollWidth;
					s.y = document.body.scrollHeight;
				} else {
					s.x = document.body.offsetWidth;
					s.y = document.body.offsetHeight;
				}

				return {
					width: ( s.x < w.width ) ? w.width : s.x,
					height: ( s.y < w.height ) ? w.height : s.y
				};

			};

			this.mode = function() {

				var c, m = false;

				if ( c = document.compatMode ) {
					switch ( c.toLowerCase() ) {
						case 'backcompat': m = 'quirks'; break;
						case 'css1compat': m = 'compliant'; break;
						default: m = 'hybrid';
					}
				}

				return m;

			};

		},

		Container: new function() {

			this.create = function( s ) {

				if ( !s ) { s = {}; }

				var c = {
					outer:	Juice.Element.create( 'DIV', null, s.id || null, s.className || null ),
					inner:	Juice.Element.create( 'DIV', s.value || null, null, 'inner' ),
					shadow: Juice.Element.create( 'DIV' )
				};

				c.outer.style.zIndex		= s.zIndex || 1;
				c.outer.style.position		= s.fixed === true ? 'relative' : 'absolute';

				if ( s.width ) { c.outer.style.width = s.width + 'px'; }

				c.inner.style.border		= '1px solid ' + ( s.border || '#808080' );
				c.inner.style.background	= s.background || 'white';

				if ( s.padding )	{ c.inner.style.padding = s.padding + 'px'; }
				if ( s.height )		{ c.inner.style.height = ( s.height - ( s.padding ? s.padding * 2 : 0 ) - 2 ) + 'px'; }

				c.shadow.style.position		= 'absolute';
				c.shadow.style.background	= s.shadow || '#999999';
				c.shadow.style.zIndex		= -1;
				c.shadow.style.top			= '2px';
				c.shadow.style.right = c.shadow.style.bottom = c.shadow.style.left = '-3px';

				Juice.Element.opacity( c.shadow, s.opacity || 30 );
				Juice.Element.append( c.outer, [ c.inner, c.shadow ] );

				return c;

			};

			this.render = function( c, e ) {

				if ( !e ) { e = document.body; }

				e.appendChild( c.outer );

				Juice.Container.fix( c );

			};

			this.fix = function( c ) {

				if ( c && ( Juice.Browser.detect().ie6 || Juice.Browser.detect().quirks ) ) {

					var d = Juice.Element.dimensions( c.outer );

					c.shadow.style.width = d.width + 6 + 'px';
					c.shadow.style.height = d.height + 1 + 'px';

					Juice.Element.obstructions( c.outer );

				}

			};

		},

		Convert: new function() {

			this.namehex = function( n ) {

				var c = {
					'aqua': '#00FFFF', 'black': '#000000', 'blue': '#0000FF', 'fuchsia': '#FF00FF',
					'gray': '#808080', 'green': '#008000', 'lime': '#00FF00', 'maroon': '#800000',
					'navy': '#000080', 'olive': '#808000', 'purple': '#800080', 'red': '#FF0000',
					'silver': '#C0C0C0', 'teal': '#008080', 'white': '#FFFFFF', 'yellow': '#FFFF00'
				};

				if ( c[n] ) { return c[n]; }

				return false;

			};

			this.hexrgb = function( h ) {

				if ( !Juice.Type.hexColour( h ) ) { h = this.namehex( h ); }
				if ( !Juice.Type.hexColour( h ) ) { return; }

				var x = new RegExp( '^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$', 'i' ), m = false;

				if ( m = h.match( x ) ) {
					return {
						r: parseInt( m[1], 16 ),
						g: parseInt( m[2], 16 ),
						b: parseInt( m[3], 16 )
					};
				} else {
					Juice.Debug( new Error( 'Juice.Core: Invalid hex value: ' + h ) );
				}

				return false;

			};

			this.hsvrgb = function( h, s, v ) {

				var r, g, b;

				if ( s == 0 ) {
					if ( v == 0 ) {
						r = g = b = 0;
					} else {
						r = g = b = parseInt( v * 255 / 100 );
					}
				} else {

					if ( h == 360 ) { h = 0; }

					h /= 60, s /= 100, v /= 100;

					var i = parseInt( h );
					var f = h - i;
					var p = v * ( 1 - s );
					var q = v * ( 1 - ( s * f ) );
					var t = v * ( 1 - ( s * ( 1 - f ) ) );

					switch ( i ) {
						case 0: r = v; g = t; b = p; break;
						case 1: r = q; g = v; b = p; break;
						case 2: r = p; g = v; b = t; break;
						case 3: r = p; g = q; b = v; break;
						case 4: r = t; g = p; b = v; break;
						case 5: r = v; g = p; b = q; break;
					}

					r = parseInt( r * 255 );
					g = parseInt( g * 255 );
					b = parseInt( b * 255 );

				}

				return { r: r, g: g, b: b };

			};

			this.rgbhex = function( r, g, b ) {

				var hex = '', i;

				for ( i = 0; i < arguments.length; i++ ) {
					hex += Juice.Format.pad( parseInt( arguments[i] ).toString( 16 ), 2 );
				}

				if ( Juice.Type.hexColour( hex ) ) {
					return '#' + hex;
				} else {
					return false;
				}

			};

			this.rgbhsv = function( r, g, b ) {

				var h, s, v, min, delta;

				min		= Math.min( r, g, b );
				v		= Math.max( r, g, b );
				delta	= v - min;
				s		= v == 0 ? 0 : ( delta / v ) * 100;

				if ( s == 0 ) {
					h = 0;
				} else {
					if ( r == v ) {
						h = 60 * ( g - b ) / delta;
					} else {
						if ( g == v ) {
							h = 120 + 60 * ( b - r ) / delta;
						} else {
							h = 240 + 60 * ( r - g ) / delta;
						}
					}
				}

				if ( h < 0 ) { h = h + 360; }

				return { h: h, s: s, v: ( v / 255 ) * 100 };

			};

			this.fullrgbhex = function( r ) {

				var x = new RegExp( '^rgb\\(([0-9]{3}), ([0-9]{3}), ([0-9]{3})\\)' ), m = false;

				if ( m = r.toLowerCase().match( x ) ) {
					return this.rgbhex( m[1], m[2], m[3] );
				}

				return false;

			};

		},

		Debug: function( e ) {
			if ( Juice.Prefs.debug === true ) {
				throw e;
			}
		},

		Element: new function() {

			this.addClassName = function( e, n, c ) {
			
				if ( ( typeof c == 'boolean' ) && c !== true ) {
					alert('not added');
					return false;
				}

				if ( !this.hasClassName( e, n ) ) {
					e.className += ' ' + n;
				} else {
					return false;
				}

				return true;

			};

			this.append = function( p, c ) {

				if ( Juice.Type.array( c ) ) {
					for ( var i = 0; i < c.length; i++ ) {
						p.appendChild( c[i] );
					}
				} else {
					p.appendChild( c );
				}

			};

			this.blur = function() {

				return window.focus();

			};

			this.byClassName = function( c, e ) {

				if ( !e ) { e = document; }

				var a = [];
				var n = e.getElementsByTagName( '*' );
				var i;

				for ( i = 0; i < n.length; i++ ) {
					if ( this.hasClassName( n[i], c ) ) {
						a.push( n[i] );
					}
				}

				return a;

			};

			this.contains = function( p, c ) {

				while ( c != document ) {
					if ( c == p ) {
						return true;
					}
					c = c.parentNode;
				}

				return false;

			};

			this.create = function( t, h, i, c, n ) {

				if ( !t ) { return false; }

				var p, s;

				if ( ( p = t.indexOf( ':' ) ) !== -1 ) {
					s = t.substring( p + 1, t.length );
					t = t.substring( 0, p );
				}

				var e = document.createElement( t.toUpperCase() );

				if ( i ) { e.id = i; }
				if ( c ) { e.className = c; }

				switch ( e.nodeName ) {
					case 'A':
						if ( h ) { e.innerHTML = h; }
						if ( n ) { e.href = n; }
					break;
					case 'IFRAME':
						if ( h ) { e.src = h; }
						if ( n ) { e.name = n; }
					break;
					case 'IMG':
						if ( h ) { e.src = h; }
					break;
					case 'INPUT':
						e.type = s;
						if ( h ) { e.value = h; }
						if ( n ) { e.name = n; }
					break;
					case 'OPTION':
						if ( h ) {
							e.innerHTML = h;
							e.value = n || n == '' ? n : h;
						}
					break;
					case 'SELECT':
						if ( n ) { e.name = n; }
					break;
					default:
						if ( h ) { e.innerHTML = h; }
				}

				return e;

			};

			this.dimensions = function( ele ) {

				var s = { height: 0, width: 0 };

				if ( ele.offsetHeight ) {
					s.height	= ele.offsetHeight;
					s.width		= ele.offsetWidth;
				} else {
					s.height	= ele.style.pixelHeight;
					s.width		= ele.style.pixelWidth;
				}

				return s;

			};

			this.empty = function( e ) {

				var c = Juice.$( e );

				if ( c.hasChildNodes() ) {
					while ( c.hasChildNodes() ) {
						c.removeChild( c.firstChild );
					}
				}

			};

			this.hasClassName = function( e, c ) {

				var x = new RegExp( '\\b' + c + '\\b', 'ig' );

				if ( e.className && e.className.match( x ) ) {
					return true;
				}

				return false;

			};

			this.insertAtCaret = function( n, b, a ) {

				n = Juice.$( n );
				if ( n.nodeName == 'TEXTAREA' ) {
					n.focus();
					if ( !a ) { a = ''; }
					if ( document.selection ) {
						var r = document.selection.createRange();
						if ( r.parentElement() != n ) { return false; }
						r.text = b + r.text + a;
						r.moveStart ('character', r.text.length - a.length );
						r.moveEnd ('character', r.text.length - ( a.length > 0 ? b.length - a.length : 0 ) );
						r.select();
					} else if ( n.selectionStart >= 0 ) {
						var s = n.selectionStart, e = n.selectionEnd, c = b + n.value.substring( s, e ) + a;
						if ( c != b + a ) {
							n.value = n.value.substring( 0, s ) + c + n.value.substring( e, n.value.length );
							n.setSelectionRange( s + c.length, s + c.length );
						} else {;
							n.value = n.value.substring( 0, s ) + b + a + n.value.substr( e );
							n.setSelectionRange( s + b.length, s + c.length - a.length );
						}
					} else {
						n.value = n.value + b + a;
					}
					n.focus();
				}
				return; 
	
			};

			this.nextNode = function( n, t ) {

				n = Juice.$( n );

				if ( n.firstChild ) {
					n = n.firstChild;
				} else if ( n.nextSibling ) {
					n = n.nextSibling;
				} else if ( n.parentNode != t ) {
					while ( ( n = n.parentNode ) && n != t ) {
						if ( n.nextSibling ) {
							n = n.nextSibling;
							break;
						}
					}
				} else {
					return null;
				}
				if ( n == t ) {
					return null;
				}
				if ( n != null ) {
					if ( n.nodeType != 1 ) {
						n = this.nextNode( n, t );
					}
				}

				return n;

			};

			this.prevNode = function( n, t ) {

				n = Juice.$( n );

				if ( n.lastChild ) {
					n = n.lastChild;
				} else if ( n.previousSibling ) {
					n = n.previousSibling;
				} else if ( n.parentNode != t ) {
					while ( ( n = n.parentNode ) && n != t ) {
						if ( n.previousSibling ) {
							n = n.previousSibling;
							break;
						}
					}
				} else {
					return null;
				}
				if ( n == t ) {
					return null;
				}
				if ( n != null ) {
					if ( n.nodeType != 1 ) {
						n = this.prevNode( n, t );
					}
				}

				return n;

			};

			this.obstructions = function( n ) {

				if ( Juice.Browser.detect().ie6 ) {

					if ( n.firstChild && n.firstChild.className == 'JuiceObstruction' ) {
						n.removeChild( n.firstChild );
					}

					var d = Juice.Element.dimensions( n );

					var f					= Juice.Element.create( 'IFRAME' );
						f.src				= 'about:blank';
						f.className			= 'JuiceObstruction';
						f.scrolling			= 'no';
						f.frameBorder		= 0;
						f.style.width		= d.width + 'px';
						f.style.height		= d.height + 'px';
						f.style.zIndex		= -1;
						f.style.position	= 'absolute';
						f.style.filter		= 'filter:progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=0)';

					if ( n.firstChild ) {
						n.insertBefore( f, n.firstChild );
					} else {
						n.appendChild( f );
					}

					n.style.zIndex = 900;

				}

			};

			this.opacity = function( e, o ) {

				e.style.opacity	= e.style.MozOpacity = e.style.KHTMLOpacity = ( o / 100 );
				e.style.filter	= 'alpha(opacity=' + o + ')';

				return true;

			};

			this.output = function( e ) {

				if ( typeof e == 'string' ) {
					if ( e.indexOf( '#' ) != -1 ) {
						return ( document.getElementById( e ) || false );
					} else {
						return ( document.getElementsByTagName( e ).item(0) || false );
					}
				}

				return false;

			};

			this.position = function( e ) {

				if ( !e ) { return false; }

				var p = { top: 0, left: 0 };

				if ( e.offsetParent ) {

					p.top	= e.offsetTop;
					p.left	= e.offsetLeft;

					while ( e.offsetParent ) {
						e		= e.offsetParent;
						p.top	+= e.offsetTop;
						p.left	+= e.offsetLeft;
					}

				}

				return p;

			};

			this.remove = function( a, v ) {

				for ( var i = 0; i < a.length; i++ ) {
					if ( v == a[i] ) {
						a.splice( i, 1 );	
					}
				}
				return a;

			};

			this.removeClassName = function( e, c ) {

				if ( this.hasClassName( e, c ) ) {
					e.className = Juice.Format.trim( e.className.replace( new RegExp( '\\b' + c + '\\b', 'ig' ), '' ) );
				} else {
					return false;
				}

				return true;

			};

			this.replaceClassName = function( e, c, r ) {

				if ( this.hasClassName( e, c ) ) {
					Juice.Element.removeClassName( e, c );
					Juice.Element.addClassName( e, r );
				} else {
					return false;
				}

				return true;

			};

			this.scroll = function( e ) {

				var p = { top: 0, left: 0 };

				if ( e ) {

					for ( var n = e; n; n = n.offsetParent ) {
						p.top	+= n.offsetTop;
						p.left	+= n.offsetLeft;
					}

				} else {

					var w = window, d = document;

					if ( typeof w.pageYOffset == 'number' ) {
						p.top	= w.pageYOffset;
						p.left	= w.pageXOffset;
					} else if ( d.body && d.body.scrollTop ) {
						p.top	= d.body.scrollTop;
						p.left	= d.body.scrollLeft;
					} else if ( d.documentElement && d.documentElement.scrollTop ) {
						p.top	= d.documentElement.scrollTop;
						p.left	= d.documentElement.scrollLeft;
					}

				}

				return p;

			};

			this.scrollTo = function( n, e, p ) {

				if ( e ) { Juice.Event.cancel( e ); }

				var o, a, r = 1, d = 3, s = this.scroll(), f = this.scroll( Juice.$( n ) );
				
				if ( s.top < f.top ) {
					o = s.top + Math.max( r, ( ( f.top - s.top ) / d ) );
					a = ( f.top - r <= o );
				} else {
					o = s.top - Math.max( r, ( ( s.top - f.top ) / d ) );
					a = ( f.top - r >= o );
				}

				if ( a || s.top == f.top || p == o ) {
					window.scrollTo( 0, f.top );
				} else {
					window.scrollTo( 0, o );
					setTimeout( function() {
						Juice.Element.scrollTo( n, false, o );
					}, 50 );
				}

			};

			this.search = function( n, h ) {

				if ( typeof h != 'object' ) { return false; }

				for ( var i = 0; i < h.length; i++ ) {
					if ( h[i] == n ) { return true; }
				}

				return false;

			};

			this.searchReplace = function( t, s, r ) {

				return t.replace( new RegExp( s, 'ig' ), r );

			};

			this.style = function( e, s ) {

				if ( !Juice.Browser.detect().ie ) {
					s = s.replace( new RegExp( '[A-Z]', 'g' ), function( m, c ) {
						return '-' + s.charAt( c ).toLowerCase();
					} );
				}

				if ( e.currentStyle ) {
					return e.currentStyle[s];
				} else if ( window.getComputedStyle ) {
					return document.defaultView.getComputedStyle( e, null ).getPropertyValue( s );
				}

				return false;

			};

			this.toggle = function( e ) {

				var c = Juice.$( e );

				if ( c.style.display != 'none' ) {
					c.style.display = 'none';
				} else {
					c.style.display = '';
				}

			};

		},

		Event: new function() {

			this.add = function( e, n, o, c ) {

				e = Juice.$( e );

				if ( e.addEventListener ) {
					e.addEventListener( n, o, c );
				} else if ( e.attachEvent ) {
					e.attachEvent( 'on' + n, o );
				} else {
					return false;
				}

				return true;

			};

			this.blur = function( e, l ) {

				var n = Juice.Event.source( e );

				while ( n != document ) {
					if ( n == l ) { break; }
					n = n.parentNode;
				}

				if ( n != l ) { return true; }

				return false;

			};

			this.cancel = function( e ) {

				if ( !e ) { return false; }

				e = e || window.event;

				if ( e.stopPropagation ) {
					e.preventDefault();
					e.stopPropagation();
				} else {
					e.returnValue	= false;
					e.cancelBubble	= true;
				}

				return true;

			};

			this.remove = function( e, n, o, c ) {

				e = Juice.$( e );

				if ( e.removeEventListener ) {
					e.removeEventListener( n, o, c );
				} else if ( e.detachEvent ) {
					e.detachEvent( 'on' + n, o );
				} else {
					return false;
				}

				return true;

			};

			this.key = function( e ) {

				e = e || window.event;

				if ( !e ) return;

				var k = e.keyCode || e.which || null;

				return { code: k, value: String.fromCharCode( k ).toLowerCase() };

			};

			this.mouse = function( e ) {

			   e = e || window.event, d = document.body;

			   var p = { left: 0, top: 0 };

				if ( e.pageX || e.pageY ) {
					p.left	= e.pageX;
					p.top	= e.pageY;
				} else if ( e.clientX || e.clientY ) {
					var s = Juice.Element.scroll();
					p.left	= e.clientX + s.left;
					p.top	= e.clientY + s.top;
				}

			   return p;

			};

			this.preload = function( s ) {

				var image = new Image();

				if ( typeof s == 'object' ) {
					for ( var i in s ) {
						image.src = s[i];
					}
				} else {
					image.src = s;
				}

			};

			this.source = function( e ) {

				e = e || window.event;

				return ( e.target || e.srcElement );

			};

			this.type = function( e ) {

				e = e || window.event;

				return ( e.type );

			};

		},

		Format: new function() {

			this.decode = function( v ) {

				return decodeURIComponent( v );

			};

			this.email = function( r, d, e ) {

				var a = r + '@' + d + e;

				return '<a href="mailto:' + a + '">' + a + '</a>';

			};

			this.encode = function( v ) {

				return encodeURIComponent( v );

			};

			this.stripTags = function( s ) {

				return s.value.replace( /<\S[^><]*>/g, '' );

			};

			this.entities = function( t ) {

				var d = document.createElement( 'DIV' );
					d.appendChild( document.createTextNode( t ) );
				
				return d.innerHTML;

			};

			this.implode = function( s, a ) {

				if ( Juice.Type.array( a ) ) {
					return a.join( s );
				}

				return false;

			};

			this.ltrim = function( s ) {

				while ( s.substr( 0, 1 ) == ' ' ) {
					s = s.substring( 1, s.length ) ;
				}

				return s;

			};

			this.number = function( n, d, p, g ) {

				var ns = n.toString();
				var s = n < 0 ? '-' : '';
				if ( d ) { n = this.round( n, d ); }
				var i = ( n > 0 ? Math.floor( n ) : Math.abs( Math.ceil( n ) ) ).toString();
				p = p ? p : '.';
				var f = n.toString().substring( i.length + s.length );
				if ( f = d || f.length > 1 ? ( p + f.substring( 1 ) ) : '' ){
					for ( var j = f.length - 1; j < d; j++ ) {
						f += '0';
					}
				}
				if ( g = ( g && g != p ) ? g : ',' ) {
					for ( var j = i.length - 3; j > 0; j -= 3 ) {
						i = i.substring ( 0, j ) + g + i.substring( j );
					}
				}
				return s + i + f;
	
			};

			this.pad = function( v, l, c ) {

				var s = '' + v;

				if ( !c ) { c = '0'; }

				while ( s.length < l ) {
					s = c + s;
				}

				return s;

			};

			this.querySting = function( a ) {

				var u = '';

				for ( var i in a ) {
					u += ( !u.length ? '?' : '&' ) + this.encode( i ) + '=' + this.encode( a[i] );
				}

				return u;

			};

			this.random = function( l, u ) {

				if ( !l || !u ) { l = 1; u = 99999; }

				return Math.floor( Math.random() * ( u - l + 1 ) + l );

			};

			this.round = function( n, d ) {

				if ( Juice.Type.number( n ) ) {
					var m = Math.pow( 10, d );
					return Math.round( n * m ) / m;
				}
				return n;

			};

			this.rtrim = function( s ) {

				while ( s.substr( s.length - 1 , 1 ) == ' ' ) {
					s = s.substring( 0, s.length - 1 );
				}

				return s;

			};

			this.trim = function( s ) {
				return this.rtrim( this.ltrim( s ) );
			};

		},

		Type: new function() {

			this.array = function( o ) {
				return ( o instanceof Array ? true : false );
			};

			this.callback = function( v ) {
				return ( typeof v == 'function' ? true : false );
			};

			this.hexColour = function( v ) {

				if ( v ) {
					return v.match( new RegExp( '^#?([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$', 'i' ) ) ? true : false;
				}

				return false;

			};

			this.number = function( v ) {
				return ( !isNaN( v ) ? true : false );
			};

		},

		Window: new function() {

			this.open = function( url, focus ) {

				var win = window.open( url );

				if ( focus ) { win.focus(); }

				return win;

			};

		},

		Prefs: {
			container: 'body',
			debug: false,
			image: '/includes/library/juice/images/'
		}

	}

})();

/*  Juice Library ajax.juice.js, version 0.1.1.20071231
 *  Copyright (c) 2007, 2008 Stephen Whiteley (http://jui.ce.it)
 *
 *  See core.juice.js for full license.
 *
/*--------------------------------------------------------------------------*/

(function() {

	if ( typeof Juice == 'undefined' ) {
		throw new Error( 'ajax.juice.js requires the core.juice.js component.' );
	}

	Juice.Ajax = function() {

		var xhttpo, timer, myself = this;

		this.setup = function() {

			try {
				xhttpo = new ActiveXObject( 'Msxml2.XMLHTTP' );
			} catch ( e ) {
				try {
					xhttpo = new ActiveXObject( 'Microsoft.XMLHTTP' );
				} catch ( e ) {
					xhttpo = false;
				}
			}

			if ( ( !xhttpo ) && ( typeof XMLHttpRequest != 'undefined' ) ) {
				try {
					xhttpo = new XMLHttpRequest();
				} catch ( e ) {
					xhttpo = false;
					myself.error( 'XHTTP object could not be created' );
				}
			}

		};

		this.request = function( url, method, cache, timeout ) {

			if ( !xhttpo ) { return false; }

			var params;

			if ( !url ) { myself.error( 'No request url supplied' ); }
			if ( !method ) { method = 'GET'; }

			method	= method.toUpperCase();
			timeout	= typeof timeout == 'number' ? timeout : false;

			if ( method == 'POST' ) {

				var position = url.indexOf( '?' );

				if ( position !== -1 ) {
					this.page	= url.substring( 0, position );
					this.url	= cache ? this.page : myself.nocache( this.page );
					this.params	= url.substring( position + 1, url.length );
				} else {
					this.url	= allowCache ? url : myself.nocache( url );
				}

				this.method			= 'POST';
				this.contentType	= 'application/x-www-form-urlencoded;';

			} else {

				this.method			= 'GET';
				this.url			= cache ? url : myself.nocache( url );
				this.params			= false;
				this.contentType	= 'text/plain';

			}

			try {

				xhttpo.open( this.method, this.url, true );
				xhttpo.setRequestHeader( 'Content-Type', this.contentType );
				if ( this.contentLength ) xhttpo.setRequestHeader( 'Content-Length', this.contentLength );
				xhttpo.onreadystatechange = myself.response;
				xhttpo.send( this.params );

				if ( timeout ) timer = setTimeout( this.abort, ( timeout * 1000 ) );

			} catch ( e ) {
				myself.error( e );
			}

		};

		this.abort = function() {

			xhttpo.abort();
			myself.error( 'Request aborted' );

		};

		this.response = function() {

			if ( xhttpo.readyState != 4 ) { return; }

			if ( timer ) {
				clearTimeout( timer );
			}

			try {
				if ( xhttpo.status == '200' ) {
					if ( xhttpo.responseText ) {
						return myself.ready( xhttpo.responseText );
					} else {
						myself.error( 'No response text defined.' );
					}
				} else {
					myself.error( 'Request URL responded with a ' +  xhttpo.status + ' status' );
				}
			} catch ( e ) {
				myself.error( e );
			}

		};

		this.evaluate = function( res ) {

			try {
				return eval( 'res = ' + res );
			} catch( e ) {
				myself.error( 'Response could not be evaluated' );
			}

			return false;

		};

		this.error = function( err ) {

			Juice.Debug( new Error( 'Juice.Ajax: ' + err ) );

		};

		this.nocache = function( url ) {

			var preventCache = 'nocache=' + new Date().getTime();

			if ( url.indexOf( '?' ) !== -1 ) {
				url += '&' + preventCache;
			} else {
				url += '?' + preventCache;
			}

			return url;

		};

		this.encode = function( values ) {

			return Juice.Format.encode( values );

		};

		this.setup();

	}

})();










(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return!!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return!!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return+new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return!o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return-1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return!!T.firstChild},empty:function(T){return!T.firstChild},has:function(V,U,T){return!!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex"in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return!F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();


jQuery.ui||(function(c){var i=c.fn.remove,d=c.browser.mozilla&&(parseFloat(c.browser.version)<1.9);c.ui={version:"1.7.1",plugin:{add:function(k,l,n){var m=c.ui[k].prototype;for(var j in n){m.plugins[j]=m.plugins[j]||[];m.plugins[j].push([l,n[j]])}},call:function(j,l,k){var n=j.plugins[l];if(!n||!j.element[0].parentNode){return}for(var m=0;m<n.length;m++){if(j.options[n[m][0]]){n[m][1].apply(j.element,k)}}}},contains:function(k,j){return document.compareDocumentPosition?k.compareDocumentPosition(j)&16:k!==j&&k.contains(j)},hasScroll:function(m,k){if(c(m).css("overflow")=="hidden"){return false}var j=(k&&k=="left")?"scrollLeft":"scrollTop",l=false;if(m[j]>0){return true}m[j]=1;l=(m[j]>0);m[j]=0;return l},isOverAxis:function(k,j,l){return(k>j)&&(k<(j+l))},isOver:function(o,k,n,m,j,l){return c.ui.isOverAxis(o,n,j)&&c.ui.isOverAxis(k,m,l)},keyCode:{BACKSPACE:8,CAPS_LOCK:20,COMMA:188,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38}};if(d){var f=c.attr,e=c.fn.removeAttr,h="http://www.w3.org/2005/07/aaa",a=/^aria-/,b=/^wairole:/;c.attr=function(k,j,l){var m=l!==undefined;return(j=="role"?(m?f.call(this,k,j,"wairole:"+l):(f.apply(this,arguments)||"").replace(b,"")):(a.test(j)?(m?k.setAttributeNS(h,j.replace(a,"aaa:"),l):f.call(this,k,j.replace(a,"aaa:"))):f.apply(this,arguments)))};c.fn.removeAttr=function(j){return(a.test(j)?this.each(function(){this.removeAttributeNS(h,j.replace(a,""))}):e.call(this,j))}}c.fn.extend({remove:function(){c("*",this).add(this).each(function(){c(this).triggerHandler("remove")});return i.apply(this,arguments)},enableSelection:function(){return this.attr("unselectable","off").css("MozUserSelect","").unbind("selectstart.ui")},disableSelection:function(){return this.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return false})},scrollParent:function(){var j;if((c.browser.msie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){j=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(c.curCSS(this,"position",1))&&(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}else{j=this.parents().filter(function(){return(/(auto|scroll)/).test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(this.css("position"))||!j.length?c(document):j}});c.extend(c.expr[":"],{data:function(l,k,j){return!!c.data(l,j[3])},focusable:function(k){var l=k.nodeName.toLowerCase(),j=c.attr(k,"tabindex");return(/input|select|textarea|button|object/.test(l)?!k.disabled:"a"==l||"area"==l?k.href||!isNaN(j):!isNaN(j))&&!c(k)["area"==l?"parents":"closest"](":hidden").length},tabbable:function(k){var j=c.attr(k,"tabindex");return(isNaN(j)||j>=0)&&c(k).is(":focusable")}});function g(m,n,o,l){function k(q){var p=c[m][n][q]||[];return(typeof p=="string"?p.split(/,?\s+/):p)}var j=k("getter");if(l.length==1&&typeof l[0]=="string"){j=j.concat(k("getterSetter"))}return(c.inArray(o,j)!=-1)}c.widget=function(k,j){var l=k.split(".")[0];k=k.split(".")[1];c.fn[k]=function(p){var n=(typeof p=="string"),o=Array.prototype.slice.call(arguments,1);if(n&&p.substring(0,1)=="_"){return this}if(n&&g(l,k,p,o)){var m=c.data(this[0],k);return(m?m[p].apply(m,o):undefined)}return this.each(function(){var q=c.data(this,k);(!q&&!n&&c.data(this,k,new c[l][k](this,p))._init());(q&&n&&c.isFunction(q[p])&&q[p].apply(q,o))})};c[l]=c[l]||{};c[l][k]=function(o,n){var m=this;this.namespace=l;this.widgetName=k;this.widgetEventPrefix=c[l][k].eventPrefix||k;this.widgetBaseClass=l+"-"+k;this.options=c.extend({},c.widget.defaults,c[l][k].defaults,c.metadata&&c.metadata.get(o)[k],n);this.element=c(o).bind("setData."+k,function(q,p,r){if(q.target==o){return m._setData(p,r)}}).bind("getData."+k,function(q,p){if(q.target==o){return m._getData(p)}}).bind("remove",function(){return m.destroy()})};c[l][k].prototype=c.extend({},c.widget.prototype,j);c[l][k].getterSetter="option"};c.widget.prototype={_init:function(){},destroy:function(){this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").removeAttr("aria-disabled")},option:function(l,m){var k=l,j=this;if(typeof l=="string"){if(m===undefined){return this._getData(l)}k={};k[l]=m}c.each(k,function(n,o){j._setData(n,o)})},_getData:function(j){return this.options[j]},_setData:function(j,k){this.options[j]=k;if(j=="disabled"){this.element[k?"addClass":"removeClass"](this.widgetBaseClass+"-disabled "+this.namespace+"-state-disabled").attr("aria-disabled",k)}},enable:function(){this._setData("disabled",false)},disable:function(){this._setData("disabled",true)},_trigger:function(l,m,n){var p=this.options[l],j=(l==this.widgetEventPrefix?l:this.widgetEventPrefix+l);m=c.Event(m);m.type=j;if(m.originalEvent){for(var k=c.event.props.length,o;k;){o=c.event.props[--k];m[o]=m.originalEvent[o]}}this.element.trigger(m,n);return!(c.isFunction(p)&&p.call(this.element[0],m,n)===false||m.isDefaultPrevented())}};c.widget.defaults={disabled:false};c.ui.mouse={_mouseInit:function(){var j=this;this.element.bind("mousedown."+this.widgetName,function(k){return j._mouseDown(k)}).bind("click."+this.widgetName,function(k){if(j._preventClickEvent){j._preventClickEvent=false;k.stopImmediatePropagation();return false}});if(c.browser.msie){this._mouseUnselectable=this.element.attr("unselectable");this.element.attr("unselectable","on")}this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);(c.browser.msie&&this.element.attr("unselectable",this._mouseUnselectable))},_mouseDown:function(l){l.originalEvent=l.originalEvent||{};if(l.originalEvent.mouseHandled){return}(this._mouseStarted&&this._mouseUp(l));this._mouseDownEvent=l;var k=this,m=(l.which==1),j=(typeof this.options.cancel=="string"?c(l.target).parents().add(l.target).filter(this.options.cancel).length:false);if(!m||j||!this._mouseCapture(l)){return true}this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){k.mouseDelayMet=true},this.options.delay)}if(this._mouseDistanceMet(l)&&this._mouseDelayMet(l)){this._mouseStarted=(this._mouseStart(l)!==false);if(!this._mouseStarted){l.preventDefault();return true}}this._mouseMoveDelegate=function(n){return k._mouseMove(n)};this._mouseUpDelegate=function(n){return k._mouseUp(n)};c(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);(c.browser.safari||l.preventDefault());l.originalEvent.mouseHandled=true;return true},_mouseMove:function(j){if(c.browser.msie&&!j.button){return this._mouseUp(j)}if(this._mouseStarted){this._mouseDrag(j);return j.preventDefault()}if(this._mouseDistanceMet(j)&&this._mouseDelayMet(j)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,j)!==false);(this._mouseStarted?this._mouseDrag(j):this._mouseUp(j))}return!this._mouseStarted},_mouseUp:function(j){c(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=false;this._preventClickEvent=(j.target==this._mouseDownEvent.target);this._mouseStop(j)}return false},_mouseDistanceMet:function(j){return(Math.max(Math.abs(this._mouseDownEvent.pageX-j.pageX),Math.abs(this._mouseDownEvent.pageY-j.pageY))>=this.options.distance)},_mouseDelayMet:function(j){return this.mouseDelayMet},_mouseStart:function(j){},_mouseDrag:function(j){},_mouseStop:function(j){},_mouseCapture:function(j){return true}};c.ui.mouse.defaults={cancel:null,distance:1,delay:0}})(jQuery);;jQuery.effects||(function(d){d.effects={version:"1.7.1",save:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.data("ec.storage."+h[f],g[0].style[h[f]])}}},restore:function(g,h){for(var f=0;f<h.length;f++){if(h[f]!==null){g.css(h[f],g.data("ec.storage."+h[f]))}}},setMode:function(f,g){if(g=="toggle"){g=f.is(":hidden")?"show":"hide"}return g},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}},createWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent()}var g={width:f.outerWidth(true),height:f.outerHeight(true),"float":f.css("float")};f.wrap('<div class="ui-effects-wrapper" style="font-size:100%;background:transparent;border:none;margin:0;padding:0"></div>');var j=f.parent();if(f.css("position")=="static"){j.css({position:"relative"});f.css({position:"relative"})}else{var i=f.css("top");if(isNaN(parseInt(i,10))){i="auto"}var h=f.css("left");if(isNaN(parseInt(h,10))){h="auto"}j.css({position:f.css("position"),top:i,left:h,zIndex:f.css("z-index")}).show();f.css({position:"relative",top:0,left:0})}j.css(g);return j},removeWrapper:function(f){if(f.parent().is(".ui-effects-wrapper")){return f.parent().replaceWith(f)}return f},setTransition:function(g,i,f,h){h=h||{};d.each(i,function(k,j){unit=g.cssUnit(j);if(unit[0]>0){h[j]=unit[0]*f+unit[1]}});return h},animateClass:function(h,i,k,j){var f=(typeof k=="function"?k:(j?j:null));var g=(typeof k=="string"?k:null);return this.each(function(){var q={};var o=d(this);var p=o.attr("style")||"";if(typeof p=="object"){p=p.cssText}if(h.toggle){o.hasClass(h.toggle)?h.remove=h.toggle:h.add=h.toggle}var l=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.addClass(h.add)}if(h.remove){o.removeClass(h.remove)}var m=d.extend({},(document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle));if(h.add){o.removeClass(h.add)}if(h.remove){o.addClass(h.remove)}for(var r in m){if(typeof m[r]!="function"&&m[r]&&r.indexOf("Moz")==-1&&r.indexOf("length")==-1&&m[r]!=l[r]&&(r.match(/color/i)||(!r.match(/color/i)&&!isNaN(parseInt(m[r],10))))&&(l.position!="static"||(l.position=="static"&&!r.match(/left|top|bottom|right/)))){q[r]=m[r]}}o.animate(q,i,g,function(){if(typeof d(this).attr("style")=="object"){d(this).attr("style")["cssText"]="";d(this).attr("style")["cssText"]=p}else{d(this).attr("style",p)}if(h.add){d(this).addClass(h.add)}if(h.remove){d(this).removeClass(h.remove)}if(f){f.apply(this,arguments)}})})}};function c(g,f){var i=g[1]&&g[1].constructor==Object?g[1]:{};if(f){i.mode=f}var h=g[1]&&g[1].constructor!=Object?g[1]:(i.duration?i.duration:g[2]);h=d.fx.off?0:typeof h==="number"?h:d.fx.speeds[h]||d.fx.speeds._default;var j=i.callback||(d.isFunction(g[1])&&g[1])||(d.isFunction(g[2])&&g[2])||(d.isFunction(g[3])&&g[3]);return[g[0],i,h,j]}d.fn.extend({_show:d.fn.show,_hide:d.fn.hide,__toggle:d.fn.toggle,_addClass:d.fn.addClass,_removeClass:d.fn.removeClass,_toggleClass:d.fn.toggleClass,effect:function(g,f,h,i){return d.effects[g]?d.effects[g].call(this,{method:g,options:f||{},duration:h,callback:i}):null},show:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._show.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"show"))}},hide:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))){return this._hide.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"hide"))}},toggle:function(){if(!arguments[0]||(arguments[0].constructor==Number||(/(slow|normal|fast)/).test(arguments[0]))||(arguments[0].constructor==Function)){return this.__toggle.apply(this,arguments)}else{return this.effect.apply(this,c(arguments,"toggle"))}},addClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{add:g},f,i,h]):this._addClass(g)},removeClass:function(g,f,i,h){return f?d.effects.animateClass.apply(this,[{remove:g},f,i,h]):this._removeClass(g)},toggleClass:function(g,f,i,h){return((typeof f!=="boolean")&&f)?d.effects.animateClass.apply(this,[{toggle:g},f,i,h]):this._toggleClass(g,f)},morph:function(f,h,g,j,i){return d.effects.animateClass.apply(this,[{add:h,remove:f},g,j,i])},switchClass:function(){return this.morph.apply(this,arguments)},cssUnit:function(f){var g=this.css(f),h=[];d.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]}});return h}});d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(g,f){d.fx.step[f]=function(h){if(h.state==0){h.start=e(h.elem,f);h.end=b(h.end)}h.elem.style[f]="rgb("+[Math.max(Math.min(parseInt((h.pos*(h.end[0]-h.start[0]))+h.start[0],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[1]-h.start[1]))+h.start[1],10),255),0),Math.max(Math.min(parseInt((h.pos*(h.end[2]-h.start[2]))+h.start[2],10),255),0)].join(",")+")"}});function b(g){var f;if(g&&g.constructor==Array&&g.length==3){return g}if(f=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(g)){return[parseInt(f[1],10),parseInt(f[2],10),parseInt(f[3],10)]}if(f=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(g)){return[parseFloat(f[1])*2.55,parseFloat(f[2])*2.55,parseFloat(f[3])*2.55]}if(f=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(g)){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}if(f=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(g)){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}if(f=/rgba\(0, 0, 0, 0\)/.exec(g)){return a.transparent}return a[d.trim(g).toLowerCase()]}function e(h,f){var g;do{g=d.curCSS(h,f);if(g!=""&&g!="transparent"||d.nodeName(h,"body")){break}f="backgroundColor"}while(h=h.parentNode);return b(g)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]};d.easing.jswing=d.easing.swing;d.extend(d.easing,{def:"easeOutQuad",swing:function(g,h,f,j,i){return d.easing[d.easing.def](g,h,f,j,i)},easeInQuad:function(g,h,f,j,i){return j*(h/=i)*h+f},easeOutQuad:function(g,h,f,j,i){return-j*(h/=i)*(h-2)+f},easeInOutQuad:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h+f}return-j/2*((--h)*(h-2)-1)+f},easeInCubic:function(g,h,f,j,i){return j*(h/=i)*h*h+f},easeOutCubic:function(g,h,f,j,i){return j*((h=h/i-1)*h*h+1)+f},easeInOutCubic:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h+f}return j/2*((h-=2)*h*h+2)+f},easeInQuart:function(g,h,f,j,i){return j*(h/=i)*h*h*h+f},easeOutQuart:function(g,h,f,j,i){return-j*((h=h/i-1)*h*h*h-1)+f},easeInOutQuart:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h+f}return-j/2*((h-=2)*h*h*h-2)+f},easeInQuint:function(g,h,f,j,i){return j*(h/=i)*h*h*h*h+f},easeOutQuint:function(g,h,f,j,i){return j*((h=h/i-1)*h*h*h*h+1)+f},easeInOutQuint:function(g,h,f,j,i){if((h/=i/2)<1){return j/2*h*h*h*h*h+f}return j/2*((h-=2)*h*h*h*h+2)+f},easeInSine:function(g,h,f,j,i){return-j*Math.cos(h/i*(Math.PI/2))+j+f},easeOutSine:function(g,h,f,j,i){return j*Math.sin(h/i*(Math.PI/2))+f},easeInOutSine:function(g,h,f,j,i){return-j/2*(Math.cos(Math.PI*h/i)-1)+f},easeInExpo:function(g,h,f,j,i){return(h==0)?f:j*Math.pow(2,10*(h/i-1))+f},easeOutExpo:function(g,h,f,j,i){return(h==i)?f+j:j*(-Math.pow(2,-10*h/i)+1)+f},easeInOutExpo:function(g,h,f,j,i){if(h==0){return f}if(h==i){return f+j}if((h/=i/2)<1){return j/2*Math.pow(2,10*(h-1))+f}return j/2*(-Math.pow(2,-10*--h)+2)+f},easeInCirc:function(g,h,f,j,i){return-j*(Math.sqrt(1-(h/=i)*h)-1)+f},easeOutCirc:function(g,h,f,j,i){return j*Math.sqrt(1-(h=h/i-1)*h)+f},easeInOutCirc:function(g,h,f,j,i){if((h/=i/2)<1){return-j/2*(Math.sqrt(1-h*h)-1)+f}return j/2*(Math.sqrt(1-(h-=2)*h)+1)+f},easeInElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return-(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f},easeOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l)==1){return f+m}if(!k){k=l*0.3}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}return h*Math.pow(2,-10*i)*Math.sin((i*l-j)*(2*Math.PI)/k)+m+f},easeInOutElastic:function(g,i,f,m,l){var j=1.70158;var k=0;var h=m;if(i==0){return f}if((i/=l/2)==2){return f+m}if(!k){k=l*(0.3*1.5)}if(h<Math.abs(m)){h=m;var j=k/4}else{var j=k/(2*Math.PI)*Math.asin(m/h)}if(i<1){return-0.5*(h*Math.pow(2,10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k))+f}return h*Math.pow(2,-10*(i-=1))*Math.sin((i*l-j)*(2*Math.PI)/k)*0.5+m+f},easeInBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*(h/=j)*h*((i+1)*h-i)+f},easeOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}return k*((h=h/j-1)*h*((i+1)*h+i)+1)+f},easeInOutBack:function(g,h,f,k,j,i){if(i==undefined){i=1.70158}if((h/=j/2)<1){return k/2*(h*h*(((i*=(1.525))+1)*h-i))+f}return k/2*((h-=2)*h*(((i*=(1.525))+1)*h+i)+2)+f},easeInBounce:function(g,h,f,j,i){return j-d.easing.easeOutBounce(g,i-h,0,j,i)+f},easeOutBounce:function(g,h,f,j,i){if((h/=i)<(1/2.75)){return j*(7.5625*h*h)+f}else{if(h<(2/2.75)){return j*(7.5625*(h-=(1.5/2.75))*h+0.75)+f}else{if(h<(2.5/2.75)){return j*(7.5625*(h-=(2.25/2.75))*h+0.9375)+f}else{return j*(7.5625*(h-=(2.625/2.75))*h+0.984375)+f}}}},easeInOutBounce:function(g,h,f,j,i){if(h<i/2){return d.easing.easeInBounce(g,h*2,0,j,i)*0.5+f}return d.easing.easeOutBounce(g,h*2-i,0,j,i)*0.5+j*0.5+f}})})(jQuery);;


$(function(){$('form#ad-form select').change(function(){if($('form#ad-form select:eq(1) option:selected').val()!=""){$('#pricebox-below-price span, #ad-unavailable').hide();$('#ad-loading').show();$('#pricebox-below-price span').load('/taxi/ad-availability.html',{airport:$('form#ad-form select:eq(0) option:selected').val(),ad:$('form#ad-form select:eq(1) option:selected').val()},function(){setTimeout("showAdPrice()",750);});}else{$('#pricebox-below-price span, #ad-unavailable').hide();$('#create-button').attr("disabled","disabled").animate({opacity:0.5},500);}});if($('form#ad-form select:eq(1) option:selected').val()==""){$('#create-button').attr("disabled","disabled").css("opacity","0.5");}});function showAdPrice(){$('#pricebox-below-price div').hide();if($('#pricebox-below-price span').html()=="0"){$('#ad-unavailable').html("Sorry that advert is not available. Please try another advert or airport.").css({color:"#f2d432"}).fadeIn('fast',function(){$(this).animate({color:'white'},2000);});$('#create-button').attr("disabled","disabled").animate({opacity:0.5},500);}else{$('#pricebox-below-price span').html('&pound;'+$('#pricebox-below-price span').html()).fadeIn('fast');$('#create-button').attr("disabled","").animate({opacity:1.0},500);}}

