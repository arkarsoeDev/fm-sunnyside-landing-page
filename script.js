let navLinks = document.querySelector(".nav-links");
let navLink = document.querySelectorAll(".nav-link");
let navIcon = document.querySelector(".hamburger-icon");
let navArr = Array.from(navLink);
let windowHeight = window.innerHeight;

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

let header = document.querySelector('#header');

window.onscroll = showRe;

function showRe(e) {
    if(window.pageYOffset > 200) {
        header.classList.add('active')
    } else if(window.pageYOffset < 200){
        if(header.classList.contains('active')){
            header.classList.remove('active');
            removeActive();
        }
    }
}