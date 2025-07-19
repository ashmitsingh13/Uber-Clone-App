import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../contexts/CaptainContext';
import axios from 'axios';
import { useState } from 'react';

const captainProtectWrapper = ({children}) => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {captain , setCaptain} = useContext(CaptainDataContext);
    const [isLoading, setIsLoading] = useState(true)
 
    useEffect(()=>{
        if(!token){
            navigate('/captain/login');
        }
    },[token])

    axios.get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
      headers:{
        Authorization:`Bearer ${token}`
      }
    }).then((response)=>{
      if(response.status === 200){
        const data = response.data;
        setCaptain(data.captain);
        setIsLoading(false) 
      }
    }).catch((err)=>{
      console.log(err);
      localStorage.removeItem("token")
      navigate("/captain/login")
    })

    if(isLoading){
      return(
        <div>Loading...</div>
      )
    }
      
  return (
    <>
    {children}
    </>
  )
}

export default captainProtectWrapper