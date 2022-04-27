import React from "react";
import { BsThreeDots } from "react-icons/bs";

import UserProfile from "../atoms/UserProfile";
const MenuAccount = () => {
  return (
    <div className="flex justify-between items-center fixed bottom-2 rounded-full hover:bg-darkShade cursor-pointer p-2">
      <div className="flex items-center">
        <UserProfile width="10" />
        <div className="pl-2">
          <p className="font-bold">michael</p>
          <p className="text-gray-500">@michael_scott</p>
        </div>
      </div>
      <div className="px-6">
        <BsThreeDots />
      </div>
    </div>
  );
};

export default MenuAccount;
