import React from "react";

import { Container } from "style";
import { Box, AnimationDelay } from "components";
import { iConfig } from "components/AnimationDelay/types";

import {
  fadeInAnimation,
  fadeOutAnimation,
  scaleOfAnimation,
} from "animations";

const handleSelectAnimation = (value: string) => {
  switch (value) {
    case "fadeIn":
      return fadeInAnimation;
    case "fadeOut":
      return fadeOutAnimation;
    case "scaleOf":
      return scaleOfAnimation;
    default:
      return fadeInAnimation;
  }
};

const App = () => {
  const [config, setConfig] = React.useState<iConfig>({
    delay: 0,
    duration: 0.5,
    timingFunction: "ease",
    animation: fadeInAnimation,
    fillMode: "forwards",
  });
  const loop = Array(20).fill(0);

  const [restartAnimation, setRestartAnimation] = React.useState(false);

  return (
    <Container>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* <label htmlFor="delay">Delay</label>
        <input
          type="number"
          id="delay"
          onChange={(e) => {
            setConfig({
              ...config,
              delay: Number(e.target.value),
            });
          }}
        /> */}

        <label htmlFor="duration">Duration</label>
        <input
          type="number"
          id="duration"
          onChange={(e) => {
            setConfig({
              ...config,
              duration: Number(e.target.value),
            });
          }}
        />

        <label htmlFor="timingFunction">Timing Function</label>
        <select
          id="timingFunction"
          value={config?.timingFunction}
          onChange={(e) => {
            setConfig({
              ...config,
              timingFunction: e.target.value as any,
            });
          }}
        >
          <option value="ease">ease</option>
          <option value="ease-in">ease-in</option>
          <option value="ease-out">ease-out</option>
          <option value="ease-in-out">ease-in-out</option>
          <option value="linear">linear</option>
          <option value="step-start">step-start</option>
          <option value="step-end">step-end</option>
        </select>

        <label htmlFor="animation">Animation</label>
        <select
          id="animation"
          onChange={(e) => {
            setConfig({
              ...config,
              animation: handleSelectAnimation(e.target.value),
            });
          }}
        >
          <option value="fadeIn">fadeIn</option>
          <option value="fadeOut">fadeOut</option>
          <option value="scaleOf">scaleOf</option>
        </select>
        <button
          onClick={() => {
            setRestartAnimation(!restartAnimation);
          }}
        >
          {restartAnimation ? "Stop" : "Start"}
        </button>
      </div>

      <AnimationDelay
        setRestartAnimation={setRestartAnimation}
        restartAnimation={restartAnimation}
        time={config?.duration}
        keyframe={config?.animation}
        timingFunction={config?.timingFunction}
      >
        {loop.map((_, index) => (
          <Box key={index} />
        ))}
      </AnimationDelay>
    </Container>
  );
};

export default App;
