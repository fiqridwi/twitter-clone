import React, { useEffect, useState } from "react";
import Tweet from "../atoms/Tweet";
import axios from "axios";
const TweetContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://6260945592df0bc0f345caea.mockapi.io/tweet")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div>
      {data.map((item, i) => {
        return <Tweet key={i} tweet={item.tweet} id={item.id} />;
      })}
    </div>
  );
};

export default TweetContainer;
