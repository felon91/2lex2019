!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(e){var t,n=navigator.userAgent,a=/iphone/i.test(n),i=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden")&&this.get(0)===document.activeElement)return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&((n=this.createTextRange()).collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var c,l,u,f,s,g,h;if(!n&&this.length>0){var m=e(this[0]).data(e.mask.dataName);return m?m():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),c=e.mask.definitions,l=[],u=g=n.length,f=null,n=String(n),e.each(n.split(""),function(e,t){"?"==t?(g--,u=e):c[t]?(l.push(new RegExp(c[t])),null===f&&(f=l.length-1),e<u&&(s=l.length-1)):l.push(null)}),this.trigger("unmask").each(function(){var m=e(this),d=e.map(n.split(""),function(e,t){if("?"!=e)return c[e]?k(t):e}),p=d.join(""),v=m.val();function b(){if(o.completed){for(var e=f;e<=s;e++)if(l[e]&&d[e]===k(e))return;o.completed.call(m)}}function k(e){return e<o.placeholder.length?o.placeholder.charAt(e):o.placeholder.charAt(0)}function y(e){for(;++e<g&&!l[e];);return e}function x(e,t){var n,a;if(!(e<0)){for(n=e,a=y(t);n<g;n++)if(l[n]){if(!(a<g&&l[n].test(d[a])))break;d[n]=d[a],d[a]=k(a),a=y(a)}R(),m.caret(Math.max(f,e))}}function j(e){S(),m.val()!=v&&m.change()}function A(e,t){var n;for(n=e;n<t&&n<g;n++)l[n]&&(d[n]=k(n))}function R(){m.val(d.join(""))}function S(e){var t,n,a,i=m.val(),r=-1;for(t=0,a=0;t<g;t++)if(l[t]){for(d[t]=k(t);a++<i.length;)if(n=i.charAt(a-1),l[t].test(n)){d[t]=n,r=t;break}if(a>i.length){A(t+1,g);break}}else d[t]===i.charAt(a)&&a++,t<u&&(r=t);return e?R():r+1<u?o.autoclear||d.join("")===p?(m.val()&&m.val(""),A(0,g)):R():(R(),m.val(m.val().substring(0,r+1))),u?t:f}m.data(e.mask.dataName,function(){return e.map(d,function(e,t){return l[t]&&e!=k(t)?e:null}).join("")}),m.one("unmask",function(){m.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){var e;m.prop("readonly")||(clearTimeout(t),v=m.val(),e=S(),t=setTimeout(function(){m.get(0)===document.activeElement&&(R(),e==n.replace("?","").length?m.caret(0,e):m.caret(e))},10))}).on("blur.mask",j).on("keydown.mask",function(e){if(!m.prop("readonly")){var t,n,i,r=e.which||e.keyCode;h=m.val(),8===r||46===r||a&&127===r?(n=(t=m.caret()).begin,(i=t.end)-n==0&&(n=46!==r?function(e){for(;--e>=0&&!l[e];);return e}(n):i=y(n-1),i=46===r?y(i):i),A(n,i),x(n,i-1),e.preventDefault()):13===r?j.call(this,e):27===r&&(m.val(v),m.caret(0,S()),e.preventDefault())}}).on("keypress.mask",function(t){if(!m.prop("readonly")){var n,a,i,o=t.which||t.keyCode,c=m.caret();t.ctrlKey||t.altKey||t.metaKey||o<32||!o||13===o||(c.end-c.begin!=0&&(A(c.begin,c.end),x(c.begin,c.end-1)),(n=y(c.begin-1))<g&&(a=String.fromCharCode(o),l[n].test(a))&&(function(e){var t,n,a,i;for(t=e,n=k(e);t<g;t++)if(l[t]){if(a=y(t),i=d[t],d[t]=n,!(a<g&&l[a].test(i)))break;n=i}}(n),d[n]=a,R(),i=y(n),r?setTimeout(function(){e.proxy(e.fn.caret,m,i)()},0):m.caret(i),c.begin<=s&&b()),t.preventDefault())}}).on("input.mask paste.mask",function(){m.prop("readonly")||setTimeout(function(){var e=S(!0);m.caret(e),b()},0)}),i&&r&&m.off("input.mask").on("input.mask",function(e){var t=m.val(),n=m.caret();if(h&&h.length&&h.length>t.length){for(S(!0);n.begin>0&&!l[n.begin-1];)n.begin--;if(0===n.begin)for(;n.begin<f&&!l[n.begin];)n.begin++;m.caret(n.begin,n.begin)}else{S(!0);var a=t.charAt(n.begin);n.begin<g&&(l[n.begin]?l[n.begin].test(a)&&n.begin++:(n.begin++,l[n.begin].test(a)&&n.begin++)),m.caret(n.begin,n.begin)}b()}),S()})}})});