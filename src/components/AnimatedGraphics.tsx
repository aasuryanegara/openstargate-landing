
import { useEffect, useState } from "react";

type FloatingCubeProps = {
  size: number;
  position: { x: string; y: string };
  delay: number;
  duration: number;
  color: string;
};

const FloatingCube = ({ size, position, delay, duration, color }: FloatingCubeProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute transform rotate-45 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: position.x,
        top: position.y,
        background: `linear-gradient(135deg, ${color}10, ${color}30)`,
        backdropFilter: "blur(5px)",
        border: `1px solid ${color}40`,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay / 1000}s`,
      }}
    />
  );
};

type FloatingLineProps = {
  width: number;
  position: { x: string; y: string };
  delay: number;
  duration: number;
  color: string;
  angle: number;
};

const FloatingLine = ({ width, position, delay, duration, color, angle }: FloatingLineProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`absolute h-px transition-opacity duration-1000 ${
        isVisible ? "opacity-40" : "opacity-0"
      }`}
      style={{
        width: `${width}px`,
        left: position.x,
        top: position.y,
        background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
        transform: `rotate(${angle}deg)`,
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay / 1000}s`,
      }}
    />
  );
};

const AnimatedGraphics = () => {
  // Generate cube elements with different properties
  const cubes = [
    { size: 40, position: { x: "5%", y: "15%" }, delay: 200, duration: 8, color: "#1EAEDB" },
    { size: 25, position: { x: "15%", y: "60%" }, delay: 600, duration: 12, color: "#8B5CF6" },
    { size: 35, position: { x: "80%", y: "25%" }, delay: 100, duration: 10, color: "#10B981" },
    { size: 20, position: { x: "85%", y: "70%" }, delay: 400, duration: 7, color: "#EC4899" },
    { size: 30, position: { x: "40%", y: "85%" }, delay: 300, duration: 9, color: "#8B5CF6" },
    { size: 15, position: { x: "60%", y: "10%" }, delay: 800, duration: 11, color: "#1EAEDB" },
  ];

  // Generate line elements with different properties
  const lines = [
    { width: 150, position: { x: "10%", y: "30%" }, delay: 500, duration: 9, color: "#1EAEDB", angle: 30 },
    { width: 100, position: { x: "25%", y: "70%" }, delay: 700, duration: 11, color: "#8B5CF6", angle: -15 },
    { width: 200, position: { x: "70%", y: "40%" }, delay: 300, duration: 8, color: "#10B981", angle: 45 },
    { width: 120, position: { x: "75%", y: "85%" }, delay: 900, duration: 10, color: "#EC4899", angle: -30 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {cubes.map((cube, index) => (
        <FloatingCube
          key={`cube-${index}`}
          size={cube.size}
          position={cube.position}
          delay={cube.delay}
          duration={cube.duration}
          color={cube.color}
        />
      ))}
      
      {lines.map((line, index) => (
        <FloatingLine
          key={`line-${index}`}
          width={line.width}
          position={line.position}
          delay={line.delay}
          duration={line.duration}
          color={line.color}
          angle={line.angle}
        />
      ))}
    </div>
  );
};

export default AnimatedGraphics;
