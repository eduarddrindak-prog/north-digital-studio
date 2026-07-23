export const fadeUp = {
  initial: {
    opacity: 0,
    y: 20,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.6,
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -30,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.6,
  },
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 30,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  viewport: {
    once: true,
    amount: 0.2,
  },

  transition: {
    duration: 0.6,
  },
};

export const stagger = {
  transition: {
    staggerChildren: 0.12,
  },
};