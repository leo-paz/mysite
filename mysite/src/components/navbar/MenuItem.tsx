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
                {colour: "#88fc03", link:"#aboutme", emoji: "🧑🏻", message: "about me"},
                {colour: "#5efc03", link:"#work", emoji: "👨🏻‍💻", message: "work"},
                {colour: "#41fc03", link:"#resume", emoji: "📄", message: "resume"}, 
                {colour: "#2dfc03", link:"#github", emoji: "💬", message: "github"}, 
                {colour: "#0bfc03", link:"#linkedin", emoji: "💬", message: "linkedin"}];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${menuItemProps[i].colour}` };
  const emoji = menuItemProps[i].emoji;
  const link = menuItemProps[i].link;
  const message = menuItemProps[i].message;
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
        
        <div className="icon-placeholder" style={style}>
        <a href={link}><span className="emoji" role="img">{emoji}</span> </a>
        </div>
        <div className="text-placeholder" style={style} >
        <p>{message}</p>
        </div>
    </motion.li>
  );
};
