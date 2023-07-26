document.addEventListener("DOMContentLoaded", () => {
	setDisabled(true);

	var data = new Map();

	var Lists = ["todo", "notodo"];
	Lists.forEach(load);

	function load(listName) {
		document.querySelector('#' + listName).addEventListener("click", () => addTask(listName));
		if (!localStorage.getItem(listName))
			localStorage.setItem(listName, JSON.stringify([]));
		else {
			data[listName] = JSON.parse(localStorage.getItem(listName));
			for (var i = 0; i < data[listName].length; i++) {

				const div = document.createElement("div");
				div.classList.add("row");

				var html_identefier = "." + listName + "__list";
				document.querySelector(html_identefier).append(div);

				taskName = data[listName][i];

				const li = createTask(taskName);
				li.classList.add("col-md-10");

				const bin = getBinElement();
				bin.addEventListener("click", () => removeTask(div, listName));

				const pencil = getPencilElement();
				pencil.addEventListener('click', () => editTask(div, listName));

				const last_div = document.querySelector(html_identefier + " > div:last-child");
				last_div.append(li);
				last_div.append(pencil);
				last_div.append(bin);
			}
		}
	}

	document.querySelector("#task").onkeyup = () => {
		if (document.querySelector("#task").value.trim().length > 0)
			setDisabled(false);
		else
			setDisabled(true);
	}

	function setDisabled(value) {
		for (i in Lists) {
			document.querySelector('#' + Lists[i]).disabled = value;
		}
	}

	// document.querySelectorAll(".remove").onclick = () => {
	// 	console.log("bin");
	// };

	// document.querySelectorAll(".edit").onclick = () => {
	// 	console.log("pencil");
	// };

	// document.querySelectorAll(".check").onclick = () => {
	// console.log("check");
	// };


	function addTask(listName) {
		html_attribute = "." + listName + "__list";
		taskName = document.querySelector("#task").value.trim();

		const div = document.createElement("div");
		div.classList.add("row");
		document.querySelector(html_attribute).append(div);

		const li = createTask(taskName);
		li.classList.add("col-md-10");

		const bin = getBinElement()
		bin.addEventListener("click", () => removeTask(div, listName));

		const pencil = getPencilElement()
		pencil.addEventListener('click', () => editTask(div, listName));

		const last_div = document.querySelector(html_attribute + " > div:last-child");

		last_div.append(li);
		last_div.append(pencil);
		last_div.append(bin);

		data[listName].push(String(taskName));
		localStorage.setItem(listName, JSON.stringify(data[listName]));

		setDisabled(true);

		document.querySelector("#task").value = "";

		return false;
	}

	function createTask(taskName) {
		var li = document.createElement("li");
		li.innerHTML = taskName;
		return li;
	}

	function editTask(div, listName) {
		value = div.childNodes[0].innerHTML;

		while (div.hasChildNodes()) {
			div.removeChild(div.lastChild);
		}

		const input = document.createElement("input");
		input.classList.add("col-md-10");
		input.classList.add("form-control");
		input.classList.add("form-control-md");
		input.classList.add("mt-1");
		input.classList.add("mb-1");
		input.value = value;
		input.placeholder = value;
		input.id = data[listName].indexOf(String(value));
		div.append(input);

		const check = getCheckElement();
		div.append(check);
		check.addEventListener("click", () => updateTask(div, listName));
	}

	function updateTask(div, listName) {
		input = div.childNodes[0];
		taskId = input.id;
		data[listName][taskId] = input.value;
		localStorage.setItem(listName, JSON.stringify(data[listName]));

		while (div.hasChildNodes()) {
			div.removeChild(div.lastChild);
		}

		taskName = data[listName][taskId]
		const li = createTask(taskName);
		li.classList.add("col-md-10");

		const bin = getBinElement();
		bin.addEventListener("click", () => removeTask(div, listName));

		const pencil = getPencilElement();
		pencil.addEventListener('click', () => editTask(div, listName));

		div.append(li);
		div.append(pencil);
		div.append(bin);
	}

	function removeTask(div, listName) {
		div.parentNode.removeChild(div);
		taskId = data[listName].indexOf(String(div.childNodes[0].innerHTML));
		data[listName].splice(taskId, 1);
		localStorage.setItem(listName, JSON.stringify(data[listName]));
	}

	function getCheckElement() {
		const check = document.createElement("i");
		check.classList.add("col-md-2");
		check.classList.add("far");
		check.classList.add("fa-check");
		check.classList.add("check");
		check.classList.add("m-auto");
		return check;
	}

	function getPencilElement() {
		const pencil = document.createElement("i");
		pencil.classList.add("col-md-1");
		pencil.classList.add("fa");
		pencil.classList.add("fa-pencil-alt");
		pencil.classList.add("edit");
		pencil.classList.add("mt-1");
		pencil.classList.add("mb-1");
		return pencil;
	}

	function getBinElement() {
		const bin = document.createElement("i");
		bin.classList.add("col-md-1");
		bin.classList.add("far");
		bin.classList.add("fa-trash-alt");
		bin.classList.add("remove");
		bin.classList.add("mt-1");
		bin.classList.add("mb-1");
		return bin;
	}
})