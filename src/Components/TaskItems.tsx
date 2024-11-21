import React from 'react';
import { Task } from '../App';
import { FaTrash } from 'react-icons/fa'; 
interface TaskItemProps {
  task: Task;
  toggleCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleCompletion,
  deleteTask,
}) => {
  const [taskText, ...languages] = task.text.split(' [');
  const formattedLanguages = languages.length
    ? languages.join('[').replace(']', '').split(',')
    : [];

  const languageColors: Record<string, string> = {
    React: 'bg-blue-500 text-white',
    'React Native': 'bg-green-500 text-white',
    Flutter: 'bg-purple-500 text-white',
  };

  return (
    <li className="flex flex-col mt-4 mb-4 bg-gray-50 p-4 rounded-lg shadow">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleCompletion(task.id)}
            className="mr-3"
          />
          <span
            className={`text-lg font-bold ${
              task.completed ? 'line-through text-gray-400' : ''
            }`}
          >
            {taskText}
          </span>
        </div>
        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700"
          aria-label="Delete Task"
        >
          {/* In the Delete Icon using React-icons*/}
          <FaTrash size={20} />
        </button>
      </div>

      {formattedLanguages.length > 0 && (
        <div className="mt-2 flex flex-wrap">
          {formattedLanguages.map((lang, index) => (
            <span
              key={index}
              className={`text-sm px-2 py-1 rounded-full mr-2 mb-1 ${
                languageColors[lang.trim()] || 'bg-gray-200 text-gray-700'
              }`}
            >
              {lang.trim()}
            </span>
          ))}
        </div>
      )}
    </li>
  );
};

export default TaskItem;
