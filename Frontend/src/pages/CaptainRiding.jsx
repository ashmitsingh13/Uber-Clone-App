import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishedRide from '../components/FinishedRide';

const CaptainRiding = () => {
    const [finishedRidePanel, setFinishedRidePanel] = useState(false);
    const finishedRidePanelRef = useRef(null);
    useGSAP(() => {
    if (finishedRidePanel) {
      gsap.to(finishedRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(finishedRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [finishedRidePanel ]);
  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-full">
        <img className="w-16 " src="/images/Uber-Logo.png" alt="" />
        <Link
          to="/captain/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2"
        >
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="/images/UserHomeImg.avif"
          alt=""
        />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between relative" onClick={()=>{
        setFinishedRidePanel(true)
      }}>
      <h5
        className="p-1 w-[93%] text-center absolute top-0"
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
      </div>
      <div ref={finishedRidePanelRef} className="fixed w-full h-screen z-10 translate-y-full bg-white bottom-0 px-3 py-6 pt-12"
        >
         <FinishedRide setFinishedRidePanel={setFinishedRidePanel} />
        </div>
      
    </div>
  )
}

export default CaptainRiding