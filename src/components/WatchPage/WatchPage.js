import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/redux.js/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [params] = useSearchParams();
  let videoId = params.get("v");
  console.log(videoId);
  console.log(
    "https://www.youtube.com/embed/" + params.get("v") + "&amp;start=1"
  );

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <>
      <div className="flex-col">
        <div className="p-4 m-4">
          <iframe
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <CommentsContainer/>
      </div>

    </>
  );
};

export default WatchPage;
