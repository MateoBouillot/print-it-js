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
let dots = document.querySelectorAll(".dots .dot")
let slideNbr = 0

const arrowLeft = document.querySelector(".arrow_left")

arrowLeft.addEventListener("click", () => {
	dots[slideNbr].classList.remove("dot_selected")
	if (slideNbr===0){
		slideNbr = 3
	} else {
		slideNbr--
	}
	bannerImg.src= `./assets/images/slideshow/${slides[slideNbr].image}`
	bannerTxt.innerHTML=`${slides[slideNbr].tagLine}`
	
	dots[slideNbr].classList.add("dot_selected") 
})

const arrowRight = document.querySelector(".arrow_right")

arrowRight.addEventListener("click", () => {})


arrowRight.addEventListener("click", () => {
	dots[slideNbr].classList.remove("dot_selected")
	if (slideNbr===3){
		slideNbr = 0
	} else {
		slideNbr++
	}	
	bannerImg.src= `./assets/images/slideshow/${slides[slideNbr].image}`
	bannerTxt.innerHTML=`${slides[slideNbr].tagLine}` 
	
	dots[slideNbr].classList.add("dot_selected")
})
