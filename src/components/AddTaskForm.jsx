import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && deadline) {
      addTask({ task, deadline, status });
      setTask('');
      setDeadline('');
      setStatus('Active');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>
      <input
        type="datetime-local"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
