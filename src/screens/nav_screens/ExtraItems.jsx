import React, { useState,useEffect } from 'react'
import Navbar from '../../components/Navbar';
import { ChevronDownIcon, ChevronUpIcon, PencilIcon, TrashIcon } from '@heroicons/react/20/solid';
import { PlusIcon } from '@heroicons/react/24/solid';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc,onSnapshot } from "firebase/firestore";
import { app } from '../../firebase';

function ExtraItems() {
  const [foodItems, setFoodItems] = useState([
    { id: 1, name: 'Pizza', cost: '10', quantity: '100' },
    { id: 2, name: 'Burger', cost: '5', quantity: '80' },
    { id: 3, name: 'Salad', cost: '8', quantity: '90' },
    { id: 4, name: 'Pasta', cost: '12', quantity: '70' },
    { id: 5, name: 'Sushi', cost: '15', quantity: '80' },
  ]);
  const [studentsList, setStudentsList] = useState([]);
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const db = getFirestore(app); // Assuming 'app' is your Firebase app instance

  const handleSubmit = async () => {
    if (!name || !cost || !quantity) {
      alert('Please fill in all fields.');
      return;
    }
  
    try {
      // Add new extra item to Firestore collection
      await addDoc(collection(db, 'extra_items'), { name, cost, quantity });
      // Reset form inputs
      setName('');
      setCost('');
      setQuantity('');
      // Close the modal
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding extra item:', error);
    }
  };
  

  useEffect(() => {
    const unsubscribe = onSnapshot( // Use onSnapshot for real-time updates
      collection(getFirestore(app), "extra_items"), // Reference the collection
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

  console.log(studentsList); 

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
            onClick={() => setIsModalOpen(true)}
            className='flex mt-16 text-white font-semibold bg-blue-800 hover:bg-blue-300 hover:text-black py-2 pr-3 ps-2 rounded-lg '>
            <PlusIcon width={20} className=' mr-2' />
            <p>Add item</p>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 overflow-y-auto h-[37rem] scrollbar-thin scrollbar-webkit'>
          {studentsList.map((food) => (
            <div
              key={food.name}
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
                  <PencilIcon className="ml-1 pb-1" width={18} />
                </button>
                <button className=" flex items-end pl-2 pr-2 rounded-2xl bg-white hover:bg-red-700 hover:text-white text-black font-bold py-2" onClick={() => deleteItem(food.id)}>
                  <p>Delete</p>
                  <TrashIcon className="ml-1 pb-1" width={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg min-w-[30%]">
            <h2 className="text-2xl font-bold mb-4 flex items-center justify-center">Add Extra Item</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-semibold">Item Name:</label>
                <input
                  type="text"
                  id="name"
                  className="border border-black rounded px-2 py-1 w-full"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cost" className="block font-semibold">Cost:</label>
                <input
                  type="number"
                  id="cost"
                  className="border border-black rounded px-2 py-1 w-full"
                  value={cost}
                  onChange={(e) => setCost(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="quantity" className="block font-semibold">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  className="border border-black rounded px-2 py-1 w-full"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
                >
                  Add Item
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExtraItems