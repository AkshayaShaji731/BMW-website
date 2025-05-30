const root = document.getElementById("root")
const header = document.getElementById("header")

header.innerHTML = `
<div class="header-container"></div>`

const headerCon = document.querySelector(".header-container")

headerCon.innerHTML=`
  <div class="header-logo-wrapper">
  </div>
  <button class="header-burger-menu">
  </button>`

const headerlogo=document.querySelector(".header-logo-wrapper")
const burgerBtn=document.querySelector(".header-burger-menu")

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


