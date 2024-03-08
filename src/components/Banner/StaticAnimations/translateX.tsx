import { useMotionValue } from "framer-motion";
import { useEffect } from "react";

const planetRTranslateX = useMotionValue(0);

useEffect(() => {
  const updatePositions = () => {
      const time = performance.now() / 1000;
      planetRTranslateX.set(Math.sin(time * 0.8) * 20); 
      requestAnimationFrame(updatePositions);
  };
  requestAnimationFrame(updatePositions);
}, []);



