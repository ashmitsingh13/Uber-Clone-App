import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";


const CaptainLogin = () => {
  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const formHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
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
        <form action="/users/login" method="POST" onSubmit={formHandler}>
          <h3 className="text-lg font-medium mb-2">What's Your Email</h3>
          <input
            required
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="bg-[#eeeeee] rounded mb-7 px-4 py-2 border w-full text-lg placeholder:text-base"
            value={email}
            onChange={emailHandler}
          />
          <h3 className="text-xl mb-2">Enter Password</h3>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            id=""
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-7"
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
          <Link to="/users/signup" className="text-blue-600 ">
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link to='/users/login' className=" flex items-center justify-center w-full mt-5 mb-5 bg-green-600 text-white py-2 px-4 rounded-md font-semibold">
          <span><FaUser /></span>&nbsp;Login As User
        </Link>
      </div>
    </div>
  );
};
}

export default CaptainLogin