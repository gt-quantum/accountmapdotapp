import { useEffect, useRef } from 'react';

export default function SilkFabricBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Topographic-style contour layers
    const layers = [
      { baseY: 0.78, amplitude: 60, frequency: 0.6, speed: 0.08, phase: 0 },
      { baseY: 0.62, amplitude: 50, frequency: 0.75, speed: 0.06, phase: 1.2 },
      { baseY: 0.48, amplitude: 55, frequency: 0.5, speed: 0.1, phase: 2.4 },
      { baseY: 0.35, amplitude: 40, frequency: 0.65, speed: 0.07, phase: 3.6 },
      { baseY: 0.22, amplitude: 35, frequency: 0.8, speed: 0.09, phase: 4.8 },
    ];

    const getLayerColor = (i, isDark) => {
      // Vintage cartography colors - warm greens, olives, and parchment tones
      const lightColors = [
        'rgba(107, 116, 85, 0.08)',   // Olive/Moss terrain
        'rgba(21, 128, 61, 0.05)',    // Forest green hint
        'rgba(180, 175, 165, 0.12)',  // Warm stone
        'rgba(212, 149, 58, 0.04)',   // Brass/gold hint
        'rgba(225, 220, 210, 0.1)',   // Parchment
      ];
      const darkColors = [
        'rgba(107, 116, 85, 0.12)',   // Olive/Moss terrain
        'rgba(34, 197, 94, 0.06)',    // Green hint
        'rgba(60, 55, 48, 0.2)',      // Dark stone
        'rgba(212, 149, 58, 0.06)',   // Brass/gold hint
        'rgba(50, 45, 40, 0.15)',     // Dark parchment
      ];
      return isDark ? darkColors[i] : lightColors[i];
    };

    // Draw subtle street grid pattern
    const drawStreetGrid = (w, h, isDark, time) => {
      ctx.save();

      const gridColor = isDark
        ? 'rgba(61, 56, 51, 0.15)'
        : 'rgba(231, 229, 228, 0.6)';

      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      // Subtle offset grid - like map streets
      const gridSize = 80;
      const offset = Math.sin(time * 0.02) * 2;

      // Vertical lines (main roads)
      for (let x = -gridSize; x < w + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + offset, 0);
        ctx.lineTo(x + offset + h * 0.05, h);
        ctx.stroke();
      }

      // Horizontal lines (cross streets)
      for (let y = -gridSize; y < h + gridSize; y += gridSize * 1.2) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y + w * 0.02);
        ctx.stroke();
      }

      ctx.restore();
    };

    // Draw subtle compass rose hint in corner
    const drawCompassHint = (w, h, isDark, time) => {
      ctx.save();

      const centerX = w - 80;
      const centerY = h - 80;
      const radius = 40;
      const rotation = Math.sin(time * 0.01) * 0.02;

      ctx.globalAlpha = isDark ? 0.08 : 0.06;
      ctx.strokeStyle = isDark ? '#D4953A' : '#8F5F23';
      ctx.lineWidth = 1.5;

      ctx.translate(centerX, centerY);
      ctx.rotate(rotation);

      // Outer circle
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Cardinal direction lines
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const len = i % 2 === 0 ? radius * 0.9 : radius * 0.5;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle - Math.PI/2) * len, Math.sin(angle - Math.PI/2) * len);
        ctx.stroke();
      }

      // Inner decoration
      ctx.beginPath();
      ctx.arc(0, 0, radius * 0.3, 0, Math.PI * 2);
      ctx.stroke();

      ctx.restore();
    };

    // Draw subtle topographic contour lines
    const drawContours = (w, h, isDark, time) => {
      ctx.save();

      const contourColor = isDark
        ? 'rgba(107, 116, 85, 0.06)'
        : 'rgba(107, 116, 85, 0.04)';

      ctx.strokeStyle = contourColor;
      ctx.lineWidth = 0.5;

      // Create flowing contour lines
      for (let i = 0; i < 6; i++) {
        ctx.beginPath();
        const baseY = h * (0.3 + i * 0.1);

        for (let x = 0; x <= w; x += 5) {
          const y = baseY +
            Math.sin(x * 0.01 + time * 0.03 + i) * 30 +
            Math.sin(x * 0.005 + time * 0.02 + i * 2) * 20;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      ctx.restore();
    };

    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const time = (timestamp - startTime) / 1000;
      const { innerWidth: w, innerHeight: h } = window;
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      // Background gradient - Warm Stone palette
      const bg = ctx.createLinearGradient(0, 0, w * 0.3, h);
      if (isDark) {
        bg.addColorStop(0, '#1C1917');
        bg.addColorStop(0.4, '#1E1B18');
        bg.addColorStop(0.7, '#211E1A');
        bg.addColorStop(1, '#252220');
      } else {
        bg.addColorStop(0, '#FAFAF9');
        bg.addColorStop(0.3, '#F8F7F5');
        bg.addColorStop(0.6, '#F5F4F2');
        bg.addColorStop(1, '#F0EFEC');
      }
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Draw subtle street grid
      drawStreetGrid(w, h, isDark, time);

      // Draw topographic contours
      drawContours(w, h, isDark, time);

      // Draw terrain layers
      layers.forEach((layer, i) => {
        const { baseY, amplitude, frequency, speed, phase } = layer;

        ctx.beginPath();
        ctx.moveTo(0, h);

        for (let x = 0; x <= w; x += 15) {
          const y = h * baseY +
            Math.sin(x * 0.006 * frequency + time * speed + phase) * amplitude +
            Math.sin(x * 0.003 * frequency + time * speed * 0.6 + phase) * amplitude * 0.3;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(w, h);
        ctx.closePath();

        const gradient = ctx.createLinearGradient(0, h * baseY - amplitude, 0, h);
        const color = getLayerColor(i, isDark);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, color.replace(/[\d.]+\)$/, '0.01)'));

        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw compass hint
      drawCompassHint(w, h, isDark, time);

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
    />
  );
}
