!function(){var e=document.querySelector("[data-start]");console.log(e);var t=document.querySelector("[data-stop]"),r=document.querySelector("body");e.addEventListener("click",(function(){setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3);e.disabled="true",t.removeAttribute("disabled")})),t.addEventListener("click",(function(){clearInterval(timerId),e.removeAttribute("disabled"),t.disabled="true"}))}();
//# sourceMappingURL=01-color-switcher.1a728e98.js.map
