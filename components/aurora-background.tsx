"use client"

import { motion } from "framer-motion"

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* 60 procedural stars */}
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-px h-px bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.5,
              boxShadow: "0 0 2px rgba(255,255,255,0.6)",
            }}
          />
        ))}
      </div>

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 150% 70% at 35% 40%,
            rgba(110, 231, 183, 0.5) 0%,
            rgba(52, 211, 153, 0.3) 30%,
            rgba(16, 185, 129, 0.15) 50%,
            transparent 75%
          )`,
          filter: "blur(100px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["-15%", "10%", "-15%"],
          y: ["-8%", "12%", "-8%"],
          scale: [0.9, 1.15, 0.9],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 140% 65% at 65% 35%,
            rgba(244, 114, 182, 0.45) 0%,
            rgba(219, 39, 119, 0.3) 35%,
            rgba(190, 24, 93, 0.15) 55%,
            transparent 75%
          )`,
          filter: "blur(110px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["12%", "-18%", "12%"],
          y: ["5%", "-10%", "5%"],
          scale: [0.95, 1.12, 0.95],
          opacity: [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 24,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 145% 68% at 50% 45%,
            rgba(34, 211, 238, 0.45) 0%,
            rgba(6, 182, 212, 0.3) 32%,
            rgba(8, 145, 178, 0.15) 52%,
            transparent 75%
          )`,
          filter: "blur(105px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["-10%", "15%", "-10%"],
          y: ["-5%", "8%", "-5%"],
          scale: [0.92, 1.13, 0.92],
          opacity: [0.48, 0.72, 0.48],
        }}
        transition={{
          duration: 22,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 100% 55% at 40% 38%,
            rgba(110, 231, 183, 0.4) 0%,
            rgba(52, 211, 153, 0.25) 40%,
            rgba(16, 185, 129, 0.1) 60%,
            transparent 80%
          )`,
          filter: "blur(75px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["-8%", "12%", "-8%"],
          y: ["3%", "-6%", "3%"],
          scale: [0.95, 1.1, 0.95],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 95% 52% at 60% 42%,
            rgba(244, 114, 182, 0.38) 0%,
            rgba(219, 39, 119, 0.24) 38%,
            rgba(190, 24, 93, 0.1) 58%,
            transparent 78%
          )`,
          filter: "blur(80px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["10%", "-14%", "10%"],
          y: ["-4%", "9%", "-4%"],
          scale: [0.93, 1.12, 0.93],
          opacity: [0.48, 0.73, 0.48],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 1.5,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 105% 58% at 45% 40%,
            rgba(34, 211, 238, 0.4) 0%,
            rgba(6, 182, 212, 0.25) 42%,
            rgba(8, 145, 178, 0.1) 62%,
            transparent 80%
          )`,
          filter: "blur(78px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["-12%", "8%", "-12%"],
          y: ["6%", "-3%", "6%"],
          scale: [0.94, 1.11, 0.94],
          opacity: [0.52, 0.76, 0.52],
        }}
        transition={{
          duration: 19,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 2.5,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 70% 45% at 30% 35%,
            rgba(110, 231, 183, 0.35) 0%,
            rgba(52, 211, 153, 0.2) 45%,
            rgba(16, 185, 129, 0.08) 65%,
            transparent 85%
          )`,
          filter: "blur(60px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["-6%", "9%", "-6%"],
          y: ["-2%", "7%", "-2%"],
          scale: [0.96, 1.08, 0.96],
          opacity: [0.55, 0.78, 0.55],
        }}
        transition={{
          duration: 17,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.8,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 75% 48% at 70% 38%,
            rgba(244, 114, 182, 0.33) 0%,
            rgba(219, 39, 119, 0.2) 48%,
            rgba(190, 24, 93, 0.08) 68%,
            transparent 85%
          )`,
          filter: "blur(65px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["8%", "-10%", "8%"],
          y: ["4%", "-5%", "4%"],
          scale: [0.97, 1.09, 0.97],
          opacity: [0.53, 0.76, 0.53],
        }}
        transition={{
          duration: 18,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 1.2,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 65% 42% at 55% 42%,
            rgba(34, 211, 238, 0.32) 0%,
            rgba(6, 182, 212, 0.18) 50%,
            rgba(8, 145, 178, 0.07) 70%,
            transparent 85%
          )`,
          filter: "blur(62px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["-7%", "11%", "-7%"],
          y: ["5%", "-4%", "5%"],
          scale: [0.95, 1.1, 0.95],
          opacity: [0.54, 0.77, 0.54],
        }}
        transition={{
          duration: 21,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 1.8,
        }}
      />

      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(
            ellipse 120% 60% at 50% 40%,
            rgba(110, 231, 183, 0.25) 0%,
            rgba(244, 114, 182, 0.2) 35%,
            rgba(34, 211, 238, 0.2) 65%,
            transparent 85%
          )`,
          filter: "blur(90px)",
          mixBlendMode: "screen",
        }}
        animate={{
          x: ["-5%", "7%", "-5%"],
          y: ["-3%", "6%", "-3%"],
          scale: [0.98, 1.06, 0.98],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 25,
          ease: "easeInOut",
          repeat: Number.POSITIVE_INFINITY,
          delay: 2.2,
        }}
      />
    </div>
  )
}
