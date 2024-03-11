import { useScroll, useTransform } from "framer-motion";

interface ScrollScaleAnimationProps {
    scrollRange: number[];
    scaleRange: number[];
}

export default function ScrollScaleAnimation({scrollRange,scaleRange} : ScrollScaleAnimationProps){
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, scrollRange, scaleRange);

    return scale;
}