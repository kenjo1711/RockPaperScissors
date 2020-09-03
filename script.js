/*
All input boxes should not be empty
Firstname should not be less than 1 character
Lastname should not be less than 1 character
Username should be greater than 8 characters
Password should be greater than 8 characters
Password and Confirm Password should match
*/


// document.getElementById('register').onclick = function() {
// 	alert('Hey')
// }

document.getElementById('register').addEventListener('click', function(e) {
	let first = document.getElementById('first').value
	let last = document.getElementById('last').value
	let username = document.querySelector('#username').value
	let email = document.querySelector('#email').value
	let pass = document.getElementById('pass').value
	let cpass = document.getElementById('cpass').value
	let gender = document.querySelector('#gen').value

	let errors = 0;

	e.preventDefault()

	console.log(username)
	console.log(first)
	console.log(last)
	console.log(email)
	console.log(username)
	console.log(pass)
	console.log(cpass)
	console.log(gender)

	if(first.length < 1) {
		errors++
		document.getElementById('first').nextElementSibling.innerHTML = 'First name is required'
		setTimeout(function() {
			document.getElementById('first').nextElementSibling.innerHTML = ""
		}, 5000)
	}

	if(last.length < 1) {
		errors++
		document.getElementById('last').nextElementSibling.innerHTML = 'Last name is required'
		setTimeout(function() {
			document.getElementById('last').nextElementSibling.innerHTML = ""
		}, 5000)
	}

	if(username.length < 8) {
		errors++
		document.querySelector('#username').nextElementSibling.innerHTML = 'Username is required'
		setTimeout(function() {
			document.querySelector('#username').nextElementSibling.innerHTML = ""
		}, 5000)
	}

	if(pass.length < 8) {
		errors++
		document.getElementById('pass').nextElementSibling.innerHTML = 'Password is too short'
		setTimeout(function() {
			document.getElementById('pass').nextElementSibling.innerHTML = ""
		}, 5000)
	}

	if(cpass.length < 8) {
		errors++
		document.getElementById('cpass').nextElementSibling.innerHTML = 'Password is too short'
		setTimeout(function() {
			document.getElementById('cpass').nextElementSibling.innerHTML = ""
		}, 5000)
	}

	if(pass != cpass) {
		errors++
		document.getElementById('pwd').innerHTML = 'Password does not match'
		setTimeout(function() {
			document.getElementById('pwd').nextElementSibling.innerHTML = ""
		}, 5000)
	}

	if(errors > 0) {
		alert('Registration Failed')
		return false
	} else {
		alert('Registration Successful')

		if(gender == "Male") {
			document.querySelector('#fullname').innerHTML = "Hello There " + 'Mr. ' + first + " " + last
		} else {
			document.querySelector('#fullname').innerHTML = "Hello There " + 'Ms. ' + first + " " + last
		}
	}

})


/*SYNTAX
setTimeout(function(){}, 5000)

*/