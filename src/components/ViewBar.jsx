import React from 'react'
import { HiChevronDoubleRight } from "react-icons/hi"
import { BiHide } from "react-icons/bi";
import { HiSwitchVertical } from "react-icons/hi"
import { IoFilterOutline } from "react-icons/io5"
import { TbArrowAutofitHeight } from "react-icons/tb"
import { HiDownload } from "react-icons/hi"
import { LuArrowUpToLine } from "react-icons/lu"
import { FaRegShareFromSquare } from "react-icons/fa6"
import { PiArrowsSplit } from "react-icons/pi"
const ViewBar = () => {

  const handleShareClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check this out!',
          text: 'Here’s something interesting for you.',
          url: window.location.href,
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Sharing not supported on this browser.');
    }

  }


  const Clicked=()=>
  {
    alert('To sort data please click on the data column headings!!!')
  }
  const Clicked1=()=>
  {
    alert('To filter data please hover on the data column headings , then click on 3 dots !!!')
  }
  const Clicked2=()=>
  {
    alert('To hide fields please hover on the data column headings  , then click on 3 dots then u will find hide fields!!!')
  }

  return (
    <div className='flex justify-between w-full items-center border-b-2 border-gray-300 h-18'>
        <div className='flex w-1/2   '>
            <div className='flex  w-32 border-r-2 border-gary-400'>
                <h4 className='pl-5'> Tool bar   </h4>
                <HiChevronDoubleRight className='ml-2 mt-1'/> 
                

            </div>
            <BiHide className='ml-5 mt-1'/>
            <button onClick={()=>{
              Clicked2()
            }} className='pl-1'>  Hide fields </button>
            
            <HiSwitchVertical className='ml-5 mt-1'/>
            <button onClick={()=>
              {
                Clicked()
              }
            } className='pl-1'>  Sort </button>
            <IoFilterOutline className='ml-5 mt-1 '/>
            <button onClick={()=>{
              Clicked1()
            }} className='pl-1'> Filter </button>
            <TbArrowAutofitHeight className='ml-5 mt-1'/>
            <button className='pl-1'>  Cell view </button>
            
        </div>
        <div className='flex w-1/2  items-center justify-end gap-5 mb-1 '> 
        <button className=' flex  items-center mt-2 border-2 border-gray-300 rounded-lg '>
        <HiDownload className='ml-3'/>
          <h4 className='p-1 pr-3'>  Import </h4>
          </button>
        
         <button className=' flex  items-center mt-2 border-2 border-gray-300 rounded-lg'>
          <LuArrowUpToLine className='ml-3'/>
          <h4 className='p-1 pr-3'>  Export </h4>
          </button>
         
         <button onClick={()=>{
           handleShareClick()
         }} className=' flex  items-center  mt-2 border-2 border-gray-300 rounded-lg'>
          <FaRegShareFromSquare className=' ml-3'/>
          <h4 className='p-1 pr-3'>  Share </h4>
          </button>
          <button className=' flex  items-center mt-2 mr-5  rounded-lg bg-green-700 text-white'>
            <PiArrowsSplit className='ml-3'/>
            <h4 className='p-1 pr-3'> New Action </h4>
          </button>
         
        </div>
    </div>
  )
}

export default ViewBar