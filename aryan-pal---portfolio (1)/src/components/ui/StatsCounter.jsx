import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

export default function StatsCounter({ value, prefix = "", suffix = "", className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionVal = useMotionValue(0);
  const springVal = useSpring(motionVal, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if (isInView) {
      motionVal.set(value);
    }
  }, [motionVal, isInView, value]);

  useEffect(() => {
    return springVal.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest.toFixed(value % 1 !== 0 ? 1 : 0)}${suffix}`;
      }
    });
  }, [springVal, prefix, suffix, value]);

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
