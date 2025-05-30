const fs = require('fs');
const path = './data.json';

const getTodos = () => JSON.parse(fs.readFileSync(path));
const saveTodos = (todos) => fs.writeFileSync(path, JSON.stringify(todos, null, 2));

module.exports = {
  getAll: () => getTodos(),
  create: (todo) => {
    const todos = getTodos();
    todos.push(todo);
    saveTodos(todos);
    return todo;
  },
  update: (id, updatedTodo) => {
    let todos = getTodos();
    todos = todos.map(todo => todo.id === id ? updatedTodo : todo);
    saveTodos(todos);
    return updatedTodo;
  },
  delete: (id) => {
    let todos = getTodos();
    todos = todos.filter(todo => todo.id !== id);
    saveTodos(todos);
  }
};
