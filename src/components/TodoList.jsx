import React, { useState } from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask, deleteMultipleTasks, editTask, toggleStatus }) {
  const [selectedTasks, setSelectedTasks] = useState([]);

  const handleSelect = (id) => {
    setSelectedTasks((prevSelected) =>
      prevSelected.includes(id) ? prevSelected.filter((taskId) => taskId !== id) : [...prevSelected, id]
    );
  };

  const handleDeleteSelected = () => {
    deleteMultipleTasks(selectedTasks);
    setSelectedTasks([]);
  };

  return (
    <div>
      <button className="delete-selected-btn" onClick={handleDeleteSelected}>Delete Selected</button>
      <table className="todo-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Task</th>
            <th>Status</th>
            <th>Deadline</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onSelect={handleSelect}
              deleteTask={deleteTask}
              editTask={editTask}
              toggleStatus={toggleStatus}
              isSelected={selectedTasks.includes(task.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
