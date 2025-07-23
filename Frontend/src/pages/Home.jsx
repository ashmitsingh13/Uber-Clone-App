import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);


  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);


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
      });
    }
  }, [vehiclePanel]);

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

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
          className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12"
        >
          <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
        </div>
        <div
          ref={confirmRidePanelRef}
          className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12"
        >
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
        </div>
        <div ref={vehicleFoundRef} className="fixed w-full z-10 bg-white bottom-0 translate-y-full px-3 py-6 pt-12"
        >
          <LookingForDriver setVehicleFound={setVehicleFound}  />
        </div>
        <div ref={waitingForDriverRef} className="fixed w-full z-10 bg-white bottom-0  px-3 py-6 pt-12"
        >
          <WaitingForDriver waitingForDriver={waitingForDriver} />
        </div>

      </div>
    </>
  );
};

export default Home;
