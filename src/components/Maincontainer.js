import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useSelector } from "react-redux";

const Maincontainer = () => {
  const sideBaropen = useSelector((store) => store.app.isMenuOpen);

  console.log(sideBaropen + " side ");

  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(sideBaropen);
    console.log(open + "  open")
  }, [sideBaropen]);

  return (
    <div className={`col-span-11 ${open ? "ml-40" : ""}`}>
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default Maincontainer;
