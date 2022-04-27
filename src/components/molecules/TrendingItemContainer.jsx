import React from "react";
import TrendingItem from "../atoms/TrendingItem";

const TrendingItemContainer = () => {
  return (
    <div>
      <TrendingItem tag="Sports" title="el classico" number="5612" />
      <TrendingItem
        tag="Trending in Indonesia"
        title="Minyak goreng"
        number="2612"
      />
      <TrendingItem tag="Trending in Indonesia" title="Puasa" number="3615" />
      <TrendingItem tag="Sports" title="Timnas day" number="15612" />
      <TrendingItem tag="Movie" title="Doctor stranger" number="5612" />
      <TrendingItem tag="Series" title="Better Call Saul" number="5612" />
      <TrendingItem tag="News" title="Champion League" number="5612" />
    </div>
  );
};

export default TrendingItemContainer;
