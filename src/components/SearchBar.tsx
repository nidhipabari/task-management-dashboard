
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div className='grid grid-cols-2'>
        <div className='text-3xl ml-5 font-semibold mt-3'>Dashboard</div>
        <div className="relative">
        
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 mt-2 ml-40 pl-10"
          placeholder="Search Task"
        />
          <div>
          <span className="absolute left-3 top-2 text-[#6F52ED] mt-2 ml-40">🔍</span>
          </div>
        
      </div>

    </div>
    
    
  );
};

export default SearchBar;
