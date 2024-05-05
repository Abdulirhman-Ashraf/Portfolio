let card = document.querySelectorAll("#collection a");
let btn = document.querySelector("#show");
// navbar for mobile
let btnMenu = document.querySelector(".menu");

let uls = document.querySelector("ul");

btnMenu.addEventListener("click",function(){
    uls.classList.toggle("toggleMeu")
})

btn.addEventListener("click", function show() {
  if ((btn.innerHTML == "Show more")) {
    btn.innerHTML = "Hide";
  } 
  else if ((btn.innerHTML == "Hide")) {
    btn.innerHTML = "Show more";
  }

  for (let i = 3; i < 6; i++) {
    card[i].classList.toggle("showMore");
    card[i].classList.toggle("hidden");
  }
});

