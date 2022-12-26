import React from "react";
import { Keyframes } from "styled-components";

import { AnimationWrapper } from "./style";
import { iAnimation } from "./types";

type iAnimationOmitMax = Omit<iAnimation, "max">;

interface iAnimationDelay extends iAnimationOmitMax {
  keyframe: Keyframes;
  children: React.ReactNode;
}

const AnimationDelay = ({
  children,
  keyframe,
  time = 0.4,
  fillMode = 'forwards',
  timingFunction = 'ease',
}: iAnimationDelay) => {
  const childCount = React.Children.count(children);

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
};

export default AnimationDelay;
