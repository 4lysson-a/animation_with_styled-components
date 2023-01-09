import styled, { Keyframes } from "styled-components";
import { iAnimation } from "./types";

function addDelay(max: number) {
  let css = '';

  Array(max).fill(0).forEach((_, index) => {
    css += `
      &:nth-child(${index + 1}) {
        opacity: 0;
        animation-delay: ${index * 0.1}s;
      }
    `;
  })

  return css;
}

function customCss(callback: Function){
  callback();
}

export const AnimationWrapper = styled.div<iAnimation>`
  div {
    animation-name: ${({ keyframe }) => keyframe};
    animation-duration: ${({ time }) => `${time}s`};
    animation-timing-function: ${({ timingFunction }) => timingFunction};
    animation-fill-mode: ${({ fillMode }) => fillMode};
    
    ${({ max }) => addDelay(max)}
    ${({ customCss }) => customCss && customCss()}
  }
`;
