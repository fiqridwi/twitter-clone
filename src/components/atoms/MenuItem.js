import React from "react";

const MenuItem = ({ icon, text }) => {
  return (
    <div className="menu-item">
      <div className="text-2xl">{icon}</div>

      <p className="text-xl ml-5">{text}</p>
    </div>
  );
};

export default MenuItem;
