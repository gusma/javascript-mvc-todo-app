const Controller = function ControllerFn(model) {
    this.model = model;
};

Controller.prototype.addTodo = function addTodoFn(description) {
    this.model.add(description);
};

Controller.prototype.removeTodo = function removeTodoFn(description) {
    this.model.clear(description);
}

Controller.prototype.clearTodos = function clearTodosFn() {
    this.model.clear();
}