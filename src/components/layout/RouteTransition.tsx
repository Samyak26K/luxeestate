import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeSlideVariants, pageTransition } from "@/lib/motion";

interface RouteTransitionProps {
  children: ReactNode;
}

const RouteTransition = ({ children }: RouteTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      // Route-level variants keep every page transition consistent and centrally tunable.
      variants={fadeSlideVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default RouteTransition;
