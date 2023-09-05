import React from "react";

const ItemChannelVideos = ({info}) => {
    console.log(info)
  return (
    <div>
      <div className="w-full flex flex p-2 mt-2 shadow-lg rounded-xl">
        <div className="w-5/12">
        <img className="w-72 h-28" src={info.snippet.thumbnails.medium.url} alt="img" />

        </div>
        <div className="w-7/12">
        <h1 className="font-bold">{info.snippet.title}</h1>
        <h1>{info.snippet.channelTitle}</h1>
        <h1>{info.snippet.publishedAt}</h1>
        </div>
        
      </div>
    </div>
  );
};

export default ItemChannelVideos;
