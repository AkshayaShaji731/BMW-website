const root = document.getElementById("root")
const header = document.getElementById("header")
const main = document.getElementById("main")
const footer = document.getElementById("footer")

headerScroll()

function headerScroll() {
  let lastScrollTop = 0;
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.style.top = "-100px";
    } else {
      header.style.top = "0";
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
}

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
<section id="highlight"></section>
<section id="model"></section>
<section id="teaser-2"></div>`

const stage = document.getElementById('stage')
const teaserOne = document.getElementById("teaser-1")
const scroller = document.getElementById("scroller")
const expert = document.getElementById("expert")
const highLight = document.getElementById("highlight")
const model = document.getElementById("model")
const teaserSec = document.getElementById("teaser-2")
// stage section

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
// highLight

highLight.innerHTML = `
<div id="highlight-con">
 <div id="highlight-content">
   <h2>The BMW Podcast: Changing Lanes</h2>
   <p>
      Changing Lanes is the official podcast from BMW. In these audio series, we take you with us on new journeys through the BMW universe. Find out more about sustainability, innovation, technology, mobility and the latest trends. You can find and subscribe to Changing Lanes on all major podcast platforms, so tune in!
   </p>
    <a href="">Listen now</a>
 </div>
 <div id="highlight-main">
   <div id="highlight-main-inner">
    <div id="highlist-main-con"></div>
    <div class="scroll-btn">
      <button id="s-btn-left" class="s-btn">
        <svg class="i" aria-hidden="true" focusable="false"><use xlink:href="#icon-chevron-left"></use></svg>
      </button>
      <button id="s-btn-right" class="s-btn">
        <svg class="i" aria-hidden="true" focusable="false"><use xlink:href="#icon-chevron-right"></use></svg>
      </button>
     </div>
   </div>
 </div>
