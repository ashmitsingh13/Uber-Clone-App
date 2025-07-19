import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiCaptainHatProfile } from "react-icons/gi";
import { UserDataContext } from "../contexts/userContext";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const {user, setUser} = useContext(UserDataContext);

  const navigate = useNavigate();

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`, userData);

    if(response.status=== 200){
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token)
      navigate("/user/home")
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
          <Link to="/user/signup" className="text-blue-600 ">
            Create New Account
          </Link>
        </p>
      </div>
      <div>
        <Link to='/captain/login' className=" flex items-center justify-center w-full mt-5 mb-5 bg-red-600 text-white py-2 px-4 rounded-md font-semibold">
          <span><GiCaptainHatProfile /></span>&nbsp;Login As Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
