class UI {
    constructor() {
        this.inputTodo = document.querySelector(".inputTodo");
        this.submitButton = document.querySelector("#submitButton");
        this.showTodoDiv = document.querySelector(".showTodo");
        this.feedbackP = document.querySelector(".feedbackP");
        this.itemDiv = document.querySelector(".itemDiv");
        this.editButton = document.querySelector(".editButton");
        this.dltButton = document.querySelector(".dltButton");
        this.emptyDiv = document.querySelector(".emptyDiv");
        this.itemsDiv = document.querySelector(".items");
        this.todoList = document.querySelector(".todoList");
        this.todoList = [];
        this.todoId = 1;
    }
    submitTodo() {
        var inputValue = this.inputTodo.value;
        if(inputValue === "") {
            this.feedbackP.classList.add("showFeedbackP");
            const self = this;
            setTimeout(function() {
                self.feedbackP.classList.remove("showFeedbackP");
            },3500)
        }else {
            this.inputTodo.value = ""; 
            let todo = {
                id: this.todoId,
                title: inputValue
            };
            this.todoList.push(todo);
            this.todoId++;
            this.addTodo(todo); 
        }
    }
    addTodo(todo) {
        const div = document.createElement("div");
        div.innerHTML = `<div class="itemDiv">
        <div class="emptyDiv">
            <p>${todo.id}.</p>
            <p>${todo.title}</p>
        </div>
            <div class="tools"><button data-id = "${todo.id}" id="editButton"><img class="editImg" src="images/edit.png" alt="Edit Button"></button>
                 <button data-id = "${todo.id}" id="dltButton"><img class="deleteImg" src="images/delete.png" alt=""></button></div>
        </div>`;
        this.itemsDiv.append(div);
    }
    removeTodo(element) {
        var id = parseInt(element.dataset.id);
        console.log(id);

    }

}

function eventListeners() {
    var inputTodo = document.querySelector(".inputTodo");
    var submitButton = document.querySelector("#submitButton");
    var showTodoDiv = document.querySelector(".showTodo");

    var ui = new UI();
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        ui.submitTodo();
    })
    dltButton.addEventListener("click", function() {
        event.preventDefault();
        ui.removeTodo(event.target.parentElement);
    });
    
}

document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
  })