const express = require("express");

const router = express.Router();

const {
  getAllTodos,
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/todo");

router.get("/todos", getAllTodos);
router.post("/add-todo", addTodo);
router.patch("/todo/:id", editTodo);
router.delete("/todo/:id", deleteTodo);

module.exports = router;
