import { stagger, type Variants } from "motion";

export function fade({
  withStagger = false,
  yStart = -20,
  xStart = 0,
} = {}): Variants {
  return {
    hidden: {
      opacity: 0,
      y: yStart,
      x: xStart,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.3,
        ...(withStagger && { delayChildren: stagger(0.2) }),
      },
    },
    exit: {
      opacity: 0,
      y: -yStart,
      x: xStart,
      transition: {
        duration: 0.3,
      },
    },
  };
}

export const viewPortValues = { amount: 0.35, once: true };
