import React from 'react';

function RegularList() {
  // Sample list of items
  const items = [
    { serialNumber: 1, date: '2022-01-01', meal: 'Breakfast', cost: 50 },
    { serialNumber: 2, date: '2022-01-02', meal: 'Lunch', cost: 65 },
    { serialNumber: 3, date: '2022-01-03', meal: 'Dinner', cost: 55 },
    { serialNumber: 4, date: '2022-01-04', meal: 'Breakfast', cost: 60 },
    { serialNumber: 5, date: '2022-01-05', meal: 'Lunch', cost: 45 },
    { serialNumber: 6, date: '2022-01-06', meal: 'Dinner', cost: 70 },
    { serialNumber: 7, date: '2022-01-07', meal: 'Breakfast', cost: 48 },
    { serialNumber: 8, date: '2022-01-08', meal: 'Lunch', cost: 52 },
    { serialNumber: 9, date: '2022-01-09', meal: 'Dinner', cost: 63 },
    { serialNumber: 10, date: '2022-01-10', meal: 'Breakfast', cost: 42 },
  ];
  
  

  return (
    <div className=' text-center w-full'>
      <table className="border  border-gray-700">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border w-[7.6%]  border-black ">S No</th>
            <th className="px-4 py-2 border w border-black ">Date</th>
            <th className="px-4 py-2 border w border-black ">Meal</th>
            <th className="px-4 py-2 border w border-black ">Cost</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border  border-black">{item.serialNumber}</td>
              <td className="px-4 py-2 border  border-black">{item.date}</td>
              <td className="px-4 py-2 border  border-black">{item.meal}</td>
              <td className="px-4 py-2 border  border-black">₹{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RegularList;
