const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// CREATE
router.post("/", async (req, res) => {
  const newTask = new Task(req.body);
  const savedTask = await newTask.save();
  res.json(savedTask);
});

// READ ALL
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updatedTask);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;