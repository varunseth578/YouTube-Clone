import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./utils/appSlice";

import { SEARCH_API } from "./utils/constants";
import { cacheResults } from "./utils/searchSlice";

const Head = () => {
  const [searchQuery, setQuery] = useState("");
  const [sugg, setSugg] = useState([]);
  const [showSugg, setShowSugg] = useState(false);

  const searchCache = useSelector((store)=> store.search)
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() =>{
      if(searchCache[searchQuery]){
        setSugg(searchCache[searchQuery]);

      }
      else {
        getSearchSugg();
      }

    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugg = async () => {
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    setSugg(json[1]);
    dispatch(cacheResults({[searchQuery]:json[1]}))
  };

  
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleHandler()}
          className="h-16 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />

        <img
          className="h-16 mx-2"
          alt="youtube logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg"
        />
      </div>

      <div className="col-span-10 px-12 py-2">
        <div>
          <input
            className="   w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setShowSugg(true)}
            onBlur={() => setShowSugg(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSugg && (
          <div className=" fixed bg-white py-2 px-2 w-[30rem] shadow-lg  rounded-lg border-gray-100 ">
            <ul>
              {sugg.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍{s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className=" h-10"
          alt="user"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Head;
