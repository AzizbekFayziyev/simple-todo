"use strict";

// Elements 

const toDoForm = document.querySelector("#toDoAdd"),
    toDoField = document.querySelector("#toDoField"),
    input = document.querySelector("input");

// todo lists
let localGet = localStorage.getItem("todo")
let todos = ["simple todo",];

const renderTodo = () => {
    let todo = document.createElement("li");
    todo.className = "todo";
    todos.map((elem, id) => {
        todo.innerHTML = `${id + 1}) ${elem} <button>Delete</button>`;

    });

    toDoField.append(todo);
}

// Adding todo
toDoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (input.value == "") {
        alert("Enter name of todo!")
    } else {
        todos.push(input.value);
        input.value = "";

        renderTodo();
        delTodo();
    }
})

// deleting doto
const delTodo = () => {
    const todoList = document.querySelectorAll(".todo");
    const todoListDel = document.querySelectorAll(".todo button");

    todoList.forEach((e) => {
        e.addEventListener("click", () => {
            e.classList.toggle("completed")
        })
    })

    todoListDel.forEach((e) => {
        e.addEventListener("click", () => {
            e.parentElement.style.display = "none";
            todos.pop();
        })
    })
}

renderTodo();
delTodo();






