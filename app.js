console.log("hello");

const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu")
const menu = document.querySelector(".mainMenu");
const links = document.querySelector(".links")

openMenu.addEventListener("click", ()=> {
    menu.classList.add("active")
})
closeMenu.addEventListener("click", ()=> {
    menu.classList.remove("active")
})

links.forEach(el => {
    el.addEventListener('click',()=> {
        menu.classList.remove("active")
    })
});