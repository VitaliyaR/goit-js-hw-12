import{a as w,i as a}from"./assets/vendor-vZoX7XBu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(t){if(t.ep)return;t.ep=!0;const n=e(t);fetch(t.href,n)}})();const v="50344127-726c85bb6f98eba42715a8612";let u=1,m="";const y=async(o,r=1)=>{try{const e=await w.get("https://pixabay.com/api/",{params:{key:v,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r}});return{hits:e.data.hits,totalHits:e.data.totalHits}}catch(e){return console.error("Error fetching images:",e),{hits:[],totalHits:0}}},b=o=>{m=o,u=1},L=()=>m,E=()=>u,B=()=>{u+=1},g=o=>{const r=document.querySelector(".gallery"),e=o.map(s=>`
          <li class="gallery-item">
            <a href="${s.largeImageURL}" class="gallery-link">
              <img src="${s.webformatURL}" alt="${s.tags}" class="gallery-image" />
            </a>
            <div class="image-info">
              <div class="info-labels">
                <span>Likes</span>
                <span>Views</span>
                <span>Comments</span>
                <span>Downloads</span>
              </div>
              <div class="info-values">
                <span>${s.likes}</span>
                <span>${s.views}</span>
                <span>${s.comments}</span>
                <span>${s.downloads}</span>
              </div>
            </div>
          </li>
        `).join("");r.insertAdjacentHTML("beforeend",e)},I=()=>{document.querySelector(".gallery").innerHTML=""},f=()=>{document.getElementById("loader").style.display="block"},p=()=>{document.getElementById("loader").style.display="none"},P=()=>{document.getElementById("load-more").style.display="inline-block"},c=()=>{document.getElementById("load-more").style.display="none"},h=document.querySelector(".form"),q=h.querySelector('input[name="search-text"]'),S=document.getElementById("load-more");let l=[],d=0;h.addEventListener("submit",async o=>{o.preventDefault();const r=q.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term."});return}b(r),f(),I();try{const{hits:e,totalHits:s}=await y(r,1);l=e,d=s,e.length===0?(a.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}),c()):(g(e),l.length>=d?(c(),a.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."})):P())}catch{a.error({title:"Error",message:"Something went wrong. Please try again."})}finally{p()}});S.addEventListener("click",async()=>{f(),B();try{const{hits:o}=await y(L(),E());if(o.length>0){l=[...l,...o],g(o);const r=document.querySelector(".gallery-item");if(r){const{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}l.length>=d&&(c(),a.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"Error",message:"Something went wrong while loading more images."})}finally{p()}});
//# sourceMappingURL=index.js.map
