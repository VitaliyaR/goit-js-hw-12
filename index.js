import{a as b,S as v,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const L="50344127-726c85bb6f98eba42715a8612";let u=1,m="";const y=async(s,r=1)=>{try{const e=await b.get("https://pixabay.com/api/",{params:{key:L,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:r}});return{hits:e.data.hits,totalHits:e.data.totalHits}}catch(e){return console.error("Error fetching images:",e),{hits:[],totalHits:0}}},E=s=>{m=s,u=1},B=()=>m,I=()=>u,P=()=>{u+=1},g=document.querySelector(".gallery"),S=new v(".gallery a",{captionsData:"alt",captionDelay:250}),f=s=>{const r=s.map(e=>`
        <li class="gallery-item">
          <a href="${e.largeImageURL}" class="gallery-link">
            <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" />
          </a>
          <div class="image-info">
            <div class="info-labels">
              <span>Likes</span>
              <span>Views</span>
              <span>Comments</span>
              <span>Downloads</span>
            </div>
            <div class="info-values">
              <span>${e.likes}</span>
              <span>${e.views}</span>
              <span>${e.comments}</span>
              <span>${e.downloads}</span>
            </div>
          </div>
        </li>
      `).join("");g.insertAdjacentHTML("beforeend",r),S.refresh()},q=()=>{g.innerHTML=""},p=()=>{document.getElementById("loader").style.display="block"},h=()=>{document.getElementById("loader").style.display="none"},H=()=>{document.getElementById("load-more").style.display="inline-block"},c=()=>{document.getElementById("load-more").style.display="none"},w=document.querySelector(".form"),$=w.querySelector('input[name="search-text"]'),C=document.getElementById("load-more");let a=[],d=0;w.addEventListener("submit",async s=>{s.preventDefault();const r=$.value.trim();if(!r){n.error({title:"Error",message:"Please enter a search term."});return}E(r),p(),q();try{const{hits:e,totalHits:i}=await y(r,1);a=e,d=i,e.length===0?(n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!"}),c()):(f(e),a.length>=d?(c(),n.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."})):H())}catch{n.error({title:"Error",message:"Something went wrong. Please try again."})}finally{h()}});C.addEventListener("click",async()=>{p(),P();try{const{hits:s}=await y(B(),I());if(s.length>0){a=[...a,...s],f(s);const r=document.querySelector(".gallery-item");if(r){const{height:e}=r.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})}}a.length>=d&&(c(),n.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Something went wrong while loading more images."})}finally{h()}});
//# sourceMappingURL=index.js.map
