(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.querySelectorAll(".section-title"),n=document.querySelectorAll(".nav-item");s.forEach((o,c)=>{const t=(c+1).toString().padStart(2,"0"),e=document.createElement("span");e.classList.add("section-counter"),e.textContent=t,o.insertBefore(e,o.firstChild)}),n.forEach((o,c)=>{const t=(c+1).toString().padStart(2,"0"),e=document.createElement("span");e.classList.add("section-counter"),e.textContent=t,o.insertBefore(e,o.firstChild)})});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".menu-open-btn"),n=document.querySelector(".menu-close-btn"),o=document.querySelector(".mob-menu"),c=document.querySelectorAll(".mob-link"),t=document.querySelector("body"),e=document.querySelector(".theme-toggle-container"),r=document.querySelector(".theme-toggle");s.addEventListener("click",function(){o.classList.add("visible"),e.style.opacity="0",e.style.pointerEvents="none",r.style.opacity="0",r.style.pointerEvents="none",t.classList.add("no-scroll")}),n.addEventListener("click",function(){o.classList.remove("visible"),setTimeout(function(){e.style.opacity="1",e.style.pointerEvents="auto",r.style.opacity="1",r.style.pointerEvents="auto"},300),t.classList.remove("no-scroll")}),c.forEach(i=>{i.addEventListener("click",()=>{o.classList.remove("visible"),setTimeout(function(){e.style.opacity="1",e.style.pointerEvents="auto",r.style.opacity="1",r.style.pointerEvents="auto"},300),t.classList.remove("no-scroll")})})});document.querySelector(".theme-toggle").addEventListener("click",function(){const s=document.body,n=this;s.classList.toggle("dark-theme"),s.classList.toggle("light-theme"),n.classList.toggle("active");const o=s.classList.contains("dark-theme")?"dark-theme":"light-theme";localStorage.setItem("theme",o)});document.addEventListener("DOMContentLoaded",function(){const s=localStorage.getItem("theme")||"light-theme",n=document.body,o=document.querySelector(".theme-toggle");n.classList.add(s),s==="dark-theme"&&o.classList.add("active")});document.getElementById("contactForm").addEventListener("submit",async s=>{s.preventDefault();const n=document.getElementById("contactForm"),o=new FormData(n);try{(await axios.post("https://formspree.io/f/mgegvpqe",o,{headers:{Accept:"application/json"}})).status===200?(document.getElementById("formMessage").style.display="block",n.reset()):alert("Failed to send message. Please try again.")}catch(c){console.error("Error:",c),alert("Oops! There was a problem.")}});
//# sourceMappingURL=commonHelpers.js.map
