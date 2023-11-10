import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

import Image from "next/image";
import PauseIcon from "../../assets/pauseIcon.svg";
import PlayIcon from "../../assets/playIcon.svg";
import useWindowSize from "Hooks/windowSize";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "#000000",
  cursorColor: "transparent",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: window.innerWidth > 760 ? 65 : 32,
  normalize: true,
  partialRender: true,
});

const Waveform = (props) => {
  const [width] = useWindowSize();
  const waveformRef = useRef(null);
  const wavesurfer = useRef(null);
  const [playing, setPlaying] = useState(false);

  const url =
    "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3";

  useEffect(() => {
    create();

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, []);

  const create = async () => {
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
    props.handleClickPlay();
  };

  const poppingOutAnimation = (delay) =>
    useSpring({
      from: { x: 0, y: 0, zoom: 0, scale: 0 },
      to: { x: 0, y: 0, zoom: 1, scale: 1 },
      delay: delay,
    });

     const poppingOutImageAnimation = (delay) =>
    useSpring({
      from: { x: 0, y: 0, zoom: 0, scale: 0 },
      to: { x: 0, y: 0, zoom: 1, scale: 1 },
      delay: delay,
    });

  return (
    <div>
      <animated.div style={poppingOutAnimation()}>
        <div className="about-section-icon-play about-section-icon-play-modify">
          <animated.img
            style={poppingOutImageAnimation(1000)}
            onClick={() => handlePlayPause()}
            className="pauseicon"
            width={width > 760 ? 19 : 8}
            height={width > 760 ? 19 : 8}
            src={!playing?PauseIcon:PlayIcon
            }
          />
        </div>
        <div className="about-section-audio">
          <div className="about-waveform" id="waveform" ref={waveformRef} />
        </div>
      </animated.div>
    </div>
  );
};

export default Waveform;
