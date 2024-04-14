import React from 'react'
import Modal from './Modal';
import { useState } from 'react';



function SearchResults({ data, query }) {

    const [isOpen, setIsOpen] = useState(false)

    const filteredData = data.filter((item) => {
        // Implement filtering logic based on your data structure
        return item.toLowerCase().includes(query.toLowerCase())
    });

    const handleClick = (index) => {
        console.log(`clicked ${index} `);
    }

    return (
        <div>
            {filteredData.length === 0 ? (
                <p>No results found</p>
            ) : (
                <div>
                    <ul>
                        {filteredData.map((name, index) => (
                            <div>
                                <li className='font-bold text-xl  mx-4 my-8' key={index} onClick={() => { setIsOpen(true) }}>
                                    <div className='border-black bg-white shadow-md p-3 px-7 rounded-xl flex items-center justify-between'>
                                        <div className='flex items-center'> <h1>{index + 1}.</h1>
                                            <img className='h-20 mx-5' src="images/person.png" alt=' '></img>

                                            <div>
                                                <h1 className='font-bold'> {filteredData[index]}</h1>
                                                <p className='text-sm text-red-700'>Roll No : {21124001 + index} </p>
                                                <p className='text-sm'>Room No : MBH-A {101 + index} </p>
                                            </div>
                                        </div>
                                        {/* <div>
                                <input type="checkbox" className="h-7 w-7 rounded-lg" id="vehicle1" name="vehicle1" value="Bike"></input>
                            </div> */}
                                    </div>
                                </li>

                            </div>
                        ))}
                    </ul>
                    <Modal open={isOpen} onClose={() => { setIsOpen(false) }}>
                        Fancy Modal
                    </Modal>
                </div>
            )}
        </div>
    )
}
export default SearchResults