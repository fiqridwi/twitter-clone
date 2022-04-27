import React from "react";
import TrendingHeader from "../atoms/TrendingHeader";
import TrendingItemContainer from "./TrendingItemContainer";

const TrendingContainer = () => {
  return (
    <div className="bg-darker ml-5 rounded-2xl w-2/4">
      <TrendingHeader />
      <TrendingItemContainer />
      <p className="p-5 text-primary hover:bg-darkShade cursor-pointer rounded-b-2xl">
        Show more
      </p>
    </div>
  );
};

export default TrendingContainer;
