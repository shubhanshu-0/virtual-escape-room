import React, { useState } from "react";
import intro_music from "../assets/introaudio.mp3";

const IntroAudio = () => {
  const [notPlaying, setnotPlaying] = useState(true);
  const audioRef = React.createRef();
  const toggle = () => {
    if (notPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setnotPlaying(!notPlaying);
  };
  return (
    <div class="codeutsava__introAudio-justbg">
      <audio ref={audioRef} id="codeutsava__introAudio-intro-audio" loop>
        <source src={intro_music} />
      </audio>
      <div className="codeutsava__introAudio-intro-audio-div">
        <button
          className="codeutsava__introAudio-intro-audio-btn1"
          onClick={toggle}
        >
          {!notPlaying ? (
            <p>stop ■</p>
          ) : (
            <p>sound ▶</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default IntroAudio;
