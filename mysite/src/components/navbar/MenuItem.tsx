import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const menuItemProps = [
                {colour: "#66c4e8", link:"#aboutme", emoji: "🧑🏻", message: "about me"},
                {colour: "#66c4e8", link:"https://github.com/leo-paz", emoji: "👨🏻‍💻", message: "github"},
                {colour: "#66c4e8", link:"./resume.pdf", emoji: "📄", message: "resume"}, 
                {colour: "#66c4e8", link:"https://www.linkedin.com/in/leonardo-paz-61b98a13a/", emoji: "💬", message: "linkedin"}];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${menuItemProps[i].colour}` };
  const emoji = menuItemProps[i].emoji;
  const link = menuItemProps[i].link;
  const message = menuItemProps[i].message;
  let anchor;
  let messageElem;
  if (i === 2) {
    anchor = <a href={link} download><span className="emoji" role="img">{emoji}</span></a>;
    messageElem = <a href={link} download><p>{message}</p></a>;
  } else {
    anchor = <a href={link}><span className="emoji" role="img">{emoji}</span></a>;
    messageElem = <a href={link}><p>{message}</p></a>;
  }

  return (
    <motion.li className="force-front-1"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
        <div className="icon-placeholder" style={style}>
        {anchor}
        </div>
        <div className="text-placeholder" style={style} >
        {messageElem}
        </div>
    </motion.li>
  );
};
