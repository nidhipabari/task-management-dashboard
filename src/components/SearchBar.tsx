import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      {/* Dashboard Title - Always visible */}
      <div className="text-3xl ml-5 font-semibold mt-3">Dashboard</div>
      
      {/* Search Input and Icon - Hidden on mobile */}
      <div className="relative hidden sm:block">
        <input
          type="text"
          className="border border-gray-300 rounded-lg ml-72 p-2 pl-10"
          placeholder="Search Task"
        />
        <span className="absolute left-3 top-2 text-[#6F52ED] ml-72">🔍</span>
      </div>
    </div>
  );
};

export default SearchBar;


