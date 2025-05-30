export function renderTodos(todos, onUpdate, onDelete) {
  const list = document.getElementById('todo-list');
  list.innerHTML = '';

  todos.forEach(todo => {
    const li = document.createElement('li');
    li.textContent = todo.text;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = () => {
      const newText = prompt('Edit task:', todo.text);
      if (newText) onUpdate(todo.id, newText);
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'Delete';
    delBtn.onclick = () => onDelete(todo.id);

    li.appendChild(editBtn);
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}
