"use client";

import { useEffect, useState, useRef } from "react";

interface RotatingWordsProps {
  words: string[];
  className?: string;
  interval?: number;
}

export function RotatingWords({
  words,
  className = "",
  interval = 2500,
}: RotatingWordsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      ref={containerRef}
      className={`inline-block relative overflow-hidden align-bottom ${className}`}
    >
      <span
        className={`inline-block transition-all duration-300 ease-out ${
          isAnimating
            ? "opacity-0 translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        {words[currentIndex]}
      </span>
    </span>
  );
}

