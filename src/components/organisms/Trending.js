import React from "react";
import TrendingSearch from "../atoms/TrendingSearch";

import TrendingContainer from "../molecules/TrendingContainer";

const Trending = () => {
  return (
    <div>
      <TrendingSearch />
      <TrendingContainer />
    </div>
  );
};

export default Trending;
