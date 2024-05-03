import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon, PencilIcon } from '@heroicons/react/20/solid';
import { app } from '../../firebase';
import { getFirestore, doc, collection, getDocs } from "firebase/firestore";

function Menu() {
  const [menuList, setMenuList] = useState({});
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const [selectedDay, setSelectedDay] = useState(daysOfWeek[currentDay]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(app);
        const menuRef = doc(db, 'MessMenu', 'GH-1');
        const menuSnapshot = await getDocs(collection(menuRef, 'Menu'));
        const menuData = {};
        menuSnapshot.forEach(doc => {
          menuData[doc.id] = doc.data();
        });
        setMenuList(menuData);
      } catch (error) {
        console.error('Error fetching menu:', error);
      }
    };

    fetchData();
  }, []);


  const toggleDay = (day) => {
    setSelectedDay(selectedDay === day ? null : day);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="">
        <div className="">
          <h2 className="text-3xl pt-20 font-semibold mb-4">Weekly Menu</h2>
        </div>
        <div className='h-[40rem] mt-6 overflow-y-auto xl:overflow-y-hidden'>
          {daysOfWeek.map((day) => (
            <div key={day} className={`bg-blue-300 rounded-lg p-4 cursor-pointer mt-2 ${selectedDay === day ? 'border-2 bg-blue-800 text-white' : ''}`}>
              <div className="flex justify-between items-center mb-2" onClick={() => toggleDay(day)}>
                <h3 className="text-xl font-semibold">{day}</h3>
                <div className='p-1'>
                  {selectedDay === day ? <ChevronUpIcon className="w-6 h-6 text-white" /> : <ChevronDownIcon className="w-6 h-6 text-black" />}
                </div>
              </div>
              <div className={`overflow-hidden flex items-end justify-between transition-max-height ease-in duration-500 ${selectedDay === day ? 'max-h-48' : 'max-h-0'}`}>
                <div>
                  <p><strong>Breakfast:</strong> {menuList[day]?.Breakfast}</p>
                  <p><strong>Lunch:</strong> {menuList[day]?.Lunch}</p>
                  <p><strong>Dinner:</strong> {menuList[day]?.Dinner}</p>
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
  );
}

export default Menu;
