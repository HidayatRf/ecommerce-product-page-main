const container = document.querySelector('.container')


const nav = document.querySelector('nav')
const opnNav = nav.querySelector('.open-nav')
const clsNav = nav.querySelector('.close-nav')
const navItem = nav.querySelector('.nav-items')
const cart = nav.querySelector('.cart')
const basket = document.querySelector('.basket')

let opened = true

cart.addEventListener('click', () => {
	if(opened) {
		basket.style.top = "100px"
		opened = false
	}else {
		basket.style.top = "-2000px"
		opened = true
	}
})

opnNav.addEventListener('click', () => {
	navItem.style.left = 0
})

clsNav.addEventListener('click', () => {
	navItem.style.left = "-1000px"
})

const header = document.querySelector('header')
const img = header.querySelector('.img-100')
const bNext = header.querySelector('.next')
const bPrv = header.querySelector('.prv')

let imgIndex = 0
const imgContainer = [
	"./images/image-product-1.jpg",	
	"./images/image-product-2.jpg",	
	"./images/image-product-3.jpg"	
]

function changeImg(type) {
	if(type == "-") {
		imgIndex -= 1
	}else{
		imgIndex += 1
	}
	
	if(imgIndex >= imgContainer.length) {
		imgIndex = 0
	}else if (imgIndex < 0) {
		imgIndex = 0
	}
	
	img.src = imgContainer[imgIndex]
}

bNext.addEventListener('click', () => {
	changeImg("+")
})

bPrv.addEventListener('click', () => {
	changeImg("-")
})

const main = document.querySelector('.main')
const plus = main.querySelector('.plus')
const count = main.querySelector('.count')
const minus = main.querySelector('.minus')
const addBtn = main.querySelector('button')
let countCart = 0

const info = basket.querySelector('.info')
const infoText = basket.querySelector('.info-text')

const content = basket.querySelector('.content')
const mainCost = content.querySelector('.main-cost')
const countCost = content.querySelector('.count-cost')
const resultCost = content.querySelector('.result')
const deleteBtn = basket.querySelector('.deleteImg')

plus.addEventListener('click', () => {
	countCart += 1
	count.innerHTML = countCart
})

minus.addEventListener('click', () => {
	countCart -= 1
	if(countCart <= 0 ) {
		countCart = 0
	}
	count.innerHTML = countCart
})

addBtn.addEventListener('click', () => {
	if(countCart <= 0) {
		alert('count cart is zero')
	}else {
		info.style.display = "none"
		content.style.display = "flex"
		
		let result = 0
		const arrMainCost = mainCost.innerHTML.split('')
		arrMainCost.shift()
		countCost.innerHTML = countCart
		result = Number(arrMainCost.join('')) * countCart
		resultCost.innerHTML = `$${result}`
	}
})

deleteBtn.addEventListener('click', () => {
	resultCost.innerHTML = 0
	countCost.innerHTML = 0
	content.style.display = "none"
	info.style.display = "flex"
})

window.addEventListener('load', () => {
	container.style.paddingTop = nav.clientHeight + "px"
})
