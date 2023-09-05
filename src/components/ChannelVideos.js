import React, { useEffect, useState } from "react";
import { Channels_Videos_api, Searched_Videos_api } from "../utils/constants";
import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import ItemChannelVideos from "./ItemChannelVideos";

const ChannelVideos = ({ channelId }) => {
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    getChannelVideo();
  }, []);

  const getChannelVideo = async () => {
    const data = await fetch(Channels_Videos_api + channelId);
    const json = await data.json();
    setFetchedData(json.items);
    console.log(Channels_Videos_api + channelId)
   
  };

  return (
    <div className="mt-2 ml-0 w-7/12">
      <h1>Recommended </h1>

      {fetchedData.map((v) => {
       return <ItemChannelVideos key={v.id} info={v} />;
      })}
    </div>
  );
};

export default ChannelVideos;
