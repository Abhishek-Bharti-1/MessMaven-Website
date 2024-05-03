import React, { useState, useEffect } from 'react';
import { getFirestore,doc, collection, getDocs } from "firebase/firestore";
import { app } from '../../firebase';

function Order() {
    const [facultyOrderList, setfacultyOrderList] = useState([]);
    const data = [
        {
            serialNo: 1,
            facultyName: 'Rajesh Sharma',
            facultyId: 'CS001',
            department: 'Computer Science',
            date: '2024-04-01',
            meal: 'Breakfast',
            costOfMeal: 50,
            order: [
                { item: 'Paratha', quantity: 2 },
                { item: 'Lassi', quantity: 1 },
                { item: 'Aloo Sabzi', quantity: 1 }
            ],
        },
        {
            serialNo: 2,
            facultyName: 'Priya Singh',
            facultyId: 'EE002',
            department: 'Electrical Engineering',
            date: '2024-04-01',
            meal: 'Lunch',
            costOfMeal: 100,
            order: [
                { item: 'Chole Bhature', quantity: 1 },
                { item: 'Raita', quantity: 1 },
                { item: 'Kheer', quantity: 1 }
            ],
        },
        {
            serialNo: 3,
            facultyName: 'Amit Kumar',
            facultyId: 'ME003',
            department: 'Mechanical Engineering',
            date: '2024-04-02',
            meal: 'Dinner',
            costOfMeal: 150,
            order: [
                { item: 'Makki di Roti', quantity: 2 },
                { item: 'Sarson Da Saag', quantity: 1 },
                { item: 'Buttermilk', quantity: 1 }
            ],
        },
        {
            serialNo: 4,
            facultyName: 'Anita Gupta',
            facultyId: 'CS004',
            department: 'Computer Science',
            date: '2024-04-02',
            meal: 'Breakfast',
            costOfMeal: 50,
            order: [
                { item: 'Poha', quantity: 1 },
                { item: 'Tea', quantity: 1 },
                { item: 'Samosa', quantity: 1 }
            ],
        },
        {
            serialNo: 5,
            facultyName: 'Vivek Verma',
            facultyId: 'EE005',
            department: 'Electrical Engineering',
            date: '2024-04-03',
            meal: 'Lunch',
            costOfMeal: 100,
            order: [
                { item: 'Rajma Chawal', quantity: 1 },
                { item: 'Papad', quantity: 1 },
                { item: 'Gulab Jamun', quantity: 2 }
            ],
        },
        {
            serialNo: 6,
            facultyName: 'Shweta Singh',
            facultyId: 'ME006',
            department: 'Mechanical Engineering',
            date: '2024-04-03',
            meal: 'Dinner',
            costOfMeal: 150,
            order: [
                { item: 'Paneer Tikka', quantity: 1 },
                { item: 'Naan', quantity: 2 },
                { item: 'Rasmalai', quantity: 1 }
            ],
        },
        {
            serialNo: 7,
            facultyName: 'Sanjay Kumar',
            facultyId: 'CS007',
            department: 'Computer Science',
            date: '2024-04-04',
            meal: 'Breakfast',
            costOfMeal: 50,
            order: [
                { item: 'Aloo Paratha', quantity: 1 },
                { item: 'Dahi', quantity: 1 },
                { item: 'Chutney', quantity: 1 }
            ],
        },
        {
            serialNo: 8,
            facultyName: 'Neha Sharma',
            facultyId: 'EE008',
            department: 'Electrical Engineering',
            date: '2024-04-04',
            meal: 'Lunch',
            costOfMeal: 100,
            order: [
                { item: 'Punjabi Kadhi Pakora', quantity: 1 },
                { item: 'Rice', quantity: 1 },
                { item: 'Jalebi', quantity: 2 }
            ],
        },
        {
            serialNo: 9,
            facultyName: 'Rahul Gupta',
            facultyId: 'ME009',
            department: 'Mechanical Engineering',
            date: '2024-04-05',
            meal: 'Dinner',
            costOfMeal: 150,
            order: [
                { item: 'Samosa Chaat', quantity: 1 },
                { item: 'Chole', quantity: 1 },
                { item: 'Rabri', quantity: 1 }
            ],
        },
        {
            serialNo: 10,
            facultyName: 'Pooja Sharma',
            facultyId: 'CS010',
            department: 'Computer Science',
            date: '2024-04-05',
            meal: 'Breakfast',
            costOfMeal: 50,
            order: [
                { item: 'Paneer Bhurji', quantity: 1 },
                { item: 'Paratha', quantity: 2 },
                { item: 'Masala Chai', quantity: 1 }
            ],
        },
    ];
    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(app); // Get Firestore instance
            try {
                const docRef = doc(db, 'Admin', 'BH-1')
                const orderCollection = collection(docRef, "FacultyOrder");
                const querySnapshot = await getDocs(orderCollection);
                console.log(querySnapshot)
                const retrievedStudents = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setfacultyOrderList(retrievedStudents);
            } catch (error) {
                console.error("Error fetching student data:", error); // Handle errors gracefully
            }
        };
        fetchData(); // Call the fetch function
    }, []);
    console.log(facultyOrderList) // Update state with fetched data




    return (
        <div className='h-screen'>
            {/* <Navbar /> */}
            <div className=' p-8'>
                <h1 className='font-bold text-3xl mt-[4rem] ms-4'>Faculty Order History</h1>
                <div className='flex mt-4 py-2 rounded-xl bg-blue-800 text-white px-8'>
                    <h1 className='flex font-semibold text-xl mr-2  w-[5%] '>S No</h1>
                    <h1 className='flex font-semibold text-xl justify-center w-[10%] '>Faculty ID</h1>
                    <h1 className='flex font-semibold text-xl justify-center w-[15%] '>Faculty Name</h1>
                    <div className='flex font-semibold text-xl w-[46%] justify-evenly space-x-4 mx-1'>
                        <h1 className='flex font-semibold text-xl '>Department</h1>
                        <h1 className='flex font-semibold text-xl '>Date & Meal</h1>
                    </div>
                    <h1 className='flex font-semibold text-xl mr-2 justify-center w-[20%] '>Cost</h1>
                    <h1 className='flex font-semibold text-xl  justify-center w-[20%] '>Order</h1>
                </div>
                <div className='h-[36rem]  mt-2 overflow-y-auto scrollbar-thin scrollbar-webkit'>
                    <ul className='pb-2'>
                        {data.map((item, index) => (
                            <li key={index}>
                                <div className='py-4 px-8  bg-blue-300 hover:bg-blue-800 hover:text-white mt-2 text-lg rounded-3xl items-center flex'>
                                    <div className=' flex font-semibold text-xl mr-2 pl-2  w-[5%]'>{index+1}</div>
                                    <div className=' flex font-semibold text-xl justify-center w-[10%] '> {item.facultyId}</div>
                                    <div className=' flex font-semibold text-xl justify-center w-[15%]'>{item.facultyName}</div>
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
                                    <div className='flex font-semibold text-xl w-[20%]  justify-start '>
                                        <p className='font-semibold'>
                                            {item.order[0].item} X {item.order[0].quantity}<br />
                                            {item.order[1].item} X {item.order[1].quantity}<br />
                                            {item.order[2].item} X {item.order[2].quantity}
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