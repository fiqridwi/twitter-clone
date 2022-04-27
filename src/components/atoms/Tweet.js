import React from "react";
import { FaRegComment, FaRetweet, FaTrashAlt } from "react-icons/fa";
import { FiHeart, FiUpload } from "react-icons/fi";
import UserProfile from "./UserProfile";
import axios from "axios";

const TweetContainer = ({ tweet, id }) => {
  const handleDelete = (id) => {
    axios.delete(`https://6260945592df0bc0f345caea.mockapi.io/tweet/${id}`);
  };

  return (
    <div className="flex w-full p-5 border-t-[1px] border-gray-500 cursor-pointer hover:bg-darkShade">
      <UserProfile width="10" />
      <div className="w-full px-5">
        <div className="flex justify-between w-full">
          <div className="flex">
            <p className="font-bold">michael</p>
            <p className="text-gray-500 px-2">@michael</p>
            <p className="text-gray-500">21min</p>
          </div>
          <div onClick={() => handleDelete(id)}>
            <FaTrashAlt />
          </div>
        </div>
        <div>{tweet}</div>
        <div className="flex justify-between text-gray-400 pt-2 cursor-pointer">
          <FaRegComment size={18} />
          <FaRetweet size={20} />
          <FiHeart size={18} />
          <FiUpload size={18} />
        </div>
      </div>
    </div>
  );
};

export default TweetContainer;
