import bigPlanetRDesktop from "./big-planet-r.png";
import bigPlanetRTablet from "./big-planet-r-tablet.png";
import bigPlanetRMobile from "./big-planet-r-mobile.png";
import bigPlanetLDesktop from "./big-planet-l.png";
import bigPlanetLTablet from "./big-planet-l-tablet.png";
import bigPlanetLMobile from "./big-planet-l-mobile.png";
import { BigPlanetR, BigPlanetL } from "./style";
import ScrollPositionAnimation from "../../../animations/ScrollPositionAnimetion";

export default function BigPlanets() {
  const postitionBigPlanetR = ScrollPositionAnimation({
    scrollRangeX: [0, 300],
    scrollRangeY: [0, 200],
    movementRangeX: [0, -150],
    movementRangeY: [0, 300],
  });
  const postitionBigPlanetL = ScrollPositionAnimation({
    scrollRangeX: [0, 300],
    scrollRangeY: [0, 300],
    movementRangeX: [0, 300],
    movementRangeY: [0, -500],
  });
  return (
    <>
      <BigPlanetR
        $desktopimage={bigPlanetRDesktop}
        $tabletimage={bigPlanetRTablet}
        $mobileimage={bigPlanetRMobile}
        style={{ x: postitionBigPlanetR[0], y: postitionBigPlanetR[1] }}
      />
      <BigPlanetL
        $desktopimage={bigPlanetLDesktop}
        $tabletimage={bigPlanetLTablet}
        $mobileimage={bigPlanetLMobile}
        style={{ x: postitionBigPlanetL[0], y: postitionBigPlanetL[1] }}
      />
    </>
  );
}
