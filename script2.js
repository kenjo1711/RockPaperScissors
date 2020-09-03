let rock = document.getElementById ('rock')
let paper = document.getElementById ('paper')
let scissors = document.getElementById ('scissors')
let comImg = document.getElementById('img-left')
let message = document.getElementById('message')
//0 = Rock && 1 = Paper && 2 = Scissors

// Rock
rock.addEventListener('click',()=> {
let com = Math.floor(Math.random() * 3)
	if (com == 0) {
		comImg.innerHTML = `<img src="./rock.png">`
		message.innerHTML = `<h1>You have a tie!</h1>`
	}
	if (com == 1) {
		comImg.innerHTML = `<img src="./paper.png">`
		message.innerHTML = `<h1>You Lost!</h1>`
	}
	if (com == 2) {
		comImg.innerHTML = `<img src="./scissors.png">`
		message.innerHTML = `<h1>You Won!</h1>`
	}
})


//Paper
paper.addEventListener('click',()=> {
let com = Math.floor(Math.random() * 3)

	if (com == 0) {
		comImg.innerHTML = `<img src="./paper.png">`
		message.innerHTML = `<h1>You have a tie!</h1>`
	}
	if (com == 1) {
		comImg.innerHTML = `<img src="./scissors.png">`
		message.innerHTML = `<h1>You Lost!</h1>`
	}
	if (com == 2) {
		comImg.innerHTML = `<img src="./rock.png">`
		message.innerHTML = `<h1>You Won!</h1>`
	}
})


//Scissors
scissors.addEventListener('click',()=> {
let com = Math.floor(Math.random() * 3)

	if (com == 0) {
		comImg.innerHTML = `<img src="./scissors.png">`
		message.innerHTML = `<h1>You have a tie!</h1>`
	}
	if (com == 1) {
		comImg.innerHTML = `<img src="./rock.png">`
		message.innerHTML = `<h1>You Lost!</h1>`
	}
	if (com == 2) {
		comImg.innerHTML = `<img src="./paper.png">`
		message.innerHTML = `<h1>You Won!</h1>`
	}
})