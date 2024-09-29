const button = document.querySelector("#button1")
const butt = document.querySelector("#butt")
let sht = document.querySelector("#sheetTest")

button.onclick = goStore
butt.onclick = changeSheet

// function change() {
// 	button.innerText = "Clicked"
// }

function goStore() {
	// console.log("Going to store.")
	button1.innerText = "Clicked"
}

function changeSheet() {
	// console.log("trying to change stylesheet")
	butt.innerText = "Clicked"
	sht.href = "test2.css"
}