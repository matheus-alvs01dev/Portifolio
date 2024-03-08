import planetRTablet from "./planet-r-tablet.png";
import planetLDesktop from "./planet-l.png";
import planetLTablet from "./planet-l-tablet.png";
import { PlanetR, PlanetL } from "./style";
import TranslateXAnimation from "../../../animations/TranslateXAnimation";
import ScrollPositionAnimation from "../../../animations/ScrollPositionAnimetion";
import ScrollScaleAnimation from "../../../animations/ScrollScaleAnimation";

export default function Planets() {
  ///Position
  const postitionPlanetR = ScrollPositionAnimation({
    scrollRangeX: [0, 800],
    scrollRangeY: [0, 800],
    movementRangeX: [0, 400],
    movementRangeY: [0, 100],
  });
  const postitionPlanetL = ScrollPositionAnimation({
    scrollRangeX: [0, 800],
    scrollRangeY: [0, 800],
    movementRangeX: [0, -180],
    movementRangeY: [0, -300],
  });
  ///Scale
  const PlanetRScale = ScrollScaleAnimation({
    scrollRange: [0, 800],
    scaleRange: [0.8, 1],
  });
  const PlanetLScale = ScrollScaleAnimation({
    scrollRange: [0, 800],
    scaleRange: [0.5, 1],
  });

  ///Translation
  const PlanetRanimationX = TranslateXAnimation({
    timeMultiplier: 0.4,
    displacementMultiplier: 18,
  });
  const PlanetLanimationX = TranslateXAnimation({
    timeMultiplier: 0.4,
    displacementMultiplier: 14,
  });
  const PlanetRanimationY = TranslateXAnimation({
    timeMultiplier: 0.4,
    displacementMultiplier: 12,
  });
  const PlanetLanimationY = TranslateXAnimation({
    timeMultiplier: 0.4,
    displacementMultiplier: 15,
  });

  return (
    <>
      <PlanetR
        $desktopimage={planetLDesktop}
        $tabletimage={planetRTablet}
        style={{
          x: postitionPlanetR[0],
          y: postitionPlanetR[1],
          scale: PlanetRScale,
          translateX: PlanetRanimationX,
          translateY: PlanetRanimationY,
        }}
      />
      <PlanetL
        $desktopimage={planetLDesktop}
        $tabletimage={planetLTablet}
        style={{
          x: postitionPlanetL[0],
          y: postitionPlanetL[1],
          scale: PlanetLScale,
          translateX: PlanetLanimationX,
          translateY: PlanetLanimationY,
        }}
      />
    </>
  );
}
