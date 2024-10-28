import React, { useState } from 'react';

function TodoItem({ task, onSelect, deleteTask, editTask, toggleStatus, isSelected }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    editTask(task.id, editedTask);
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onSelect(task.id)}
        />
      </td>
      <td>{isEditing ? <input value={editedTask.task} onChange={(e) => setEditedTask({ ...editedTask, task: e.target.value })} /> : task.task}</td>
      <td>{task.status}</td>
      <td>{task.deadline}</td>
      <td>
        <button className="toggle-status-btn" onClick={() => toggleStatus(task.id)}>
          {task.status === 'Active' ? 'Deactivate' : 'Activate'}
        </button>
        {isEditing ? (
          <>
            <button className="edit-btn" onClick={handleEdit}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </>
        ) : (
          <>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
          </>
        )}
      </td>
    </tr>
  );
}

export default TodoItem;