</div>`

const highLightMain = document.getElementById("highlist-main-con")
highLightMed()
function highLightMed() {
  let items = [{
    video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/gamechanger/gm-00-teaser-high.mp4",
    span: "GAME CHANGER",
    h3: "An audio series about those who change the world around them"
  },
  {
    video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/superhero/sup-00-teaser-high.mp4",
    span: "BMW and superheroes",
    h3: "Freeing Gaia Podcast",
  },
  {
    video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/electric-future/emyths/em-00-teaser-high.mp4",
    span: "ELECTRIC MYTHS",
    h3: "A video podcast about electric driving myths"
  },
  {
    video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/fat/fat-00-teaser-high.mp4",
    span: "The future according to…",
    h3: "Audio column"
  },
  {
    video: "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/podcast/changing-lanes/dee-00-teaser-high.mp4",
    span: "DEE MY GUEST",
    h3: "An audio series about humans and machines"
  },
  {
    video: "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/podcast/changing-lanes/fwd-00-teaser-high.mp4",
    span: "THIS IS FORWARDISM",
    h3: "An audio series with the shapers of our future"
  },
  {
    video: "https://www.bmw.com/video/is/content/BMW/bmwcom/bmw_com/category/innovation/hypnopolis-podcast/bmw-podcast-hypnopolis-00-teaser-high-00.mp4",
    span: "",
    h3: "Sci-Fi Thriller for your ears"
  },
  {
    video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/gamechanger/gm-00-teaser-high.mp4",
    span: "",
    h3: "Exclusive BMW insights"
  },
  {
    video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/gamechanger/gm-00-teaser-high.mp4",
    span: "BMW and superheroes",
    h3: "HYPNOPOLIS 2: UTOPIA IN PROGRESS"
  }
  ]

  for (let i = 0; i < items.length; i++) {
    let highlight = document.createElement("div")
    highlight.classList.add("highlight-inner-con")
    highlight.innerHTML = `
     <div class="highlight-media">
      <video playsinline loop muted autoplay>
       <source class="video" src="https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/gamechanger/gm-00-teaser-high.mp4">
      </video>
     </div>
     <div class="highlight-text">
       <span class="high-span">${items[i].span}</span>
       <h3 class="high-h3">${items[i].h3}</h3>
     </div>
    `
    highlight.querySelector(".video").src = items[i].video

    highLightMain.appendChild(highlight)
  }
}

let slideIndex = 0;
// slideHighLight()
function slideHighLight() {
  let slides = document.getElementsByClassName("highlight-inner-con");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(slideHighLight, 5000);
}

// model

model.innerHTML = `
  <div id="model-con">
    <h2>All BMW Models</h2>
    <a href="">
      <span><svg class="pw-a-icon-link__icon"><use xlink:href="#icon-link-arrow"></use></svg></span>
      Find your BMW
    </a>
  </div>`

// teaserSec



teaserGenerater()

function teaserGenerater() {
  let teaser = [
    {
      id: "two",
      value: [
        {
          video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/sport-sedan/ss-00-teaser-high.mp4",
          span: "BMW Explained",
          h3: "How BMW shaped the sports sedan"
        },
        {
          img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/bmwapp-wallpaper/bawp-00-teaser-hd.jpg",
          span: "",
          h3: "BMW Wallpapers"
        }
      ]
    }
    ,
    {
      id: "one",
      value: [
        {
          video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/light/light-01-stage-hd.mp4",
          span: "BMW explained",
          h3: "Milestones in BMW lighting design"
        }
      ]
    },
    {
      id: "three",
      value: [{
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/Innovation/engine/eng-00-teaser-hd1.jpg",
        span: "Technology",
        h3: " ​Technological highlights: 15 exceptional BMW engines."
      },
      {
        video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/april_fools_day/af-00-teaser-hd.mp4",
        span: "Technology",
        h3: " From April Fool’s jokes to reality: BMW innovations ahead of their time. "
      },
      {
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/3er-bmw/181010_3er/3er-00-teaser-hd.jpg",
        span: "Automobile History ",
        h3: "The seven generations of the BMW 3 Series "
      }
      ]
    },
    {
      id: "two",
      value: [{
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/colors/cl-00-teaser-hd.jpg",
        span: "BMW Explained",
        h3: "The joy of colour"
      },
      {
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/skytop/st-00-teaser-hd.jpg",
        span: " BMW history ",
        h3: " Do you know these fascinating BMW facts? "
      }
      ],
    },
    {
      id: "one",
      value: [{
        id: "1",
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/Silhouettenquiz/sq-00-teaser-hd.jpg",
        span: " Quiz ",
        h3: " Can you identify all the BMW models? "
      }
      ]
    },
    {
      id: "three",
      value: [{
        video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/i-drive/id-00-teaser-hd.mp4",
        span: " BMW iDrive ",
        h3: " An Evolution of Control and Intelligent Connectivity "
      },
      {
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/Smart-Assistance/sa-00-teaser-hd.jpg",
        span: " Smart Assistance ",
        h3: "The BMW Driving Companionship"
      },
      {
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/digital-journey/over-the-air/ota-00-teaser-hd.jpg",
        span: "Over-the-Air Updates",
        h3: " The Joy of the Ever-Evolving "
      }
      ]
    },
    {
      id: "two",
      value: [{
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/xmas24/xmas24-00-teaser-hd.jpg",
        span: " Festive season ",
        h3: " Two generations, one shared driving pleasure "
      },
      {
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/skytop/st-00-teaser-hd.jpg",
        span: " BMW Skytop ",
        h3: " The magic of exclusive moments "
      }
      ]
    },
    {
      id: "one",
      value: [{
        id: "1",
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/freude/25x5/25x5-00-teaser-hd.jpg",
        span: " 25-year anniversary ",
        h3: " The BMW X5 through the ages "
      }

      ]
    },
    {
      id: "three",
      value: [{
        video: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/podcast-teaser/gamechanger/gm-00-teaser-high.mp4",
        span: "GAME CHANGER",
        h3: "An audio series about those who change the world around them "
      },
      {
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/automotive-life/bmw-erlkoenige/bmw-erlkoenige-00-teaser-hd.jpg",
        span: " Erlkönig – German prototype cars ",
        h3: " The art of deception "
      },
      {
        img: "https://www.bmw.com/content/dam/bmw/marketBMWCOM/bmw_com/categories/electric-future/hydrogen/hy-00-teaser-hd.jpg",
        span: " Hydrogen ",
        h3: " The BMW journey to the mobility of the future "
      }
      ]
    }
  ]
  const teaserInner = document.createElement("div");
  teaserInner.id = "teaser-inner";

  const teaserCon = document.createElement("div");
  teaserCon.id = "teaser-con";

  teaser.forEach(row => {
    const contentCon = document.createElement("div");
    contentCon.id = "teaser-content-con";
    if (row.id === "three") {
      function updateFlexDirection(e) {
        if (e.matches) {
          contentCon.style.flexDirection = "row";
        } else {
          contentCon.style.flexDirection = "column";
        }
      }

      const mediaQuery = window.matchMedia("(min-width: 768px)");

      mediaQuery.addEventListener("change", updateFlexDirection);
      updateFlexDirection(mediaQuery);
    }
    let arr = row.value
    arr.forEach(item => {
      const content = document.createElement("div");
      content.id = "teaser-content-1";
      if (row.id === "three") {
        function updateFlexDirection(e) {
          if (e.matches) {
            content.style.width = "33%"
          } else {
            content.style.width = "100%"
          }
        }

        const mediaQuery = window.matchMedia("(min-width: 768px)");

        mediaQuery.addEventListener("change", updateFlexDirection);

        updateFlexDirection(mediaQuery);
      }

      const link = document.createElement("a");
      link.href = "";

      const imgDiv = document.createElement("div");
      imgDiv.id = "con-1-img";
      if (row.id == "one") {
        function updateFlexDirection(e) {
          if (e.matches) {
            imgDiv.style.aspectRatio = "16/9"
          } else {
            imgDiv.style.aspectRatio = "1/1"
          }
        }

        const mediaQuery = window.matchMedia("(min-width: 768px)");

        mediaQuery.addEventListener("change", updateFlexDirection);
        updateFlexDirection(mediaQuery);
      }

      if (row.id == "three") {
        imgDiv.style.aspectRatio = "16/9"
      }

      const imgInner = document.createElement("div");
      imgInner.id = "con-img-inner";

      if (item.video) {
        imgInner.innerHTML = `
          <video playsinline loop muted autoplay>
            <source src="${item.video}" type="video/mp4">
          </video>`;
      } else if (item.img) {
        imgInner.innerHTML = `
          <picture>
            <source media="(min-width:1440px)" srcset="${item.img}?imwidth=1440"> 
            <source media="(min-width:1024px)" srcset="${item.img}?imwidth=1024">
            <source media="(min-width:768px)" srcset="${item.img}?imwidth=768">
            <img src="${item.img}" alt="teaser-img">
          </picture>`;
      }

      imgDiv.appendChild(imgInner);

      const textDiv = document.createElement("div");
      textDiv.id = "con1-text";

      if (item.span) {
        const span = document.createElement("b");
        span.textContent = item.span;
        textDiv.appendChild(span);
      }

      const h3 = document.createElement("h3");
      h3.textContent = item.h3;
      textDiv.appendChild(h3);

      link.appendChild(imgDiv);
      link.appendChild(textDiv);

      content.appendChild(link);
      contentCon.appendChild(content);
    });

    teaserCon.appendChild(contentCon);
  });

  teaserInner.appendChild(teaserCon);
  teaserSec.appendChild(teaserInner);
}

footer.innerHTML = `
<div id="teaser-inner" class="teaser-inner">
 <nav id="footer-nav"></nav>
 
