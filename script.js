const root = document.getElementById("root")
const header = document.getElementById("header")
const main = document.getElementById("main")

// header section

header.innerHTML = `
<div class="header-container"></div>`

const headerCon = document.querySelector(".header-container")

headerCon.innerHTML = `
  <div class="header-logo-wrapper"></div>
  <button class="header-burger-menu"></button>
  <nav id="header-nav"></nav>`

const headerlogo = document.querySelector(".header-logo-wrapper")
const burgerBtn = document.querySelector(".header-burger-menu")
const nav = document.getElementById("header-nav")

headerlogo.innerHTML = `
  <a href="index.html" class="logo-link"></a>
  <div class="header-slogan"></div>`

const logoLink = document.querySelector(".logo-link")
const headerSlogan = document.querySelector(".header-slogan")

logoLink.innerHTML = `
  <img src="https://www.bmw.com/etc.clientlibs/settings/wcm/designs/bmwcom/base/resources/ci2020/img/logo-bmw-com-gray.svg" alt="BMW-logo">
  `
headerSlogan.innerHTML = `
   <p>Sheer Driving
       <strong>Pleasure</strong>
   </p>`
burgerBtn.innerHTML = `
    <svg class="pw-m-header__icon pw-m-header__icon-menu" style="display: block;"><use xlink:href="#icon-burger-menu"></use></svg>`

burgerBtn.addEventListener("click", () => {
  menuAdd();
})
function menuAdd() {
  if (window.matchMedia("(min-width:768px)").matches) {
    logoLink.style.opacity = "1"
    headerSlogan.style.marginLeft = "9pt"
  }
  else {
    logoLink.style.opacity = "0"
  }
  headerSlogan.style.opacity = "1"
  headerSlogan.style.transform = " translateY(-50%) translateX(0)"
  nav.style.display = "block"
  burgerBtn.innerHTML = `<svg class="pw-m-header__icon pw-m-header__icon-close" style="display: block;"><use xlink:href="#icon-close"></use></svg>`
  burgerBtn.addEventListener("click", () => {
    menuClose()
  })
}
function menuClose() {
  logoLink.style.opacity = "1"
  // headerSlogan.style.opacity="0"
  if (window.matchMedia("(min-width:768px)").matches) {
    headerSlogan.style.opacity = "1"
  }
  else {
    headerSlogan.style.opacity = "0"
  }
  nav.style.display = "none"
  burgerBtn.innerHTML = `
    <svg class="pw-m-header__icon pw-m-header__icon-menu" style="display: block;"><use xlink:href="#icon-burger-menu"></use></svg>`
  burgerBtn.addEventListener("click", () => {
    menuAdd()
  })
}

nav.innerHTML = `
<div id="nav-con"></div>`

const navCon = document.getElementById("nav-con")

navCon.innerHTML = `
<div id="nav-item"></div>
<div id="search-con"></div>`

const navItem = document.getElementById("nav-item")
const searchCon = document.getElementById("search-con")

navItem.innerHTML = `
<ul id="nav-ul"></ul>`

const navItemUl = document.getElementById("nav-ul")
createNav()
function createNav() {
  let ItemName = ["Home", "Circular World", "Digital Journey", "Electric Future", "Freude", "Models"]
  let ItemLink = ["index.html", "index.html", "index.html", "index.html", "index.html", "index.html",]
  for (let i = 0; i < ItemName.length; i++) {
    let li = document.createElement("li")
    li.innerHTML = `
        <a href="${ItemLink[i]}">${ItemName[i]}</a>`
    navItemUl.appendChild(li)
  }
}
searchCon.innerHTML = `
<form id="search-form"></form>`

const searchForm = document.getElementById("search-form")

searchForm.innerHTML = `
 <input type="text" placeholder="Search" id="search-input">
 <button class="search-btn"><svg class="pw-m-header__icon icon-search"><use xlink:href="#icon-search"></use></svg></button>
 `

//  main section

main.innerHTML = `
<section id="stage"></section>
<section id="teaser-1"></section>
<div class=spacer></div>
<section id="scroller"></section>
<section id="expert"></section>
<div class=spacer-2></div>
<section id="highlight"></section>`

const stage = document.getElementById('stage')
const teaserOne = document.getElementById("teaser-1")
const scroller = document.getElementById("scroller")
const expert = document.getElementById("expert")
const highLight = document.getElementById("highlight")

// stage section

// stage.innerHTML=`
// <div id="stage-container">
//   <div id="inner-stage-con">
//     <div id="stage-img-con">
  //   <picture>
  //     <source media="(min-width:1024px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=1280">
  //     <source media="(min-width:1024px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=1024">
  //     <source media="(min-width:768px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=768">
  //     <source media="(min-width:568px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=568">
  //     <source media="(min-width:360px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=360%20360w">
  //     <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg" alt="Car-img" ;">
  //  </picture>
//     </div>
//     <div id="stage-content-con"> 
//       <div id="stage-content-p">BMW Concept Speedtop</div>
//       <h1>A collector‘s item full of emotion</h1> 
//       <a href="">Read more</a>
//     </div>
//   </div>
// </div>`

stage.innerHTML = `
    <div id="stage-container">
      <div id="inner-stage-con">
        <div id="stage-img-con">
          <video   playsinline loop muted autoplay>
             <source src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/hoj/hoj-01-stage-hd.mp4">
          </video>
        </div>
        <div id="stage-content-con"> 
          <div id="stage-content-p">Inside Neue Klasse</div>
          <h1>The Heart of Joy – Redefining driving pleasure</h1> 
          <a href="">Read more</a>
        </div>
      </div>
    </div>`

