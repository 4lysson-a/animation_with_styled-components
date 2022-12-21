import styled, { Keyframes } from "styled-components";

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

export const AnimationWrapper = styled.div<{
  max: number;
  keyframe: Keyframes;
}>`
  div {
    animation-name: ${({ keyframe }) => keyframe};
    animation-duration: 0.3s;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
    
    ${({ max }) => addDelay(max)}
  }
`;
