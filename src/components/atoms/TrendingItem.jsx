import React from "react";

const TrendingItem = ({ tag, title, number }) => {
  return (
    <div className="flex justify-between w-full hover:bg-darkShade px-5 py-2 cursor-pointer ">
      <div>
        <div>
          <p className="text-gray-400 text-sm">{tag}</p>
          <p>{title}</p>
          <p className="text-gray-400 text-sm">{`${number}  Tweets`}</p>
        </div>
      </div>
      <div className="text-gray-400 text-xl">...</div>
    </div>
  );
};

export default TrendingItem;
