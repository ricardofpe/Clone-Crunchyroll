

const $navDropdown2 = $(".custom-dropdown");
const $newsDropdown2 = $(".custom-dropdown2");



const $navDropdown = $(".custom-dropdown");
const $newsDropdown = $(".custom-dropdown2");



const $dropAccount = $(".drop-account");
const $iconAccount = $(".icon-account");



const $menuIcon = $(".menu-icon");
const $customDropdownMobile = $(".custom-dropdown-mobile");
const Header = (".container-navigation")



const GenerosSubMenu = document.querySelector("#sub-menu");
const SubMenu = document.querySelector(".dropdown-menu-mob");
const customDropdownMob = document.querySelector(".custom-dropdown-mobile");



const GenerosSubMenu2 = document.querySelector("#sub-menu2");
const SubMenu2 = document.querySelector(".dropdown-menu-mob2");




const MenuIconClose = document.querySelector(".custom-dropdown-mobile");
const CloseAccount = document.querySelector(".icon-account");
const IconMenuMob = document.querySelector(".menu-icon")
const MenuNavigationClose = document.querySelector(".custom-dropdown");
const MenuNewsClose = document.querySelector(".custom-dropdown2");
const IcoNavigation = document.querySelector("#drop");
const IcoNews = document.querySelector("#drop-2")
const CategoriesMobileGener = document.querySelector(".categories-mobile-gener")



const AccountCloseDesktop = document.querySelector(".drop-account")
const CloseNews = document.querySelector("#drop")
const CloseNavigation = document.querySelector("#drop-2")
const IconAccountDesktop = document.querySelector(".icon-account")
const customDropdownTablet = document.querySelector(".custom-dropdown-tablet");



const menuIcon2 = document.querySelector(".menu-icon");





const GenerosSubMenuT = document.querySelector("#sub-menuT");
const SubMenuT = document.querySelector(".dropdown-menu-tablet");
const customDropdownT = document.querySelector(".custom-dropdown-tablet");



const GenerosSubMenuT2 = document.querySelector("#sub-menuT2");
const SubMenuT2 = document.querySelector(".dropdown-menu-tablet2");
const customDropdownT2 = document.querySelector(".custom-dropdown-tablet");

const CloseAccountTablet = document.querySelector(".drop-account")
const CloseMenuIcon = document.querySelector(".menu-icon");


const IcoDrop = document.querySelector(".ico-drop");
const IcoDrop2 = document.querySelector(".ico-drop2");
const IcoDropTablet = document.querySelector(".ico-drop-tablet");
const IcoDropTablet2 = document.querySelector(".ico-drop-tablet2");





$(document).ready(function() {
 
  function toggleDropdownNav() {


    $newsDropdown2.removeClass("show");

    $navDropdown2.toggleClass("show");
    $(".overlay").toggle();

    if ($navDropdown.hasClass("show")) {
      $("#drop").addClass("active-hover");
      $("#drop-2").removeClass("active-hover");
    } else {
      $("#drop").removeClass("active-hover");
    }
  }

  function toggleDropdownNews() {


    $navDropdown.removeClass("show");

    $newsDropdown.toggleClass("show");
    $(".overlay").toggle();

    if ($newsDropdown.hasClass("show")) {
      $("#drop-2").addClass("active-hover");
      $("#drop").removeClass("active-hover");
    } else {
      $("#drop-2").removeClass("active-hover");
    }
  }


  $("#drop").click(function(e) {
    e.stopPropagation(); 
    toggleDropdownNav();
  });

  $("#drop-2").click(function(e) {
    e.stopPropagation(); 
    toggleDropdownNews();
  });


  $(document).on("click", function(event) {
    if (!$(event.target).closest(".dropdown").length) {
      $(".custom-dropdown, .custom-dropdown2").removeClass("show");
      $(".overlay").hide();
      $("#drop, #drop-2").removeClass("active-hover");
    }
  });
});




$(document).ready(function() {

  function toggleDropdownAccount() {


    if ($dropAccount.hasClass("active")) {

      $iconAccount.removeClass("active-hover");
    } else {

      $iconAccount.addClass("active-hover");
    }

    $dropAccount.toggleClass("active");
    $(".overlay").toggle();
  }

  $(".icon-account").click(function(e) {
    e.stopPropagation(); 
    toggleDropdownAccount();
  });

  $(document).on("click", function(event) {
    if (!$(event.target).closest(".drop-account").length) {
      $(".drop-account").removeClass("active");
      $(".overlay").hide();
      $(".icon-account").removeClass("active-hover");
    };


  });
});


$(document).ready(function() {
 

  
  $menuIcon.click(function(e) {
    e.stopPropagation(); 
    $customDropdownMobile.toggleClass("show");
    $menuIcon.toggleClass("active-hover");
  });


  $customDropdownMobile.click(function(e) {
    e.stopPropagation(); 
  });

  $(document).on("click", function(event) {
    if (!$customDropdownMobile.is(event.target) && $customDropdownMobile.has(event.target).length === 0) {
      $customDropdownMobile.removeClass("show");
    
    }
  });

  Header.addEventListener("click" , function(){
    $customDropdownMobile.classList.remove("show")
  
  })
});






GenerosSubMenu.addEventListener("click", function() {
  if (SubMenu.classList.contains("show")) {

    customDropdownMob.classList.remove("submenu-opened");
  } else {

    customDropdownMob.classList.add("submenu-opened");
  }
  
  SubMenu.classList.toggle("show");
  customDropdownMob.classList.toggle("scrollable");
  SubMenu2.classList.remove("show")
});

document.addEventListener("click", function(event) {
  if (!GenerosSubMenu.contains(event.target) && !SubMenu.contains(event.target)) {
    SubMenu.classList.remove("show");
    customDropdownMob.classList.remove("submenu-opened"); 
  }
});






