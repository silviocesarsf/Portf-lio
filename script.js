const menu = document.querySelector('.menu')
const cv = document.querySelector('.cv')
const menuMob = document.querySelector('.menu-mob')
const menuClose = document.querySelector('.menu-close')
const offBtn = document.querySelector('.off-btn')
const menuBg = document.querySelector('.menu-bg')
const textMenu = document.querySelector('.text-menu')
const btnAirPlane = document.querySelector('.btn-airplane')
const airPlane = document.querySelector('.airplane')

// Menu responsivo

menuMob.addEventListener('click', () => {
    menu.classList.toggle('off-menu')
    menu.style.animation = 'menuMob .5s ease-in'
    menuBg.classList.toggle('off-menu')
    menuBg.style.animation = 'fadeIn .4s ease'
    menuMob.classList.toggle('off-menu')
    menuClose.classList.toggle('off-menu')
    setTimeout(() => {
        textMenu.classList.toggle('off-menu')
        textMenu.style.animation = 'text 1s'
    },600)
})

menuClose.addEventListener('click', () => {
    menu.classList.add('off-menu')
    menu.style.animation = 'menuMobClose .5s ease'
    menuClose.classList.toggle('off-menu')
    menuMob.classList.toggle('off-menu')
    menuBg.classList.toggle('off-menu')
    menuBg.style.animation = 'fadeOut .4s ease'
    textMenu.classList.toggle('off-menu')
    textMenu.style.animation = ''
})

// Animação

btnAirPlane.addEventListener('mouseover', () => {
    airPlane.style.animation = 'airplane .5s ease-in normal'
    btnAirPlane.addEventListener('animationend', () => {
        airPlane.style.animation = 'fadeIn .8s ease-in normal'
    } )
})