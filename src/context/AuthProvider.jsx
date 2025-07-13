import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {
  const [userData,setUserData] = useState(null)

 useEffect(() => {
  // If data doesn't exist, set it
  if (!localStorage.getItem('data')) {
    setLocalStorage();
  }
  const data = getLocalStorage();
  setUserData(data);
}, []);

 
  return (
    
    <div>
      <AuthContext.Provider value={userData}>

  {children}
  </AuthContext.Provider>
    </div>
    )
  }

export default AuthProvider