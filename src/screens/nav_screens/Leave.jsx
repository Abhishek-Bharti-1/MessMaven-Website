import React, { useState, useEffect } from 'react';
import { getFirestore, doc, collection, getDocs, where, query } from "firebase/firestore";
import { app } from '../../firebase';


function Leave() {
  const [facultyOrderList, setfacultyOrderList] = useState([]);
  // const data = [
  //   { serialNo: 1, rollNo: '21124004', startDate: '2024-04-01', endDate: '2024-04-30' },
  //   { serialNo: 2, rollNo: '21124004', startDate: '2024-04-05', endDate: '2024-05-05' },
  //   { serialNo: 3, rollNo: '21124004', startDate: '2024-04-10', endDate: '2024-05-10' },
  //   { serialNo: 4, rollNo: '21124004', startDate: '2024-04-15', endDate: '2024-05-15' },
  //   { serialNo: 5, rollNo: '21124004', startDate: '2024-04-20', endDate: '2024-05-20' },
  //   { serialNo: 6, rollNo: '21124004', startDate: '2024-04-25', endDate: '2024-05-25' },
  //   { serialNo: 7, rollNo: '21124004', startDate: '2024-04-30', endDate: '2024-05-30' },
  //   { serialNo: 8, rollNo: '21124004', startDate: '2024-05-05', endDate: '2024-06-05' },
  //   { serialNo: 9, rollNo: '21124004', startDate: '2024-05-10', endDate: '2024-06-10' },
  //   { serialNo: 10, rollNo: '21124004', startDate: '2024-05-15', endDate: '2024-06-15' },
  // ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore(app); // Get Firestore instance
        const orderCollection = collection(db, "leave_requests");

        // Query to filter documents where type is equal to "single"
        const q = query(orderCollection, where("type", "==", "Single"));

        const querySnapshot = await getDocs(q);
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
  console.log(facultyOrderList)

  function convertTimestampToDateTime(timestamp) {
    // Handle milliseconds vs seconds timestamps
    const timestampInMilliseconds = timestamp * (timestamp.toString().length === 10 ? 1000 : 1);
  
    // Create a new Date object
    const date = new Date(timestampInMilliseconds);
  
    // Format the date and time
    const formattedDateTime = date.toLocaleDateString(); // Adjust format as needed
  
    return formattedDateTime;
  }


  return (
    <div className='h-screen'>
      {/* <Navbar /> */}
      <div className=' p-8'>
        <h1 className='font-bold text-3xl mt-[4rem] ms-4'>Students Leave History</h1>
        <div className='flex mt-4 py-2 rounded-xl bg-blue-800 text-white px-8'>
          <h1 className='flex font-semibold text-xl mr-2  w-[5%] '>S No</h1>
          <h1 className='flex font-semibold text-xl justify-center w-[10%]  '>Roll No</h1>
          <h1 className='flex font-semibold text-xl justify-center w-[15%]  '>Name</h1>
          <div className='flex font-semibold text-xl w-[46%] justify-evenly space-x-4 mx-1'>
            <h1 className='flex font-semibold text-xl '>Start Date & Meal</h1>
            <h1 className='flex font-semibold text-xl '>End Date & Meal</h1>
          </div>
          <h1 className='flex font-semibold text-xl mr-2 justify-center w-[20%] '>No of Meals</h1>
          <h1 className='flex font-semibold text-xl  justify-center w-[20%] '>Approval</h1>
        </div>
        <div className='h-[36rem]  mt-2 overflow-y-auto scrollbar-thin scrollbar-webkit'>
          <ul className='pb-2'>
            {facultyOrderList.map((item, index) => (
              <li key={index}>
                <div className='py-4 px-8  bg-blue-300 hover:bg-blue-800 hover:text-white mt-2 text-lg rounded-3xl items-center flex'>
                  <div className=' flex font-semibold text-xl mr-2 pl-2  w-[5%] max-w-[5%]'>{index+1}</div>
                  <div className=' flex font-semibold text-xl justify-center w-[10%] max-w-[10%]'>21124017</div>
                  <div className=' flex font-semibold text-xl justify-center w-[15%] max-w-[15%]'>{item.userName}</div>
                  <div className='flex font-semibold text-xl w-[46%] max-w-[46%] justify-evenly space-x-4 mx-1'>
                    <div>
                      <div className=' font-semibold '>Start Date: {convertTimestampToDateTime(item.dateTime.seconds)}</div>
                      <p className=' font-semibold '>Meal: {item.mealsList[0]}</p>
                    </div>
                    <div className=''>

                      <div className=' font-semibold '>End Date: {convertTimestampToDateTime(item.dateTime.seconds)}</div>
                      <p className=' font-semibold '>Meal: {item.mealsList[item.mealsList.length-1]}</p>
                    </div>
                  </div>
                  <div className='flex font-semibold text-xl mr-2 justify-center w-[20%] max-w-[20%]'>
                    <p className='font-semibold'>
                      {item.mealsList.length}
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