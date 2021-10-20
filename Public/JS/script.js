// Counting Video on home page
let countVideo = document.querySelectorAll(".videoNo");
for(i in countVideo){
  countVideo[i].innerHTML = parseInt(i)+1;
}