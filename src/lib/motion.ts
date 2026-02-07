import type { Transition, Variants } from "framer-motion";

// Shared motion timings keep page and gallery motion feeling cohesive.
export const motionEasing = {
  standard: [0.4, 0, 0.2, 1] as const,
  gentle: [0.25, 0.1, 0.25, 1] as const,
};

export const motionDurations = {
  page: 0.5,
  image: 0.35,
};

export const fadeSlideVariants: Variants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -4,
  },
};

export const pageTransition: Transition = {
  type: "tween",
  ease: motionEasing.standard,
  duration: motionDurations.page,
};

export const galleryImageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 1.03,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.98,
  },
};

export const galleryImageTransition: Transition = {
  duration: motionDurations.image,
  ease: motionEasing.gentle,
};
