import React, { useEffect, useState } from "react";
import { YT_API } from "./utils/constants";
import VideoCard from "./VideoCard";

const VideoCont = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YT_API);
    const json = await data.json();
    setVideos(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
  );
};

export default VideoCont;
