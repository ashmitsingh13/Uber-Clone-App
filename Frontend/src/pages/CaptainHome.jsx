import React from "react";
import { Link } from "react-router-dom";

const CapatainHome = () => {
  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-full">
        <img className="w-16 " src="/images/Uber-Logo.png" alt="" />
        <Link
          to="/home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2"
        >
          <i className="text-lg font-medium ri-logout-box-line"></i>
        </Link>
      </div>
      <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="/images/UserHomeImg.avif"
          alt=""
        />
      </div>
      <div className="h-1/2 p-4">
        <div>
          <div>
            <img src="" alt="" />
            <h4>Harsh Patel</h4>
          </div>
          <div>
            <h4>295.20</h4>
            <p>Earned</p>
          </div>
        </div>
        <div>
          <div>
            <i class="ri-time-line"></i>
          </div>
          <div>
            <i class="ri-speed-up-line"></i>
          </div>
          <div>
            <i class="ri-booklet-line"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapatainHome;
