import React, { useState } from 'react'
import Navbar from '../../components/Navbar';

import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';

function generateFullNamesList() {
    const fullNames = [];
    const surnames = [
        "Kapoor",
        "Singh",
        "Patel",
        "Datt",
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
        "Iyer"
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

    const [filteredData, setFilteredData] = useState(full_names);

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
           <Navbar/>
            <div>
                <img src="image" alt=' hgh' className='h-full w-full' ></img>
            </div>
            <div className='px-5 bg-gray-300'>
                <div className="pt-32 w-full">
                    <SearchBar onSearch={handleSearch} />
                </div>
                <h1 className='font-bold text-3xl mt-10 ms-10'>List of Students</h1>
                <SearchResults data={filteredData} query={searchText}/>
            </div>
        </div>
    );
}
