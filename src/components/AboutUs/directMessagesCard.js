import Image from 'next/image';
import DmImage from '../../assets/about/dm-image.png';
// import Waveform from './waveform';
import React, { useState, useEffect } from 'react'

// import WaveSurfer from 'wavesurfer.js';
// import { WaveformContianer, Wave, PlayButton } from './Waveformm.js';
// import Waveform from './waveform';
// import NoSsr from './NoSsr';
import NoSSR from 'react-no-ssr';
import ReactNoSsr from 'react-no-ssr';
// import DynamicComponentWithNoSSR from './DynamicComponentWithNoSSR';
import dynamic from 'next/dynamic'
//wrap your component that uses the graph lib.
const Waveform = dynamic(
    () => import('./waveform'),
    { ssr: false }
  )

const DirectMessagesCard = () => {

    const TEST_PEAKS = [
        0.04,
        0.99,
        0.54,
        0.74,
        0.76,
        0.52,
        // 0.79,
        // 0.72,
        // 0.83,
        // 0.67,
        // 0.88,
        // 0.99,
        // 0.95,
        // 0.9399999999999999,
        // 0.91,
        // 0.82,
        // 0.96,
        // 0.91,
        // 0.93,
        // 0.93,
        // 0.98,
        // 0.99,
        // 0.98,
        // 0.99,
        // 0.98,
        // 0.98,
        // 0.98,
        // 0.98,
        // 0.98,
        // 0.98,
        // 0.98,
        // 0.85,
        // 0.82,
      ];

    //   useEffect(() => {
    //     const track = document.querySelector('#track');

    //     const waveform = WaveSurfer.create({
    //       barWidth: 3,
    //       cursorWidth: 1,
    //       container: '#waveform',
    //       backend: 'WebAudio',
    //       height: 80,
    //       progressColor: '#2D5BFF',
    //       responsive: true,
    //       waveColor: '#EFEFEF',
    //       cursorColor: 'transparent',
    //     });
    
    //     waveform.load(track);
    // }, [])

  return (
    <div className="dm-card-main">
      <div className="dm-card-upper">
        <div className="dm-card-upper-left">
          <p className="dm-card-upper-left-text">01</p>
        </div>
        <div className="dm-card-upper-right">
          <p className="dm-card-upper-right-text">
            Millions of direct messages are sent daily
          </p>
        </div>
      </div>
      <div className="dm-card-lower">
        <p className="dm-card-lower-text">
          Millions of direct messages are sent daily to people on social media
          asking for information about various topics. However, it has become
          increasingly challenging to respond to every one of these messages,
          especially if the question is technical.
        </p>
      </div>
      <div className="dm-card-image">
        <Image src={DmImage} width={308} height={484} />
      </div>
      {/* <DynamicComponentWithNoSSR /> */}
{/* <NoSSR> */}
{/* <Waveform /> */}
{/* </NoSSR> */}
      {/* <div style={{ width: 250}}> */}
      {/* <Waveform url={"https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3"} /> */}

      {/* <Waveform
  barWidth={4}
  peaks={TEST_PEAKS}
  height={200}
//   pos={this.props.pos}
  duration={210}
//   onClick={this.handleClick}
  color="#676767"
  progressGradientColors={[[0, "#888"], [1, "#aaa"]]}
/> */}
      {/* </div> */}
    </div>
  );
};

export default DirectMessagesCard;
