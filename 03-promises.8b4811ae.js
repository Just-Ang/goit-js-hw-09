function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var l=r("7Y9D8");const i=document.querySelector(".form"),s=document.querySelector("[name=delay]"),a=document.querySelector("[name=step]"),u=document.querySelector("[name=amount]");function d(e,n){const o=Math.random()>.3;return new Promise(((t,r)=>{setInterval((()=>{o?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}i.addEventListener("click",(function(n){n.preventDefault();let o=parseInt(s.value),t=0;const r=parseInt(a.value),i=parseInt(u.value);for(let n=i;n>=1;n--)t+=1,d(t,o+(i-n)*r).then((({position:n,delay:o})=>{console.log(`✅ Fulfilled promise ${n} in ${o} ms`),e(l).Notify.success(`✅ Fulfilled promise ${n} in ${o} ms`)})).catch((({position:n,delay:o})=>{console.log(`❌ Rejected promise ${n} in ${o} ms`),e(l).Notify.failure(`❌ Rejected promise ${n} in ${o} ms`)}))}));
//# sourceMappingURL=03-promises.8b4811ae.js.map