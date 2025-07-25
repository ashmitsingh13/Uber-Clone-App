import React from 'react'
import { Link } from 'react-router-dom'
const FinishedRide = ({setFinishedRidePanel}) => {
  return (
    <div>
      <h5
        className="p-1 w-[93%] text-center absolute top-0"
        onClick={() => {
          setFinishedRidePanel(false)
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-3">Confirm This Ride To Start!</h2>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-xl mt-4">
          <div className="flex items-center justify-start gap-3">
            <img className="h-12 w-12 rounded-full object-cover" src="/images/UserImg.jpg" alt="CaptainImg" />
            <h4>Kylan Gentry</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">2.2 KM</h4>
          </div>
        </div>
      <div className="flex justify-between gap-2 flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, New Delhi</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Kankariya Talab, New Delhi</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash </p>
            </div>
          </div>
        </div>
        <div className='mt-6 w-full'>
                <Link to="/captain/home" className="w-full mt-5 flex justify-center text-lg  bg-green-600 text-white font-semibold p-2 rounded-lg">Finish Ride</Link>
        </div>        
      </div>
    </div>
  )
}

export default FinishedRide