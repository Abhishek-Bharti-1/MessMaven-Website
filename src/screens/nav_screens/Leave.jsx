import React from 'react'
import Navbar from '../../components/Navbar';

function Leave() {
  const data = [
    { serialNo: 1, rollNo: 'A001', startDate: '2024-04-01', endDate: '2024-04-30' },
    { serialNo: 2, rollNo: 'A002', startDate: '2024-04-05', endDate: '2024-05-05' },
    { serialNo: 3, rollNo: 'A003', startDate: '2024-04-10', endDate: '2024-05-10' },
    { serialNo: 4, rollNo: 'A004', startDate: '2024-04-15', endDate: '2024-05-15' },
    { serialNo: 5, rollNo: 'A005', startDate: '2024-04-20', endDate: '2024-05-20' },
    { serialNo: 6, rollNo: 'A006', startDate: '2024-04-25', endDate: '2024-05-25' },
    { serialNo: 7, rollNo: 'A007', startDate: '2024-04-30', endDate: '2024-05-30' },
    { serialNo: 8, rollNo: 'A008', startDate: '2024-05-05', endDate: '2024-06-05' },
    { serialNo: 9, rollNo: 'A009', startDate: '2024-05-10', endDate: '2024-06-10' },
    { serialNo: 10, rollNo: 'A010', startDate: '2024-05-15', endDate: '2024-06-15' },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <div className=' p-8'>
        <h2>List of Elements</h2>
        <ul className='mt-12'>
          {data.map((item, index) => (
            <li key={index}>
              <div className='p-4 bg-slate-400 mt-2 justify-start items-center flex '>
                <div className=' font-semibold mr-4 '>{item.serialNo}</div>
                <div className=' font-semibold '>Roll No: {item.rollNo}</div>
                <div className='mx-10 flex space-x-6'>
                  <div>
                    <div className=' font-semibold '>Start Date: {item.startDate}</div>
                    <p className=' font-semibold '>Meal: Lunch</p>
                  </div>
                  <div className=''>

                    <div className=' font-semibold '>End Date: {item.endDate}</div>
                    <p className=' font-semibold '>Meal: Dinner</p>
                  </div>
                  <div className=' flex items-center'>
                    <p>
                      Number of Meals : 10
                    </p>
                  </div>

                </div>
                <div className='flex space-x-4 justify-end'>

                  <button className="px-4 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-green-500 transition-colors">
                    Approve
                  </button>
                  <button className="px-4 py-2 rounded-md font-semibold text-white bg-blue-500 hover:bg-red-500 transition-colors">
                    Deny
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leave