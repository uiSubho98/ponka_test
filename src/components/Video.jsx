const Video = () => {
  return (
    <div className="h-fit md:h-[30rem] flex justify-center items-center overflow-hidden">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <video
          playsInline // Ensures inline playback on iOS
          webkit-playsinline="true" // Ensures inline playback on iOS Safari
          src="https://res.cloudinary.com/dbohkz4wr/video/upload/v1719143836/videoplayback_1_online-video-cutter.com_3_c9gdxi.mp4"
          className="absolute top-0 left-0 w-full h-full"
          autoPlay // Ensures the video plays automatically
          muted // Ensures the video is muted for autoplay to work
          loop // Ensures the video loops
          title="Ponka"
        ></video>
      </div>
    </div>
  );
};

export default Video;