GenerosSubMenu2.addEventListener("click", function() {
  if (SubMenu2.classList.contains("show")) {
    customDropdownMob.classList.remove("submenu-opened");
  } else {
    customDropdownMob.classList.add("submenu-opened");
  }
  
  SubMenu2.classList.toggle("show");
  customDropdownMob.classList.remove("scrollable");
 
});

//



CloseAccount.addEventListener("click" ,function(){
  MenuIconClose.classList.remove("show");
  IconMenuMob.classList.remove("active-hover");
  Droptranslate.classList.remove("show")
});




CloseNews.addEventListener("click", function(){
  AccountCloseDesktop.classList.remove("active")
  IconAccountDesktop.classList.remove("active-hover")
  Droptranslate.classList.remove("show")
});


CloseNavigation.addEventListener("click", function(){
  AccountCloseDesktop.classList.remove("active")
  IconAccountDesktop.classList.remove("active-hover")
  Droptranslate.classList.remove("show")
});


CloseAccount.addEventListener("click", function(){
  MenuNavigationClose.classList.remove("show")
  IcoNavigation.classList.remove("active-hover")
});


CloseAccount.addEventListener("click", function(){
  MenuNewsClose.classList.remove("show")
  IcoNews.classList.remove("active-hover")
});

CloseAccount.addEventListener("click", function(){
  customDropdownTablet.classList.remove("show")
  IconMenuMob.classList.remove("active-hover")
});

IconMenuMob.addEventListener("click" , function(){
  CloseAccount.classList.remove("active-hover")
  AccountCloseDesktop.classList.remove("active")
  Droptranslate.classList.remove("show")
})

document.addEventListener('touchstart', function(e) {
  // Verificar se o toque não é dentro do elemento do menu
  if (!IconMenuMob.contains(e.target) && !CloseAccount.contains(e.target) && !AccountCloseDesktop.contains(e.target) && !Droptranslate.contains(e.target)) {
      // Lógica para fechar o menu aqui
      CloseAccount.classList.remove("active-hover");
      AccountCloseDesktop.classList.remove("active");
      Droptranslate.classList.remove("show");
  }
});




document.addEventListener("DOMContentLoaded", function() {




  

  menuIcon2.addEventListener("click", function() {
if (window.innerWidth > 575 && window.innerWidth <= 1115) {
     
      
      customDropdownTablet.classList.toggle("show");
 
    }
  });


  document.addEventListener("click", function(event) {
    if (!event.target.closest(".dropdown")) {
      
    }
  });

document.addEventListener("click", function(event) {
  if (!menuIcon2.contains(event.target) && !customDropdownTablet.contains(event.target)) {
    customDropdownTablet.classList.remove("show");
    menuIcon2.classList.remove("active-hover");
  }
});
});





GenerosSubMenuT.addEventListener("click", function() {
  if (SubMenuT.classList.contains("show")) {

    customDropdownT.classList.remove("submenu-opened");
  } else {

    customDropdownT.classList.add("submenu-opened");
  }
  
  SubMenuT.classList.toggle("show");
  customDropdownT.classList.toggle("scrollable");
  SubMenuT2.classList.remove("show")


});


document.addEventListener("click", function(event) {
  if (!GenerosSubMenuT.contains(event.target) && !SubMenuT.contains(event.target)) {
    SubMenuT.classList.remove("show");
    customDropdownT.classList.remove("submenu-opened"); 
  }
});




GenerosSubMenuT2.addEventListener("click", function() {
  if (SubMenuT2.classList.contains("show")) {
    customDropdownT2.classList.remove("submenu-opened");
  } else {
    customDropdownT2.classList.add("submenu-opened");
  }
  
  SubMenuT2.classList.toggle("show");
  customDropdownT2.classList.remove("scrollable");
 
});




CloseMenuIcon.addEventListener("click", function()
{
  CloseAccountTablet.classList.remove("active")
});





GenerosSubMenu.addEventListener("click", function() {

  if (IcoDrop.classList.contains("up")) {

    IcoDrop.classList.remove("up");
  } else {
   
    IcoDrop.classList.add("up");
  }
});


GenerosSubMenu2.addEventListener("click", function() {

  if (IcoDrop2.classList.contains("up")) {

    IcoDrop2.classList.remove("up");
  } else {
   
    IcoDrop2.classList.add("up");
  }
});


GenerosSubMenuT.addEventListener("click", function() {

  if (IcoDropTablet.classList.contains("up")) {

    IcoDropTablet.classList.remove("up");
  } else {
   
    IcoDropTablet.classList.add("up");
  }
});


GenerosSubMenuT2.addEventListener("click", function() {

  if (IcoDropTablet2.classList.contains("up")) {

    IcoDropTablet2.classList.remove("up");
  } else {
   
    IcoDropTablet2.classList.add("up");
  }
});


IconMenuMob.addEventListener("click", function(){
  if(MenuIconClose.classList.contains("show")){
    IconMenuMob.classList.add("active-hover");
  } else{
    IconMenuMob.classList.remove("active-hover");
  }
})


IconAccountDesktop.addEventListener("click", function(){
  if(AccountCloseDesktop.classList.contains("active")){
    IconAccountDesktop.classList.add("active-hover");
  } else{
    IconAccountDesktop.classList.remove("active-hover");
  }
})


// MAIN //



const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('#prevSlide');
const nextButton = document.querySelector('#nextSlide');
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll(".indicator-item");
const container = document.querySelector('.container-main-desktop');

const SvgPrev = document.querySelector('.svg-slide-anime');
const SvgNext = document.querySelector('.svg-slide-anime2');

