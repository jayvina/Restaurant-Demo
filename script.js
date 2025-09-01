const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const links = navLinks.querySelectorAll('a');

mobileMenu.addEventListener('click', () =>{
    navLinks.classList.toggle('active');
})

links.forEach(link => {
    link.addEventListener('click', () =>{
        navLinks.classList.remove('active')
    })
})

