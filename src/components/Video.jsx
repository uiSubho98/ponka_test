import play from "../assets/play.png";

const Video = () => {
  return (
    <div className="h-[30rem]  flex justify-center items-center overflow-hidden">
      <div className="relative w-full " style={{ paddingTop: '56.25%' }}>
        <video
          src="https://res.cloudinary.com/dbohkz4wr/video/upload/v1719007245/videoplayback_1_online-video-cutter.com_b8zekv.mp4"
          className="absolute top-0 left-0 w-full h-full "
          autoPlay  // corrected attribute for autoplay
          muted     // video should be muted for autoplay to work in most browsers
          loop
          title="Ponka"
        ></video>
      </div>
    </div>
  );
};

export default Video;
