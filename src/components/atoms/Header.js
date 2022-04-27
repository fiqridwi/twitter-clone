import React from "react";
import { WiStars } from "react-icons/wi";

const Header = () => {
  return (
    <div className="flex justify-between p-4">
      <p className="text-xl font-bold">Home</p>
      <WiStars size={36} />
    </div>
  );
};

export default Header;
