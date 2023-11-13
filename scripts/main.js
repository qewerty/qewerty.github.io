const img = document.querySelector("img")

img.onclick = () => {
	if(img.getAttribute("src") === "images/cat.jpg") {
		img.setAttribute("src", "images/banner.jpg")
	}
	else {
		img.setAttribute("src", "images/cat.jpg")
	}
}

const h1 = document.querySelector("h1")
const changeUserButton = document.getElementById("change-user-button")

function setUserName() {
	const newName = prompt("Please enter your name.");
	if(!newName) {
		setUserName()
	}
	else {
		localStorage.setItem("name", newName)
		h1.textContent = `Hi, ${newName}`
	}
}

changeUserButton.onclick = setUserName

const userName = localStorage.getItem("name")
if(!userName) {
	setUserName()
}
else {
	h1.textContent = `Hi, ${userName}`
}