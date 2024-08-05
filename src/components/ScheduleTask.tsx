import React from 'react';

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const dates = [7, 8, 9, 10, 11, 12, 13]; 
const times = ['07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM']; 

const tasks = [
  { day: 'WED', time: '07:00-07:30 AM', description: 'Development Health Website', color: 'bg-[#b5eaea]' },
  { day: 'MON', time: '08:00-09:00 AM', description: 'Project Design Meeting', color: 'bg-[#bdb2ff]' },
  { day: 'MON', time: '10:00-10:15 AM', description: 'ArchiTech App Client Call', color: 'bg-[#ffadad]' },
  { day: 'WED', time: '09:00-10:00 AM', description: 'Doctor Website Client Call', color: 'bg-[#ffadad]' },
  { day: 'THU', time: '08:00-09:00 AM', description: 'New Project Design Meeting', color: 'bg-[#b5eaea]' },
  { day: 'FRI', time: '10:00-10:15 AM', description: 'Project Design Meeting', color: 'bg-[#bdb2ff]' },
];

const ScheduleTask: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Schedule Task</h2>
        <div className="flex items-center">
          <p className="mr-4">7 - 13 August 2020</p>
          <div className="flex items-center">
            <button className="px-4 py-2 bg-purple-500 text-white rounded-lg mr-2">Week</button>
            <button className="px-2">❮</button>
            <button className="px-2">❯</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-1">
          {/* Empty space for the time column */}
        </div>
        {days.map((day, index) => (
          <div key={index} className="text-center">
            <div className="text-lg font-semibold">{day}</div>
            <div className="text-sm">{dates[index]}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-8 gap-4 mt-4">
        <div className="col-span-1">
          {times.map((time, index) => (
            <div key={index} className="text-right pr-2 h-20 flex items-center justify-end">
              {time}
            </div>
          ))}
        </div>
        {days.map((day, index) => (
          <div key={index} className="grid grid-rows-5 gap-4">
            {times.map((_, timeIndex) => (
              <div key={timeIndex} className="border h-20 relative">
                {tasks
                  .filter((task) => task.day === day)
                  .map((task, idx) => (
                    <div
                      key={idx}
                      className={`absolute inset-0 p-1.5 m-1 rounded-lg overflow-hidden ${task.color}`}
                      style={{
                        display:
                          task.time.includes(times[timeIndex].split(' ')[0]) &&
                          !(
                            (task.description.includes('Project Design Meeting') && timeIndex === 2) ||
                            (task.description.includes('New Project Design Meeting') && timeIndex === 2) ||
                            (task.description.includes('Doctor Website Client Call') && timeIndex === times.length - 2)
                          )
                            ? 'block'
                            : 'none',
                      }}
                    >
                      <p className="font-bold text-xs truncate">{task.description}</p>
                      <p className="text-xs truncate">{task.time}</p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleTask;
