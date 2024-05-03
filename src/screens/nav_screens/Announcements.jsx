import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { app } from '../../firebase';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc,onSnapshot } from "firebase/firestore";

function Announcements() {
  const [inputMessage, setInputMessage] = useState('');
  const [studentsList, setStudentsList] = useState([]);
  

  const handleMessageSend = async () => {
    if (inputMessage.trim() === '') return;
    const db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, "announcements"), {
        message: inputMessage,
      })// Add data to the collection
      console.log('Data successfully added!');
      // Optionally, reset the form or update state
    } catch (error) {
      console.error('Error adding data:', error);
      // Handle potential errors
    }
    // setMessages([...messages, inputMessage]);
    setInputMessage('');
  };

  const [facultyOrderList, setfacultyOrderList] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot( // Use onSnapshot for real-time updates
      collection(getFirestore(app), "announcements"), // Reference the collection
      (querySnapshot) => {
        const retrievedStudents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setStudentsList(retrievedStudents);
      },
      (error) => {
        console.error("Error fetching student data:", error); // Handle errors
      }
    );
    // Cleanup function to unsubscribe from the listener on component unmount
    return () => unsubscribe();
  }, []); // Empty dependency array to run only once on component mount

  // console.log(studentsList); 
  return (
    <div>
      {/* <Navbar/> */}
      <div className="w-full mx-auto">
        <div className=" p-4 rounded-lg">
          <h1 className='mt-16 text-3xl font-semibold'>Announcements</h1>

          <div>
            <div className='overflow-y-auto mt-4 h-[36rem] bg-slate-300 scrollbar-thin scrollbar-webkit'>
              <ul className="mb-4">
                {studentsList.map((message, index) => (
                  <li key={index} className="mb-2">
                    <div className='p-4 bg-blue-300 rounded-lg'>
                      {message.message}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-strech p-4 rounded-lg bg-blue-800">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                className="flex-grow ps-2 font-semibold text-black border bg-white border-white rounded-l-md py-2 focus:outline-none focus:border-white"
                placeholder="Type your message..."
              />
              <button
                onClick={handleMessageSend}
                className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
                <PaperAirplaneIcon width={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements