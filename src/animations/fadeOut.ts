import { keyframes } from "styled-components";

export const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  } to {
    opacity: 0;
    transform: translateY(10px) scale(0.9);
  }
`;
