const e=document.querySelector('[type="submit"]'),o=document.querySelector("[name=delay]");document.querySelector("[name=step]"),document.querySelector("[name=amount]");e.addEventListener("click",(function(e,n){new Promise(((e,n)=>{setInterval((()=>{const t=Math.random()>.3,c=o.value;console.log(c),t?e(1,c):n(1,c)}),1e3)})).then(((e,o)=>{console.log(`✅ Fulfilled promise ${e} in ${o} ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o} ms`)}))}));
//# sourceMappingURL=03-promises.9e87c63c.js.map
