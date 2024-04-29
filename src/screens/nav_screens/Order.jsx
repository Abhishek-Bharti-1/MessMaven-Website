import React from 'react'

function Order() {
    const data = [
        {
            serialNo: 1,
            facultyId: 'CS001',
            department: 'Computer Science',
            date: '2024-04-01',
            meal: 'Breakfast',
            costOfMeal: 50,
            paymentStatus: 'Paid'
        },
        {
            serialNo: 2,
            facultyId: 'EE002',
            department: 'Electrical Engineering',
            date: '2024-04-01',
            meal: 'Lunch',
            costOfMeal: 100,
            paymentStatus: 'Unpaid'
        },
        {
            serialNo: 3,
            facultyId: 'ME003',
            department: 'Mechanical Engineering',
            date: '2024-04-02',
            meal: 'Dinner',
            costOfMeal: 150,
            paymentStatus: 'Paid'
        },
        {
            serialNo: 4,
            facultyId: 'CS004',
            department: 'Computer Science',
            date: '2024-04-02',
            meal: 'Breakfast',
            costOfMeal: 50,
            paymentStatus: 'Unpaid'
        },
        {
            serialNo: 5,
            facultyId: 'EE005',
            department: 'Electrical Engineering',
            date: '2024-04-03',
            meal: 'Lunch',
            costOfMeal: 100,
            paymentStatus: 'Paid'
        },
        {
            serialNo: 6,
            facultyId: 'ME006',
            department: 'Mechanical Engineering',
            date: '2024-04-03',
            meal: 'Dinner',
            costOfMeal: 150,
            paymentStatus: 'Unpaid'
        },
        {
            serialNo: 7,
            facultyId: 'CS007',
            department: 'Computer Science',
            date: '2024-04-04',
            meal: 'Breakfast',
            costOfMeal: 50,
            paymentStatus: 'Paid'
        },
        {
            serialNo: 8,
            facultyId: 'EE008',
            department: 'Electrical Engineering',
            date: '2024-04-04',
            meal: 'Lunch',
            costOfMeal: 100,
            paymentStatus: 'Unpaid'
        },
        {
            serialNo: 9,
            facultyId: 'ME009',
            department: 'Mechanical Engineering',
            date: '2024-04-05',
            meal: 'Dinner',
            costOfMeal: 150,
            paymentStatus: 'Paid'
        },
        {
            serialNo: 10,
            facultyId: 'CS010',
            department: 'Computer Science',
            date: '2024-04-05',
            meal: 'Breakfast',
            costOfMeal: 50,
            paymentStatus: 'Unpaid'
        },
    ];


    return (
        <div className='h-screen'>
            {/* <Navbar /> */}
            <div className=' p-8'>
                <h1 className='font-bold text-3xl mt-[4rem] ms-4'>Faculty Order History</h1>
                <div className='flex mt-4 py-2 rounded-xl bg-blue-800 text-white px-8'>
                    <h1 className='flex font-semibold text-xl mr-2  w-[5%] '>S No</h1>
                    <h1 className='flex font-semibold text-xl justify-center w-[10%] '>Faculty ID</h1>
                    <div className='flex font-semibold text-xl w-[46%] justify-evenly space-x-4 mx-1'>
                        <h1 className='flex font-semibold text-xl '>Department</h1>
                        <h1 className='flex font-semibold text-xl '>Date & Meal</h1>
                    </div>
                    <h1 className='flex font-semibold text-xl mr-2 justify-center w-[20%] '>Cost</h1>
                    <h1 className='flex font-semibold text-xl  justify-center w-[20%] '>Approval</h1>
                </div>
                <div className='h-[36rem]  mt-2 overflow-y-auto scrollbar-thin scrollbar-webkit'>
                    <ul className='pb-2'>
                        {data.map((item, index) => (
                            <li key={index}>
                                <div className='py-4 px-8  bg-blue-300 hover:bg-blue-800 hover:text-white mt-2 text-lg rounded-3xl items-center flex'>
                                    <div className=' flex font-semibold text-xl mr-2 pl-2  w-[5%]'>{item.serialNo}</div>
                                    <div className=' flex font-semibold text-xl justify-center w-[10%] '> {item.facultyId}</div>
                                    <div className='flex font-semibold text-xl w-[46%] justify-evenly space-x-4 mx-1'>
                                        <div>
                                            <div className=' font-semibold '>{item.department}</div>
                                        </div>
                                        <div className=''>

                                            <div className=' font-semibold '>Date: {item.date}</div>
                                            <p className=' font-semibold '>Meal: {item.meal}</p>
                                        </div>
                                    </div>
                                    <div className='flex font-semibold text-xl mr-2 justify-center w-[20%] '>
                                        <p className='font-semibold'>
                                            Rs {item.costOfMeal}
                                        </p>
                                    </div>
                                    <div className='flex font-semibold text-xl  justify-center w-[20%]  justify-evenly '>
                                    <p className='font-semibold'>
                                        {item.paymentStatus}
                                        </p>
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

export default Order