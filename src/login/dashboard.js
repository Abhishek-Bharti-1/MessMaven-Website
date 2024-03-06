import React from 'react'
import Navbar from './Navbar';
import { UserIcon } from '@heroicons/react/24/outline'
import SearchBar from './SearchBar';


function generateFullNamesList() {
    const fullNames = [];
    const surnames = [
      "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
      "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    ];
  
    const firstNames = [
      "John", "Emma", "Michael", "Sophia", "William", "Olivia", "James", "Ava", "Alexander", "Isabella",
      "Daniel", "Mia", "Joseph", "Emily", "David", "Charlotte", "Matthew", "Amelia", "Ethan", "Harper",
    ];
  
    while (fullNames.length < 100) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const surname = surnames[Math.floor(Math.random() * surnames.length)];
      const fullName = `${firstName} ${surname}`;
  
      if (!fullNames.includes(fullName)) {
        fullNames.push(fullName);
      }
    }
  
    return fullNames;
  }

export default function Dashboard() {
    // Generate an array of 100 names for demonstration purposes
    const names = Array.from({ length: 100 }, (_, index) => `Student ${index + 1}`);
const full_names = generateFullNamesList();

    return (

        <div>
            <nav className="bg-gray-800 shadow-lg fixed w-full">
                <div className="max-w-8xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <span className="text-white text-2xl font-bold">Mess Maven</span>
                        </div>
                        {/* Navigation Links */}
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                                >
                                    Home
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                                >
                                    Announcements
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                                >
                                    Extra Items
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                                >
                                    Leave
                                </a>
                                <div className='border-2 border-grey-500 bg-white rounded-full p-1 mt-3 mb-3'>
                               
                                <UserIcon height={35} color='gray-500'></UserIcon>
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <img src="image" alt=' hgh' className='h-full w-full' ></img>
            </div>
            <div className='px-5 bg-gray-200'>
                <div className="pt-32 w-full">
                    <SearchBar ></SearchBar>
                </div>

                <h1 className='font-bold text-3xl mt-10 ms-10'>List of Students</h1>
                <ul>
                    {names.map((name, index) => (
                        <li className='font-bold text-xl  mx-4 my-8' key={index}>
                            <div className='border-black bg-white shadow-md p-3 px-7 rounded-xl flex items-center justify-between '>
                                <div className='flex items-center'> <h1>{index + 1}.</h1>

                                <img className='h-40 mx-5'  src="images/person.png" alt=' '></img>
                                
                                    <div>
                                        <h1 className='font-bold'> {full_names[index]}</h1>
                                        <p className='text-sm'>Roll No : {21124001+index } </p>
                                        <p className='text-sm'>Room No : MBH-A {101+index } </p>
                                    </div>
                                </div>
                                <div>
                                    <input type="checkbox" className="h-7 w-7 rounded-lg" id="vehicle1" name="vehicle1" value="Bike"></input>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
