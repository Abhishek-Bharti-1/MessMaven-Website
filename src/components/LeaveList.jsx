import React from 'react';

function LeaveList() {
  // Sample list of items
  const items = [
    { serialNumber: 1, startDate: '2022-01-01', endDate: '2022-01-10', numberOfMeals: 10 },
    { serialNumber: 2, startDate: '2022-02-01', endDate: '2022-02-15', numberOfMeals: 15 },
    { serialNumber: 3, startDate: '2022-03-01', endDate: '2022-03-20', numberOfMeals: 20 },
    { serialNumber: 4, startDate: '2022-04-01', endDate: '2022-04-25', numberOfMeals: 25 },
    { serialNumber: 5, startDate: '2022-05-01', endDate: '2022-05-30', numberOfMeals: 30 },
    { serialNumber: 6, startDate: '2022-06-01', endDate: '2022-06-10', numberOfMeals: 35 },
    { serialNumber: 7, startDate: '2022-07-01', endDate: '2022-07-15', numberOfMeals: 40 },
    { serialNumber: 8, startDate: '2022-08-01', endDate: '2022-08-20', numberOfMeals: 45 },
    { serialNumber: 9, startDate: '2022-09-01', endDate: '2022-09-25', numberOfMeals: 50 },
    { serialNumber: 10, startDate: '2022-10-01', endDate: '2022-10-30', numberOfMeals: 55 }
  ];

  
  return (
    <div className=' text-center w-full'>
      <table className="border  border-gray-700">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border w-[7.6%]  border-black ">S No</th>
            <th className="px-4 py-2 border w border-black ">Start Date</th>
            <th className="px-4 py-2 border w border-black ">End Date</th>
            <th className="px-4 py-2 border w border-black ">Number of Meals</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border  border-black">{item.serialNumber}</td>
              <td className="px-4 py-2 border  border-black">{item.startDate}</td>
              <td className="px-4 py-2 border  border-black">{item.endDate}</td>
              <td className="px-4 py-2 border  border-black">{item.numberOfMeals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default LeaveList;
