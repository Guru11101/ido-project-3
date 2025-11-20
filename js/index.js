const menuIcon=document.querySelector(".menu-icon")
const sidebar=document.querySelector(".sidebar")
const banner=document.querySelector(".banner")
const search=document.querySelector("#search")
const input=document.querySelector("#input")

menuIcon.addEventListener("click",()=>{
    sidebar.classList.toggle("small-sidebar")
    banner.classList.toggle("large-banner")
})
search.addEventListener("click",()=>{
    input.value=""
    input.focus();
})