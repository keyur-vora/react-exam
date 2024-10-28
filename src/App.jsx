import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTaskForm from './components/AddTaskForm';
import './Styles.css';

function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) setTasks(storedTasks);
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (id, updatedTask) => {
    setTasks(tasks.map((task) => (task.id === id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const deleteMultipleTasks = (ids) => {
    setTasks(tasks.filter((task) => !ids.includes(task.id)));
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, status: task.status === 'Active' ? 'Inactive' : 'Active' } : task
    ));
  };

  return (
    <div className="app-container">
      <h1 className="title">Todo List</h1>
      <AddTaskForm addTask={addTask} />
      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        deleteMultipleTasks={deleteMultipleTasks}
        editTask={editTask}
        toggleStatus={toggleStatus}
      />
    </div>
  );
}

export default App;
