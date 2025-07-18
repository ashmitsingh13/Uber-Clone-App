'use client'
import React, { useContext } from 'react'
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {UserDataContext} from "../contexts/userContext"

const UserSignup = () =>  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const {user, setUser} = React.useContext(UserDataContext);
  
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
    const newUser ={
      email: email,
      password: password,
      fullname: {
        firstname: firstName,
        lastname:lastName,
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)

    if(response.status === 201){
       const data = response.data; 
       setUser(data.user);
       localStorage.setItem('token', data.token)
       navigate('/home');
    }
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="/images/Uber-Logo.png"
          alt="Uber Logo"
        />
        <form action="/users/login" method="POST" onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's Your Name</h3>
          <div className='flex gap-4 mb-6'>
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
          <button
            className="w-full mt-5 bg-black text-white py-2 px-4 rounded-md font-semibold"
            type="submit"
          >
            Create Account
          </button>
        </form>
        <p className="text-center mt-4">
          Already Have Account ?&nbsp;
          <Link to="/users/login" className="text-blue-600 ">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className='text-[10px] text-gray-500 leading-tight'>By proceeding , you consent to get calls, WhatsApp or SMS message, inculding by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  );
};

export default UserSignup