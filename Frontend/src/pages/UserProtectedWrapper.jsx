import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../contexts/userContext";
import { useContext, useEffect } from "react";
const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
    navigate("/users/login");
  }
  })
  return <>{children}</>;
};

export default UserProtectedWrapper;
