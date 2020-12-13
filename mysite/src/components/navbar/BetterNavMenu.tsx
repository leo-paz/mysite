import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, useCycle } from "framer-motion";
import { Dimensions } from "./dimensions";
import { MenuToggle } from "./MenuToggle";
import { NavigationItems } from "./NavigationItems";
import classnames from 'classnames';
import { setConstantValue } from "typescript";

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
  const [isOpen, setOpen] = useState(false);
  const containerRef = useRef(null);
  const { height } = Dimensions(containerRef);
  const [previousScrollPos, setPreviousScrollPos] = useState({
    prevScrollPos: window.pageXOffset,
    visible: true
  });

  useEffect(() => {
    const handleScroll = () => {
        const { prevScrollPos } = previousScrollPos;
    
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollPos > currentScrollPos;

        setOpen(isOpen && visible);
    
        setPreviousScrollPos({
            prevScrollPos: currentScrollPos,
            visible
        });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll)
    }
})

  return (
    <motion.nav
        initial={false} 
        animate={isOpen ? "open" : "closed"} 
        custom={height} 
        ref={containerRef}
    >
        <motion.div className="background" variants={sidebar} />
      <NavigationItems isOpen={isOpen ? true : false}/>
      <MenuToggle setOpen={() => setOpen(isOpen => !isOpen)} />
    </motion.nav>
  );
};
