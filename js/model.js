const Model = function ModelFn (initialValue) {
    this.todos = initialValue;

    this.todoAdded = new Evento(this);
    this.todoRemoved = new Evento (this);
    this.todoCleared = new Evento(this);
}

Model.prototype.add = function addFn(todo) {
    this.todos.push({
        id: this.todos.length + 1,
        description: todo,
        status: false
    });

    this.todoAdded.notificar();
};

Model.prototype.remove = function removeFn(todo) {
    this.todos.splice({
        id: this.todos.length + 1,
        description: todo,
        status: false
    });

    this.todoRemoved.notificar();
}

Model.prototype.get = function getFn() {
    return this.todos;
};

Model.prototype.clear = function clearFn() {
    this.todos = [];

    this.todoCleared.notificar();
};
