import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    deadline: "",
    priority: "Medium",
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    setTask({ title: "", description: "", deadline: "", priority: "Medium", completed: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" value={task.title} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={task.description} onChange={handleChange} required />
      <input type="date" name="deadline" value={task.deadline} onChange={handleChange} required />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
