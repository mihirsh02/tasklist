import React, { useState } from 'react';
import axios from 'axios';

const TaskItem = ({ task, updateTask, deleteTask, toggleCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${task._id}`, { title, description, dueDate });
      updateTask(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('There was an error updating the task!', error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/tasks/${task._id}`);
      deleteTask(task._id);
    } catch (error) {
      console.error('There was an error deleting the task!', error);
    }
  };

  const toggleCompleted = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${task._id}`, { completed: !task.completed });
      toggleCompletion(task._id, response.data.completed);
    } catch (error) {
      console.error('There was an error updating the completion status!', error);
    }
  };

  if (isEditing) {
    return (
      <div>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} />
        <button onClick={handleUpdate}>Save</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      <input type="checkbox" checked={task.completed} onChange={toggleCompleted} />
      <h2 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h2>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'No due date'}</p>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
