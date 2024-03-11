import ScrollPositionAnimation from "./animations/ScrollPositionAnimation";
import TranslateXAnimation from "./animations/TranslateXAnimation";

export default function useBigPlanetRServices() {
  const [positionXBR, positionYBR] = ScrollPositionAnimation({
    scrollRangeX: [0, 300],
    scrollRangeY: [0, 200],
    movementRangeX: [0, -150],
    movementRangeY: [0, 300],
  });

  const BigPlanetRAnimationY = TranslateXAnimation({
    timeMultiplier: 0.4,
    displacementMultiplier: 15,
  });

  return { BigPlanetRAnimationY, positionXBR, positionYBR };
}
