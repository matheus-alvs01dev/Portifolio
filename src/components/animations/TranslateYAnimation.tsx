import { useEffect } from "react";
import { useMotionValue } from "framer-motion";

interface TranslateAnimationProps {
  timeMultiplier: number;
  displacementMultiplier: number;
}

export default function TranslateYAnimation({
  timeMultiplier = 0,
  displacementMultiplier = 0,
}: TranslateAnimationProps) {
  const translate = useMotionValue(0);

  useEffect(() => {
    const updatePositions = () => {
      const time = performance.now() / 1000;
      translate.set(Math.sin(time * timeMultiplier) * displacementMultiplier);
      requestAnimationFrame(updatePositions);
    };

    requestAnimationFrame(updatePositions);
  }, [timeMultiplier, displacementMultiplier]);

  return translate;
}