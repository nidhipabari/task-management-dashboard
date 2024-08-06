import React from 'react';

const UserInfo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 sm:space-x-2">
      {/* User Name and Role */}
      <div className="text-sm sm:text-base text-gray-700 font-bold">
        Christina Parker
        <br />
        <p className="text-xs sm:text-sm font-normal text-[#5C6B91]">Graphic Designer</p>
      </div>
      {/* User Avatar */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-300 rounded-full"></div>
    </div>
  );
};

export default UserInfo;

