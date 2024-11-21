import React from 'react';
import TaskItem from './TaskItems';
import { Task } from '../App';

interface TaskListProps {
  tasks: Task[];
  toggleCompletion: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  toggleCompletion,
  deleteTask,
}) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleCompletion={toggleCompletion}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
