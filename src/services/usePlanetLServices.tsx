import ScrollPositionAnimation from "./animations/ScrollPositionAnimation";
import TranslateXAnimation from "./animations/TranslateXAnimation";
import ScrollScaleAnimation from "./animations/ScrollScaleAnimation";

export default function usePlanetLServices() {
  const [positionXL, positionYL] = ScrollPositionAnimation({
    scrollRangeX: [0, 800],
    scrollRangeY: [0, 800],
    movementRangeX: [0, -180],
    movementRangeY: [0, -300],
  });

  const planetLScale = ScrollScaleAnimation({
    scrollRange: [0, 800],
    scaleRange: [0.8, 1.4],
  });

  const planetLAnimationX = TranslateXAnimation({
    timeMultiplier: 0.4,
    displacementMultiplier: 15,
  });
  const PlanetLAnimationY = TranslateXAnimation({
    timeMultiplier: 0.4,
    displacementMultiplier: 15,
  });
  return {
    positionXL,
    positionYL,
    planetLScale,
    planetLAnimationX,
    PlanetLAnimationY
  };
}
