const burger = document.querySelector('.burger')
const brgSpan = document.querySelectorAll('.burger span')
const nav = document.querySelector('nav')
const welcomeImg = document.querySelector('.welcome_img img')
const about = document.querySelector('.about_cv')
const card = document.querySelectorAll('.card')


burger.addEventListener('click',()=>{
	brgSpan[0].classList.toggle('brg_one')
	brgSpan[1].classList.toggle('brg_two')
	brgSpan[2].classList.toggle('brg_thee')
	nav.classList.toggle('nav_hidden')
})
