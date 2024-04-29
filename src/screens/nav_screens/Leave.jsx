import React from 'react'

function Leave() {
  const data = [
    { serialNo: 1, rollNo: '21124004', startDate: '2024-04-01', endDate: '2024-04-30' },
    { serialNo: 2, rollNo: '21124004', startDate: '2024-04-05', endDate: '2024-05-05' },
    { serialNo: 3, rollNo: '21124004', startDate: '2024-04-10', endDate: '2024-05-10' },
    { serialNo: 4, rollNo: '21124004', startDate: '2024-04-15', endDate: '2024-05-15' },
    { serialNo: 5, rollNo: '21124004', startDate: '2024-04-20', endDate: '2024-05-20' },
    { serialNo: 6, rollNo: '21124004', startDate: '2024-04-25', endDate: '2024-05-25' },
    { serialNo: 7, rollNo: '21124004', startDate: '2024-04-30', endDate: '2024-05-30' },
    { serialNo: 8, rollNo: '21124004', startDate: '2024-05-05', endDate: '2024-06-05' },
    { serialNo: 9, rollNo: '21124004', startDate: '2024-05-10', endDate: '2024-06-10' },
    { serialNo: 10, rollNo: '21124004', startDate: '2024-05-15', endDate: '2024-06-15' },
  ];

  return (
    <div className='h-screen'>
      {/* <Navbar /> */}
      <div className=' p-8'>
        <h1 className='font-bold text-3xl mt-[4rem] ms-4'>Students Leave History</h1>
        <div className='flex mt-4 py-2 rounded-xl bg-blue-800 text-white px-8'>
          <h1 className='flex font-semibold text-xl mr-2  w-[5%] '>S No</h1>
          <h1 className='flex font-semibold text-xl justify-center w-[10%]  '>Roll No</h1>
          <div className='flex font-semibold text-xl w-[46%] justify-evenly space-x-4 mx-1'>
          <h1 className='flex font-semibold text-xl '>Start Date & Meal</h1>
          <h1 className='flex font-semibold text-xl '>End Date & Meal</h1>
          </div>
          <h1 className='flex font-semibold text-xl mr-2 justify-center w-[20%] '>No of Meals</h1>
          <h1 className='flex font-semibold text-xl  justify-center w-[20%] '>Approval</h1>
        </div>
        <div className='h-[36rem]  mt-2 overflow-y-auto scrollbar-thin scrollbar-webkit'>
          <ul className='pb-2'>
            {data.map((item, index) => (
              <li key={index}>
                <div className='py-4 px-8  bg-blue-300 hover:bg-blue-800 hover:text-white mt-2 text-lg rounded-3xl items-center flex'>
                  <div className=' flex font-semibold text-xl mr-2 pl-2  w-[5%]'>{item.serialNo}</div>
                  <div className=' flex font-semibold text-xl justify-center w-[10%] '> {item.rollNo}</div>
                  <div className='flex font-semibold text-xl w-[46%] justify-evenly space-x-4 mx-1'>
                    <div>
                      <div className=' font-semibold '>Start Date: {item.startDate}</div>
                      <p className=' font-semibold '>Meal: Lunch</p>
                    </div>
                    <div className=''>

                      <div className=' font-semibold '>End Date: {item.endDate}</div>
                      <p className=' font-semibold '>Meal: Dinner</p>
                    </div>
                  </div>
                  <div className='flex font-semibold text-xl mr-2 justify-center w-[20%] '>
                    <p className='font-semibold'>
                      10
                    </p>
                  </div>
                  <div className='flex font-semibold text-xl  justify-center w-[20%]  justify-evenly '>

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
    </div>
  );
};

export default Leave