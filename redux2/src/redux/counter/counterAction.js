import { type } from "@testing-library/user-event/dist/type";
import { INCREASE, DECREASE } from "./types";
export const increase = () => {
  return { type: INCREASE };
};
export const decrease = () => {
  return { type: DECREASE };
};
