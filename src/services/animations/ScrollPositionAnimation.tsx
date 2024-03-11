import { useScroll, useTransform } from "framer-motion";

interface ScrollPositionAnimationProps {
  scrollRangeX?: number[];
  scrollRangeY?: number[];
  movementRangeX?: number[];
  movementRangeY?: number[];
}

export default function ScrollPositionAnimation({
  scrollRangeX = [0,0],
  scrollRangeY = [0,0],
  movementRangeX = [0,0],
  movementRangeY = [0,0],
}: ScrollPositionAnimationProps) {
  const { scrollY } = useScroll();
  const moveY = useTransform(scrollY, scrollRangeX, movementRangeX);
  const moveX = useTransform(scrollY, scrollRangeY, movementRangeY);

  return [moveX, moveY];
}
