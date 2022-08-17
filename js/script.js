// selection elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
// function

//events
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("enviou um form");
});
