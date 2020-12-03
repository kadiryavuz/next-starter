import React, { useState, useEffect } from "react";

const Video = () => {
//   const [playState, setPlayState] = useState(0);

//   useEffect(() => {
//     console.log("what is the play state: ", playState);
//     if (playState === 0) {
//       setPlayState(1);
//     } else {
//         console.log("it shouldn't be rendered");
//     }
//   }, [playState]);

//   console.log("yes video rendered!!");

  return (
    <>
      <video
        controls
        autoPlay
        playsInline
        muted
        width={"100%"}
        height={240}
        src={
          "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
      />
      {/* <h5>Player State: {playState}</h5> */}
    </>
  );
};

export default Video;
