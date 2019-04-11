var stage = document.querySelector('.stage')
var photos = [
				'images/01.gif', 
				'images/02.png', 
				'images/03.gif', 
				'images/04.gif'
			]
var position = 0

var timeToNext = 3000 // 3 seconds

var image = document.createElement('img')
	image.setAttribute('src', photos[0])

	stage.appendChild(image)

var next = document.querySelector('.next')
var prev = document.querySelector('.prev')
var quantityPhotos = photos.length

next.addEventListener('click', function(){
	position++
	if(position >= quantityPhotos)
		position = 0

	image.setAttribute('src', photos[position])
})

prev.addEventListener('click', function(){
	position--
	if(position < 0)
		position = quantityPhotos-1

	image.setAttribute('src', photos[position])
})

setInterval(function(){
	position++
	if(position >= quantityPhotos)
		position = 0

	image.setAttribute('src', photos[position])
}, timeToNext)