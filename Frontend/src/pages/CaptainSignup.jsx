import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../contexts/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameHandler = (e) => {
    setLastName(e.target.value);
  };

  const submitHandler = async(e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      vehicle:{
        color: vehicleColor,
        plate:vehiclePlate,
        capacity:parseInt(vehicleCapacity),
        vehicletype:vehicleType
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, captainData)

    if(response.status ===201){
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain/home")


    }

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setVehicleCapacity("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <>
      <div className="py-5 px-5 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="/images/Uber-Logo.png"
            alt="Uber Logo"
          />
          <form action="/captain/login" method="POST" onSubmit={submitHandler}>
            <h3 className="text-lg font-medium mb-2">What's Your Name</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                type="text"
                name="firstname"
                placeholder="First Name"
                className="bg-[#eeeeee] rounded px-4 py-2 outline-none w-1/2  text-base placeholder:text-base"
                value={firstName}
                onChange={firstNameHandler}
              />
              <input
                required
                type="text"
                name="lastname"
                placeholder="Last Name"
                className="bg-[#eeeeee] rounded outline-none px-4 py-2 w-1/2 text-base placeholder:text-base"
                value={lastName}
                onChange={lastNameHandler}
              />
            </div>

            <h3 className="text-lg font-medium mb-2">What's Your Email</h3>
            <input
              required
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="bg-[#eeeeee] rounded mb-6 px-4 outline-none py-2 w-full text-base placeholder:text-base"
              value={email}
              onChange={emailHandler}
            />
            <h3 className="text-lg font-medium mb-2">Enter Password</h3>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              id=""
              className="bg-[#eeeeee] rounded px-4 py-2 outline-none  w-full text-base placeholder:text-base mb-6"
              value={password}
              onChange={passwordHandler}
            />
            <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
            <div className="flex gap-4 mb-6">
              <input
              required
              type="text"
              name="vehicleColor"
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] rounded px-4 py-2 outline-none w-1/2  text-base placeholder:text-base"
              value={vehicleColor}
              onChange={e => setVehicleColor(e.target.value)}
              />
              <input
              required
              type="text"
              name="vehiclePlate"
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] rounded px-4 py-2 outline-none w-1/2  text-base placeholder:text-base"
              value={vehiclePlate}
              onChange={e => setVehiclePlate(e.target.value)}
              />
            </div>
            <div className="flex gap-4 mb-6">
              <input
              required
              type="number"
              name="vehicleCapacity"
              placeholder="Capacity"
              min="1"
              className="bg-[#eeeeee] rounded px-4 py-2 outline-none w-1/2  text-base placeholder:text-base"
              value={vehicleCapacity}
              onChange={e => setVehicleCapacity(e.target.value)}
              />
              <select
              required
              name="vehicleType"
              className="bg-[#eeeeee] rounded px-4 py-2 outline-none w-1/2  text-base placeholder:text-base"
              value={vehicleType}
              onChange={e => setVehicleType(e.target.value)}
              >
              <option value="">Select Vehicle Type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="motorcycle">Motorcycle</option>
              </select>
            </div>
            <button
              className="w-full mt-5 bg-black text-white py-2 px-4 rounded-md font-semibold"
              type="submit"
            >
              Create Captain Account
            </button>
          </form>
          <p className="text-center mt-4">
            Already Have Account ?&nbsp;
            <Link to="/captain/login" className="text-blue-600 ">
              Login here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px] text-gray-500 leading-tight">
            This site is protected by reCAPTCHA and the Google Privacy Policy
            And Terms of Service apply.
          </p>
        </div>
      </div>
    </>
  );
};

export default CaptainSignup;
