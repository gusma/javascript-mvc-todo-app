const Controller = function ControllerFn(model) {
    this.model = model;
};

Controller.prototype.addTodo = function addTodoFn(description) {
    this.model.add(description);
}
