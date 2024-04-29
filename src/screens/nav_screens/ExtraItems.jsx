import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { ChevronDownIcon, ChevronUpIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/24/solid';

function ExtraItems() {
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'Pizza', cost: '10', quantity: '100' },
    { id: 2, name: 'Burger', cost: '5', quantity: '80' },
    { id: 3, name: 'Salad', cost: '8', quantity: '90' },
    { id: 4, name: 'Pasta', cost: '12', quantity: '70' },
    { id: 5, name: 'Sushi', cost: '15', quantity: '80' },
  ]);

  function appendData(id, name, cost, quantity) {
    const newRecord = { id, name, cost, quantity };
    setFoodItems([...foodItems, newRecord]);
  }

  function deleteItem(id) {
    const updatedItems = foodItems.filter((item) => item.id !== id);
    setFoodItems(updatedItems);
  }

  //Add Quantity, Add new item button, Add edit and delete functionality 
  return (
    <div>
      {/* <Navbar /> */}
      <div className='p-8'>
        <div className='flex items-center justify-between'>

          <h1 className='mt-16  text-4xl font-semibold'>Extra Items</h1>
          <div
            onClick={() => appendData(foodItems.length + 1, 'Jaw', '5', '100')}
            className='flex mt-16 text-white font-semibold bg-blue-800 hover:bg-blue-300 hover:text-black py-2 pr-3 ps-2 rounded-lg '>
            <PlusIcon width={20} className=' mr-2' />
            <p>Add item</p>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 overflow-y-auto h-[37rem] scrollbar-thin scrollbar-webkit'>
          {foodItems.map((food) => (
            <div
              key={food.id}
              className="bg-blue-300 p-4 h-fit rounded-lg shadow-md hover:bg-blue-800 hover:text-white transition-colors cursor-pointer"
            >
              <div className='flex items-center justify-between'>
                <p className="text-2xl font-semibold">{food.name}</p>
                <p className='font-semibold text-2xl'>₹{food.cost}</p>
              </div>
              <div>
                <p className='my-2 font-semibold'>Quantity remaining : {food.quantity}</p>

              </div>
              <div className="flex justify-end mt-2">
                <button className="mr-2 pl-2 pr-2 flex items-end rounded-2xl bg-white text-black font-bold hover:bg-green-600 hover:text-white py-2">
                  <p>Edit</p>
                  <PencilIcon className = "ml-1 pb-1" width={18}/>
                </button>
                <button className=" flex items-end pl-2 pr-2 rounded-2xl bg-white hover:bg-red-700 hover:text-white text-black font-bold py-2" onClick={() => deleteItem(food.id)}>
                  <p>Delete</p>
                  <TrashIcon className = "ml-1 pb-1" width={18}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default ExtraItems