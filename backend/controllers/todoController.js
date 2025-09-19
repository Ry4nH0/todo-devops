const Todo = require('../models/todoModel');

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ error: 'Failed to fetch todos' });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const todo = { id: Date.now().toString(), ...req.body };
    const newTodo = await Todo.create(todo);
    res.status(201).json(newTodo);
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ error: 'Failed to create todo' });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const updated = { id, ...req.body };
    const updatedTodo = await Todo.update(id, updated);
    res.json(updatedTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Failed to update todo' });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting todo:', error);
    res.status(500).json({ error: 'Failed to delete todo' });
  }
};
