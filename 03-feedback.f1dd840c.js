var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t=/^\s+|\s+$/g,n=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,a=u||f||Function("return this")(),c=Object.prototype.toString,l=Math.max,s=Math.min,d=function(){return a.Date.now()};function v(e,t,n){var o,r,i,u,f,a,c=0,v=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,f=setTimeout(O,t),v?g(e):u}function S(e){var n=e-a;return void 0===a||n>=t||n<0||b&&e-c>=i}function O(){var e=d();if(S(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-a);return b?s(n,i-(e-c)):n}(e))}function h(e){return f=void 0,y&&o?g(e):(o=r=void 0,u)}function T(){var e=d(),n=S(e);if(o=arguments,r=this,a=e,n){if(void 0===f)return j(a);if(b)return f=setTimeout(O,t),g(a)}return void 0===f&&(f=setTimeout(O,t)),u}return t=p(t)||0,m(n)&&(v=!!n.leading,i=(b="maxWait"in n)?l(p(n.maxWait)||0,t):i,y="trailing"in n?!!n.trailing:y),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=a=r=f=void 0},T.flush=function(){return void 0===f?u:h(d())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(m(e)){var u="function"==typeof e.valueOf?e.valueOf():e;e=m(u)?u+"":u}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(t,"");var f=o.test(e);return f||r.test(e)?i(e.slice(2),f?2:8):n.test(e)?NaN:+e}const b=document.querySelector("form"),y=document.querySelector("input").value,g=document.querySelector("textarea").value,j=document.querySelector("button"),S={email:y,message:g};function O(e){e.preventDefault(),localStorage.setItem("feedback-form-state",JSON.stringify(S)),function(){JSON.parse(localStorage.getItem("feedback-form-state")||"");y="feedback-form-state".email.value,g="feedback-form-state".message.value}()}b.addEventListener("input",O),j.addEventListener("submit",(()=>{b.addEventListener("input",O),console.log(S.value),b.reset()}));
//# sourceMappingURL=03-feedback.f1dd840c.js.map
