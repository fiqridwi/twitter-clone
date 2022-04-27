import React from "react";
import Header from "../atoms/Header";
import CreateTweet from "../molecules/CreateTweet";
import TweetContainer from "../molecules/TweetContainer.js";

const Timeline = () => {
  return (
    <div>
      <Header />
      <CreateTweet />
      <TweetContainer />
    </div>
  );
};

export default Timeline;
