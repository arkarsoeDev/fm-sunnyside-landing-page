let navLinks = document.querySelector(".nav-links");
let navLink = document.querySelectorAll(".nav-link");
let navIcon = document.querySelector(".hamburger-icon");
let navArr = Array.from(navLink);

navIcon.addEventListener("click",function() {
    navLinks.classList.toggle('show');
})

navArr.forEach(el => {
    el.addEventListener('click',function() {
        removeActive();
        setTimeout(function() {
            navLinks.classList.toggle('show');
        },500)
        this.classList.add('active');
    })
})

function removeActive(){
    navArr.forEach(el => {
        el.classList.remove('active');
    })
}