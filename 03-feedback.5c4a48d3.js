var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,u="object"==typeof self&&self&&self.Object===Object&&self,c=f||u||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,f,u,c=0,l=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(O,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||g&&e-c>=i}function O(){var e=m();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return g?d(n,i-(e-c)):n}(e))}function T(e){return f=void 0,b&&o?y(e):(o=r=void 0,a)}function h(){var e=m(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(g)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=v(t)||0,p(n)&&(l=!!n.leading,i=(g="maxWait"in n)?s(v(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},h.flush=function(){return void 0===f?a:T(m())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var f=r.test(e);return f||i.test(e)?a(e.slice(2),f?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),y=document.querySelector("input"),S=document.querySelector("textarea");b.addEventListener("input",t((function(e){console.log(e.target.name),j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.getItem("feedback-form-state"),console.log(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),e.currentTarget.reset()})),function(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);y.value=t.email||"",S.value=t.message||""}}();let j=JSON.parse(localStorage.getItem("feedback-form-state"))||{};
//# sourceMappingURL=03-feedback.5c4a48d3.js.map