const container2 = document.querySelector('.container-imagens-anime');
    const prevButton2 = document.getElementById('prevButton2');
    const nextButton2 = document.getElementById('nextButton2');
    const vinlandSagaImage = document.querySelector(".vinland-saga-image");

    const container3 = document.querySelector('.container-imagens-anime2');
    const prevButton3 = document.getElementById('prevButton3');
    const nextButton3 = document.getElementById('nextButton3');


const slideImages = [
  'https://static.crunchyroll.com/fms/landscape_large/94/png/a8a778d8-573a-4ae3-a49c-ea06a1fe540e.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/8c566c3c-15e4-4c20-a224-174b0744eaf8.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/47aedb23-bdbb-4b0e-bd29-35c72608feca.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/ee76ff8f-c77b-4868-85e7-afef6da6c804.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/a5bac8ac-8bf6-4a78-9674-4730fac66ab6.jpg',
  'https://static.crunchyroll.com/fms/landscape_large/94/png/fd4ae1b8-099c-401b-9e31-05cc09383078.jpg',
];

function updateBackgroundImage() {
  container.style.backgroundImage = `url(${slideImages[currentSlide]})`;
}

let currentSlide = 0;

function goToSlide(slideIndex) {
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'grid';
    } else {
      slide.style.display = 'none';
    }
  });

  currentSlide = slideIndex;

  updateBackgroundImage();
}

function updateIndicators(currentIndex) {
  currentSlide = currentIndex;
  slides.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = 'grid';
      indicators[index].style.backgroundColor = "#F58220";
      indicators[index].style.width = '54px';
    } else {
      slide.style.display = 'none';
      indicators[index].style.backgroundColor = "#A9A9A9";
      indicators[index].style.width = '24px';
    }
  });

  updateBackgroundImage(); // Atualiza o fundo do container principal com o novo slide
}

function setInitialIndicator() {
  updateIndicators(0); // Define o indicador inicial para o primeiro slide
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    updateIndicators(index);
  });
});

prevButton.addEventListener('click', () => {
  currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
  goToSlide(currentSlide);
  updateIndicators(currentSlide);
});

nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
  updateIndicators(currentSlide);
});

updateBackgroundImage();
goToSlide(currentSlide);
setInitialIndicator(); // Define o indicador inicial

function autoAdvance() {
  currentSlide = (currentSlide + 1) % slides.length;
  goToSlide(currentSlide);
  updateIndicators(currentSlide);
}

setInterval(autoAdvance, 10000);



// SECTION 1 //

const imageUrls = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/77fb4ad8d5c781685695bc574eb34b0a.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48f5e5d1b485eb5c9a33c517accd1fec.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/1500ddfac4a1ffbc767603fcac1b9b2a.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe",
  
  


  // Adicione mais URLs de imagem conforme necessário
];

const imageUrls2 = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe" ,
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/6c496691df13a15aaf9be63caa7fc429.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/6c985c5f2bf94a05437fff8ecdd806f6.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/fdfd2e0910d6f141626a7d6f8f76ab72.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/efb29ad752e647212b3e199da7748e9e.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/1b083a97efcac96d6f3f6c3880321f93.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe",


  // Adicione mais URLs de imagem conforme necessário
];


const titles = [
  "Chainsaw Man",
  "JUJUTSU KAISEN",
  "Bungo Stray Dogs",
  "Ranking of Kings",
  "One Piece",
  "VINLAND SAGA",
  "BLUELOCK",


  // Adicione mais títulos conforme necessário
];

const titles2 = [
  "BLUELOCK",
  "Tokyo Ghoul",
  "Horimiya",
  "My Dress Up Darling",
  "Code Geass",
  "Soul Eater",



  // Adicione mais títulos conforme necessário
];

let currentImageIndexImg = 0; // Índice da imagem atual
let currentListIndex = 0; // Índice da lista atual

// ...

// ...

/// Esconda o botão prevButton2 inicialmente


// ...

// Atualize a função do botão nextButton2
SvgNext.addEventListener('click', () => {
  currentImageIndexImg = (currentImageIndexImg + 6) % imageUrls.length;
  if (currentImageIndexImg === 0) {
    currentListIndex = (currentListIndex + 1) % 2;
    SvgPrev.style.display = 'flex';
    SvgNext.style.display = 'none';
  }
  updateImagesAndTitles();

});

// Atualize a função do botão prevButton2
SvgPrev.addEventListener('click', () => {
  currentImageIndexImg = (currentImageIndexImg - 6 + imageUrls.length) % imageUrls.length;
  if (currentImageIndexImg === imageUrls.length - 6) {
    currentListIndex = (currentListIndex - 1 + 2) % 2;
    SvgNext.style.display = 'flex';
    SvgPrev.style.display = 'none';
    
  }
  updateImagesAndTitles();

});
// ...



function updateImagesAndTitles() {
  let currentUrls = currentListIndex === 0 ? imageUrls : imageUrls2;
  let currentTitles = currentListIndex === 0 ? titles : titles2;

  const containerAnimeElements = document.querySelectorAll('.container-anime');
  for (let i = 0; i < containerAnimeElements.length; i++) {
    const currentImageElement = containerAnimeElements[i].querySelector('.img-section1');
    const currentTitleElement = containerAnimeElements[i].querySelector('.titulo-anime');

    currentImageElement.src = currentUrls[(currentImageIndexImg + i) % currentUrls.length];
    currentTitleElement.innerText = currentTitles[(currentImageIndexImg + i) % currentTitles.length];
  }
}


// SECTION MAIS POPULARES //


const SvgPrevPopulares = document.querySelector('#svg-populares');
const SvgNextPopulares = document.querySelector('#svg-populares2')

