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
const ACCORDIONCAPTIONS = document.querySelectorAll(".accordion_captions");
const ACTITLEICONS = document.querySelectorAll(".accordion_title-icons");
const ACICONS = document.querySelectorAll(".ac_icons");
const SHOWMORE = document.querySelectorAll(".showMore");
const SHOWLESS = document.querySelectorAll(".showLess");
const ACCAPTIONHIDE = document.querySelectorAll(".accordion_caption-more");

ACTITLE[0].addEventListener("click" , function() {
  ACCORDIONCAPTIONS[0].classList.toggle("accordion_captions--open");
  ACTITLEICONS[0].classList.toggle("bg-black");
  ACICONS[0].classList.toggle("ac_icons-anime");
})
ACTITLE[1].addEventListener("click" , function() {
  ACCORDIONCAPTIONS[1].classList.toggle("accordion_captions--open");
  ACTITLEICONS[1].classList.toggle("bg-black");
  ACICONS[1].classList.toggle("ac_icons-anime");
})
ACTITLE[2].addEventListener("click" , function() {
  ACCORDIONCAPTIONS[2].classList.toggle("accordion_captions--open");
  ACTITLEICONS[2].classList.toggle("bg-black");
  ACICONS[2].classList.toggle("ac_icons-anime");
})

SHOWMORE[0].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[0].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[0].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[0].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[0].classList.add("accordion_caption-more-showhide");
    SHOWMORE[0].textContent = "Show Less";
  }
  
})

SHOWMORE[1].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[1].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[1].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[1].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[1].classList.add("accordion_caption-more-showhide");
    SHOWMORE[1].textContent = "Show Less";
  }
  
})

SHOWMORE[2].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[2].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[2].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[2].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[2].classList.add("accordion_caption-more-showhide");
    SHOWMORE[2].textContent = "Show Less";
  }
  
})

SHOWMORE[3].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[3].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[3].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[3].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[3].classList.add("accordion_caption-more-showhide");
    SHOWMORE[3].textContent = "Show Less";
  }
  
})

SHOWMORE[4].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[4].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[4].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[4].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[4].classList.add("accordion_caption-more-showhide");
    SHOWMORE[4].textContent = "Show Less";
  }
  
})

SHOWMORE[5].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[5].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[5].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[5].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[5].classList.add("accordion_caption-more-showhide");
    SHOWMORE[5].textContent = "Show Less";
  }
  
})

SHOWMORE[6].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[6].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[6].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[6].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[6].classList.add("accordion_caption-more-showhide");
    SHOWMORE[6].textContent = "Show Less";
  }
  
})

SHOWMORE[7].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[7].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[7].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[7].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[7].classList.add("accordion_caption-more-showhide");
    SHOWMORE[7].textContent = "Show Less";
  }
  
})

SHOWMORE[8].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[8].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[8].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[8].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[8].classList.add("accordion_caption-more-showhide");
    SHOWMORE[8].textContent = "Show Less";
  }
  
})

SHOWMORE[9].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[9].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[9].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[9].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[9].classList.add("accordion_caption-more-showhide");
    SHOWMORE[9].textContent = "Show Less";
  }
  
})

SHOWMORE[10].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[10].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[10].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[10].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[10].classList.add("accordion_caption-more-showhide");
    SHOWMORE[10].textContent = "Show Less";
  }
  
})

SHOWMORE[11].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[11].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[11].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[11].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[11].classList.add("accordion_caption-more-showhide");
    SHOWMORE[11].textContent = "Show Less";
  }
  
})

SHOWMORE[12].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[12].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[12].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[12].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[12].classList.add("accordion_caption-more-showhide");
    SHOWMORE[12].textContent = "Show Less";
  }
  
})

SHOWMORE[13].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[13].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[13].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[13].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[13].classList.add("accordion_caption-more-showhide");
    SHOWMORE[13].textContent = "Show Less";
  }
  
})

SHOWMORE[14].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[14].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[14].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[14].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[14].classList.add("accordion_caption-more-showhide");
    SHOWMORE[14].textContent = "Show Less";
  }
  
})

SHOWMORE[15].addEventListener("click" , function() {
  if (ACCAPTIONHIDE[15].classList.contains("accordion_caption-more-showhide")) {
    ACCAPTIONHIDE[15].classList.remove("accordion_caption-more-showhide");
    SHOWMORE[15].textContent = "Show More";
  }
  else {
    ACCAPTIONHIDE[15].classList.add("accordion_caption-more-showhide");
    SHOWMORE[15].textContent = "Show Less";
  }
  
})