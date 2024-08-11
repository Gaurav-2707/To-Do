let write = document.getElementById("write");
let todoList = document.getElementById("todo-list");
let clear = document.getElementById("clear");


write.addEventListener('keydown', function(e) {
    if (e.key == "Enter") {
        console.log(this.value);
        addTodo(this.value);
        this.value = ' ';

    }
})

function addTodo(val) {
    let list = document.createElement("li");
    list.innerHTML = `${val}`;
    todoList.appendChild(list);

    list.style.cursor = 'pointer';

    list.addEventListener('click', function() {
        this.classList.toggle('done');
    })
}

clear.addEventListener('click', () => {
    alert("You are about to clear the whole list.");
    todoList.innerHTML = ' ';
})