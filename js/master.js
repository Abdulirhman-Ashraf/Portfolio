let card=document.querySelectorAll("#collection a")
let btn=document.querySelector("#show")


btn.addEventListener("click",function (){
    for(let i=3;i<6;i++){
        
        card[i].classList.toggle("showMore")
        card[i].classList.toggle("hidden")
        
    }
})
