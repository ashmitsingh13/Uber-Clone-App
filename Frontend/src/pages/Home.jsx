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
  const panelCloseRef = useRef(null);

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
            <LocationSearchPanel />
          </div>
        </div>
        <div className="fixed z-10 bg-white bottom-0 p-5">
          <div className="flex items-center justify-between">
            <img className="h-10" src="/images/RedCar.png" alt="" />
            <div className="">
              <h4>UberGo <span><i className="ri-user-fill"></i>4</span></h4>
              <h5>2 mins away</h5>
              <p>Affordable, compact rides</p>
            </div>
            <h2>₹193.20</h2>
          </div> 
        </div>
      </div>
    </>
  );
};

export default Home;
