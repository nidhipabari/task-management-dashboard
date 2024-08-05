
import React from 'react';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#F2F2F2] ">
      <SearchBar />
      <UserInfo />
    </header>
  );
};

export default Header;
