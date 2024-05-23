/*
==========
Main
==========
*/


/*
==========
Main >> Accordion Section
==========
*/
const ACTITLE = document.querySelectorAll(".accordion_title");
const ACTITLEICONS = document.querySelectorAll(".accordion_title-icons");
const ACICONS = document.querySelectorAll(".ac_icons");

ACTITLE[0].addEventListener("click" , function() {
  ACTITLEICONS[0].classList.toggle("bg-black");
  ACICONS[0].classList.toggle("ac_icons-anime");
})
ACTITLE[1].addEventListener("click" , function() {
  ACTITLEICONS[1].classList.toggle("bg-black");
  ACICONS[1].classList.toggle("ac_icons-anime");
})
ACTITLE[2].addEventListener("click" , function() {
  ACTITLEICONS[2].classList.toggle("bg-black");
  ACICONS[2].classList.toggle("ac_icons-anime");
})