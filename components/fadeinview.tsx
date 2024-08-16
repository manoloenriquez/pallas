"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

interface Props extends PropsWithChildren {
  className?: string;
}

const FadeInView = ({ children, className }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.01, // Trigger when 50% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }} // Adjust the duration as needed
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInView;
