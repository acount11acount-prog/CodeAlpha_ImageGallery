
const buttons = document.querySelectorAll(".filter-buttons button");
const images = document.querySelectorAll(".image-card");

buttons.forEach(button=>{
button.addEventListener("click",()=>{

const filter = button.getAttribute("data-filter");

images.forEach(img=>{

if(filter==="all" || img.classList.contains(filter)){
img.style.display="block";
}else{
img.style.display="none";
}

});

});
});


const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.querySelector(".close");

images.forEach(img=>{
img.addEventListener("click",()=>{
lightbox.style.display="flex";
lightboxImg.src = img.querySelector("img").src;
});
});

close.addEventListener("click",()=>{
lightbox.style.display="none";
});