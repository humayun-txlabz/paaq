import { animated, useTransition } from "react-spring";
import React, { useState } from 'react';


export default function FadeAnimation() {
    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, {
      from: { position: 'absolute', opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 1 },
      reverse: toggle,
      delay: 1000,
      config: { mass: 1, tension: 280, friction: 120, duration: 2000 },
      duration: 1000,
      onRest: () => set(!toggle),
    })
    return transitions(({ opacity }, item) =>
      item ? (
        <animated.div
          style={{
            minWidth: '480px',
            display: 'flex',
            justifyContent: 'center',
            position: 'absolute',
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          }}>
          PAAQ
        </animated.div>
      ) : (
        <animated.div
          style={{
            position: 'absolute',
            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
          }}>
          Please Ask <br/> Any Question
        </animated.div>
      )
    )
}
