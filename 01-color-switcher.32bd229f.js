!function(){var e,t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){e=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,o.removeAttribute("disabled")})),o.addEventListener("click",(function(){clearInterval(e),t.removeAttribute("disabled"),o.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.32bd229f.js.map
