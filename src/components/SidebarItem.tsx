// src/components/SidebarItem.tsx
import React from 'react';

interface SidebarItemProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ text, isActive, onClick }) => {
  return (
    <li
      className={`mb-4 cursor-pointer mt-4 p-2 rounded-lg ${isActive ? 'bg-[#6F52ED] text-white' : 'text-black'}`}
      onClick={onClick}
    >
      <a className="text-lg">{text}</a>
    </li>
  );
};

export default SidebarItem;
