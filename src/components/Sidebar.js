import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // early return
  if (!isMenuOpen) return null;

  return (
    <div className="h-full mt-[6.2rem] p-5 shadow-md w-48 fixed z-50 bg-white">
      <ul className="pb-2 border-b-2">
        <li className="mb-1 font-bold">
          <Link to="/">Home</Link>
        </li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">sports</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">gaming</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">movies</li>
      </ul>

      <h1 className="font-bold">Subscriptions</h1>
      <ul className="border-b-2">
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">Classical</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">Shorts</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">gaming</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">TV shows</li>
      </ul>
      <h1 className="pt-5 font-bold">Watch Later</h1>
      <ul className="border-b-2">
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">Serials</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">Categories</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">Rock</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">Formula 1</li>
      </ul>
      <h1 className="font-bold text-lg">Settings</h1>

      <ul className="border-b-2">
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">Report History</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">Help</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">Send Feedback</li>
        <li className="mb-1 hover:bg-slate-50 hover: rounded-3xl w-18 cursor-pointer text-lg">!!!</li>
      </ul>
    </div>
  );
};

export default Sidebar;
