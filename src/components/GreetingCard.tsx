
import React from 'react';

const GreetingCard: React.FC = () => {
  return (
    <div className="bg-[#6F52ED] text-white p-10 rounded-lg mb-4">
        <div className='grid grid-cols-2'>
            <div>

            </div>
            <div>
            <h1 className="text-2xl font-bold">Hi Christina Parker!</h1>
            <p className='text-sm mt-4'>Welcome to your all event calendar. <br></br> Here, you can see all the upcoming meetings,<br></br> events and create new ones.</p>
            </div>
        </div>
      
    </div>
  );
};

export default GreetingCard;
