import { Keyframes } from "styled-components";

export type iTimingFunction = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end";
export type iFillMode = "none" | "forwards" | "backwards" | "both";

export interface iConfig {
  delay: number;
  timingFunction: iTimingFunction;
  duration: number;
  fillMode: iFillMode;
  animation: Keyframes;
}

export interface iAnimation {
  max: number;
  time?: number;
  keyframe: Keyframes;
  fillMode?: iFillMode;
  customCss?: Function;
  timingFunction?: iTimingFunction;
}
