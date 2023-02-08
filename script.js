const menu = document.querySelector('.menu')
const cv = document.querySelector('.cv')
const menuMob = document.querySelector('.menu-mob')
const menuClose = document.querySelector('.menu-close')
const offBtn = document.querySelector('.off-btn')

menuMob.addEventListener('click', () => {
    menu.classList.toggle('on-menu')
    menuMob.classList.toggle('off-menu')
    menuClose.classList.toggle('on-menu')
    menuClose.style.animation = 'menuClose 2s ease-in-out none'
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('on-menu')
    menuClose.classList.remove('on-menu')
    menuMob.classList.remove('off-menu')
})