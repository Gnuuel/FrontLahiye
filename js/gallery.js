 //galleryhtml allmenu
 var array=[...document.getElementsByClassName("mylist")]

 array.forEach(function(secilen){
   secilen.addEventListener("click", function(){
       var preactive=document.querySelector(".mylist.activeall");
       preactive.classList.remove("activeall");
       secilen.classList.add("activeall");
   })
   })

document.getElementsByClassName("all")[0].onclick=function(){
    
    document.querySelector(".allmenu2").style.display="none"
    document.querySelector(".allmenu3").style.display="none"
    document.querySelector(".allmenu4").style.display="none"
    document.querySelector(".allmenu1").style.display="block"
}

document.getElementsByClassName("clients")[0].onclick=function(){
    document.querySelector(".allmenu1").style.display="none"
    document.querySelector(".allmenu3").style.display="none"
    document.querySelector(".allmenu4").style.display="none"
    document.querySelector(".allmenu2").style.display="block"
}

document.getElementsByClassName("restaurant")[0].onclick=function(){
    document.querySelector(".allmenu1").style.display="none"
    document.querySelector(".allmenu2").style.display="none"
    document.querySelector(".allmenu4").style.display="none"
    document.querySelector(".allmenu3").style.display="block"
}

document.getElementsByClassName("staff")[0].onclick=function(){
    document.querySelector(".allmenu1").style.display="none"
    document.querySelector(".allmenu3").style.display="none"
    document.querySelector(".allmenu4").style.display="none"
    document.querySelector(".allmenu4").style.display="block"
}
