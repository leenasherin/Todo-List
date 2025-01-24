import React from "react";

const TaskTable = ({ tasks, updateTask, deleteTask }) => {
  const handleToggleComplete = (task) => {
    updateTask(task.id, { ...task, completed: !task.completed });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Deadline</th>
          <th>Priority</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.deadline}</td>
            <td className={`priority priority-${task.priority.toLowerCase()}`}>
  {task.priority}
</td>            <td>
              <input type="checkbox" checked={task.completed} onChange={() => handleToggleComplete(task)} />
            </td>
            <td>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;
