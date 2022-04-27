import React, { useState } from "react";
import axios from "axios";
import UserProfile from "../atoms/UserProfile";
import { BsBarChartLine } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  AiOutlineGif,
  AiOutlineCalendar,
  AiOutlineSmile,
  AiOutlinePicture,
} from "react-icons/ai";

const CreateTweet = () => {
  const [tweet, setTweet] = useState("");
  const handleSubmit = (e) => {
    axios.post("https://6260945592df0bc0f345caea.mockapi.io/tweet", {
      tweet,
    });
  };

  return (
    <div className="flex justify-start px-5 py-2">
      <UserProfile width="10" />
      <div className="px-5 w-full">
        <div>
          <form>
            <input
              placeholder="What's happening"
              className="bg-dark w-full h-16 outline-none"
              type="text"
              onChange={(e) => setTweet(e.target.value)}
            />
          </form>
        </div>
        <div className="flex justify-between">
          <div className="flex text-primary items-center cursor-pointer">
            <AiOutlinePicture size={22} style={{ marginRight: "1rem" }} />
            <AiOutlineGif size={22} style={{ marginRight: "1rem" }} />
            <BsBarChartLine size={22} style={{ marginRight: "1rem" }} />
            <AiOutlineSmile size={22} style={{ marginRight: "1rem" }} />
            <AiOutlineCalendar size={22} style={{ marginRight: "1rem" }} />
            <HiOutlineLocationMarker
              size={22}
              style={{ marginRight: "0.5rem" }}
            />
          </div>
          <div className="text-center py-5">
            <button
              className="bg-primary rounded-full text-white font-bold px-12 py-2 hover:bg-primaryShade"
              onClick={() => handleSubmit()}
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTweet;
