const toggleBtn = document.querySelector('.toggle')
const menuItems = document.querySelector('.menu-items')
const header = document.querySelector('header')
let body = document.body;
let lastScroll = 0;

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('toggled')
    menuItems.classList.toggle('flipped')
})

let menuItemsChild = menuItems.children;
for(let val of menuItemsChild){
    val.addEventListener('click', () => {
        toggleBtn.classList.toggle('toggled')
        menuItems.classList.toggle('flipped')
    })
}    

    window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if(toggleBtn.classList.contains("toggled")){
        if(currentScroll === 0){
            header.style.setProperty("box-shadow", "none")
        }else if(currentScroll > 0){
            header.style.setProperty("box-shadow", "0 10px 30px -15px var(--navy-shadow)")
        }
        return
    }else{
        if(currentScroll <= 0){
            body.classList.remove("scroll-up")
            header.style.setProperty("box-shadow", "none")
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        } else if (
            currentScroll < lastScroll &&
            body.classList.contains("scroll-down")
        ){
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
            header.style.setProperty("box-shadow", "0 10px 30px -15px var(--navy-shadow)")
        }
        lastScroll = currentScroll;
    }
})
