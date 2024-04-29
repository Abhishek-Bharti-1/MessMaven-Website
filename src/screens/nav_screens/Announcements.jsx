import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

function Announcements() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleMessageSend = () => {
    if (inputMessage.trim() === '') return;
    setMessages([...messages, inputMessage]);
    setInputMessage('');
  };

  return (
    <div>
      {/* <Navbar/> */}
      <div className="w-full mx-auto">
        <div className=" p-4 rounded-lg">
          <h1 className='mt-16 text-3xl font-semibold'>Announcements</h1>

          <div>
            <div className='overflow-y-auto mt-4 h-[36rem] bg-slate-300 scrollbar-thin scrollbar-webkit'>
              <ul className="mb-4">
                {messages.map((message, index) => (
                  <li key={index} className="mb-2">
                    <div className='p-4 bg-blue-300 rounded-lg'>
                      {message}
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