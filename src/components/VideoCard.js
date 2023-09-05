import React from "react";

const VideoCard = ({ info }) => {
    // console.log(info);

    const {snippet,statistics} = info;
    const {thumbnails,channelTitle,title} = snippet
  return (
    <div className="w-60 border p-2 m-2 shadow-lg rounded-xl">
      <img className="w-12/12 h-36" src={thumbnails.medium.url} alt="" />
      <h1  className="font-bold">{title}</h1>
     <h1>{channelTitle}</h1> 
     <h1>{statistics.viewCount/1000000} M Views</h1>
    </div>
  );
};

export default VideoCard;
