(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".section-title"),s=document.querySelectorAll(".nav-item");n.forEach((o,r)=>{const t=(r+1).toString().padStart(2,"0"),e=document.createElement("span");e.classList.add("section-counter"),e.textContent=t,o.insertBefore(e,o.firstChild)}),s.forEach((o,r)=>{const t=(r+1).toString().padStart(2,"0"),e=document.createElement("span");e.classList.add("section-counter"),e.textContent=t,o.insertBefore(e,o.firstChild)})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".menu-open-btn"),s=document.querySelector(".menu-close-btn"),o=document.querySelector(".mob-menu"),r=document.querySelectorAll(".mob-link"),t=document.querySelector("body"),e=document.querySelector(".theme-toggle-container"),c=document.querySelector(".theme-toggle");n.addEventListener("click",function(){o.classList.add("visible"),e.style.opacity="0",e.style.pointerEvents="none",c.style.opacity="0",c.style.pointerEvents="none",t.classList.add("no-scroll")}),s.addEventListener("click",function(){o.classList.remove("visible"),setTimeout(function(){e.style.opacity="1",e.style.pointerEvents="auto",c.style.opacity="1",c.style.pointerEvents="auto"},300),t.classList.remove("no-scroll")}),r.forEach(i=>{i.addEventListener("click",()=>{o.classList.remove("visible"),setTimeout(function(){e.style.opacity="1",e.style.pointerEvents="auto",c.style.opacity="1",c.style.pointerEvents="auto"},300),t.classList.remove("no-scroll")})})});document.querySelector(".theme-toggle").addEventListener("click",function(){const n=document.body,s=this;n.classList.toggle("dark-theme"),n.classList.toggle("light-theme"),s.classList.toggle("active");const o=n.classList.contains("dark-theme")?"dark-theme":"light-theme";localStorage.setItem("theme",o)});document.addEventListener("DOMContentLoaded",function(){const n=localStorage.getItem("theme")||"light-theme",s=document.body,o=document.querySelector(".theme-toggle");s.classList.add(n),n==="dark-theme"&&o.classList.add("active")});
//# sourceMappingURL=commonHelpers.js.map
