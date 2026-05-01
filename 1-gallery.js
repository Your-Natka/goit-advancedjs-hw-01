import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as r}from"./assets/vendor-CgTBfC_f.js";const o=[{preview:"./img/1.jpg",original:"./img/1x2.jpg",description:"Team brainstorming with sticky notes and sketches"},{preview:"./img/2.jpg",original:"./img/2x2.jpg",description:"Hand holding a glowing light bulb idea"},{preview:"./img/3.jpg",original:"./img/3x2.jpg",description:"Smartphone with UI design and coffee on table"},{preview:"./img/4.jpg",original:"./img/4x2.jpg",description:"Modern meeting room with large windows"},{preview:"./img/5.jpg",original:"./img/5x2.jpg",description:"Creative office interior with colorful wall"},{preview:"./img/6.jpg",original:"./img/6x2.jpg",description:"Developers working in open space office"},{preview:"./img/7.jpg",original:"./img/7x2.jpg",description:"Workspace with laptop, coffee and notebook"},{preview:"./img/8.jpg",original:"./img/8x2.jpg",description:"Person typing on laptop in cozy sweater"},{preview:"./img/9.jpg",original:"./img/9x2.jpg",description:"Business presentation in meeting room"}],n=document.querySelector(".gallery");function a(){return o.map(({preview:i,original:e,description:g})=>`
    <li class="gallery__item">
  <a class="gallery__link" href="${e}">
    <img
      class="gallery__image lazyload"
      src="${i}"
      alt="${g}"
    />
  </a>
</li>
`).join("")}const p=a();n.insertAdjacentHTML("beforeend",p);new r(".gallery a",{caption:!0,captionsData:"alt"});
//# sourceMappingURL=1-gallery.js.map
