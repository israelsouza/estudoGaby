import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

export default function FadeInParagraph({ children, index = 0, className = "" }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, 
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,          
        delay: index * 0.3,    
        ease: [0.42, 0, 0.58, 1], 
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      variants={fadeInVariant}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.p>
  );
}
