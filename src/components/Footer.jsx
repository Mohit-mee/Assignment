
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthProvider';

function FooterButtons() {
  const data = useContext(AuthContext)
  const [activeButton, setActiveButton] = useState(null);

  const buttons = ['All Orders', 'Pending', 'Reviewed', 'Arrived'];

  return (
    <div className="fixed bg-white bottom-0 w-full h-12  items-center  border-t border-gray-300 flex gap-5 py-3 shadow-inner pl-9">
      {buttons.map((label, index) => (
        <button
          key={index}
          onClick={() => setActiveButton(index)}
          className={`px-4 py-2 text-sm font-medium transition-all duration-200
            ${activeButton === index
              ? 'bg-teal-100 border-t-4 border-teal-600 text-teal-800'
              : 'bg-transparent border-t-4 border-transparent text-gray-600 hover:text-teal-600'}
             
          
              `}
        >
          {label}
        </button>
      ))}
      <button className='text-xl text-gray-600 hover:text-teal-600'>+</button>
    </div>
  );
}

export default FooterButtons;