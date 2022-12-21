import React from 'react';
import { Keyframes } from 'styled-components';

import { AnimationWrapper } from './style'

interface iAnimationDelay {
  max: number;
  keyframe: Keyframes;
  children: React.ReactNode;
}

const AnimationDelay = ({ children, max, keyframe }: iAnimationDelay) => {
  return (
    <AnimationWrapper keyframe={keyframe} max={max}>
      {children}
    </AnimationWrapper>
  );
};

export default AnimationDelay;
