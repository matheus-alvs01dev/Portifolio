import ScrollPositionAnimation from "./animations/ScrollPositionAnimation";
import TranslateXAnimation from "./animations/TranslateXAnimation";
import ScrollScaleAnimation from "./animations/ScrollScaleAnimation";

export default function usePlanetRServices() {
  const [positionXR, positionYR] = ScrollPositionAnimation({
    scrollRangeX: [0, 800],
    scrollRangeY: [0, 800],
    movementRangeX: [0, 400],
    movementRangeY: [0, 100],
  });

  const planetRScale = ScrollScaleAnimation({
    scrollRange: [0, 800],
    scaleRange: [0.8, 1],
  });

  const planetRAnimationX = TranslateXAnimation({
    timeMultiplier: 0.4,
    displacementMultiplier: 18,
  });

  const planetRAnimationY = TranslateXAnimation({  
    timeMultiplier: 0.4,
    displacementMultiplier: 12,
  });

  return {
    positionXR,
    positionYR,
    planetRScale,
    planetRAnimationX,
    planetRAnimationY,  
  };
}
