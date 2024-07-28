import React, { useEffect } from 'react';
import { YT_API } from './utils.js/constants';

const VideoCont = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const response = await fetch(YT_API);
      // Log the response to see if you are getting the expected data
      console.log('Response:', response);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div></div>
  );
}

export default VideoCont;
