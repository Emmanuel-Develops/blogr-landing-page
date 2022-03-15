const hamburgerMenu = document.querySelector('.hamburger-container')
const menuLinks = document.querySelector('.menu-links')
const menuItem = document.querySelectorAll('.menu-link li')


hamburgerMenu.addEventListener('click', function() {
    menuLinks.classList.toggle('show-menu')
    hamburgerMenu.classList.toggle('close')
})

// menuItem.addEventListener('click', function() {
    
// })
