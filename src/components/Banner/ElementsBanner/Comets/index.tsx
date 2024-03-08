import cometDesktop from "./CometDesktop.png";
import { Comet1, Comet2, Comet3, Comet4, Comet5, Comet6 } from "./styles";
import ScrollPositionAnimation from "../../../animations/ScrollPositionAnimetion";

export default function Comets() {



  const comet1 = ScrollPositionAnimation({
    scrollRangeX: [0, 800],
    scrollRangeY: [0, 800],
    movementRangeX: [0, 1000],
    movementRangeY: [0, -1000],
  });

  const comet2 = ScrollPositionAnimation({
    scrollRangeX: [0, 300],
    scrollRangeY: [0, 300],
    movementRangeX: [0, 1000],
    movementRangeY: [0, -1000],
  });

  const comet3 = ScrollPositionAnimation({
    scrollRangeX: [0, 900],
    scrollRangeY: [0, 900],
    movementRangeX: [0, 1000],
    movementRangeY: [0, -1000],
  });

  const comet4 = ScrollPositionAnimation({
    scrollRangeX: [0, 700],
    scrollRangeY: [0, 700],
    movementRangeX: [0, 1000],
    movementRangeY: [0, -1000],
  });

  const comet5 = ScrollPositionAnimation({
    scrollRangeX: [0, 900],
    scrollRangeY: [0, 900],
    movementRangeX: [0, 1000],
    movementRangeY: [0, -1000],
  });

  const comet6 = ScrollPositionAnimation({
    scrollRangeX: [0, 800],
    scrollRangeY: [0, 800],
    movementRangeX: [0, 1000],
    movementRangeY: [0, -1000],
  });

  return (
    <>
      <Comet1 src={cometDesktop} style={{ x: comet1[0], y: comet1[1] }} />
      <Comet2 src={cometDesktop} style={{ x: comet2[0], y: comet2[1] }} />
      <Comet3 src={cometDesktop} style={{ x: comet3[0], y: comet3[1] }} />
      <Comet4 src={cometDesktop} style={{ x: comet4[0], y: comet4[1] }} />
      <Comet5 src={cometDesktop} style={{ x: comet5[0], y: comet5[1] }} />
      <Comet6 src={cometDesktop} style={{ x: comet6[0], y: comet6[1] }} />
    </>
  );
}