const imageUrlsPopulares = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/eceac71dbf61b38c7b94fc14e590c7b2.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/ebcd65fa9fb83580062e7052fa6ee5a5.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48f5e5d1b485eb5c9a33c517accd1fec.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/61eff1385c6b64a1110708ca3e0f4fb3.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe",
  
  


  // Adicione mais URLs de imagem conforme necessário
];

const imageUrlsPopulares2 = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe" ,
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/6c496691df13a15aaf9be63caa7fc429.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/6c985c5f2bf94a05437fff8ecdd806f6.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/fdfd2e0910d6f141626a7d6f8f76ab72.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/efb29ad752e647212b3e199da7748e9e.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/dd37db90df46fca8d702266385a1193c.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe",


  // Adicione mais URLs de imagem conforme necessário
];


const titlesPopulares = [
  "É Sério Que Eu Sou O Mais Forte?",
  "JUJUTSU KAISEN",
  "Bungo Stray Dogs",
  "Minha Crush Esqueceu Os Óculos",
  "One Piece",
  "VINLAND SAGA",
  "BLUELOCK",


  // Adicione mais títulos conforme necessário
];

const titlesPopulares2 = [
  "BLUELOCK",
  "Tokyo Ghoul",
  "Horimiya",
  "My Dress Up Darling",
  "100 Coisas Para Fazer Antes De Virar Zumbi",
  "Soul Eater",



  // Adicione mais títulos conforme necessário
];

let currentImageIndexImgPopulares = 0; // Índice da imagem atual
let currentListIndexPopulares = 0; // Índice da lista atual

// ...

// ...

/// Esconda o botão prevButton2 inicialmente


// ...

// Atualize a função do botão nextButton2
SvgNextPopulares.addEventListener('click', () => {
  currentImageIndexImgPopulares = (currentImageIndexImgPopulares + 6) % imageUrlsPopulares.length;
  if (currentImageIndexImgPopulares === 0) {
    currentListIndexPopulares = (currentListIndexPopulares + 1) % 2;
    SvgPrevPopulares.style.display = 'flex';
    SvgNextPopulares.style.display = 'none';
  }
  updateImagesAndTitles2();

});

// Atualize a função do botão prevButton2
SvgPrevPopulares.addEventListener('click', () => {
  currentImageIndexImgPopulares = (currentImageIndexImgPopulares - 6 + imageUrlsPopulares.length) % imageUrlsPopulares.length;
  if (currentImageIndexImgPopulares === imageUrlsPopulares.length - 6) {
    currentListIndexPopulares = (currentListIndexPopulares - 1 + 2) % 2;
    SvgNextPopulares.style.display = 'flex';
    SvgPrevPopulares.style.display = 'none';
    
  }
  updateImagesAndTitles2();

});
// ...



function updateImagesAndTitles2() {
  let currentUrls2 = currentListIndexPopulares === 0 ? imageUrlsPopulares : imageUrlsPopulares2;
  let currentTitles2 = currentListIndexPopulares === 0 ? titlesPopulares : titlesPopulares2;

  const containerAnimeElements = document.querySelectorAll('.container-anime-populares');
  for (let i = 0; i < containerAnimeElements.length; i++) {
    const currentImageElement = containerAnimeElements[i].querySelector('.img-section2');
    const currentTitleElement = containerAnimeElements[i].querySelector('.titulo-anime-populares');

    currentImageElement.src = currentUrls2[(currentImageIndexImgPopulares + i) % currentUrls2.length];
    currentTitleElement.innerText = currentTitles2[(currentImageIndexImgPopulares + i) % currentTitles2.length];
  }
}




// FOOTER //

const translate = document.querySelector(".text-translate");
const Droptranslate = document.querySelector(".drop-translate");

translate.addEventListener("click", function(){
  if (Droptranslate.classList.contains("show")) {
    Droptranslate.classList.remove("show");
    translate.classList.remove("active-hover");
    Droptranslate.classList.remove("scrollable");
  } else {
    Droptranslate.classList.add("show");
    translate.classList.add("active-hover");
    Droptranslate.classList.add("scrollable");
  }
});


document.addEventListener("click", function(event) {
  if (!Droptranslate.contains(event.target) && !translate.contains(event.target)) {
    Droptranslate.classList.remove("show");
    translate.classList.remove("active-hover");
    Droptranslate.classList.remove("scrollable");
  }
});

if (Droptranslate.classList.contains("show")){
  $navDropdown.removeClass("show")
  $newsDropdown2.removeClass("show")
  $navDropdown.removeClass("show")
  $newsDropdown.removeClass("show")
  $dropAccount.removeClass("active")
  $customDropdownMobile.removeClass("show")
  customDropdownTablet.classList.remove("show")
}


// MAIN MOBILE //


document.addEventListener("DOMContentLoaded", function () {
  const slidesMob = document.querySelectorAll(".slide-mobile");
  const indicatorsMob = document.querySelectorAll(".indicator-item-mob");
  const containerMob = document.querySelector(".container-main-mobile");

  const slideImagesmob = [
    "https://static.crunchyroll.com/fms/landscape_large/94/png/0f64543f-c57d-4271-9750-8e84ddc3aa9d.jpg",
    "https://static.crunchyroll.com/fms/landscape_large/94/png/2b063787-9006-4f0a-a072-451c9f3e402b.jpg",
    "https://static.crunchyroll.com/fms/landscape_large/94/png/41f85a50-9c9f-4bb2-b6ac-86f027be3019.jpg",
    "https://static.crunchyroll.com/fms/landscape_large/94/png/b6e07b80-e5a7-48c6-8919-0aa7c3e70abb.jpg",
    "https://static.crunchyroll.com/fms/landscape_large/94/png/c8358380-c402-4c83-b3db-019dd04bf69e.jpg",
    "https://static.crunchyroll.com/fms/landscape_large/94/png/fd4ae1b8-099c-401b-9e31-05cc09383078.jpg",
  ];


  let currentSlideMob = 0;

  function updateBackgroundImage() {
    if (currentSlideMob >= 0 && currentSlideMob < slideImagesmob.length) {
      containerMob.style.backgroundImage = `url(${slideImagesmob[currentSlideMob]})`;
    }
  }
  

  function goToSlide(slideIndex) {
    if (slideIndex < 0) {
      slideIndex = slidesMob.length - 1;
    } else if (slideIndex >= slidesMob.length) {
      slideIndex = 0;
    }

    slidesMob.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.style.display = "flex";
      } else {
        slide.style.display = "none";
      }
    });

    currentSlideMob = slideIndex;

    updateBackgroundImage();
  }

