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
        this.todoList = [];
        this.todoId = 0;
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
            console.log(inputValue);
            this.inputTodo.value = ""; 
            let todo = {
                id: this.todoId,
                title: inputValue
            };
            this.todoList.push(todo);
            this.todoId++;
            console.log(this.todoId);
            console.log(this.todoList);
            this.itemsDiv.classList.add('showItems');
            var p = document.createElement("p");
            p.textContent = todo.title;
            this.emptyDiv.append(p);
        }
    }
    removeTodo() {
     this.itemsDiv.classList.remove("showItems");

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
        ui.removeTodo();
    });
    
}

document.addEventListener("DOMContentLoaded", function () {
    eventListeners();
  })