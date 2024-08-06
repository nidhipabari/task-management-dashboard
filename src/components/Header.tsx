// Header.tsx
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';
import Sidebar from './Sidebar'; // Import the Sidebar

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-[#F2F2F2] relative">
      <div className="flex items-center">
        {/* Hamburger Menu */}
        <button className="sm:hidden block p-2" onClick={toggleSidebar}>
          {isSidebarOpen ? '✖' : '☰'} {/* Toggle icon based on state */}
        </button>
        <SearchBar />
      </div>
      <UserInfo />
      {/* Sidebar for mobile */}
      {isSidebarOpen && <Sidebar onClose={toggleSidebar} />} {/* Show Sidebar only when open in mobile */}
    </header>
  );
};

export default Header;