// ...

function updateIndicators(currentIndex) {
  slidesMob.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.style.display = "flex";
      indicatorsMob[index].style.backgroundColor = "#F58220";
      indicatorsMob[index].style.width = "54px";
    } else {
      slide.style.display = "none";
      indicatorsMob[index].style.backgroundColor = "#A9A9A9";
      indicatorsMob[index].style.width = "24px";
    }
  });

  updateBackgroundImage();
}

function setInitialIndicator() {
  updateIndicators(0);
}

indicatorsMob.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlideMob = index; // Atualiza o valor do slide atual
    updateIndicators(index);
    goToSlide(index); // Altera para o slide correspondente ao indicador clicado
  });
});

// ...

  let touchStartX = 0;
  let touchEndX = 0;

  containerMob.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  });

  containerMob.addEventListener("touchend", function (e) {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
  });

  function handleGesture() {
    if (touchEndX < touchStartX) {
      currentSlideMob++;
      goToSlide(currentSlideMob);
      updateIndicators(currentSlideMob);
    }

    if (touchEndX > touchStartX) {
      currentSlideMob--;
      goToSlide(currentSlideMob);
      updateIndicators(currentSlideMob);
    }
  }

  updateBackgroundImage();
  goToSlide(currentSlideMob);
  setInitialIndicator();

  function autoAdvance() {
    currentSlideMob = (currentSlideMob + 1) % slidesMob.length;
    goToSlide(currentSlideMob);
    updateIndicators(currentSlideMob);
  }

  setInterval(autoAdvance, 10000);
});


// SECTION 1 MOBILE //

let currentIndex2 = 0; 
let timer;

const containerMob2 = document.querySelector(".container-imagens-anime-mob");
const slidesMob2 = document.querySelectorAll(".container-anime-mob");
const nextButtonmob2 = document.getElementById("nextButton-mob2");
const prevButtonmob2 = document.getElementById("prevButton-mob2");
const shadowContainer = document.getElementById("shadowContainer");
const shadowContainerPrev = document.querySelector(".shadow-container-prev");
const SvgSlideMob = document.querySelector(".svg-slide-anime-mob2");
const SvgSlideMobPrev = document.querySelector(".svg-slide-anime-mob");
// Suponha que você tenha elementos HTML com as classes "title" e "subtitle" correspondentes aos títulos e subtítulos
const titleElements = document.querySelectorAll('.titulo-anime');
const subtitleElements = document.querySelectorAll('.LegDub');






const imageUrlMobs = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/922742d9acaeba7d887ed11b6caab0e4.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/77fb4ad8d5c781685695bc574eb34b0a.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48f5e5d1b485eb5c9a33c517accd1fec.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/1500ddfac4a1ffbc767603fcac1b9b2a.jpe",


  
  


  // Adicione mais URLs de imagem conforme necessário
];

const imageUrlsMob2 = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe" ,
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/6c496691df13a15aaf9be63caa7fc429.jpe",





  // Adicione mais URLs de imagem conforme necessário
];


const imageUrlsMob3 = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/6c985c5f2bf94a05437fff8ecdd806f6.jpe" ,
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/fdfd2e0910d6f141626a7d6f8f76ab72.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/efb29ad752e647212b3e199da7748e9e.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/1b083a97efcac96d6f3f6c3880321f93.jpe",





  // Adicione mais URLs de imagem conforme necessário
];

const titlesMob = [
  "Chainsaw Man",
  "JUJUTSU KAISEN",
  "Bungo Stray Dogs",
  "Ranking of Kings",
  


  // Adicione mais títulos conforme necessário
];

const titlesMob2 = [
  "One Piece",
  "VINLAND SAGA",
  "BLUELOCK",
  "Tokyo Ghoul",
 



  // Adicione mais títulos conforme necessário
];


const titlesMob3 = [
  "Horimiya",
  "My Dress Up Darling",
  "Code Geass",
  "Soul Eater",



  // Adicione mais títulos conforme necessário
];

let currentImageIndexImgMob = 0; // Índice da imagem atual
let currentListIndexMob = 0; // Índice da lista atual

// ...

// Atualize a função do botão nextButtonmob2
nextButtonmob2.addEventListener('click', () => {
  currentImageIndexImgMob = (currentImageIndexImgMob + 4) % imageUrlMobs.length;
  if (currentImageIndexImgMob === 0) {
    currentListIndexMob = (currentListIndexMob + 1) % 3;

  }
 
  updateImagesAndTitlesMob();
});

// Atualize a função do botão prevButtonmob2
prevButtonmob2.addEventListener('click', () => {
  currentImageIndexImgMob = (currentImageIndexImgMob - 4 + imageUrlMobs.length) % imageUrlMobs.length;
  if (currentImageIndexImgMob === imageUrlMobs.length - 4) {
    currentListIndexMob = (currentListIndexMob - 1 + 3) % 3;
  }
  updateImagesAndTitlesMob();
});

