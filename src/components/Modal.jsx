import React from 'react'
import ReactDOM from 'react-dom'
import { XMarkIcon } from '@heroicons/react/24/outline';
import TabLayout from './TabLayout';
import Table from './MealTable';


const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '10px',
    zindex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
    zindex: 1000
}

function Modal({ children, open, onClose }) {
    if (!open) return null

    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}></div>
            <div style={MODAL_STYLES} className='rounded-xl w-[60%] max-h-[75%] h-[75%]'>
                <div className='flex justify-end'>
                    <button className='flex items-end justify-end' onClick={onClose}>
                        <div>Close</div>
                        <XMarkIcon height={20}></XMarkIcon>
                    </button>
                </div>
                <div>
                    <div className='border-black bg-white shadow-lg p-3 rounded-xl  items-center justify-between'>
                        <div className='flex items-center justify-center space-x-2'>
                            <img className='h-40 mr-5' src="images/person.png" alt=' '></img>
                            <div>
                                <div className='flex space-x-6'>
                                    <h1 className='font-bold text-xl'>Name: Abhishek Bharti</h1>
                                    <p className='font-bold text-xl text-red-700'>Roll No : {21124001} </p>
                                    <p className='font-bold text-xl'>Room No : MBH-A {101} </p>
                                </div>
                                <div className='justify-center'>
                                    <Table />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='justify-center items-center'>
                    <div className='w-full p-2 text-center'>
                        <TabLayout />
                    </div>
                </div>

            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal