import React from "react";

const VehiclePanel = ({ setVehiclePanel, setConfirmRidePanel }) => {
  return (
    <div>
      <h5
        className="p-1 w-[93%] text-center absolute top-0"
        onClick={() => {
          setVehiclePanel(false);
        }}
      >
        <i className=" text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h2 className="text-2xl font-semibold mb-3">Choose A Vehicle</h2>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex border-2 active:border-black border-gray-50 rounded-xl w-full items-center justify-between p-3 mb-2"
      >
        <img className="h-12" src="/images/UberCar.png" alt="UberCar" />
        <div className=" w-1/2">
          <h4 className="font-medium text-base">
            UberGo{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-xs">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹193.20</h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex border-2 active:border-black border-gray-50 rounded-xl w-full items-center justify-between p-3 mb-2"
      >
        <img className="h-12" src="/images/UberMoto.png" alt="UberMoto" />
        <div className=" w-1/2">
          <h4 className="font-medium text-base">
            UberMoto
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-xs">3 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹65</h2>
      </div>
      <div
        onClick={() => {
          setConfirmRidePanel(true);
        }}
        className="flex border-2 active:border-black border-gray-50 rounded-xl w-full items-center justify-between p-3 mb-2"
      >
        <img className="h-12" src="/images/UberAuto.png" alt="UberAuto" />
        <div className=" w-1/2">
          <h4 className="font-medium text-base">
            UberAuto
            <span>
              <i className="ri-user-fill"></i>3
            </span>
          </h4>
          <h5 className="font-medium text-xs">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, Auto Rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹118.86</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
