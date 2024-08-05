
// src/components/Sidebar.tsx
import React, { useState } from 'react';
import SidebarItem from './SidebarItem';

const Sidebar: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Dashboard');

  const handleItemClick = (text: string) => {
    setActiveItem(text);
  };

  return (
    <div className="w-52 h-full bg-[#dfd8ff] p-4 ">
      <h2 className="text-xl mb-20 mt-10  font-bold text-center">MyTask</h2>
      <ul>
        {['Dashboard', 'Jobs', 'Schedule', 'Community', 'Messages', 'Document', 'Logout'].map((text, index) => (
          <SidebarItem
            key={index}
            text={text}
            isActive={activeItem === text}
            onClick={() => handleItemClick(text)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
