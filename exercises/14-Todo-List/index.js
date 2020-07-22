// Your code here

function deleteTask() {
	let elements = document.querySelectorAll(".fa-trash");
	console.log(elements);
	elements.forEach(item => {
		item.addEventListener("click", function(e) {
			let deletedItem = e.target.parentNode.parentNode;
			deletedItem.parentNode.removeChild(deletedItem);
		});
	});
}

window.addTask = function addTask(event) {
	if (event.keyCode == 13) {
		let newTask = event.target.value;
		let newEntry = document.createElement("li");
		newEntry.innerHTML = `<span><i class="fa fa-trash"></i></span> ${newTask}`;
		document.querySelector("ul").appendChild(newEntry);
		document.querySelector("#addToDo").value = null;
		deleteTask();
	}
};

deleteTask();
