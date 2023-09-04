import React, { useEffect, useState } from "react";
import { youtube_popular_Api } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [popularvideos, setVideosPopular] = useState([]);

  useEffect(() => {
    getVideosPopular();
  }, []);

  const getVideosPopular = async () => {
    console.log(youtube_popular_Api);
    const data = await fetch(youtube_popular_Api);
    const json = await data.json();
    setVideosPopular(json.items);
    // console.log(json);
  };

  return (
    <div className="flex flex-wrap">
      {popularvideos.map((video) => (
        <Link to={"/watch?v="+ video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
