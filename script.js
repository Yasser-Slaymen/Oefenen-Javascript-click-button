const btn=document.querySelector(".btn1");
const element=document.querySelector("div");


btn.addEventListener("click",changcol);
function changcol (){
   element.classList.toggle("yay");

}

