import bigPlanetRDesktop from "./big-planet-r.png";
import bigPlanetRTablet from "./big-planet-r-tablet.png";
import bigPlanetRMobile from "./big-planet-r-mobile.png";
import bigPlanetLDesktop from "./big-planet-l.png";
import bigPlanetLTablet from "./big-planet-l-tablet.png";
import bigPlanetLMobile from "./big-planet-l-mobile.png";
import { BigPlanetR, BigPlanetL } from "./style";
import useBigPlanetRServices from "../../../../services/useBigPlanetRServices";
import useBigPlanetLServices from "../../../../services/useBigPlanetLServices";

export default function BigPlanets() {
  const { positionXBL, positionYBL, planetLAnimationY } =
    useBigPlanetLServices();
  const { positionXBR, positionYBR, BigPlanetRAnimationY } =
    useBigPlanetRServices();
  return (
    <>
      <BigPlanetR
        $desktopimage={bigPlanetRDesktop}
        $tabletimage={bigPlanetRTablet}
        $mobileimage={bigPlanetRMobile}
        style={{
          translateY: BigPlanetRAnimationY,
          x: positionXBR,
          y: positionYBR,
        }}
      />
      <BigPlanetL
        $desktopimage={bigPlanetLDesktop}
        $tabletimage={bigPlanetLTablet}
        $mobileimage={bigPlanetLMobile}
        style={{
          translateY: planetLAnimationY,
          x: positionXBL,
          y: positionYBL,
        }}
      />
    </>
  );
}