// ...

function updateImagesAndTitlesMob() {
  let currentUrls;

  if (currentListIndexMob === 0) {
    currentUrls = imageUrlMobs;
  } else if (currentListIndexMob === 1) {
    currentUrls = imageUrlsMob2;
  } else {
    currentUrls = imageUrlsMob3;
  }

  let currentTitles;

  if (currentListIndexMob === 0) {
    currentTitles = titlesMob;
  } else if (currentListIndexMob === 1) {
    currentTitles = titlesMob2;
  } else {
    currentTitles = titlesMob3;
  }

  const containerAnimeElements = document.querySelectorAll('.container-anime-mob');
  
  for (let i = 0; i < containerAnimeElements.length; i++) {
    const currentImageElement = containerAnimeElements[i].querySelector('.img-anime');
    const currentTitleElement = containerAnimeElements[i].querySelector('.titulo-anime-mob');

    currentImageElement.src = currentUrls[(currentImageIndexImgMob + i) % currentUrls.length];
    currentTitleElement.innerText = currentTitles[(currentImageIndexImgMob + i) % currentTitles.length];
  }

  
  // Verifique se estamos no terceiro conjunto e oculte o botão "Next"

}







nextButtonmob2.addEventListener('click', () => {

  // Verifique se o botão "prev" e o shadow container devem ser exibidos
  if (currentImageIndexImgMob === 0) {
    prevButtonmob2.style.display = "none"; // Oculta o botão "prev" quando o índice das imagens é 0
    shadowContainerPrev.style.display = "none"; // Oculta o shadow container quando o índice das imagens é 0
  } else {
    prevButtonmob2.style.display = "flex"; // Caso contrário, exibe o botão "prev"
    shadowContainerPrev.style.display = "flex"; // Caso contrário, exibe o shadow container
  }



  if (currentListIndexMob === 2) {
    nextButtonmob2.style.display = "none";
  } else {
    nextButtonmob2.style.display = "flex";
  }
});







  prevButtonmob2.addEventListener('click', () => {
    

  if (currentImageIndexImgMob === 0) {
    prevButtonmob2.style.display = "none"; // Oculta o botão "prev" quando o índice das imagens é 0
    shadowContainerPrev.style.display = "none"; // Oculta o shadow container quando o índice das imagens é 0
  } else {
    prevButtonmob2.style.display = "flex"; // Caso contrário, exibe o botão "prev"
    shadowContainerPrev.style.display = "flex"; // Caso contrário, exibe o shadow container
  }


  // Restante do código
});

// Restante do código




containerMob2.addEventListener('mouseover', () => {
  if (currentIndex2 > 0) {
    prevButtonmob2.style.display = "block";
    shadowContainerPrev.style.display = "block";
  }
});

containerMob2.addEventListener('mouseover', () => {
  if (currentImageIndex === 0) {
    prevButtonmob2.style.display = "none";
    shadowContainerPrev.style.display = "none";
  }
});

containerMob2.addEventListener('mouseout', () => {
  prevButtonmob2.style.display = "none";
  shadowContainerPrev.style.display = "none";
});

nextButtonmob2.addEventListener('click', () => {
  if (currentIndex2 === 0) {
   ; // Ajuste a posição conforme necessário
    SvgSlideMobPrev.style.display = 'block';
   // Ajuste a posição conforme necessário
    shadowContainerPrev.style.display = 'block';

    prevButtonmob2.style.display = "block";

  }




  currentIndex2 += 3; // Incrementar o índice pelo número de imagens avançadas
  showHideArrows2();
});

// ...


// ...


function showHideArrows2() {
  if (currentIndex2 === 0) {
      prevButtonmob2.style.display = "none";
      shadowContainerPrev.style.display = "none";
  } else {
      prevButtonmob2.style.display = "block";
      shadowContainerPrev.style.display = "block";
  }

  if (currentIndex2 >= slidesMob2.length - 3) {
      nextButtonmob2.style.display = "none";
  } else {
      nextButtonmob2.style.display = "block";
  }
}

function showNextButton() {
  nextButtonmob2.style.display = "block";
  shadowContainer.style.display = "block";
  if (timer) {
      clearTimeout(timer);
  }
  timer = setTimeout(function () {
      nextButtonmob2.style.display = "none";
      shadowContainer.style.display = "none";
  }, 30000); // 3 segundos
}

function hideNextButton() {
  if (timer) {
      clearTimeout(timer);
  }
  timer = setTimeout(function () {
      nextButtonmob2.style.display = "none";
      shadowContainer.style.display = "none";
  }, 0); // 1 segundo
}



let touchstartX = 0;
let touchendX = 0;

slidesMob2.forEach((slide, index) => {
  slide.addEventListener('touchstart', (event) => {
    touchstartX = event.changedTouches[0].screenX;
  }, false);

  slide.addEventListener('touchmove', (event) => {
    // Se deseja realizar alguma ação enquanto o usuário ainda está movendo o dedo, adicione lógica aqui
  }, false);

  slide.addEventListener('touchend', (event) => {
    touchendX = event.changedTouches[0].screenX;
    handleGesture(index);
  }, false);
});

function handleGesture(slideIndex) {
  const gestureThreshold = 50; // Ajuste conforme necessário

  if (touchendX < touchstartX - gestureThreshold) {
    // Deslize para a esquerda
    // Coloque o código para avançar as imagens ou executar a lógica para avançar
    console.log(`Deslize para a esquerda no slide ${slideIndex}`);
  }

  if (touchendX > touchstartX + gestureThreshold) {
    // Deslize para a direita
    // Coloque o código para retroceder as imagens ou executar a lógica para retroceder
    console.log(`Deslize para a direita no slide ${slideIndex}`);
  }
}



