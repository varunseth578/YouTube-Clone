import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  //early return
  if (!isMenuOpen) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <div >
        <ul className=" py-4">
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscriptions</li>
          <li>Live</li>
        </ul>
      </div>
      <div>
        <ul className=" py-5">
          <h1 className="font-bold">Explore</h1>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion & Beauty</li>
          <li>Podcasts</li>
        </ul>
      </div>

      <div>
        <ul className=" py-5">
          <h1 className="font-bold">More from YouTube</h1>
          <li>YouTube Premium</li>
          <li>YouTube Music</li>
          <li>YouTube Kids</li>
        </ul>
      </div>
      <div>
        <ul className=" py-5">
          <li>Settings</li>
          <li>Report history</li>
          <li>Help</li>
          <li>Send feedback</li>
        </ul>
      </div>
      
      
    </div>
  );
};

export default Sidebar;
