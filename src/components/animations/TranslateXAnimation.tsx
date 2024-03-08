import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

interface TranslateXAnimationProps {
  timeMultiplier: number;
  displacementMultiplier: number;
}

export default function TranslateXAnimation({
  timeMultiplier = 0,
  displacementMultiplier = 0,
}: TranslateXAnimationProps) {
  const translateX = useMotionValue(0);

  useEffect(() => {
    const updatePositions = () => {
      const time = performance.now() / 1000;
      translateX.set(Math.sin(time * timeMultiplier) * displacementMultiplier);
      requestAnimationFrame(updatePositions);
    };

    requestAnimationFrame(updatePositions);
  }, [timeMultiplier, displacementMultiplier]);

  return translateX;
}
