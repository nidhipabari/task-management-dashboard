// Sidebar.tsx
import React from 'react';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  return (
    <>
      {/* Sidebar for desktop view */}
      <div className="hidden sm:block sm:w-52 h-full bg-[#dfd8ff] p-4 fixed sm:relative">
        <h2 className="text-xl mb-20 mt-10 font-bold text-center">MyTask</h2>
        <ul>
          {['Dashboard', 'Jobs', 'Schedule', 'Community', 'Messages', 'Document', 'Logout'].map((text, index) => (
            <SidebarItem
              key={index}
              text={text}
            />
          ))}
        </ul>
      </div>
      {/* Sidebar for mobile view */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 sm:hidden ${onClose ? '' : 'hidden'}`} onClick={onClose}>
        <div className="w-64 h-full bg-[#dfd8ff] p-4 absolute right-0 top-0 transform transition-transform duration-200 ease-in-out">
          <h2 className="text-xl mb-20 mt-10 font-bold text-center">MyTask</h2>
          <ul>
            {['Dashboard', 'Jobs', 'Schedule', 'Community', 'Messages', 'Document', 'Logout'].map((text, index) => (
              <SidebarItem
                key={index}
                text={text}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


