import { useEffect, useRef, useState } from "react";
// import { Image } from "theme-ui";
import Image from 'next/image';
import PauseIcon from "../../assets/pauseIcon.svg";

const formWaveSurferOptions = (ref) => ({
  container: ref,
  waveColor: "#eee",
  progressColor: "#0178FF",
  cursorColor: "transparent",
  barWidth: 3,
  barRadius: 3,
  responsive: true,
  height: 65,
  normalize: true,
  partialRender: true
});

export default function Waveform() {
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
    console.log('im in createeee')
    const WaveSurfer = (await import("wavesurfer.js")).default;

    const options = formWaveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);

    wavesurfer.current.load(url);
  };

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current.playPause();
  };

  return (
    <div>
        {/* <Image className="pauseicon" width={19} height={19} src={PauseIcon} /> */}
      <div id="waveform" ref={waveformRef} />
      {/* <div className="controlsssss">
        <div onClick={handlePlayPause}>{!playing ? "play" : "pause"}</div>
      </div> */}
      {/* <Link href={{ pathname: "/about" }}>xxx</Link>
       */}
    </div>
  );
}
