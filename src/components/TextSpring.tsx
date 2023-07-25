/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface AnitedTxtInterface {
  text: string;
  style?: any;
}

const AnimatedTextCharacter = ({ text, style }: AnitedTxtInterface) => {
  const Mobile = useMediaQuery({ maxWidth: "750px" });
  const [, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const letters = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 6,
        stiffness: 250,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <motion.div
      style={{
        overflow: "hidden",
        display: "flex",
        marginLeft: "10px",
        ...style,
      }}
      variants={container}
      initial="hidden"
      animate={window.scrollY < 200 ? "visible" : "hidden"}
    >
      {!Mobile
        ? letters.map((letter, index) => (
            <motion.h2
              style={{ marginRight: "10px", fontSize: "42px" }}
              variants={child}
              key={index}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.h2>
          ))
        : letters.map((letter, index) => (
            <motion.h2
              style={{ marginRight: "10px", fontSize: "22px" }}
              variants={child}
              key={index}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.h2>
          ))}
    </motion.div>
  );
};

export default AnimatedTextCharacter;
