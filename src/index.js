import "./styles/styles.scss";
import template from "./templates/main.hbs";

import doRequests from "./js/requests";

let todoNameState = "";
let isEditDataState = null;

window.onload = async () => {
  const contentWrapper = document.getElementById("contentWrapper");
  const getTodoTasks = await doRequests("GET");

  if (getTodoTasks) {
    contentWrapper.innerHTML = template({ data: getTodoTasks });
  }

  const addBtn = document.getElementById("addBtn");
  const toDoName = document.getElementById("toDoName");
  const saveData = document.getElementById("saveData");

  const checkBoxes = document.querySelectorAll(
    "input[type=checkbox][name=toDoChange]"
  );

  console.log(checkBoxes);

  checkBoxes.forEach(checkBox => {
    checkBox.addEventListener("change", async e => {
      const taskID = e.target.dataset.id;
      const changeTaskStatus = await doRequests(
        "PUT",
        {
          completed: e.target.checked
        },
        taskID
      );
    });
  });

  const btnContainers = document.querySelectorAll(".btn-container");

  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));

  btnContainers.forEach(btnContainer =>
    btnContainer.addEventListener("click", async e => {
      if (e.target.nodeName === "I") {
        const isEdit = e.target.classList.contains("btnEdit");
        if (isEdit) {
          const taskName = e.target.dataset.name;
          const taskID = e.target.dataset.id;
          toDoName.value = taskName;
          isEditDataState = { taskID };
          modal.show();
        } else {
          const taskIDDelete = e.target.dataset.id;
          const deletedData = await doRequests("DELETE", {}, taskIDDelete);

          if (deletedData) {
            window.location.reload();
          }
        }
      }
    })
  );

  toDoName.addEventListener("input", e => {
    todoNameState = e.target.value;
  });

  addBtn.addEventListener("click", () => {
    modal.show();
  });

  saveData.addEventListener("click", async e => {
    if (isEditDataState) {
      const editedData = await doRequests(
        "PUT",
        {
          todo_name: todoNameState
        },
        isEditDataState.taskID
      );

      if (editedData) {
        window.location.reload();
      }
    } else {
      const addedData = await doRequests("POST", {
        todo_name: todoNameState,
        completed: false
      });

      if (addedData) {
        modal.hide();
        window.location.reload();
      }
    }
  });
};
