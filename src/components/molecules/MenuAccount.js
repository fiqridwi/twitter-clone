import React from "react";
import { BsThreeDots } from "react-icons/bs";
import user from "../../images/user-img.jpg";
const MenuAccount = () => {
  return (
    <div className="flex justify-between items-center fixed bottom-2 rounded-full hover:bg-darkShade cursor-pointer p-2">
      <div className="flex items-center">
        <div className="flex justify-center">
          <img src={user} alt="user-profile" className="rounded-full w-10" />
        </div>
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
