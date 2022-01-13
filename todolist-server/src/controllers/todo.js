const { todo } = require("../../models");

exports.getAllTodos = async (req, res) => {
  try {
    const data = await todo.findAll();

    res.status(200).send({
      status: "success",
      data,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addTodo = async (req, res) => {
  console.log(req.body);
  try {
    const data = {
      title: req.body.title,
    };

    const newTodo = await todo.create(data);

    res.status(200).send({
      status: "success",
      message: "Add Todo Success",
      data: {
        newTodo,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.editTodo = async (req, res) => {
  try {
    const id = req.params.id;
    // const data = {
    //   status: "true",
    // };

    console.log(req.body);

    await todo.update(req.body, {
      where: {
        id: id,
      },
    });

    const updateTodo = await todo.findOne({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: "success",
      data: updateTodo,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    await todo.destroy({
      where: {
        id: id,
      },
    });

    res.status(200).send({
      status: "success",
      message: "Delete todo success",
      data: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
