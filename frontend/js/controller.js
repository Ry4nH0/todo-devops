import * as model from './model.js';
import { renderTodos } from './view.js';

const input = document.getElementById('new-todo');
const button = document.getElementById('add-btn');

async function loadTodos() {
  const todos = await model.fetchTodos();
  renderTodos(todos, handleUpdate, handleDelete);
}

async function handleAdd() {
  const text = input.value.trim();
  if (text) {
    await model.addTodo({ text });
    input.value = '';
    loadTodos();
  }
}

async function handleUpdate(id, newText) {
  await model.updateTodo(id, { text: newText });
  loadTodos();
}

async function handleDelete(id) {
  await model.deleteTodo(id);
  loadTodos();
}

button.addEventListener('click', handleAdd);
window.addEventListener('DOMContentLoaded', loadTodos);
