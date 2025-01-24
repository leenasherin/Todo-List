import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([]);

  
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:5000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  
  const addTask = async (newTask) => {
    const response = await axios.post("http://localhost:5000/tasks", newTask);
    setTasks([...tasks, response.data]);
  };

  
  const updateTask = async (id, updatedTask) => {
    await axios.put(`http://localhost:5000/tasks/${id}`, updatedTask);
    fetchTasks();
  };

 
  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm addTask={addTask} />
      <TaskTable tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
