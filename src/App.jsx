import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import ViewBar from './components/ViewBar'
import Sheet from './components/Sheet'
import Footer from './components/Footer'


const App = () => {
  // useEffect(() => {
  //   setLocalStorage()

  
 
  // }, [])
  
  return (

    <div id='stop' className='h-auto'>
      <Navbar></Navbar>
      <ViewBar></ViewBar>
      <Sheet></Sheet>
      <Footer></Footer>
    </div>
  )
}

export default App