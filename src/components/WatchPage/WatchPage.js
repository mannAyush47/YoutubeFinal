import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../utils/redux.js/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import ChannelVideos from "../ChannelVideos";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [params] = useSearchParams();
  let videoId = params.get("v");
  const channelId = params.get("channelId");
  const title = params.get("title");
  // console.log(channelId + "idddd")

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const sideBaropen = useSelector((store) => store.app.isMenuOpen);

  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(sideBaropen);
    // console.log(open + "  open");
  }, [sideBaropen]);

  return (
    <>
      <div className={`flex-col w-full mt-28 justify-center  ${open ? "ml-48 mt-28" : ""}`}>
        <div className="flex w-full justify-center">
          <div className="p-4 ml-4 w-8/12  ">
            <iframe
              width="800"
              height="470"
              src={"https://www.youtube.com/embed/" + params.get("v")}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="w-4/12 mr-8 mt-4">
            <LiveChat />
          </div>
        </div>
        <div className="details">
          <h1 className="text-xl ml-8">{title}</h1>
        </div>

        <div className="flex w-full border">
          <CommentsContainer />
          <ChannelVideos channelId={channelId} />
        </div>
      </div>
    </>
  );
};

export default WatchPage;
