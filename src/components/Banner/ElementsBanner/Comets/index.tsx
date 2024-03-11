import cometDesktop from "./CometDesktop.png";
import { Comet1, Comet2, Comet3, Comet4, Comet5, Comet6 } from "./styles";
import ScrollPositionAnimation from "../../../../services/animations/ScrollPositionAnimation";

const cometConfigurations = [
  { scrollRangeX: [0, 800], scrollRangeY: [0, 800] },
  { scrollRangeX: [0, 300], scrollRangeY: [0, 300] },
  { scrollRangeX: [0, 900], scrollRangeY: [0, 900] },
  { scrollRangeX: [0, 700], scrollRangeY: [0, 700] },
  { scrollRangeX: [0, 900], scrollRangeY: [0, 900] },
  { scrollRangeX: [0, 800], scrollRangeY: [0, 800] },
];

export default function Comets() {
  const cometAnimations = cometConfigurations.map((config) =>
    ScrollPositionAnimation({
      ...config,
      movementRangeX: [0, 1000],
      movementRangeY: [0, -1000],
    })
  );

  const CometComponents = [Comet1, Comet2, Comet3, Comet4, Comet5, Comet6];

  return (
    <>
      {cometAnimations.map((animation, index) => {
        const CometComponent = CometComponents[index];
        return (
          <CometComponent
            key={index}
            src={cometDesktop}
            style={{ x: animation[0], y: animation[1] }}
          />
        );
      })}
    </>
  );
}