// SECTION MAIS POPULARES MOBILE //


const slidesMob3 = document.querySelectorAll(".container-anime2");
const nextButtonmob3 = document.getElementById("nextButton-mob3");
const prevButtonmob3 = document.getElementById("prevButton-mob3");
const shadowContainer2 = document.getElementById("shadowContainer2");
const containerMob3 = document.querySelector(".container-imagens-anime-mob2");
const SvgSlideMob2 = document.querySelector(".svg-slide-anime-mob3");
const SvgSlideMobPrev2 = document.querySelector(".svg-slide-anime-mob4")
const titleElements2 = document.querySelectorAll('.titulo-anime-mob2');
const subtitleElements2 = document.querySelectorAll('.LegDub2');
const shadowContainerPrev2 = document.querySelector(".shadow-container-prev2");



const imageUrlMobsPopulares = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/eceac71dbf61b38c7b94fc14e590c7b2.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/77fb4ad8d5c781685695bc574eb34b0a.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48f5e5d1b485eb5c9a33c517accd1fec.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/61eff1385c6b64a1110708ca3e0f4fb3.jpe",


  
  


  // Adicione mais URLs de imagem conforme necessário
];

const imageUrlsMobPopulares2 = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/f154230aab3191aba977f337d392f812.jpe" ,
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/b333f764127c1e06d49aa7ca7c262ff8.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/585041e91bb7168df89a98eb5318d88c.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/6c496691df13a15aaf9be63caa7fc429.jpe",





  // Adicione mais URLs de imagem conforme necessário
];


const imageUrlsMobPopulares3 = [
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/6c985c5f2bf94a05437fff8ecdd806f6.jpe" ,
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/fdfd2e0910d6f141626a7d6f8f76ab72.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/dd37db90df46fca8d702266385a1193c.jpe",
  "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/1b083a97efcac96d6f3f6c3880321f93.jpe",





  // Adicione mais URLs de imagem conforme necessário
];

const titlesMobPopulares = [
  "É Sério Que Eu Sou O Mais Forte?",
  "JUJUTSU KAISEN",
  "Bungo Stray Dogs",
  "Minha Crush Esqueceu Os Óculos",
  


  // Adicione mais títulos conforme necessário
];

const titlesMobPopulares2 = [
  "One Piece",
  "VINLAND SAGA",
  "BLUELOCK",
  "Tokyo Ghoul",
 



  // Adicione mais títulos conforme necessário
];


const titlesMobPopulares3 = [
  "Horimiya",
  "My Dress Up Darling",
  "100 Coisas Para Fazer Antes De Virar Zumbi",
  "Soul Eater",



  // Adicione mais títulos conforme necessário
];

let currentImageIndexImgMob2 = 0; // Índice da imagem atual
let currentListIndexMob2 = 0; // Índice da lista atual

// ...

// Atualize a função do botão nextButtonmob2
nextButtonmob3.addEventListener('click', () => {
  currentImageIndexImgMob2 = (currentImageIndexImgMob2 + 4) % imageUrlMobsPopulares.length;
  if (currentImageIndexImgMob2 === 0) {
    currentListIndexMob2 = (currentListIndexMob2 + 1) % 3;
  }
  updateImagesAndTitlesMob2();
});

// Atualize a função do botão prevButtonmob2
prevButtonmob3.addEventListener('click', () => {
  currentImageIndexImgMob2 = (currentImageIndexImgMob2 - 4 + imageUrlMobsPopulares.length) % imageUrlMobsPopulares.length;
  if (currentImageIndexImgMob2 === imageUrlMobsPopulares.length - 4) {
    currentListIndexMob2 = (currentListIndexMob2 - 1 + 3) % 3;
  }
  updateImagesAndTitlesMob2();
});

// ...

function updateImagesAndTitlesMob2() {
  let currentUrls;

  if (currentListIndexMob2 === 0) {
    currentUrls = imageUrlMobsPopulares;
  } else if (currentListIndexMob2 === 1) {
    currentUrls = imageUrlsMobPopulares2;
  } else {
    currentUrls = imageUrlsMobPopulares3;
  }

  let currentTitles;

  if (currentListIndexMob2 === 0) {
    currentTitles = titlesMobPopulares;
  } else if (currentListIndexMob2 === 1) {
    currentTitles = titlesMobPopulares2;
  } else {
    currentTitles = titlesMobPopulares3;
  }

  const containerAnimeElements = document.querySelectorAll('.container-anime2');
  
  for (let i = 0; i < containerAnimeElements.length; i++) {
    const currentImageElement = containerAnimeElements[i].querySelector('.img-anime2');
    const currentTitleElement = containerAnimeElements[i].querySelector('.titulo-anime-mob2');

    currentImageElement.src = currentUrls[(currentImageIndexImgMob2 + i) % currentUrls.length];
    currentTitleElement.innerText = currentTitles[(currentImageIndexImgMob2 + i) % currentTitles.length];
  }

  
  // Verifique se estamos no terceiro conjunto e oculte o botão "Next"

}


nextButtonmob3.addEventListener('click', () => {

  // Verifique se o botão "prev" e o shadow container devem ser exibidos
  if (currentImageIndexImgMob2 === 0) {
    prevButtonmob3.style.display = "none"; // Oculta o botão "prev" quando o índice das imagens é 0
    shadowContainerPrev2.style.display = "none"; // Oculta o shadow container quando o índice das imagens é 0
  } else {
    prevButtonmob3.style.display = "block"; // Caso contrário, exibe o botão "prev"
    shadowContainerPrev2.style.display = "block"; // Caso contrário, exibe o shadow container
  
  }



  if (currentListIndexMob2 === 2) {
    nextButtonmob3.style.display = "none";
  } else {
    nextButtonmob3.style.display = "block";
  }
});







  prevButtonmob3.addEventListener('click', () => {
    

  if (currentImageIndexImgMob === 0) {
    prevButtonmob3.style.display = "none"; // Oculta o botão "prev" quando o índice das imagens é 0
    shadowContainerPrev2.style.display = "none"; // Oculta o shadow container quando o índice das imagens é 0
  } else {
    prevButtonmob3.style.display = "block"; // Caso contrário, exibe o botão "prev"
    shadowContainerPrev2.style.display = "block"; // Caso contrário, exibe o shadow container
  }


  // Restante do código
});

