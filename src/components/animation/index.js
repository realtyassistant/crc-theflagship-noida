"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export const LeftAnimation = ({ children, delay = 0.3 }) => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      animate={isVisible ? "visible" : "hidden"}
      initial="hidden"
      transition={{ duration: 0.6, delay }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: 50, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export const RightAnimation = ({ children, delay = 0.3 }) => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      animate={isVisible ? "visible" : "hidden"}
      initial="hidden"
      transition={{ duration: 0.6, delay }}
      variants={{
        visible: { x: 0, opacity: 1 },
        hidden: { x: -50, opacity: 0 }, // <-- FROM RIGHT
      }}
    >
      {children}
    </motion.div>
  );
};

export const BounceAnimation = ({ children, delay = 0.2 }) => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ y: -60, opacity: 0 }} // less extreme start height
      animate={
        isVisible
          ? {
              y: 0,
              opacity: 1,
            }
          : {}
      }
      transition={{
        duration: 1.2, // not too slow, not too fast
        delay,
        type: "spring",
        stiffness: 80, // medium bounce
        damping: 20, // soft but not floaty
      }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};

export const BottomToTopAnimation = ({ children, delay = 0.2 }) => {
  const containerRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ y: 80, opacity: 0 }} // starts below
      animate={
        isVisible
          ? {
              y: 0,
              opacity: 1,
            }
          : {}
      }
      transition={{
        duration: 1,
        delay,
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
      style={{ display: "inline-block" }}
    >
      {children}
    </motion.div>
  );
};
