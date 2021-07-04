b1 = document.querySelector('.b1')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
navright = document.querySelector('.nav-right')

b1.addEventListener('click', () =>{
    navright.classList.toggle('v-resp')
    navlist.classList.toggle('v-resp')
    navbar.classList.toggle('h-resp')
})
