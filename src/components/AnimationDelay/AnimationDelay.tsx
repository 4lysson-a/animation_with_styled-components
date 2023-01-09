import React from "react";
import { Keyframes } from "styled-components";

import { AnimationWrapper } from "./style";
import { iAnimation } from "./types";

type iAnimationOmitMax = Omit<iAnimation, "max">;

interface iAnimationDelay extends iAnimationOmitMax {
  keyframe: Keyframes;
  children: React.ReactNode;
  restartAnimation: boolean;
  setRestartAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}

const AnimationDelay = ({
  children,
  keyframe,
  time = 0.4,
  fillMode = "forwards",
  timingFunction = "ease",
  restartAnimation = false,
  setRestartAnimation,
}: iAnimationDelay) => {
  const childCount = React.Children.count(children);

  if (restartAnimation) {
    return (
      <AnimationWrapper
        max={childCount}
        time={time}
        fillMode={fillMode}
        keyframe={keyframe}
        timingFunction={timingFunction}
      >
        {children}
      </AnimationWrapper>
    );
  }
  return null;
};

export default AnimationDelay;
