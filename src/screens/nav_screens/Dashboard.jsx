import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SearchBar from '../../components/SearchBar';
import SearchResults from '../../components/SearchResults';
import { useNavigate, useNavigation } from 'react-router-dom'
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from '../../firebase';


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
   // const names = Array.from({ length: 100 }, (_, index) => `Student ${index + 1}`);
    const full_names = generateFullNamesList();
    const navigate = useNavigate();
    const [studentsList, setStudentsList] = useState([]);

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

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore(app); // Get Firestore instance
            try {
                const studentCollection = collection(db, "Students"); // Reference the "Students" collection
                const querySnapshot = await getDocs(studentCollection);
                console.log(querySnapshot) // Fetch student documents
                const retrievedStudents = querySnapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setStudentsList(retrievedStudents);
            } catch (error) {
                console.error("Error fetching student data:", error); // Handle errors gracefully
            }
        };
        fetchData(); // Call the fetch function
    }, []);
    console.log(studentsList) // Update state with fetched data

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            console.log(uid)
            // ...
        } else {
            navigate('/login')
            // User is signed out
            // ...
        }
    });

    return (
        <div>
            {/* <Navbar /> */}
            {/* <div>
                <img src="image" alt=' hgh' className='h-full w-full' ></img>
            </div> */}
            <div className='px-5 h-screen pb-2 bg-gray-300 overflow-y-hidden scrollbar-thin scrollbar-webkit'>
                <div className="pt-32 w-full ">
                    <SearchBar onSearch={handleSearch} />
                </div>
                <h1 className='font-bold text-3xl mt-10 ms-10'>List of Students</h1>
                <div className='h-[35rem] overflow-y-auto  scrollbar-thin scrollbar-webkit '>
                    <SearchResults data={filteredData} query={searchText} className="" />
                </div>
            </div>
        </div>
    );
}
