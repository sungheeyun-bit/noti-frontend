const easeing = [0.6, -0.05, 0.01, 0.99];

export const StaggerContainer = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.7,
    },
  },
};

export const HeadingAnimate = {
  offscreen: { opacity: 0.2 },
  onscreen: {
    opacity: 1,
    transition: {
      bounce: 0.4,
      duration: 1.6,
      ease: easeing,
    },
  },
};

export const TextAnimate = {
  offscreen: { y: -50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 3.5,
      ease: easeing,
    },
  },
};

export const FeatureAnimate = {
  offscreen: { y: -100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 4,
      ease: easeing,
    },
  },
};

export const OutroTextAnimate = {
  offscreen: { opacity: 0.1 },
  onscreen: {
    opacity: 0.6,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 3.5,
      ease: easeing,
    },
  },
};
