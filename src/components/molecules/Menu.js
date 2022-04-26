import React from "react";
import { BsHash } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import {
  IoBookmarkOutline,
  IoMailOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import { RiFileList2Line, RiUserLine } from "react-icons/ri";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

import MenuItem from "../atoms/MenuItem";

const Menu = () => {
  return (
    <div>
      <MenuItem icon={<TiHome />} text="Home" />
      <MenuItem icon={<BsHash />} text="Explore" />
      <MenuItem icon={<IoNotificationsOutline />} text="Notifications" />
      <MenuItem icon={<IoMailOutline />} text="Messages" />
      <MenuItem icon={<IoBookmarkOutline />} text="Bookmarks" />
      <MenuItem icon={<RiFileList2Line />} text="Lists" />
      <MenuItem icon={<RiUserLine />} text="Profile" />
      <MenuItem icon={<HiOutlineDotsCircleHorizontal />} text="More" />
    </div>
  );
};

export default Menu;
