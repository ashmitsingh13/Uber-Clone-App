import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      })
    }
  },[vehiclePanel]);

  return (
    <>
      <div className="h-screen w-full bg-[url('/images/UserHomeImg.avif')] bg-cover bg-center flex flex-col justify-between pt-8 relative overflow-hidden">
        <img
          className="w-16 ml-8"
          src="/images/Uber-Logo.png"
          alt="Uber Logo"
        />
        <div className="flex flex-col justify-end h-screen absolute top-0 w-full rounded-2xl">
          <div className="h-[30%] p-6 bg-white relative bottom-0">
            <h5
              ref={panelCloseRef}
              onClick={() => {
                setPanelOpen(false);
              }}
              className="absolute opacity-0 right-6 text-2xl top-6"
            >
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className="text-2xl font-semibold">Find a trip</h4>

            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
            >
              <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                }}
                className="bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-5"
                type="text"
                placeholder="Add a pick-up location"
              />
              <input
                onClick={() => {
                  setPanelOpen(true);
                }}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                }}
                className="bg-[#eeee] px-12 py-2 text-base rounded-lg w-full mt-3"
                type="text"
                placeholder="Enter your destination "
              />
            </form>
          </div>
          <div ref={panelRef} className="p-6 bg-white h-0">
            <LocationSearchPanel
              setPanelOpen={setPanelOpen}
              setVehiclePanel={setVehiclePanel}
            />
          </div>
        </div>
        <div
          ref={vehiclePanelRef}
          className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-8"
        >
          <h2 className="text-2xl font-semibold mb-3">Choose A Vehicle</h2>
          <div className="flex border-2 active:border-black border-gray-50 rounded-xl w-full items-center justify-between p-3 mb-2">
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
            <h2 className="text-lg font-semibold">₹190</h2>
          </div>
          <div className="flex border-2 active:border-black border-gray-50 rounded-xl w-full items-center justify-between p-3 mb-2">
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
          <div className="flex border-2 active:border-black border-gray-50 rounded-xl w-full items-center justify-between p-3 mb-2">
            <img className="h-12" src="/images/UberAuto.png" alt="UberAuto" />
            <div className=" w-1/2">
              <h4 className="font-medium text-base">
                UberAuto
                <span>
                  <i className="ri-user-fill"></i>2
                </span>
              </h4>
              <h5 className="font-medium text-xs">2 mins away</h5>
              <p className="font-normal text-xs text-gray-600">
                Affordable, Auto Rides
              </p>
            </div>
            <h2 className="text-lg font-semibold">₹30</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
