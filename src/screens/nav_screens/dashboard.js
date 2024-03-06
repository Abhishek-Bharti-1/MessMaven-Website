import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import { UserIcon } from '@heroicons/react/24/outline'
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';



function generateFullNamesList() {
    const fullNames = [];
    const surnames = [
        "Kapoor",
        "Singh",
        "Patel",
        "Devi",
        "Kumar",
        "Sharma",
        "Das",
        "Khan",
        "Ahmed",
        "Yadav",
        "Rao",
        "Gupta",
        "Trivedi",
        "Mehta",
        "Pandey",
        "Dasgupta",
        "Mittal",
        "Joshi",
        "Bose",
        " Iyer"
    ];

    const firstNames = [
        "Aisha", // Female
        "Arjun", // Male
        "Diya",   // Female
        "Rohan",  // Male
        "Priya",  // Female
        "Vivaan", // Male
        "Kiara",  // Female
        "Neil",   // Male
        "Ananya", // Female
        "Yash",    // Male
        "Siya",    // Female
        "Aditya", // Male
        "Saanvi", // Female
        "Reyansh",// Male
        "Navya",  // Female
        "Dev",     // Male
        "Anika",  // Female
        "Ishaan", // Male
        "Zara",   // Female
        " Veer",  // Male
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

    const [filteredData, setFilteredData] = useState([]);

    const [searchText, setSearchText] = useState('');

    const handleSearch = (query) => {
        setSearchText(query);

        setFilteredData(
          full_names.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          )
        );
    };
    
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
                    <SearchBar onSearch={handleSearch} ></SearchBar>
                </div>
                <h1 className='font-bold text-3xl mt-10 ms-10'>List of Students</h1>
                <SearchResults data={filteredData} query={searchText}/>
            </div>
        </div>
    );
}
