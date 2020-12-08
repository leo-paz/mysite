import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { Dimensions } from "./dimensions";
import { MenuToggle } from "./MenuToggle";
import { NavigationItems } from "./NavigationItems";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 45px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

export const BetterNavMenu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = Dimensions(containerRef);

  return (
    <motion.nav 
        className="force-front-3" 
        initial={false} 
        animate={isOpen ? "open" : "closed"} 
        custom={height} 
        ref={containerRef} 
        // style={{height: `${isOpen ? '30%': '0px'}`}}
    >
        <motion.div className="background" variants={sidebar} />
      <NavigationItems isOpen={isOpen ? true : false}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
