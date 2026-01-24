"use client";

import { useEffect, useRef } from "react";

// Animated Map Background - Dark Mode
// Warm earth tones: deep forest greens, warm browns, subtle terrain
// Organic, flowing topographic layers

export function AnimatedMapBackgroundDark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    // Terrain elevation layers - dark mode earth tones (enhanced visibility)
    const terrainLayers = [
      {
        baseY: 0.92,
        amplitude: 90,
        frequency: 0.0018,
        speed: 0.035,
        phase: 0,
        color: "rgba(74, 222, 128, 0.12)", // Light green glow
      },
      {
        baseY: 0.82,
        amplitude: 75,
        frequency: 0.002,
        speed: 0.04,
        phase: 0.8,
        color: "rgba(52, 211, 107, 0.10)", // Bright map green
      },
      {
        baseY: 0.72,
        amplitude: 65,
        frequency: 0.0025,
        speed: 0.05,
        phase: 1.6,
        color: "rgba(34, 197, 94, 0.09)", // Map green
      },
      {
        baseY: 0.60,
        amplitude: 55,
        frequency: 0.003,
        speed: 0.055,
        phase: 2.4,
        color: "rgba(22, 163, 74, 0.08)", // Forest green
      },
      {
        baseY: 0.48,
        amplitude: 48,
        frequency: 0.0028,
        speed: 0.05,
        phase: 3.2,
        color: "rgba(21, 128, 61, 0.07)", // Deep green
      },
      {
        baseY: 0.38,
        amplitude: 42,
        frequency: 0.0022,
        speed: 0.045,
        phase: 4.0,
        color: "rgba(120, 110, 95, 0.065)", // Warm brown
      },
      {
        baseY: 0.28,
        amplitude: 38,
        frequency: 0.0032,
        speed: 0.06,
        phase: 4.8,
        color: "rgba(100, 95, 80, 0.055)", // Deep brown
      },
      {
        baseY: 0.18,
        amplitude: 32,
        frequency: 0.0035,
        speed: 0.065,
        phase: 5.6,
        color: "rgba(107, 116, 85, 0.05)", // Terrain olive
      },
    ];

    // Contour lines - subtle in dark mode
    const contourLines = Array.from({ length: 14 }, (_, i) => ({
      y: 0.08 + i * 0.065,
      amplitude: 10 + i * 4,
      frequency: 0.003 + i * 0.0003,
      speed: 0.03 + i * 0.007,
      phase: i * 0.6,
      opacity: 0.025 + i * 0.008,
    }));

    const drawTerrainLayer = (
      layer: (typeof terrainLayers)[0],
      time: number
    ) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const { baseY, amplitude, frequency, speed, phase, color } = layer;

      ctx.beginPath();
      ctx.moveTo(0, height);

      for (let x = 0; x <= width; x += 2) {
        const y =
          height * baseY +
          Math.sin(x * frequency + time * speed + phase) * amplitude +
          Math.sin(x * frequency * 0.6 + time * speed * 0.8 + phase * 1.3) *
            amplitude *
            0.4 +
          Math.sin(x * frequency * 0.35 + time * speed * 0.5 + phase * 0.7) *
            amplitude *
            0.25;

        ctx.lineTo(x, y);
      }

      ctx.lineTo(width, height);
      ctx.closePath();

      // Gradient for terrain depth
      const gradient = ctx.createLinearGradient(
        0,
        height * baseY - amplitude,
        0,
        height
      );
      const baseOpacity = parseFloat(
        color.match(/[\d.]+\)$/)?.[0].replace(")", "") || "0"
      );

      gradient.addColorStop(0, color);
      gradient.addColorStop(
        0.35,
        color.replace(/[\d.]+\)$/, baseOpacity * 1.5 + ")")
      );
      gradient.addColorStop(
        0.7,
        color.replace(/[\d.]+\)$/, baseOpacity * 0.7 + ")")
      );
      gradient.addColorStop(
        1,
        color.replace(/[\d.]+\)$/, baseOpacity * 0.25 + ")")
      );

      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const drawContourLine = (
      line: (typeof contourLines)[0],
      time: number
    ) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const { y, amplitude, frequency, speed, phase, opacity } = line;

      ctx.beginPath();

      for (let x = 0; x <= width; x += 3) {
        const yPos =
          height * y +
          Math.sin(x * frequency + time * speed + phase) * amplitude +
          Math.sin(x * frequency * 0.5 + time * speed * 0.6 + phase) *
            amplitude *
            0.3;

        if (x === 0) {
          ctx.moveTo(x, yPos);
        } else {
          ctx.lineTo(x, yPos);
        }
      }

      // Green-tinted contour lines
      ctx.strokeStyle = `rgba(134, 239, 172, ${opacity})`;
      ctx.lineWidth = 0.9;
      ctx.stroke();
    };

    // Grid pattern (enhanced visibility)
    const drawGrid = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const gridSize = 100;

      ctx.strokeStyle = "rgba(134, 239, 172, 0.035)";
      ctx.lineWidth = 0.6;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const time = (timestamp - startTime) / 1000;

      const width = window.innerWidth;
      const height = window.innerHeight;

      // Dark warm background
      const bgGradient = ctx.createRadialGradient(
        width * 0.25,
        height * 0.25,
        0,
        width * 0.5,
        height * 0.5,
        width * 0.9
      );
      bgGradient.addColorStop(0, "#1C1917"); // Stone 900
      bgGradient.addColorStop(0.3, "#1A1816");
      bgGradient.addColorStop(0.6, "#191715");
      bgGradient.addColorStop(1, "#171514");

      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw layers
      drawGrid();
      terrainLayers.forEach((layer) => drawTerrainLayer(layer, time));
      contourLines.forEach((line) => drawContourLine(line, time));

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}
