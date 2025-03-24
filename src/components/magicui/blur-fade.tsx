"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variants;
  duration?: number;
  delay?: number;
  yOffset?: number;
  inViewMargin?: string;
  blur?: string;
}

const BlurFade: React.FC<BlurFadeProps> = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inViewMargin = "0px",
  blur = "6px",
}) => {
  // Sử dụng useInView để xác định phần tử đã vào khung nhìn
  const [ref, inView] = useInView({
    triggerOnce: true, // Hiệu ứng chỉ chạy một lần
    rootMargin: inViewMargin, // Kích hoạt hiệu ứng khi phần tử gần khung nhìn
  });

  // Variants mặc định nếu không được truyền vào
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: `blur(0px)` },
  };

  // Kết hợp variants mặc định và tùy chỉnh
  const combinedVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay, // Độ trễ cho hiệu ứng
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;
