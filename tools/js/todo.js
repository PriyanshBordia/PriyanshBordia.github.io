document.addEventListener("DOMContentLoaded", () => {
  setDisabled(true);

  var todoList = new Array();
  var notodoList = new Array();

  if (!localStorage.getItem("todoList"))
    localStorage.setItem("todoList", JSON.stringify(todoList));
  else {
    todoList = JSON.parse(localStorage.getItem("todoList"));

    for (var i = 0; i < todoList.length; i++) {
      const li = addTaskToList(todoList[i]);
      document.querySelector(".todo__list").append(li);

      const last_li = document.querySelector(".todo__list > li:last-child");

      const bin = document.createElement("i");
      bin.className = "far fa-trash-alt";
      // bin.value = 'b' + String(i);
      bin.addEventListener("click", () => removeTaskFromList(li, todoList, i));
      last_li.append(bin);

      const pencil = document.createElement("i");
      pencil.className = "fas fa-pencil-alt";
      // pencil.value = 'p' + String(i);
      // pencil.addEventListener('click', () => editTask(li, todoList, i));
      last_li.append(pencil);
    }
  }

  if (!localStorage.getItem("notodoList"))
    localStorage.setItem("notodoList", JSON.stringify(notodoList));
  else {
    notodoList = JSON.parse(localStorage.getItem("notodoList"));

    for (var i = 0; i < notodoList.length; i++) {
      const li = addTaskToList(notodoList[i]);
      document.querySelector(".notodo__list").append(li);

      const last_li = document.querySelector(".notodo__list > li:last-child");

      const bin = document.createElement("i");
      bin.className = "far fa-trash-alt";
      // bin.value = 'b' + String(i);
      bin.addEventListener("click", () =>
        removeTaskFromList(li, notodoList, i)
      );
      last_li.append(bin);

      const pencil = document.createElement("i");
      pencil.className = "fas fa-pencil-alt";
      // pencil.value = 'p' + String(i);
      // pencil.addEventListener('click', () => editTask(li, notodoList, i));
      last_li.append(pencil);
    }
  }

  document.querySelector("#task").onkeyup = () => {
    if (document.querySelector("#task").value.trim().length > 0)
      setDisabled(false);
    else setDisabled(true);
  };

  // const button = document.querySelectorAll('button');

  document.querySelector("#todo").onclick = () => {
    task = document.querySelector("#task").value.trim();

    const li = addTaskToList(task);
    document.querySelector(".todo__list").append(li);

    const last_li = document.querySelector(".todo__list > li:last-child");

    const bin = document.createElement("i");
    bin.className = "far fa-trash-alt";
    // bin.value = 'b' + String(todoList.length - 1);
    bin.addEventListener("click", () =>
      removeTaskFromList(li, todoList, todoList.length)
    );
    last_li.append(bin);

    const pencil = document.createElement("i");
    pencil.className = "fas fa-pencil-alt";
    // pencil.value = 'p' + String(todoList.length - 1);
    // pencil.addEventListener('click', () => editTask(li, todoList,
    // todoList.length));
    last_li.append(pencil);

    todoList.push(String(task));
    localStorage.setItem("todoList", JSON.stringify(todoList));

    setDisabled(true);

    console.log(task);
    console.log(todoList[todoList.length - 1]);

    document.querySelector("#task").value = "";

    return false;
  };

  document.querySelector("#notodo").onclick = () => {
    task = document.querySelector("#task").value.trim();

    const li = addTaskToList(task);
    document.querySelector(".notodo__list").append(li);

    const last_li = document.querySelector(".notodo__list > li:last-child");

    const bin = document.createElement("i");
    bin.className = "far fa-trash-alt";
    // bin.value = 'b' + String(notodoList.length - 1);
    bin.addEventListener("click", () =>
      removeTaskFromList(li, notodoList, notodoList.length - 1)
    );
    last_li.append(bin);

    const pencil = document.createElement("i");
    pencil.className = "fas fa-pencil-alt";
    // pencil.value = 'p' + String(notodoList.length - 1);
    // pencil.addEventListener('click', () => editTask(li, notodoList,
    // notodoList.length));
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

  document.querySelectorAll(".bin").onclick = () => {
    console.log("bin");
    // removeTaskFromList( , 'todoList');
  };

  document.querySelectorAll(".pencil").onclick = () => {
    console.log("pencil");
  };

  function addTaskToList(taskName) {
    var li = document.createElement("li");
    li.innerHTML = taskName;
    return li;
  }

  function editTask(input, list, taskName) {
    if (input.disabled == true) input.disabled = false;
    else {
      input.disabled = true;
      let indexOf = list.indexOf(taskName);
      list[indexOf] = input.value;
      localStorage.setItem(list, JSON.stringify(list));
    }
  }

  function removeTaskFromList(li, list, taskId) {
    try {
      li.parentNode.removeChild(li);
      // console.log(taskName);
      // let taskId = todoList.indexOf(taskName);
      console.log(taskId);
      if (taskId >= 0) {
        todoList.splice(taskId, 1);
        console.log(todoList);
        localStorage.setItem("todoList", JSON.stringify(todoList));
      } else console.log("Index out of bound.!!");
    } catch (error) {
      console.error();
    }
  }
});
