import React from "react";

const Video = ({videos}) => {
  return (
    <div className="max-w-full grid xl:grid-cols-2 grid-cols-1 my-2 place-items-center mx-auto">
      {videos.map((video) => (
        <video
          src={video.video}
          key={video.id}
          controls
          poster={video.poster}
          loop
          playsInline
          className="object-fill mx-auto p-6 w-full h-[480px] hover:scale-90"
        ></video>
      ))}
    </div>
  );
};

export default Video;