// teaser

teaserOne.innerHTML = `
<div id="teaser-inner">
  <div id="teaser-con">
    <div id="teaser-content-con">
      <div id="teaser-content-1">
      <a href="">
        <div id="con-1-img" >
          <div id="con-img-inner">
            <picture>
              <source media="(min-width:1024px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=1280">
              <source media="(min-width:1024px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=1024">
              <source media="(min-width:768px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=768">
              <source media="(min-width:568px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg?imwidth=568">
              <source media="(min-width:360px)" srcset="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-high.jpg?imwidth=360">
              <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/speedtop/speedtop-00-teaser-hd.jpg" alt="Car-img" ;">
            </picture>
          </div>
        </div>
        <div id="con1-text">
          <b>BMW Concept Speedtop</b>
          <h3>A collector‘s item full of emotion</h3>
        </div>

      </a>
      </div>
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
    </div>
  </div>

</div>
`

// scroller

scroller.innerHTML = `
<h2>Stay up to date with BMW.</h2>
<div id="scroller-con">
  <div id="scroller-inner-con">
     <div id="scroller-item-1"></div>
     <div id="scroller-item-2">
      <div class="s-item2" id="s-item-id">
        <div class="item-img-con">
          <div class="item-img">
            <picture id="item-video" playsinline loop muted autoplay>
              <img src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/sky-00-teaser-home.jpg?imwidth=768" alt="teaser">
            </picture>
          </div>
        </div>
        <div class="item-text">
          <div class="item-text-inner">
           <span><svg class="pw-a-icon-link__icon"><use xlink:href="#icon-link-arrow"></use></svg></span>All news
          </div>
        </div>
      </div>
     </div>
     <div class="scroll-btn">
      <button id="s-btn-left" class="s-btn">
        <svg class="i" aria-hidden="true" focusable="false"><use xlink:href="#icon-chevron-left"></use></svg>
      </button>
      <button id="s-btn-right" class="s-btn">
        <svg class="i" aria-hidden="true" focusable="false"><use xlink:href="#icon-chevron-right"></use></svg>
      </button>
     </div>
  </div>
</div>`

const scrollItem = document.querySelector("#scroller-item-1")
const scrollItem2 = document.querySelector("#scroller-item-2")

scroll()
scrollTab()
function scroll() {
  let item = [`<span><svg class="pw-a-icon-link__icon"><use xlink:href="#icon-link-arrow"></use></svg></span> All news`, "The first BMW fragrances", "Sheer charging pleasure!", "Spotify Playlist", "Panoramic iDrive", "Holiday Season", "Kith for BMW"]
  for (let i = 0; i < item.length; i++) {
    let sItem = document.createElement("div")
    sItem.classList.add("s-item")
    sItem.innerHTML = `
    <div class="item-img-con">
      <div class="item-img">
        <video id="item-video" playsinline loop muted autoplay>
          <source src="/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/sky-00-teaser-home.mp4" type="video/mp4">
        </video>
      </div>
    </div>
    <div class="item-text">
      <div class="item-text-inner">
        ${item[i]}
      </div>
    </div>
    `
    scrollItem.appendChild(sItem)
  }
}

function scrollTab() {
  let item = [`<span><svg class="pw-a-icon-link__icon"><use xlink:href="#icon-link-arrow"></use></svg></span> All news`, "The first BMW fragrances", "Sheer charging pleasure!", "Spotify Playlist", "Panoramic iDrive", "Holiday Season", "Kith for BMW"]

  let img = ["https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/n-26-media-high.jpg?imwidth=768", "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/n-24-media-high.jpg?imwidth=768", "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/n-20-media.jpg?imwidth=768", "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/notes/n-17-media-portrait.jpg?imwidth=768"]
  for (let i = 0; i < img.length; i++) {
    let sItem2 = document.createElement("div")
    sItem2.classList.add("s-item2")
    sItem2.innerHTML = `
    <div class="item-img-con" id="item-img-con-id">
      <div class="item-img">
        <picture id="item-video" playsinline loop muted autoplay>
          <img src="" alt="teaser" id="image">
        </picture>
      </div>
    </div>
    <div class="item-text">
      <div class="item-text-inner">
        ${item[i + 1]}
      </div>
    </div>
    `
    sItem2.querySelector("img").src = img[i]
    scrollItem2.appendChild(sItem2)
  }
}

expert.innerHTML = `
<div id="expert-con">
 <div id="expert-inner">
  <div id="expert-media">
   <h2>Become a bmw expert</h2>
   <div class="expert-video" >
        <video playsinline loop muted autoplay>
          <source src="https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/Automotive%20Life/bmw-explained-logo/exl-01-stage-hd9.mp4">
        </video>
   </div>
  </div>
  <div class="expert-content-con">
    <h2>Become a bmw expert</h2>
    <div class="expert-content">
     <span><svg class="pw-a-icon-link__icon" focusable="false"><use xlink:href="#icon-link-arrow"></use></svg></span>
     bmw explained
   </div>
  </div>
 </div> 
</div>
`

highLight.innerHTML = `
<div id="highlight-con">
 <div id="highlight-content">
   <h2>The BMW Podcast: Changing Lanes</h2>
   <p>
      Changing Lanes is the official podcast from BMW. In these audio series, we take you with us on new journeys through the BMW universe. Find out more about sustainability, innovation, technology, mobility and the latest trends. You can find and subscribe to Changing Lanes on all major podcast platforms, so tune in!
   </p>
    <a href="">Listen now</a>
 </div>
</div>`