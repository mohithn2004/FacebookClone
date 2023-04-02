import Image from "next/image";
import React from "react";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline"

function Post({ name, message, email, postImage, image, timeStamp }) {
  return (
    <div className="flex flex-col">
    <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
      <div className="flex items-center space-x-2">
        <Image
          className="rounded-full"
          alt=""
          src={image}
          width={40}
          height={40}
        />
      </div>
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-xs text-gray-400">
          {new Date(timeStamp?.toDate()).toDateString()}
        </p>
      </div>
      <div>
        <h3 className="pt-4">{message}</h3>
      </div>
      {postImage&& <div className="relative h-56 md:h-96 bg-white">
      <Image src={postImage} objectFit="cover" layout="fill" alt="" />
      </div>}

      {/* footer of the post */}
      <div className=" cursor-pointer flex justify-between items-center bg-white text-gray-400 border-t">
      <div className="inputIcon rounded-none ">
        <ThumbUpIcon className="h-4" />
        <p className="text-xs am:text-base">Like</p>
      </div>
      <div className="inputIcon rounded-none ">
      <ChatAltIcon className="h-4" />
        <p className="text-xs am:text-base">Comment</p>
      </div>
      <div className="inputIcon rounded-none rounded-br-">
      <ShareIcon className="h-4" />
        <p className="text-xs am:text-base">Share</p>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Post;
