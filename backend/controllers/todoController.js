const Todo = require('../models/todoModel');

exports.getTodos = (req, res) => res.json(Todo.getAll());

exports.createTodo = (req, res) => {
  const todo = { id: Date.now().toString(), ...req.body };
  res.status(201).json(Todo.create(todo));
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const updated = { id, ...req.body };
  res.json(Todo.update(id, updated));
};

exports.deleteTodo = (req, res) => {
  Todo.delete(req.params.id);
  res.status(204).send();
};
