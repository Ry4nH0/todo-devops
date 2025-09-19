// const API = 'http://backend:3000/api/todos';
// const API = 'http://localhost:3000/api/todos';
// const API = `${import.meta.env.VITE_BACKEND_URL}/api/todos`;
const API = 'https://todo-backend-gray-iota.vercel.app/api/todos'

export async function fetchTodos() {
  console.log(`Fetching from: ${API}`);
  const res = await fetch(API);
  return await res.json();
}

export async function addTodo(todo) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(todo)
  });
  return await res.json();
}

export async function updateTodo(id, updated) {
  const res = await fetch(`${API}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updated)
  });
  return await res.json();
}

export async function deleteTodo(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
}
