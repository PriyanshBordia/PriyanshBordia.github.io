document.addEventListener("DOMContentLoaded", () => {
	setDisabled(true);

	var todoList = [];
	var notodoList = [];

	["todo", "notodo"].forEach(load);

	function load(list) {
		if (!localStorage.getItem(list))
			localStorage.setItem(list, JSON.stringify([]));
		else {
			data = JSON.parse(localStorage.getItem(list));
			for (var i = 0; i < data.length; i++) {

				const div = document.createElement("div");
				div.classList.add("row");

				var html_identefier = "." + list + "__list";
				console.log(string);
				document.querySelector(string).append(div);

				taskName = data[i];

				const li = addTaskToList(taskName);
				li.classList.add("col-md-10");

				const bin = getBinElement();
				bin.addEventListener("click", () => removeTaskFromList(div, "todo"));

				const pencil = getPencilElement();
				pencil.addEventListener('click', () => editTask(div, "todo"));

				const last_div = document.querySelector(html_identefier + " > div:last-child");
				last_div.append(li);
				last_div.append(pencil);
				last_div.append(bin);
			}
		}
	};

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
		document.querySelector(".todo__list").append(div);

		const li = addTaskToList(taskName);
		li.classList.add("col-md-10");

		const bin = getBinElement()
		bin.addEventListener("click", () => removeTaskFromList(div, "todo"));

		const pencil = getPencilElement()
		pencil.addEventListener('click', () => editTask(div, "todo"));

		const last_div = document.querySelector(".todo__list > div:last-child");

		last_div.append(li);
		last_div.append(pencil);
		last_div.append(bin);

		todoList.push(String(taskName));
		localStorage.setItem("todo", JSON.stringify(todoList));

		setDisabled(true);

		document.querySelector("#task").value = "";

		return false;
	};

	document.querySelector("#notodo").onclick = () => {

		taskName = document.querySelector("#task").value.trim();

		const div = document.createElement("div");
		div.classList.add("row");
		document.querySelector(".notodo__list").append(div);

		const li = addTaskToList(taskName);
		li.classList.add("col-md-10");

		const bin = getBinElement();
		bin.addEventListener("click", () => removeTaskFromList(div, "notodo"));

		const pencil = getPencilElement();
		pencil.addEventListener('click', () => editTask(div, "notodo"));

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

	// document.querySelectorAll(".remove").onclick = () => {
	// 	console.log("bin");
	// };

	// document.querySelectorAll(".edit").onclick = () => {
	// 	console.log("pencil");
	// };

	document.querySelectorAll(".check").onclick = () => {
		console.log("check");
	};

	function addTaskToList(taskName) {
		var li = document.createElement("li");
		li.innerHTML = taskName;
		return li;
	}

	function editTask(div, list) {
		let children = [...div.childNodes];
		li = children[0]
		pencil = children[1];
		bin = children[2];

		while (div.hasChildNodes()) {
			div.removeChild(div.lastChild);
		};

		const input = document.createElement("input");
		input.classList.add("col-md-8");
		input.classList.add("form-control");
		input.classList.add("form-control-md");
		input.classList.add("mt-1");
		input.classList.add("mb-1");
		input.value = li.innerHTML;
		input.placeholder = li.innerHTML;
		div.append(input);

		const check = getCheckElement();
		div.append(check);
		check.addEventListener("click", () => updateTask(div, list));

		if (list == "todo") {
			todoList[taskId] = li.innerHTML;
			localStorage.setItem("todoList", JSON.stringify(todoList));
		}
		else if (list == "notodo") {
			notodoList[taskId] = li.innerHTML;
			localStorage.setItem("notodoList", JSON.stringify(notodoList));
		}
		else
			console.log("Incorrect List!");
	}

	function removeTaskFromList(div, list) {
		div.parentNode.removeChild(div);
		if (list == "todo") {
			taskId = todoList.indexOf(String(div.childNodes[0].innerHTML));
			todoList.splice(taskId, 1);
			localStorage.setItem("todoList", JSON.stringify(todoList));
		}
		else if (list == "notodo") {
			taskId = notodoList.indexOf(String(div.childNodes[0].innerHTML));
			notodoList.splice(taskId, 1);
			localStorage.setItem("notodoList", JSON.stringify(notodoList));
		}
		else
			console.log("Incorrect List.!!");
	};

	function getCheckElement() {
		const check = document.createElement("i");
		check.classList.add("col-md-4");
		check.classList.add("far");
		check.classList.add("fa-check");
		check.classList.add("check");
		check.classList.add("m-auto");
		return check;
	};

	function getPencilElement() {
		const pencil = document.createElement("i");
		pencil.classList.add("col-md-1");
		pencil.classList.add("fa");
		pencil.classList.add("fa-pencil-alt");
		pencil.classList.add("edit");
		pencil.classList.add("mt-1");
		pencil.classList.add("mb-1");
		return pencil;
	};

	function getBinElement() {
		const bin = document.createElement("i");
		bin.classList.add("col-md-1");
		bin.classList.add("far");
		bin.classList.add("fa-trash-alt");
		bin.classList.add("remove");
		bin.classList.add("mt-1");
		bin.classList.add("mb-1");
		return bin;
	};
});
