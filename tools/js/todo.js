document.addEventListener("DOMContentLoaded", () => {
	setDisabled(true);

	var todoList = [];
	var notodoList = [];

	if (!localStorage.getItem("todoList"))
		localStorage.setItem("todoList", JSON.stringify(todoList));
	else {
		todoList = JSON.parse(localStorage.getItem("todoList"));
		for (var i = 0; i < todoList.length; i++) {

			const div = document.createElement("div");
			div.classList.add("row");
			const taskId = i;
			div.value = taskId;
			document.querySelector(".todo__list").append(div);

			taskName = todoList[i];

			const li = addTaskToList(taskName);
			li.classList.add("col-md-10");

			const bin = document.createElement("i");
			bin.classList.add("col-md-1");
			bin.classList.add("far");
			bin.classList.add("fa-trash-alt");
			bin.classList.add("remove");
			bin.addEventListener("click", () => removeTaskFromList(div, taskId, "todo"));

			const pencil = document.createElement("i");
			pencil.classList.add("col-md-1");
			pencil.classList.add("fas");
			pencil.classList.add("fa-pencil-alt");
			pencil.classList.add("edit");
			pencil.addEventListener('click', () => editTask(div, taskId, "todo"));

			const last_div = document.querySelector(".todo__list > div:last-child");
			
			last_div.append(li);
			last_div.append(pencil);
			last_div.append(bin);
		}
	}

	if (!localStorage.getItem("notodoList"))
		localStorage.setItem("notodoList", JSON.stringify(notodoList));
	else {
		notodoList = JSON.parse(localStorage.getItem("notodoList"));
		
		for (var i = 0; i < notodoList.length; i++) {

			const div = document.createElement("div");
			div.classList.add("row");
			const taskId = i;
			div.value = taskId;
			document.querySelector(".notodo__list").append(div);

			taskName = notodoList[i];

			const li = addTaskToList(taskName);
			li.classList.add("col-md-10");

			const bin = document.createElement("i");
			bin.classList.add("col-md-1");
			bin.classList.add("far");
			bin.classList.add("fa-trash-alt");
			bin.classList.add("remove");
			bin.addEventListener("click", () => removeTaskFromList(div, taskId, "notodo"));

			const pencil = document.createElement("i");
			pencil.classList.add("col-md-1");
			pencil.classList.add("fas");
			pencil.classList.add("fa-pencil-alt");
			pencil.classList.add("edit");
			pencil.addEventListener('click', () => editTask(div, taskId, "notodo"));

			const last_div = document.querySelector(".notodo__list > div:last-child");

			last_div.append(li);
			last_div.append(pencil);
			last_div.append(bin);
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
	
		const div = document.createElement("div");
		div.classList.add("row");
		const taskId = todoList.length;
		div.value = taskId;
		document.querySelector(".todo__list").append(div);

		const li = addTaskToList(taskName);
		li.classList.add("col-md-10");

		const bin = document.createElement("i");
		bin.classList.add("col-md-1");
		bin.classList.add("far");
		bin.classList.add("fa-trash-alt");
		bin.classList.add("remove");
		bin.addEventListener("click", () => removeTaskFromList(div, taskId, "todo"));

		const pencil = document.createElement("i");
		pencil.classList.add("col-md-1");
		pencil.classList.add("fas");
		pencil.classList.add("fa-pencil-alt");
		pencil.classList.add("edit");
		pencil.addEventListener('click', () => editTask(div, taskId, "todo"));
		
		const last_div = document.querySelector(".todo__list > div:last-child");
		
		last_div.append(li);
		last_div.append(pencil);
		last_div.append(bin);

		todoList.push(String(taskName));
		localStorage.setItem("todoList", JSON.stringify(todoList));

		setDisabled(true);

		document.querySelector("#task").value = "";

		return false;
	};

	document.querySelector("#notodo").onclick = () => {
		
		taskName = document.querySelector("#task").value.trim();

		const div = document.createElement("div");
		div.classList.add("row"); 
		const taskId = notodoList.length;
		div.value = taskId;
		document.querySelector(".notodo__list").append(div);

		const li = addTaskToList(taskName);
		li.classList.add("col-md-10");

		const bin = document.createElement("i");
		bin.classList.add("col-md-1");
		bin.classList.add("far");
		bin.classList.add("fa-trash-alt");
		bin.classList.add("remove");
		bin.addEventListener("click", () => removeTaskFromList(div, taskId, "notodo"));

		const pencil = document.createElement("i");
		pencil.classList.add("col-md-1");
		pencil.classList.add("fas");
		pencil.classList.add("fa-pencil-alt");
		pencil.classList.add("edit");
		pencil.addEventListener('click', () => editTask(div, taskId, "notodo"));

		const last_div = document.querySelector(".notodo__list > div:last-child");

		last_div.append(li);
		last_div.append(pencil);
		last_div.append(bin);

		notodoList.push(String(taskName));
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

  	function editTask(div, taskId, list) {
		if (li.disabled == true) 
			li.disabled = !li.disabled;

		else {
			li.disabled = !li.disabled;

			if (taskId >= 0) 
			{
				if (list == "todo") {
					todoList[taskId] = li.innerHTML;
					localStorage.setItem("todoList", JSON.stringify(todoList));
				}
				else if (list == "notodo") {
					notodoList[taskId] = li.innerHTML;
					localStorage.setItem("notodoList", JSON.stringify(notodoList));
				}
			}
			else
				console.log("Index out of bound.!!");
		}
  	}

	function removeTaskFromList(div, taskId, list) {
		div.parentNode.removeChild(div);
		if (taskId >= 0) 
		{
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
