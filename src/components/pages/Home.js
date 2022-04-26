import React from "react";
import Sidebar from "../organisms/Sidebar";
import Timeline from "../organisms/Timeline";
import Trending from "../organisms/Trending";
const Home = () => {
  return (
    <div className="grid grid-cols-3 bg-dark text-white">
      <div className="col-span-1 pl-96 h-screen">
        <Sidebar />
      </div>
      <div className="col-span-1 border-x-2 ">
        <Timeline />
      </div>
      <div className="col-span-1">
        <Trending />
      </div>
    </div>
  );
};

export default Home;
