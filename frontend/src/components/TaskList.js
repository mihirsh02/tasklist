import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    axios.get('http://localhost:5000/tasks')
      .then(response => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the tasks!', error);
        setLoading(false);
      });
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task._id !== id));
  };

  const filterTasks = (task) => {
    if (filter === 'completed') {
      return task.completed;
    }
    if (filter === 'incomplete') {
      return !task.completed;
    }
    return true;
  };

  const toggleCompletion = async (id, completed) => {
    try {
      const response = await axios.put(`http://localhost:5000/tasks/${id}`, { completed });
      updateTask(response.data);
    } catch (error) {
      console.error('There was an error updating the task!', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Task List</h1>
      <TaskForm addTask={addTask} />
      <div>
        <label>Filter tasks:</label>
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      {tasks.filter(filterTasks).map(task => (
        <TaskItem
          key={task._id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
        />
      ))}
    </div>
  );
};

export default TaskList;
