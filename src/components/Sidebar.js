import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-md w-48 ">
      <ul className="pb-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>

      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
      <h1 className="pt-5 font-bold">Watch Later</h1>
      <ul>
        <li>music</li>
        <li>sports</li>
        <li>gaming</li>
        <li>movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
