const fs = require('fs');

class UI {
    constructor() {
        this.inputTodo = document.querySelector(".inputTodo");
        this.submitButton = document.querySelector("#submitButton");
        this.showTodoDiv = document.querySelector(".showTodo");
        this.feedbackP = document.querySelector(".feedbackP");
        this.dltFeedbackP = document.querySelector(".dltFeedbackP");
        this.todoList = document.querySelector(".todoList");
        this.table = document.querySelector(".table");
        this.emptyDiv = document.querySelector(".emptyDiv");
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
            var todo = {
                id: this.todoId,
                title: inputValue// check: `<input type="checkbox"/>`
            };
            this.todoList.push(todo);
            this.todoId++;
            this.addTodo(todo);
        }
    }
    addTodo(todo) {
        var table = document.createElement("table");
        table.classList.add("tableClass");
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        var input = document.createElement("input");
        input.setAttribute("type", "text");
        var check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.classList.add("class1");
        input.classList.add("class3");
        input.value = todo.title;
        td2.appendChild(check);
        td.appendChild(input);
        tr.appendChild(td);
        tr.appendChild(td2);
        table.classList.remove("table");
        table.appendChild(tr);
        this.emptyDiv.appendChild(table);
    }
    
    removeTodo(todo){
        var chk = document.getElementsByClassName("class1"); 
            for(let j = 0; j < chk.length; j++) {
        if(chk[j].checked) {
            delete chk[j].parentNode.parentNode.parentNode;
            chk[j].parentNode.parentNode.parentNode.classList.add("class2");
            chk[j].parentNode.parentNode.parentNode.classList.remove("tableClass");       
        } else if(!chk[j].checked){
            this.dltFeedbackP.classList.add("showDltFeedbackP");
            const self = this;
            setTimeout(function() {
                self.dltFeedbackP.classList.remove("showDltFeedbackP");
            },3500)
        }
    }
}
}


function eventListeners() {
    var inputTodo = document.querySelector(".inputTodo");
    var submitButton = document.querySelector("#submitButton");
    var dltButton = document.querySelector("#dltButton");
   
    var ui = new UI();
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        ui.submitTodo();
    });
     dltButton.addEventListener("click", function() {
        event.preventDefault();
        ui.removeTodo();
     })
}

var startEventListeners = () => {
    document.addEventListener("DOMContentLoaded", function () {
        eventListeners();
      });
}

module.exports = {
    UI,
    eventListeners,
    startEventListeners,
    checkBox
}