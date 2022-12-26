import { Keyframes } from "styled-components";

export type iTimingFunction = "linear" | "ease" | "ease-in" | "ease-out" | "ease-in-out" | "step-start" | "step-end";
export type iFillMode = "none" | "forwards" | "backwards" | "both";

export interface iAnimation {
  max: number;
  time?: number;
  keyframe: Keyframes;
  fillMode?: iFillMode;
  customCss?: Function;
  timingFunction?: iTimingFunction;
}
