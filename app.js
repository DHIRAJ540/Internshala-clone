const hamburger = document.getElementById('hamburger');
const navItems = document.querySelector('.nav-items');
const navItemsMini = document.querySelector('.nav-items-mini');

hamburger.addEventListener('click',() => {
    navItemsMini.classList.toggle('show');
})

// new Glide('.glide').mount();