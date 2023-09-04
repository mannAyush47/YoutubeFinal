import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/redux.js/appSlice";
import { Youtube_sugeestions_api } from "../utils/constants";
import { cacheResults } from "../utils/redux.js/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showsuggestion, setShowSuggestion] = useState(false);

  // Cache

  const searchCache = useSelector((store) => store.search);

  //----

  const Dispatch = useDispatch();

  const toggleMenuHandlerDispatchAction = () => {
    console.log("clicked");
    Dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(Youtube_sugeestions_api + searchQuery);

    const json = await data.json();

    console.log(json[1]);
    setSuggestions(json[1]);

    Dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  useEffect(() => {
    //  getSearchSuggestions()

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  return (
    <div className="sticky grid grid-flow-col p-5 m-1 shadow-xl w-12/12">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandlerDispatchAction()}
          className="h-8 cursor-pointer  mt-4 "
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
          alt="Menu hamburger"
        />
        <img
          className=" w-28 mx-2"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
          alt="logo youtube"
        />
      </div>

      <div className="col-span-10 px-20 ">
        <div>
          <input
            className="h-12 w-1/2 border border-gray-400 rounded-s-xl"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className=" h-12 px-2 border border-gray-500 rounded-e-xl w-1/12">
            🔍
          </button>
        </div>

        {showsuggestion && (
          <div className="fixed bg-white py-2 px-2 w-[30rem] border border-gray-200 rounded-lg">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 w-full"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1 ">
        <img
          className="h-8"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Head;