// Restante do código




containerMob3.addEventListener('mouseover', () => {
  if (currentIndex2 > 0) {
    prevButtonmob3.style.display = "flex";
    shadowContainerPrev2.style.display = "flex";
    SvgSlideMobPrev2.style.display = "flex"
  }
});

containerMob3.addEventListener('mouseover', () => {
  if (currentImageIndex === 0) {
    prevButtonmob3.style.display = "none";
    shadowContainerPrev2.style.display = "none";
    SvgSlideMobPrev2.style.display = "none"
  }
});

containerMob3.addEventListener('mouseout', () => {
  prevButtonmob3.style.display = "none";
  shadowContainerPrev2.style.display = "none";
  SvgSlideMobPrev2.style.display = "none"
});

nextButtonmob3.addEventListener('click', () => {
  if (currentIndex2 === 0) {
   ; // Ajuste a posição conforme necessário
    SvgSlideMobPrev.style.display = 'flex';
   // Ajuste a posição conforme necessário
    shadowContainerPrev.style.display = 'flex';

    SvgSlideMobPrev2.style.display = "flex"
  }




  currentIndex2 += 3; // Incrementar o índice pelo número de imagens avançadas
  showHideArrows2();
});

// ...


// ...


function showHideArrows2() {
  if (currentIndex2 === 0) {
      prevButtonmob3.style.display = "none";
      shadowContainerPrev2.style.display = "none";
  } else {
      prevButtonmob3.style.display = "flex";
      shadowContainerPrev2.style.display = "flex";
  }

  if (currentIndex2 >= slidesMob3.length - 3) {
      nextButtonmob3.style.display = "none";
  } else {
      nextButtonmob3.style.display = "block";
  }
}


let timer2;

function showNextButton2() {
  nextButtonmob3.style.display = "flex";
  shadowContainer2.style.display = "flex";
  if (timer2) {
    clearTimeout(timer2);
  }
  timer2 = setTimeout(function () {
    nextButtonmob3.style.display = "none";
    shadowContainer2.style.display = "none";
  }, 30000); // 30 segundos
}

function hideNextButton2() {
  if (timer2) {
    clearTimeout(timer2);
  }
  timer2 = setTimeout(function () {
    nextButtonmob3.style.display = "none";
    shadowContainer2.style.display = "none";
  }, 0); // 1 segundo
}


// SECTION NOVOS LANÇAMENTOS MOBILE //


const novosLancamentosSection = document.getElementById("novosLancamentosSection");
const buttonVerMais = novosLancamentosSection.querySelector(".button-ver-mais");
const containerAnimes = novosLancamentosSection.querySelector(".container-animes");

let isExpanded = false;

function toggleItems() {
    const itens = containerAnimes.querySelectorAll(".father-div-ep");
    for (let i = 4; i < itens.length; i++) {
        if (!isExpanded) {
            itens[i].style.display = "none";
        } else {
            itens[i].style.display = "flex";
        }
    }
}

buttonVerMais.addEventListener("click", function () {
    isExpanded = !isExpanded;
    toggleItems();
    if (isExpanded) {
        buttonVerMais.innerText = "VER MENOS";
    } else {
        buttonVerMais.innerText = "VER MAIS";
    }
});

// Adicionar um listener de redimensionamento para ajustar o número de itens exibidos em telas menores
window.addEventListener("resize", function () {
    if (window.innerWidth <= 575) {
        toggleItems();
    } else {
        const itens = containerAnimes.querySelectorAll(".father-div-ep");
        for (let i = 0; i < itens.length; i++) {
            itens[i].style.display = "flex";
        }
    }
});


// FOOTER MOBILE //
const translateMob = document.querySelector(".text-translate-mob");
const DroptranslateMob = document.querySelector(".drop-translate-mob");
const SvgFechar = document.querySelector(".svg-fechar");

const body = document.querySelector('body');

SvgFechar.addEventListener("click", function(){
  DroptranslateMob.classList.remove("show");
  translateMob.classList.remove("active-hover");
  body.classList.remove("no-scroll");
});

translateMob.addEventListener("click", function(){
  if (DroptranslateMob.classList.contains("show")) {
    DroptranslateMob.classList.remove("show");
    translateMob.classList.remove("active-hover");
    body.classList.remove("no-scroll");
  } else {
    DroptranslateMob.classList.add("show");
    translateMob.classList.add("active-hover");
    body.classList.add("no-scroll");
  }
});

document.addEventListener("click", function(event) {
  if (!DroptranslateMob.contains(event.target) && !translateMob.contains(event.target)) {
    DroptranslateMob.classList.remove("show");
    translateMob.classList.remove("active-hover");
    body.classList.remove("no-scroll");
  }
});

if (DroptranslateMob.classList.contains("show")){
  body.classList.add("no-scroll");
  $navDropdown.removeClass("show")
  $newsDropdown2.removeClass("show")
  $navDropdown.removeClass("show")
  $newsDropdown.removeClass("show")
  $dropAccount.removeClass("active")
  $customDropdownMobile.removeClass("show")
  customDropdownTablet.classList.remove("show")
}