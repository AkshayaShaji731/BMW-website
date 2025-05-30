const root = document.getElementById("root")
const header = document.getElementById("header")

header.innerHTML = `
<div class="header-container"></div>`

const headerCon = document.querySelector(".header-container")

headerCon.innerHTML=`
  <div class="header-logo-wrapper">
  </div>
  <button class="header-burger-menu">
  </button>
  <nav id="header-nav"></nav>`

const headerlogo=document.querySelector(".header-logo-wrapper")
const burgerBtn=document.querySelector(".header-burger-menu")
const nav=document.getElementById("header-nav")

headerlogo.innerHTML=`
  <a href="index.html" class="logo-link"></a>
  <div class="header-slogan"></div>`

const logoLink=document.querySelector(".logo-link")
const headerSlogan=document.querySelector(".header-slogan")

logoLink.innerHTML=`
  <img src="https://www.bmw.com/etc.clientlibs/settings/wcm/designs/bmwcom/base/resources/ci2020/img/logo-bmw-com-gray.svg" alt="BMW-logo">
  `
headerSlogan.innerHTML=`
   <p>Sheer Driving
       <strong>Pleasure</strong>
   </p>`
burgerBtn.innerHTML=`
    <svg class="pw-m-header__icon pw-m-header__icon-menu" style="display: block;"><use xlink:href="#icon-burger-menu"></use></svg>`
    
burgerBtn.addEventListener("click",()=>{
    menuAdd();
})    
function menuAdd(){
    logoLink.style.opacity="0"
    headerSlogan.style.opacity="1"
    burgerBtn.innerHTML=`<svg class="pw-m-header__icon pw-m-header__icon-close" style="display: block;"><use xlink:href="#icon-close"></use></svg>` 
    burgerBtn.addEventListener("click",()=>{
        menuClose()
       })  
}
function menuClose(){
    logoLink.style.opacity="1"
    headerSlogan.style.opacity="0"
    burgerBtn.innerHTML=`
    <svg class="pw-m-header__icon pw-m-header__icon-menu" style="display: block;"><use xlink:href="#icon-burger-menu"></use></svg>`
    burgerBtn.addEventListener("click",()=>{
        menuAdd()
       }) 
}

nav.innerHTML=`
<div id="nav-con"></div>`

const navCon=document.getElementById("nav-con")

navCon.innerHTML=`
<div id="nav-item"></div>
<div id="search-con"></div>`

const navItem=document.getElementById("nav-item")
const searchCon=document.getElementById("search-con")

navItem.innerHTML=`
<ul id="nav-ul"></ul>`

const navItemUl=document.getElementById("nav-ul")
createNav()
function createNav(){
    let ItemName=["Home","Circular World","Digital Jounery","Electric Future","Freude","Models"]
    let ItemLink=["index.html","index.html","index.html","index.html","index.html","index.html",]
    for (let i=0;i<ItemName.length;i++){
       let li=document.createElement("li")
       li.innerHTML=`
        <a href="${ItemLink[i]}">${ItemName[i]}</a>`
        navItemUl.appendChild(li)
    }
}

