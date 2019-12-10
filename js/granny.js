"use strict"
// header
const Opacity = document.querySelector(".opaci");
document.getElementsByClassName("axtar")[0].onclick = function () {
    Opacity.classList.add("gosder");
} 
document.getElementsByClassName("times")[0].onclick = function () {
    Opacity.classList.remove("gosder");
}

const Bartop=document.querySelector(".bartop");
document.getElementsByClassName("bar")[0].onclick=function(){
    Bartop.classList.add("bargosder");
}
document.getElementsByClassName("close")[0].onclick=function(){
    Bartop.classList.remove("bargosder");
}

document.getElementsByClassName("hover1")[0].onmousemove=function(){
    document.getElementsByClassName("home")[0].style="z-index:900"
}




// hello
 
var array=[...document.getElementsByClassName("myli")]

array.forEach(function(secilen){
secilen.addEventListener("click", function(){
    var preactive=document.querySelector(".myli.activea");
    preactive.classList.remove("activea");
    secilen.classList.add("activea");
})
})

document.getElementsByClassName("about")[0].onclick=function(e){
    document.querySelector(".food2").style.display="none"
    document.querySelector(".food3").style.display="none"
    document.querySelector(".food4").style.display="none"
    document.querySelector(".food1").style.display="block"
}

document.getElementsByClassName("history")[0].onclick=function(){
    document.querySelector(".food1").style.display="none"
    document.querySelector(".food3").style.display="none"
    document.querySelector(".food4").style.display="none"
    document.querySelector(".food2").style.display="block"
}

document.getElementsByClassName("awards")[0].onclick=function(){
    document.querySelector(".food1").style.display="none"
    document.querySelector(".food2").style.display="none"
    document.querySelector(".food4").style.display="none"
    document.querySelector(".food3").style.display="block"
}

document.getElementsByClassName("chefs")[0].onclick=function(){
    document.querySelector(".food1").style.display="none"
    document.querySelector(".food3").style.display="none"
    document.querySelector(".food4").style.display="none"
    document.querySelector(".food4").style.display="block"
}

// meals meal1
const Filletsclick=document.querySelector(".filletsclick");
document.getElementsByClassName("filletimg")[0].onclick=function(){
    Filletsclick.classList.add("filletgosder");
}
document.getElementsByClassName("filletclosed")[0].onclick=function(){
    Filletsclick.classList.remove("filletgosder");
}

const Paellasclick=document.querySelector(".paellasclick");
document.getElementsByClassName("paellaimg")[0].onclick=function(){
    Paellasclick.classList.add("paellagosder");
}
document.getElementsByClassName("paellaclosed")[0].onclick=function(){
    Paellasclick.classList.remove("paellagosder")
}

const Breastsclick=document.querySelector(".breastsclick");
document.getElementsByClassName("breastimg")[0].onclick=function(){
    Breastsclick.classList.add("breastgosder");
}
document.getElementsByClassName("breastclosed")[0].onclick=function(){
    Breastsclick.classList.remove("breastgosder")
}
const Seasclick=document.querySelector(".seasclick");
document.getElementsByClassName("seaimg")[0].onclick=function(){
    Seasclick.classList.add("seagosder");
}
document.getElementsByClassName("seaclosed")[0].onclick=function(){
    Seasclick.classList.remove("seagosder")
}
const Paprikasclick=document.querySelector(".paprikasclick");
document.getElementsByClassName("paprikaimg")[0].onclick=function(){
    Paprikasclick.classList.add("paprikagosder");
}
document.getElementsByClassName("paprikaclosed")[0].onclick=function(){
    Paprikasclick.classList.remove("paprikagosder")
}
const Steaksclick=document.querySelector(".steaksclick");
document.getElementsByClassName("steakimg")[0].onclick=function(){
    Steaksclick.classList.add("steakgosder");
}
document.getElementsByClassName("steakclosed")[0].onclick=function(){
    Steaksclick.classList.remove("steakgosder")
}


// meals meal2

const Filletsclick2=document.querySelector(".filletsclick2");
document.getElementsByClassName("filletimg2")[0].onclick=function(){
    Filletsclick2.classList.add("filletgosder2");
}
document.getElementsByClassName("filletclosed2")[0].onclick=function(){
    Filletsclick2.classList.remove("filletgosder2");
}

const Paellasclick2=document.querySelector(".paellasclick2");
document.getElementsByClassName("paellaimg2")[0].onclick=function(){
    Paellasclick2.classList.add("paellagosder2");
}
document.getElementsByClassName("paellaclosed2")[0].onclick=function(){
    Paellasclick2.classList.remove("paellagosder2")
}

const Breastsclick2=document.querySelector(".breastsclick2");
document.getElementsByClassName("breastimg2")[0].onclick=function(){
    Breastsclick2.classList.add("breastgosder2");
}
document.getElementsByClassName("breastclosed2")[0].onclick=function(){
    Breastsclick2.classList.remove("breastgosder2")
}
const Seasclick2=document.querySelector(".seasclick2");
document.getElementsByClassName("seaimg2")[0].onclick=function(){
    Seasclick2.classList.add("seagosder2");
}
document.getElementsByClassName("seaclosed2")[0].onclick=function(){
    Seasclick2.classList.remove("seagosder2")
}
const Paprikasclick2=document.querySelector(".paprikasclick2");
document.getElementsByClassName("paprikaimg2")[0].onclick=function(){
    Paprikasclick2.classList.add("paprikagosder2");
}
document.getElementsByClassName("paprikaclosed2")[0].onclick=function(){
    Paprikasclick2.classList.remove("paprikagosder2")
}
const Steaksclick2=document.querySelector(".steaksclick2");
document.getElementsByClassName("steakimg2")[0].onclick=function(){
    Steaksclick2.classList.add("steakgosder2");
}
document.getElementsByClassName("steakclosed2")[0].onclick=function(){
    Steaksclick2.classList.remove("steakgosder2")
}


