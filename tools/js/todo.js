document.addEventListener("DOMContentLoaded", () => {
	setDisabled(true);

	var todoList = [];
	var notodoList = [];

	if (!localStorage.getItem("todoList"))
		localStorage.setItem("todoList", JSON.stringify(todoList));
	else {
		todoList = JSON.parse(localStorage.getItem("todoList"));

		for (var i = 0; i < todoList.length; i++) {

			taskName = todoList[i];

			const li = addTaskToList(taskName);
			document.querySelector(".todo__list").append(li);

			const taskId = i;
			li.value = taskId;

			const bin = document.createElement("i");
			bin.classList.add("far");
			bin.classList.add("fa-trash-alt");
			bin.classList.add("remove");
			bin.addEventListener("click", () => removeTaskFromList(li, taskId, "todo"));

			const pencil = document.createElement("i");
			pencil.classList.add("fas");
			pencil.classList.add("fa-pencil-alt");
			pencil.classList.add("edit");
			pencil.addEventListener('click', () => editTask(li, taskId));

			const last_li = document.querySelector(".todo__list > li:last-child");
			last_li.append(bin);
			last_li.append(pencil);
		}
	}

	if (!localStorage.getItem("notodoList"))
		localStorage.setItem("notodoList", JSON.stringify(notodoList));
	else {
		notodoList = JSON.parse(localStorage.getItem("notodoList"));
		
		for (var i = 0; i < notodoList.length; i++) {

			taskName = notodoList[i];

			const li = addTaskToList(taskName);
			document.querySelector(".notodo__list").append(li);

			const taskId = i;

			li.value = taskId;

			const bin = document.createElement("i");
			bin.classList.add("far");
			bin.classList.add("fa-trash-alt");
			bin.classList.add("remove");
			bin.addEventListener("click", () => removeTaskFromList(li, taskId, "notodo"));

			const pencil = document.createElement("i");
			pencil.classList.add("fas");
			pencil.classList.add("fa-pencil-alt");
			pencil.classList.add("edit");
			pencil.addEventListener('click', () => editTask(li, taskId));

			const last_li = document.querySelector(".notodo__list > li:last-child");
			last_li.append(bin);
			last_li.append(pencil);

		}
	}

	document.querySelector("#task").onkeyup = () => {
		if (document.querySelector("#task").value.trim().length > 0)
		  	setDisabled(false);
		else 
			setDisabled(true);
	};

	document.querySelector("#todo").onclick = () => {

		taskName = document.querySelector("#task").value.trim();
		
		const li = addTaskToList(taskName);
		document.querySelector(".todo__list").append(li);

		const taskId = todoList.length;
		console.log(taskId);
		
		li.value = taskId;

		const bin = document.createElement("i");
		bin.classList.add("far");
		bin.classList.add("fa-trash-alt");
		bin.classList.add("remove");
		bin.addEventListener("click", () => removeTaskFromList(li, taskId, "todo"));

		const pencil = document.createElement("i");
		pencil.classList.add("fas");
		pencil.classList.add("fa-pencil-alt");
		pencil.classList.add("edit");
		pencil.addEventListener('click', () => editTask(li, taskId));
		
		const last_li = document.querySelector(".todo__list > li:last-child");
		last_li.append(bin);
		last_li.append(pencil);

		todoList.push(String(taskName));
		localStorage.setItem("todoList", JSON.stringify(todoList));

		setDisabled(true);

		document.querySelector("#task").value = "";

		return false;
	};

	document.querySelector("#notodo").onclick = () => {
		
		taskName = document.querySelector("#task").value.trim();

		const li = addTaskToList(taskName);
		document.querySelector(".notodo__list").append(li);

		const taskId = notodoList.length;
		console.log(taskId);

		li.value = taskId;

		const bin = document.createElement("i");
		bin.classList.add("far");
		bin.classList.add("fa-trash-alt");
		bin.classList.add("remove");
		bin.addEventListener("click", () => removeTaskFromList(li, taskId, "notodo"));

		const pencil = document.createElement("i");
		pencil.classList.add("fas");
		pencil.classList.add("fa-pencil-alt");
		pencil.classList.add("edit");
		pencil.addEventListener('click', () => editTask(li, taskId));

		const last_li = document.querySelector(".notodo__list > li:last-child");
		last_li.append(bin);
		last_li.append(pencil);

		notodoList.push(String(task));
		localStorage.setItem("notodoList", JSON.stringify(notodoList));

		setDisabled(true);

		document.querySelector("#task").value = "";

		return false;
	};

	function setDisabled(value) {
		document.querySelector("#todo").disabled = value;
		document.querySelector("#notodo").disabled = value;
	}

	document.querySelectorAll(".remove").onclick = () => {
		console.log("bin");
  	};

	document.querySelectorAll(".edit").onclick = () => {
		console.log("pencil");
	};

  	function addTaskToList(taskName) {
		var li = document.createElement("li");
		li.innerHTML = taskName;
		return li;
  	}

  	function editTask(li, taskName) {
		if (input.disabled == true) 
			input.disabled = false;

		else {
			li.disabled = true;
			let indexOf = list.indexOf(taskName);
			list[indexOf] = input.value;
			localStorage.setItem(list, JSON.stringify(list));
		}
  	}

	function removeTaskFromList(li, taskId, list) {
		li.parentNode.removeChild(li);
		if (taskId >= 0) {

			if (list == "todo")
			{
				todoList.splice(taskId, 1);
				localStorage.setItem("todoList", JSON.stringify(todoList));
			}

			else if (list == "notodo")
			{
				notodoList.splice(taskId, 1);
				localStorage.setItem("notodoList", JSON.stringify(notodoList));
			}
		} 

		else 
			console.log("Index out of bound.!!");	
	}
});