</div>
`
const footerCon = document.querySelector(".teaser-inner")
const footerNav = document.getElementById("footer-nav")
footerNavFun()
function footerNavFun() {
  let aContent = ["English", "Deutsch", "Italiano", "Français", "Español", "日本語"]
  aContent.forEach(lang => {
    let aTag = document.createElement("a")
    aTag.href = "";
    aTag.innerText = lang
    footerNav.appendChild(aTag)

  });
}

footerDivCreation()
function footerDivCreation() {
  let divFoot = document.createElement("div")
  divFoot.id = "footer-div"
  const footerDiv = document.getElementById("footer-div")
  let h5 = ["Quick Links", "More BMW Websites", "BMW.com", "Visit us on"]

  const liContent = [
    ["Home", "BMW in your country", "BMW Group Careers", "EU Detergents Regulation", "REACH Regulation", "Compatibility Check", "Accessories Upadate", "Connected Test Vehicle", "Service Page Charging Products", "Cooperation Test Car", "EU Battery Regulation"],
    ["BMW M", "BMW M Motorspot", "BMW Galfsport", "BMW M Driving Experience", "BMW Welt", "BMW Group Classic", "BMW Corpoate/Direct Sales", "BMW Group", "BMW Group Cultural Engagement", "BMW ConnectedDrive Upgrades"],
    ["About BMW.com", "Contact", "Cookies", "Imprint", "Legal Notice / Data protection"],
    ["Facebook", "X", "Instagram", "YouTube"]
  ]
  h5.forEach((ele, index) => {
    let h5Con = document.createElement("h5")
    h5Con.innerText = ele
    let ulCon = document.createElement("ul")
    ulCon.id = "ul-con"
    divFoot.appendChild(h5Con)
    divFoot.appendChild(ulCon)
    footerCon.appendChild(divFoot)
    // const footerUl = document.getElementById("ul-con")
    footerli(ulCon, liContent[index])
  })
  let divEnd = document.createElement("div")
  divEnd.innerText = "© BMW AG 2025"
  divEnd.id="div-end"
  divFoot.appendChild(divEnd)
}
function footerli(footerUl, liContent) {
  liContent.forEach(e => {
    const list = document.createElement("li");
    list.innerText = e;
    footerUl.appendChild(list);
  });
}
