import play from "../assets/play.png";

const Video = () => {
  return (
    <div className="video h-screen flex justify-center items-center">
      <img src={play} alt="Play button" className="w-16 h-16" />
    </div>
  );
};

export default Video;
