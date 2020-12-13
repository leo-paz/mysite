import { useLayoutEffect, useState } from "react";

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
export const Dimensions = (ref) => {
  const [dimensions, setDimensions] = useState({
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth
  });

  useLayoutEffect(() => {
    function handleResize() {
      setDimensions({
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth
      });
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimensions;
};
