import React from 'react';

interface TaskItemProps {
  title: string;
  time: string;
  participants: number;
  color: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ title, time, participants, color }) => {
  return (
    <div className={`p-8 mb-4 rounded-lg shadow-md ${color}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{time}</p>
      <p>+{participants}</p>
    </div>
  );
};

export default TaskItem;
