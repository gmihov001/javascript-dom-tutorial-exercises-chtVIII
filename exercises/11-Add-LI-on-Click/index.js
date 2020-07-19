let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	let list = document.querySelector("#myList");
	let element = document.createElement("li");
	element.innerHTML = "Fourth element";
	list.appendChild(element);
});
