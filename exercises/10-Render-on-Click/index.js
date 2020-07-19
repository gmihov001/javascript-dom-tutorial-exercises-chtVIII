let element = document.createElement("div");
element.innerHTML = "Hello World";
element.style.background = "yellow";
console.log(element);

let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	document.body.appendChild(element);
});