// meals meal3
var array=[...document.getElementsByClassName("mylis")]

array.forEach(function(secilen){
secilen.addEventListener("click", function(){
    var preactive=document.querySelector(".mylis.activea");
    preactive.classList.remove("activea");
    secilen.classList.add("activea");
})
})





const Filletsclick3=document.querySelector(".filletsclick3");
document.getElementsByClassName("filletimg3")[0].onclick=function(){
    Filletsclick3.classList.add("filletgosder3");
}
document.getElementsByClassName("filletclosed3")[0].onclick=function(){
    Filletsclick3.classList.remove("filletgosder3");
}

const Paellasclick3=document.querySelector(".paellasclick3");
document.getElementsByClassName("paellaimg3")[0].onclick=function(){
    Paellasclick3.classList.add("paellagosder3");
}
document.getElementsByClassName("paellaclosed3")[0].onclick=function(){
    Paellasclick3.classList.remove("paellagosder3")
}

const Breastsclick3=document.querySelector(".breastsclick3");
document.getElementsByClassName("breastimg3")[0].onclick=function(){
    Breastsclick3.classList.add("breastgosder3");
}
document.getElementsByClassName("breastclosed3")[0].onclick=function(){
    Breastsclick3.classList.remove("breastgosder3")
}
const Seasclick3=document.querySelector(".seasclick3");
document.getElementsByClassName("seaimg3")[0].onclick=function(){
    Seasclick3.classList.add("seagosder3");
}
document.getElementsByClassName("seaclosed3")[0].onclick=function(){
    Seasclick3.classList.remove("seagosder3")
}
const Paprikasclick3=document.querySelector(".paprikasclick3");
document.getElementsByClassName("paprikaimg3")[0].onclick=function(){
    Paprikasclick3.classList.add("paprikagosder3");
}
document.getElementsByClassName("paprikaclosed3")[0].onclick=function(){
    Paprikasclick3.classList.remove("paprikagosder3")
}
const Steaksclick3=document.querySelector(".steaksclick3");
document.getElementsByClassName("steakimg3")[0].onclick=function(){
    Steaksclick3.classList.add("steakgosder3");
}
document.getElementsByClassName("steakclosed3")[0].onclick=function(){
    Steaksclick3.classList.remove("steakgosder3")
}



// meals meal4

const Filletsclick4=document.querySelector(".filletsclick4");
document.getElementsByClassName("filletimg4")[0].onclick=function(){
    Filletsclick4.classList.add("filletgosder4");
}
document.getElementsByClassName("filletclosed4")[0].onclick=function(){
    Filletsclick4.classList.remove("filletgosder4");
}

const Paellasclick4=document.querySelector(".paellasclick4");
document.getElementsByClassName("paellaimg4")[0].onclick=function(){
    Paellasclick4.classList.add("paellagosder4");
}
document.getElementsByClassName("paellaclosed4")[0].onclick=function(){
    Paellasclick4.classList.remove("paellagosder4")
}

const Breastsclick4=document.querySelector(".breastsclick4");
document.getElementsByClassName("breastimg4")[0].onclick=function(){
    Breastsclick4.classList.add("breastgosder4");
}
document.getElementsByClassName("breastclosed4")[0].onclick=function(){
    Breastsclick4.classList.remove("breastgosder4")
}
const Seasclick4=document.querySelector(".seasclick4");
document.getElementsByClassName("seaimg4")[0].onclick=function(){
    Seasclick4.classList.add("seagosder4");
}
document.getElementsByClassName("seaclosed4")[0].onclick=function(){
    Seasclick4.classList.remove("seagosder4")
}
const Paprikasclick4=document.querySelector(".paprikasclick4");
document.getElementsByClassName("paprikaimg4")[0].onclick=function(){
    Paprikasclick4.classList.add("paprikagosder4");
}
document.getElementsByClassName("paprikaclosed4")[0].onclick=function(){
    Paprikasclick4.classList.remove("paprikagosder4")
}
const Steaksclick4=document.querySelector(".steaksclick4");
document.getElementsByClassName("steakimg4")[0].onclick=function(){
    Steaksclick4.classList.add("steakgosder4");
}
document.getElementsByClassName("steakclosed4")[0].onclick=function(){
    Steaksclick4.classList.remove("steakgosder4")
}

//meals gallery
document.getElementsByClassName("lunch")[0].onclick=function(e){
    document.querySelector(".meal2").style.display="none"
    document.querySelector(".meal3").style.display="none"
    document.querySelector(".meal4").style.display="none"
    document.querySelector(".meal1").style.display="block"
}

document.getElementsByClassName("dinner")[0].onclick=function(){
    document.querySelector(".meal1").style.display="none"
    document.querySelector(".meal3").style.display="none"
    document.querySelector(".meal4").style.display="none"
    document.querySelector(".meal2").style.display="block"
}

document.getElementsByClassName("dessert")[0].onclick=function(){
    document.querySelector(".meal1").style.display="none"
    document.querySelector(".meal2").style.display="none"
    document.querySelector(".meal4").style.display="none"
    document.querySelector(".meal3").style.display="block"
}

document.getElementsByClassName("drinks")[0].onclick=function(){
    document.querySelector(".meal1").style.display="none"
    document.querySelector(".meal3").style.display="none"
    document.querySelector(".meal4").style.display="none"
    document.querySelector(".meal4").style.display="block"
}


//backgroundslider
$(document).ready(function(){
    $('.slaytlar').slick({
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows:false,
    });
  });

  $(document).ready(function(){
    $('.sliders').slick({
        arrows:false,
        dots: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
  });


AOS.init();