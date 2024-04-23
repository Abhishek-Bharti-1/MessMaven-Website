import React from 'react'
import Navbar from '../../components/Navbar';

function ExtraItems() {
  const foodItems = [
    { id: 1, name: 'Pizza', cost: '10' },
    { id: 2, name: 'Burger', cost: '5' },
    { id: 3, name: 'Salad', cost: '8' },
    { id: 4, name: 'Pasta', cost: '12' },
    { id: 5, name: 'Sushi', cost: '15' },
  ];

  //Add Quantity, Add new item button, Add edit and delete functionality 
  return (
    <div>
      {/* <Navbar /> */}
      <div className='p-8'>
        <div>
          <h1 className='mt-12  text-4xl font-semibold'>Extra Items</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">

          {foodItems.map((food) => (
            <div
              key={food.id}
              className="bg-blue-300 p-4 rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition-colors cursor-pointer"
            >
              <div className='flex items-center justify-between'>
                <p className="text-2xl font-semibold">{food.name}</p>
                <p className='font-semibold text-2xl'>₹{food.cost}</p>
              </div>
              <div>
                <p className='my-2 font-semibold'>Quantity remaining : 100</p>

              </div>
              <div className="flex justify-end mt-2">
                <button className="mr-2">Edit</button>
                <button>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraItems