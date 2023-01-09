import { keyframes } from "styled-components";

export const scaleOfAnimation = keyframes`
  from {
    opacity: 1;
    transform: scale(0);
  } 50% {
    opacity: 1;
    transform: scale(1.1);
  } 100%{
    opacity: 1;
    transform: scale(1);
  }
`;
