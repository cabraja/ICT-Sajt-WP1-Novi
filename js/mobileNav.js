const buttonOpen = document.getElementById("open-nav");
const buttonClose = document.getElementById("close-nav");
const navAlt = document.getElementById("nav-alt-wrapper");

buttonOpen.addEventListener("click",() => {
    navAlt.style.transform = "translateX(0%)";
})

buttonClose.addEventListener("click",() =>{
    navAlt.style.transform = "translateX(100%)";
})