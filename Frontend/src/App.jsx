import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/users/login" element={<UserLogin />} />
        <Route path="/users/signup" element={<UserSignup />} />
        <Route path="/captains/login" element={<CaptainLogin />} />
        <Route path="/captains/signup" element={<CaptainSignup />} />
        <Route path="/home" element={<UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
          <Route path="/user/logout" element={<UserProtectedWrapper><UserLogout /></UserProtectedWrapper>} />
          </Routes>
    </>
  );
};

export default App;
