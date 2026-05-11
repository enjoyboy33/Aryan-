import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function AnimatedText({ text, className = "" }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.3']
  });

  const characters = text.split("");

  return (
    <p ref={container} className={className}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + (1 / characters.length);
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
        
        return (
          <motion.span key={i} style={{ opacity }}>
            {char}
          </motion.span>
        );
      })}
    </p>
  );
}
