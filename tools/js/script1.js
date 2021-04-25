document.addEventListener('DOMContentLoaded', () => {

	// By default, submit button is disabled
	document.querySelector('#submit').disabled = true;

	// Enable button only if there is text in the input field
	document.querySelector('#task').onkeyup = () => {

		if (document.querySelector('#task').value.length > 0)
			document.querySelector('#submit').disabled = false;
		else
			document.querySelector('#submit').disabled = true;
	};

		document.querySelector('#todolist').onsubmit = () => {

		//Create new item for list
		const li = document.createElement('li');
		li.innerHTML = document.querySelector('#task').value;

		//Add new task to list
		document.querySelector('#tasks').append(li);

		//clear input field
		document.querySelector('#task').value = '';

			// Disable button again after submit
		document.querySelector('#submit').disabled = true;

		//Stop form from submitting
		return false;
	};
});
