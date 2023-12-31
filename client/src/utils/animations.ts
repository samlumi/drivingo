import { Variants } from "framer-motion";

export const fadeSmallDownVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0,
      y: -64,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  return variant;
};

export const fadeSmallUpVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0,
      y: 64,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
      },
    },
  };

  return variant;
};

export const fadeSmallLeftVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0,
      x: 64
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay
      }
    }
  };

  return variant;
};

export const fadeSmallRightVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0,
      x: -64
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration,
        delay
      }
    }
  };

  return variant;
};

export const fadeVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        duration,
        delay
      }
    }
  };

  return variant;
};

export const expandVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      transform: "scale(0.7)",
      opacity: 0
    },
    show: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration,
        delay
      }
    }
  };

  return variant;
};

export const shrinkVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      transform: "scale(1.2)",
      opacity: 0,
    },
    show: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration,
        delay,
      },
    },
  };

  return variant;
};

export const flipVariant = (duration: number = 0.5, delay: number = 0) => {
  const variant: Variants = {
    hide: {
      transform: "rotateX(90deg)",
      opacity: 0,
    },
    show: {
      transform: "rotateX(0)",
      opacity: 1,
      transition: {
        duration,
        delay,
      },
    },
  };

  return variant;
};
