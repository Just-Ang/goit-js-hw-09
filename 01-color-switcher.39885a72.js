const e=document.querySelector("[data-start]");console.log(e);const t=document.querySelector("[data-stop]"),r=document.querySelector("body");e.addEventListener("click",(()=>{setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3);e.disabled="true",t.removeAttribute("disabled")})),t.addEventListener("click",(()=>{clearInterval(timerId),e.removeAttribute("disabled"),t.disabled="true"}));
//# sourceMappingURL=01-color-switcher.39885a72.js.map
