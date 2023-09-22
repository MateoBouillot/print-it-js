const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let bannerImg = document.querySelector(".banner-img")
let bannerTxt = document.querySelector("#banner p")
let dots = document.querySelector(".dots")
let slideNbr = 0


for (let i=0; i<slides.length; i++) {
	let dot = '<div class="dot"></div>'
	dots.innerHTML += dot
}
let dot = document.querySelectorAll(".dot")
console.log(dot)
dot[0].classList.add("dot_selected")

const arrowLeft = document.querySelector(".arrow_left")

arrowLeft.addEventListener("click", () => {
	dot[slideNbr].classList.remove("dot_selected")
	if (slideNbr===0){
		slideNbr = slides.length - 1
	} else {
		slideNbr--
	}
	bannerImg.src= `./assets/images/slideshow/${slides[slideNbr].image}`
	bannerTxt.innerHTML=`${slides[slideNbr].tagLine}`
	
	dot[slideNbr].classList.add("dot_selected") 
})

const arrowRight = document.querySelector(".arrow_right")

arrowRight.addEventListener("click", () => {})


arrowRight.addEventListener("click", () => {
	dot[slideNbr].classList.remove("dot_selected")
	if (slideNbr===slides.length - 1){
		slideNbr = 0
	} else {
		slideNbr++
	}	
	bannerImg.src= `./assets/images/slideshow/${slides[slideNbr].image}`
	bannerTxt.innerHTML=`${slides[slideNbr].tagLine}` 
	
	dot[slideNbr].classList.add("dot_selected")
})
