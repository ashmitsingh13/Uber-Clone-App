import React from "react";

const ConfirmRide = ({setConfirmRidePanel, setVehicleFound}) => {
  return (
    <div>
      <h5
        className="p-1 w-[93%] text-center absolute top-0"
        onClick={() => {
          setConfirmRidePanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-3">Confirm Your Ride</h2>
      <div className="flex justify-between gap-2 flex-col items-center">
        <img className="h-20" src="/images/UberCar.png" alt="" />
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
        <button onClick={()=>{
          setVehicleFound(true)
          setConfirmRidePanel(false)
        }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmRide;
