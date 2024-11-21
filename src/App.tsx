import React, { useState, useEffect } from 'react';
import TaskInput from './Components/TaskInput';
import TaskList from './Components/TaskList';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  // Initialize state with localStorage data
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: string) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const toggleCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-yellow-500 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl text-blue-400 font-bold text-center mb-4">TODO LIST</h1>
        <TaskInput addTask={addTask} />
        <TaskList
          tasks={tasks}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default App;
