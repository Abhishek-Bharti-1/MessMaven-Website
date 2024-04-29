import { ChevronDownIcon, ChevronUpIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { DeviceTabletIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
// Assuming you have Chevron icons from Heroicons

function Menu() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  // Example data for meals
  const meals = {
    Monday: {
      breakfast: 'Masala Dosa',
      lunch: 'Paneer Tikka with Butter Naan',
      dinner: 'Sarson Da Saag with Makki Di Roti'
    },
    Tuesday: {
      breakfast: 'Idli with Coconut Chutney and Sambar',
      lunch: 'Chole Bhature',
      dinner: 'Hyderabadi Chicken Biryani'
    },
    Wednesday: {
      breakfast: 'Upma',
      lunch: 'Palak Paneer with Jeera Rice',
      dinner: 'Amritsari Fish Fry'
    },
    Thursday: {
      breakfast: 'Pongal with Coconut Chutney',
      lunch: 'Rajma Chawal',
      dinner: 'Tandoori Chicken with Naan'
    },
    Friday: {
      breakfast: 'Medu Vada with Sambar and Chutney',
      lunch: 'Dal Makhani with Garlic Naan',
      dinner: 'Butter Chicken with Basmati Rice'
    },
    Saturday: {
      breakfast: 'Masala Puri',
      lunch: 'Aloo Gobi with Tandoori Roti',
      dinner: 'Chicken Tikka Masala with Butter Naan'
    },
    Sunday: {
      breakfast: 'Poori Bhaji',
      lunch: 'Mutton Curry with Pulao',
      dinner: 'Masala Dosa'
    }
  };



  const currentDate = new Date();
  const currentDay = currentDate.getDay();

  // Convert JavaScript day index to day name
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayName = daysOfWeek[currentDay];

  const [selectedDay, setSelectedDay] = useState(currentDayName);
  const toggleDay = (day) => {
    if (selectedDay === day) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className=''>

        <div className="">
          <div className=''>
            <h2 className="text-3xl pt-20 font-semibold mb-4">Weekly Menu</h2>
          </div>
          <div className='h-[40rem] mt-6 overflow-y-auto xl:overflow-y-hidden'>
            {days.map((day, index) => (
              <div key={index} className={`bg-blue-300  rounded-lg p-4 cursor-pointer mt-2  ${selectedDay === day ? 'border-2 bg-blue-800 text-white' : ''}`} >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{day}</h3>
                  <div onClick={() => toggleDay(day)} className=' p-1'>

                  {selectedDay === day ? < ChevronUpIcon className="w-6 h-6 text-white" /> : <ChevronDownIcon className="w-6 h-6 text-black" />}
                  </div>
                </div>
                <div className={`overflow-hidden flex items-end justify-between transition-max-height ease-in duration-500 ${selectedDay === day ? 'max-h-48' : 'max-h-0'}`}>
                  <div>
                    <p><strong>Breakfast:</strong> {meals[day].breakfast}</p>
                    <p><strong>Lunch:</strong> {meals[day].lunch}</p>
                    <p><strong>Dinner:</strong> {meals[day].dinner}</p>
                  </div>
                  <div className='flex text-black font-semibold bg-white hover:bg-blue-300 p-2 rounded-lg'>
                    <p>Edit</p>
                    <PencilIcon width={20} className='text-black ml-2'/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
