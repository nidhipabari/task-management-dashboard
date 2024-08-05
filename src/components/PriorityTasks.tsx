import React from 'react';
import TaskItem from './TaskItem';

const PriorityTasks: React.FC = () => {
  const tasks = [
    { title: 'Project Design Meeting', time: '08:00-09:00 AM', participants: 5, color: 'bg-blue-100' },
    { title: 'ArchiTech App Client Call', time: '10:00-10:15 AM', participants: 6, color: 'bg-green-100' },
    { title: 'Development Health Website', time: '07:00-07:30 AM', participants: 3, color: 'bg-yellow-100' },
    { title: 'Doctor Website Client Call', time: '09:00-10:00 AM', participants: 9, color: 'bg-red-100' }
  ];

  return (
    <div className="bg-white p-3 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Priority Tasks</h2>
      {tasks.map((task, index) => (
        <TaskItem key={index} {...task} />
      ))}
    </div>
  );
};

export default PriorityTasks;
