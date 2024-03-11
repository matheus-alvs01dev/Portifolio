import ScrollPositionAnimation from "./animations/ScrollPositionAnimation";
import TranslateXAnimation from "./animations/TranslateXAnimation";

export default function useBigPlanetRServices() {
  const [positionXBL, positionYBL] = ScrollPositionAnimation({
    scrollRangeX: [0, 300],
    scrollRangeY: [0, 300],
    movementRangeX: [0, 300],
    movementRangeY: [0, -500],
  });

  const planetLAnimationY = TranslateXAnimation({  
    timeMultiplier: 0.4,
    displacementMultiplier: 12,
  });

  return { planetLAnimationY, positionXBL, positionYBL };
}
