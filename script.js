const root = document.getElementById("root")
const header = document.getElementById("header")
const main=document.getElementById("main")

// header section

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
    if(window.matchMedia("(min-width:768px)").matches){
        logoLink.style.opacity="1"
        headerSlogan.style.marginLeft="9pt"
    }
    else{
        logoLink.style.opacity="0"
    }
    headerSlogan.style.opacity="1"
    headerSlogan.style.transform=" translateY(-50%) translateX(0)"
    nav.style.display="block"
    burgerBtn.innerHTML=`<svg class="pw-m-header__icon pw-m-header__icon-close" style="display: block;"><use xlink:href="#icon-close"></use></svg>` 
    burgerBtn.addEventListener("click",()=>{
        menuClose()
       })  
}
function menuClose(){
    logoLink.style.opacity="1"
    // headerSlogan.style.opacity="0"
    if(window.matchMedia("(min-width:768px)").matches){
        headerSlogan.style.opacity="1"
    }
    else{
        headerSlogan.style.opacity="0"
    }
    nav.style.display="none"
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
    let ItemName=["Home","Circular World","Digital Journey","Electric Future","Freude","Models"]
    let ItemLink=["index.html","index.html","index.html","index.html","index.html","index.html",]
    for (let i=0;i<ItemName.length;i++){
       let li=document.createElement("li")
       li.innerHTML=`
        <a href="${ItemLink[i]}">${ItemName[i]}</a>`
        navItemUl.appendChild(li)
    }
}
searchCon.innerHTML=`
<form id="search-form"></form>`

const searchForm=document.getElementById("search-form")
  
searchForm.innerHTML=`
 <input type="text" placeholder="Search" id="search-input">
 <button class="search-btn"><svg class="pw-m-header__icon icon-search"><use xlink:href="#icon-search"></use></svg></button>
 `

//  main section

main.innerHTML=`
<section id="stage"></section>
<section id="teaser-1"></section>`

const stage=document.getElementById('stage')
const teaserOne=document.getElementById("teaser-1")
 
stage.innerHTML=`
<div id="stage-container">
  <div id="inner-stage-con">
    <div id="stage-img-con">
    <picture>
      <source media="(min-width:1024px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=1280">
      <source media="(min-width:1024px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=1024">
      <source media="(min-width:768px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=768">
      <source media="(min-width:768px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=568">
      <source media="(min-width:360px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=360">
      <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg" alt="Car-img" ;">
   </picture>
    </div>
    <div id="stage-content-con"> 
      <div id="stage-content-p">BMW Concept Speedtop</div>
      <h1>A collector‘s item full of emotion</h1> 
      <a href="">Read more</a>
    </div>
  </div>
</div>`
teaserOne.innerHTML=`
<div id="teaser-inner">
  <div id="teaser-con">
    <div id="teaser-content-con">
      <div id="teaser-content-1">
      <a href="">
        <div id="con-1-img" >
          <div id="con-img-inner">
            <picture>
               <source media="(min-width:1440px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/bmw-intelligence/bi-00-teaser-hd.jpg?imwidth=1440"> 
               <source media="(min-width:1024px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/bmw-intelligence/bi-00-teaser-hd.jpg?imwidth=1024">
               <source media="(min-width:768px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/bmw-intelligence/bi-00-teaser-hd.jpg?imwidth=768">
               <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/bmw-intelligence/bi-00-teaser-high.jpg" alt="teser-img">
            </picture>
          </div>
        </div>
        <div id="con1-text">
          <b>Innovation</b>
          <h3>BMW Intelligence</h3>
        </div>

      </a>
      </div>
         <div id="teaser-content-1">
      <a href="">
        <div id="con-1-img" >
          <div id="con-img-inner">
          <video  width="3" height="4" playsinline loop muted autoplay>
            <source  src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/sport-sedan/ss-00-teaser-high.mp4" type="video/mp4">
          </video>
          </div>
        </div>
        <div id="con1-text">
          <b>BMW Explained</b>
          <h3>How BMW shaped the sports sedan</h3>
        </div>  
      </a>
      </div>
    </div>
  </div>

</div>
`

