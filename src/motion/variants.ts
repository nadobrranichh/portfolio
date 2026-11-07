import { stagger, type Variants } from "motion";

export function fade({ withStagger = false, yStart = -20 } = {}): Variants {
  return {
    hidden: {
      opacity: 0,
      y: yStart,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ...(withStagger && { delayChildren: stagger(0.2) }),
      },
    },
  };
}
