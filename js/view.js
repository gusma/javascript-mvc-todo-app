const View = function ViewFn(model, controller) {
    this.model = model;
    this.controller = controller;

    this.$todoName = $('#todo-name');
    this.$addTodo = $('#add-todo');
    this.$todoList = $('#todo-list');

    const addTodoHandler = this.addTodoHandler.bind(this);
    this.$addTodo.on('click', addTodoHandler);

    this.model.todoAdded.suscribir(this.update.bind(this));
};

View.prototype.addTodoHandler = function addTodoHandlerFn() {
    const todo = this.$todoName.val();
    this.controller.addTodo(todo);
    this.$todoName.val('');
}

View.prototype.update = function updateFn() {
    const todos = this.model.get();
    const todoItem = function todoItemFn (todo) {
        this.$todoList.append('<li>' + todo.description + '</li>');
    }

    this.$todoList.empty();

    todos.forEach(todoItem.bind(this));
}
