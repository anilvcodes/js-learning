(function () {
    const TO_TEXT_FIELD_ID = "todo_textfield";
    let todos = [];

    const textfield = document.createElement("input");

    textfield.type = "text";
    textfield.id = TO_TEXT_FIELD_ID;
    textfield.placeholder = "enter your todo.";

    const button = document.createElement("button");
    button.innerText = "Add todo";

    button.addEventListener("click", function () {
        const input = document.getElementById(TO_TEXT_FIELD_ID);
             if(!input.value){
                return;
             }
        todos = [input.value, ...todos];
        input.value = " ";

        renderTodos();
    });

    function renderTodos() {
        const parent = document.createElement("div");

        todos.forEach((todo) => {
            const element = document.createElement("div");
            element.innerText = todo;
            parent.append(element);
        });

        addToUI(parent);
    }

    addToUI(textfield);
    addToUI(button);

    function addToUI(element) {
        const todo = document.getElementById("todo");
        todo.append(element);
    }
})();