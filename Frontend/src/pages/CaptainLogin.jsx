import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import axios from 'axios';
import { CaptainDataContext } from '../contexts/CaptainContext';


const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {captain, setCaptain} = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async(e) => {
    e.preventDefault();
    const captain = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`,captain);

    if(response.status===200){
      const data = response.data;

      setCaptain(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain/home")
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="/images/Uber-Logo.png"
          alt="Uber Logo"
        />
        <form action="/user/login" method="POST" onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's Your Email</h3>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 outline-none w-full text-lg placeholder:text-base"
            value={email}
            onChange={emailHandler}
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            id=""
            className="bg-[#eeeeee] rounded px-4 py-2 outline-none w-full text-lg placeholder:text-base mb-7"
            value={password}
            onChange={passwordHandler}
          />
          <button
            className="w-full mt-5 bg-black text-white py-2 px-4 rounded-md font-semibold"
            type="submit"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          New here?&nbsp;
          <Link to="/captain/signup" className="text-blue-600 ">
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link to='/user/login' className=" flex items-center justify-center w-full mt-5 mb-5 bg-green-600 text-white py-2 px-4 rounded-md font-semibold">
          <span><FaUser /></span>&nbsp;Login As User
        </Link>
      </div>
    </div>
  );
};


export default CaptainLogin