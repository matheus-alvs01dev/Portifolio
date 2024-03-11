import planetRDesktop from "./planet-r.png";
import planetRTablet from "./planet-r-tablet.png";
import planetLDesktop from "./planet-l.png";
import planetLTablet from "./planet-l-tablet.png";
import { PlanetR, PlanetL } from "./style";
import usePlanetLServices from "../../../../services/usePlanetLServices";
import usePlanetRServices from "../../../../services/usePlanetRServices";

export default function Planets() {
  const {
    positionXR,
    positionYR,
    planetRScale,
    planetRAnimationX,
    planetRAnimationY,
  } = usePlanetRServices();

  const {
    positionXL,
    positionYL,
    planetLScale,
    planetLAnimationX,
    PlanetLAnimationY,
  } = usePlanetLServices();

  return (
    <>
      <PlanetR
        $desktopimage={planetRDesktop}
        $tabletimage={planetRTablet}
        style={{
          x: positionXR,
          y: positionYR,
          scale: planetRScale,
          translateX: planetRAnimationX,
          translateY: planetRAnimationY,
        }}
      />
      <PlanetL
        $desktopimage={planetLDesktop}
        $tabletimage={planetLTablet}
        style={{
          x: positionXL,
          y: positionYL,
          scale: planetLScale,
          translateX: planetLAnimationX,
          translateY: PlanetLAnimationY,
        }}
      />
    </>
  );
}
