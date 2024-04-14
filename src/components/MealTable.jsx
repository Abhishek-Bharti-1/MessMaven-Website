import { CheckBadgeIcon, CheckCircleIcon, CheckIcon } from '@heroicons/react/24/outline';
import React from 'react';

function Table() {
  return (
    <table className="table-auto border border-collapse border-gray-400 mt-4 w-full">
      <thead>
        <tr>
          <th className="px-4 py-2 bg-gray-100 border w-1/4 border-black">Breakfast</th>
          <th className="px-4 py-2 bg-gray-100 border w-1/4 border-black">Lunch</th>
          <th className="px-4 py-2 bg-gray-100 border w-1/4 border-black">Snacks</th>
          <th className="px-4 py-2 bg-gray-100 border w-1/4 border-black">Dinner</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2  border-[1.2px]  border-black text-center ">
          <input type="checkbox" className='h-7 w-7 align-middle'/>
          </td>
          <td className="px-4 py-2  border-[1.2px]  border-black text-center ">
          <input type="checkbox" className='h-7 w-7 align-middle'/>
          </td>
          <td className="px-4 py-2  border-[1.2px]  border-black text-center ">
          <input type="checkbox" className='h-7 w-7 align-middle'/>
          </td>
          <td className="px-4 py-2  border-[1.2px]  border-black text-center ">
          <input type="checkbox" className='h-7 w-7 align-middle'/>
          </td>
        </tr>
       
      </tbody>
    </table>
  );
}

export default Table;
