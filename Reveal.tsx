import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function Reveal({
  children,
  width = "fit-content",
  delay = 0,
  direction = "up",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-40px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(40px)";
      case "down":
        return "translateY(-40px)";
      case "left":
        return "translateX(40px)";
      case "right":
        return "translateX(-40px)";
      case "none":
        return "none";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        width,
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : getTransform(),
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function RevealList({
  children,
  delayOffset = 0.1,
}: {
  children: React.ReactNode[];
  delayOffset?: number;
}) {
  return (
    <>
      {(children as React.ReactNode[]).map((child, i) => (
        <Reveal key={i} delay={i * delayOffset} width="100%">
          {child}
        </Reveal>
      ))}
    </>
  );
}
