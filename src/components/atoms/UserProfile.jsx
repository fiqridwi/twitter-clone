import React from "react";
import user from "../../images/user-img.jpg";
const UserProfile = ({ width }) => {
  return (
    <div className="justify-center py-2 cursor-pointer">
      <img src={user} alt="user-profile" className={`rounded-full w-10`} />
    </div>
  );
};

export default UserProfile;
