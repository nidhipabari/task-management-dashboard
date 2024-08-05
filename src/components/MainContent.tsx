
import React from 'react';
import GreetingCard from './GreetingCard';
import ScheduleTask from './ScheduleTask';
import PriorityTasks from './PriorityTasks';
import CreateNew from './CreateNew';

const MainContent: React.FC = () => {
  return (
    <div className="p-6 flex-1 bg-[#F2F2F2]">
      
      <div className="flex">
        <div className="flex-1 mr-4">
        <GreetingCard />
          <ScheduleTask />
        </div>
        <div className="w-1/3">
          <CreateNew/>
          <PriorityTasks />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
