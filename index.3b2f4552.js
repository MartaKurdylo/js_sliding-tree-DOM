document.querySelector(".tree").querySelectorAll("li").forEach(function(e){var t=e.querySelector("ul");if(t){var n=document.createElement("span");n.textContent=e.firstChild.textContent.trim(),e.firstChild.replaceWith(n),n.addEventListener("click",function(){t.hidden=!t.hidden})}});
//# sourceMappingURL=index.3b2f4552.js.map
