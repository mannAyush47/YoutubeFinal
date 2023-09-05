import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../utils/redux.js/liveChatSlice";
import { generateRandomName, generateRandomString } from "../../utils/Helper";
import SearchResults from "../ChannelVideos";

const LiveChat = () => {
  const dispatch = useDispatch();
  

  const [livemssg,setLiveMssg] = useState("");


  const chatMessage = useSelector((store) => store.LiveChat.messages);
  // console.log(chatMessage);
  useEffect(() => {
    const i = setInterval(() => {
      // Api Polling
      // console.log("polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          messages: generateRandomString(),
        })
      );
    }, 1000);

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="shadow-md p-2 overflow-y-scroll flex flex-col-reverse  justify-center  border-black mt-4 w-12/12 h-96 bg-gray-100 rounded-lg">
        {chatMessage.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.messages} />
        ))}
      </div>
      <form className="boder mt-2 border-2 w-11/12 h-10 flex items-center" onSubmit={(e)=>{
       e.preventDefault()
       dispatch(
        addMessage({
          name:"Akshay Saini ",
          messages :livemssg
        })
       )
       console.log(livemssg)
      }}>
        <input type="text" className=" h-8 border border-2 w-9/12 p-2 ml-2 rounded-md " value={livemssg} onChange={(e)=>{setLiveMssg(e.target.value)}} />
        <button className="rounded-lg w-24 h-6 ml-4 text-xs  bg-green-300">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
