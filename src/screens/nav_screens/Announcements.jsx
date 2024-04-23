
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

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
    <div className="max-w-lg mx-auto">
      
      <div className="bg-gray-300 p-4 rounded-lg">
        
        <div className="flex items-end mt-28">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Type your message..."
          />
          <button
            onClick={handleMessageSend}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          >
            Send
          </button>
        </div>
        <ul className="mb-4 mt-12">
          {messages.map((message, index) => (
            <li key={index} className="mb-2">
              <div className='p-4 bg-slate-300 rounded-lg'>

              {message}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Announcements