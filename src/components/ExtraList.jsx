import React from 'react';

function ExtraList() {
  // Sample list of items
  const items = [
    { 
      serialNumber: 1, 
      date: '2022-01-01', 
      items: ['Masala Dosa', 'Sambar', 'Chutney'], 
      meal: 'Breakfast', 
      cost: 15.99 
    },
    { 
      serialNumber: 2, 
      date: '2022-01-02', 
      items: ['Biryani', 'Raita'], 
      meal: 'Lunch', 
      cost: 12.50 
    },
    { 
      serialNumber: 3, 
      date: '2022-01-03', 
      items: ['Butter Chicken', 'Naan', 'Rice'], 
      meal: 'Dinner', 
      cost: 20.75 
    },
    { 
      serialNumber: 4, 
      date: '2022-01-04', 
      items: ['Poha', 'Tea'], 
      meal: 'Breakfast', 
      cost: 18.25 
    },
    { 
      serialNumber: 5, 
      date: '2022-01-05', 
      items: ['Chole Bhature', 'Lassi'], 
      meal: 'Lunch', 
      cost: 14.99 
    },
    { 
      serialNumber: 6, 
      date: '2022-01-06', 
      items: ['Palak Paneer', 'Roti'], 
      meal: 'Dinner', 
      cost: 22.50 
    },
    { 
      serialNumber: 7, 
      date: '2022-01-07', 
      items: ['Idli', 'Vada', 'Filter Coffee'], 
      meal: 'Breakfast', 
      cost: 17.75 
    },
    { 
      serialNumber: 8, 
      date: '2022-01-08', 
      items: ['Chole', 'Kulcha'], 
      meal: 'Lunch', 
      cost: 12.99 
    },
    { 
      serialNumber: 9, 
      date: '2022-01-09', 
      items: ['Dal Makhani', 'Jeera Rice'], 
      meal: 'Dinner', 
      cost: 21.25 
    },
    { 
      serialNumber: 10, 
      date: '2022-01-10', 
      items: ['Samosa', 'Chai'], 
      meal: 'Breakfast', 
      cost: 19.50 
    }
  ];
  
  

  return (
    <div>
      <table className="border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border w-[7.6%]  border-black">S No</th>
            <th className="px-4 py-2 border w  border-black">Date</th>
            <th className="px-4 py-2 border w  border-black">Items</th>
            <th className="px-4 py-2 border w  border-black">Meal</th>
            <th className="px-4 py-2 border w  border-black">Cost</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border  border-black">{item.serialNumber}</td>
              <td className="px-4 py-2 border  border-black">{item.date}</td>
              <td className="px-4 py-2 border  text-left border-black">{item.items.join(', ')}</td>
              <td className="px-4 py-2 border  border-black">{item.meal}</td>
              <td className="px-4 py-2 border  border-black">₹{item.cost.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExtraList;
