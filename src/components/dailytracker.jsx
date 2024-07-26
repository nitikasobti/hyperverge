import React, { useState } from 'react';
import '../style/dailytracker.css';

const DailyGrowthChecklist = () => {
  const [tasks, setTasks] = useState([
    { name: 'Exercise', completed: false },
    { name: 'Team Meeting', completed: false },
    { name: 'Meditate', completed: false },
    { name: 'Learn something new', completed: false },
  ]);

  const [newTaskName, setNewTaskName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const toggleTaskCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const addTask = (taskName) => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, completed: false }]);
      setNewTaskName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const completedTasks = tasks.map((task) => ({
      name: task.name,
      completed: task.completed ? 'Yes' : 'No',
    }));

    // Simulate submission
    setTimeout(() => {
      setResponseMessage('✔ Checklist saved successfully!');
    }, 500);
  };

  return (
    <div className="daily-growth-checklist">
      <h2>Daily Growth Checklist</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={task.completed ? 'completed' : ''}>
              <label>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                {task.name}
              </label>
            </li>
          ))}
        </ul>
        <div className="add-task">
          <input
            type="text"
            placeholder="New task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button
            type="button"
            className="add-task-button"
            onClick={() => addTask(newTaskName)}
          >
            +
          </button>
        </div>
        <button type="submit">Submit Checklist</button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
};

export default DailyGrowthChecklist;
