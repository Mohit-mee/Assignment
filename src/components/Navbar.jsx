import React, { useContext, useState } from 'react'
import { GoChevronRight } from "react-icons/go"
import { BsThreeDots } from "react-icons/bs";
import { VscBellDot } from "react-icons/vsc";
import { AuthContext } from '../context/AuthProvider';
// import { IoSearchOutline } from "react-icons/io5"

const Navbar = () => {
const data = useContext(AuthContext)
const [isNotificationOpen, setIsNotificationOpen] = useState(false);
const [isProfileOpen, setIsProfileOpen] = useState(false);

const handleNotificationClick = () => {
  setIsNotificationOpen(!isNotificationOpen);
};

const handleProfileClick = () => {
  setIsProfileOpen(!isProfileOpen);
};

const handleClickOutside = (e) => {
  if (!e.target.closest('.notification-container')) {
    setIsNotificationOpen(false);
  }
  if (!e.target.closest('.profile-container')) {
    setIsProfileOpen(false);
  }
};

// Add event listener to close notification panel when clicking outside
React.useEffect(() => {
  document.addEventListener('click', handleClickOutside);
  return () => {
    document.removeEventListener('click', handleClickOutside);
  };
}, []);


  return (
    <div className=' flex justify-between items-center p-4 h-14 border-b-2 border-gray-300 relative'>
      <div className='flex items-center gap-2 w-1/2 bg-white '>
        <div className='h-5 w-7 border-2 border-emerald-600 rounded '>
            <div className='h-4 w-2 bg-emerald-600 ml-4'></div>
           
        </div>
        <h3 className='text-slate-400'>Workspace  </h3>
        <GoChevronRight className='text-slate-400'/>
        <h3  className='text-slate-400'>Folder 2 </h3>
        <GoChevronRight className='text-slate-400'/>
        <h2 className='font-semibold'>Spreadsheet 3 </h2>
        <BsThreeDots  
          className='text-slate-400 cursor-pointer hover:text-slate-600 transition-colors duration-200' 
          
     
        />
      </div>
      <div className='flex items-center gap-5 w-1/3 bg-white  '>
       

     
        <input className='bg-gray-200 relative text-gray-400 p-2 rounded text-center outline-none  ' type="text" placeholder= ' Search within sheets' />
       
        <div className="notification-container relative">
          <VscBellDot 
            className='text-2xl cursor-pointer hover:text-blue-600 transition-colors duration-200' 
            onClick={handleNotificationClick}
            title="Notifications"
          />
          
          {/* Notification Panel */}
          {isNotificationOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
              </div>
              <div className="p-8 text-center">
                <div className="text-gray-400 text-6xl mb-4"><VscBellDot className='ml-20'/></div>
                <p className="text-gray-500 text-lg">No notifications</p>
                <p className="text-gray-400 text-sm mt-2">You&apos;re all caught up!</p>
              </div>
            </div>
          )}
        </div>
       
       <div className='profile-container relative h-14 '>
         <div className='flex gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200' onClick={handleProfileClick}>
           <img src="new_user.jpg" alt="" className='h-10 w-10 rounded-full mt-1 object-cover' />
           <h3> <span className='text-sm mt-2'>John Doe</span> <br /> <p className='text-xs text-gray-500'> john.doe... </p></h3>
         </div>
         
         {/* Profile Panel */}
         {isProfileOpen && (
           <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
             <div className="p-4 border-b border-gray-200">
               <h3 className="text-lg font-semibold text-gray-800">Your Profile</h3>
             </div>
             <div className="p-6">
               <div className="flex items-center gap-4 mb-4">
                 <img src="new_user.jpg" alt="Profile" className='h-16 w-16 rounded-full object-cover' />
                 <div>
                   <h4 className="text-lg font-semibold text-gray-800">John Doe</h4>
                   <p className="text-gray-500 text-sm">john.doe@example.com</p>
                 </div>
               </div>
               <div className="space-y-3">
                 <button className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                   <span className="text-gray-700">Edit Profile</span>
                 </button>
                 <button className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                   <span className="text-gray-700">Settings</span>
                 </button>
                 <button className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                   <span className="text-gray-700">Help & Support</span>
                 </button>
                 <hr className="my-3" />
                 <button className="w-full text-left p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                   <span className="text-red-600">Sign Out</span>
                 </button>
               </div>
             </div>
           </div>
         )}
       </div>
      </div>
    </div>
  )
}

export default Navbar