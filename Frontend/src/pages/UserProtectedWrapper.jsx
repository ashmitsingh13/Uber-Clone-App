import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserDataContext } from "../contexts/userContext";
const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const {user , setUser} = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    if (!token) {
      navigate("/user/login");
    }

    axios
      .get(`${import.meta.env.VITE_BASE_URL}/user/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data.user);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/user/login");
      });
  },[token]);
  return <>{children}</>;
};

export default UserProtectedWrapper;
