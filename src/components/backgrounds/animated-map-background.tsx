"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { AnimatedMapBackgroundLight } from "./animated-map-background-light";
import { AnimatedMapBackgroundDark } from "./animated-map-background-dark";

export function AnimatedMapBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : false;

  // Always render the static background that matches the canvas backgrounds
  // This prevents the flash when transitioning from placeholder to canvas
  return (
    <>
      {/* Static background - uses CSS for initial theme detection, then JS takes over */}
      {!mounted ? (
        // SSR/Initial render: Use CSS classes that respond to prefers-color-scheme
        <div className="fixed inset-0 bg-gradient-light dark:bg-gradient-dark" />
      ) : (
        // Client render: Use resolved theme from next-themes
        <div
          className="fixed inset-0"
          style={{
            background: isDark
              ? "radial-gradient(ellipse at 25% 25%, #1C1917 0%, #1A1816 30%, #191715 60%, #171514 100%)"
              : "radial-gradient(ellipse at 25% 25%, #FAFAF9 0%, #F8F7F5 25%, #F5F5F4 50%, #F3F2F0 75%, #EFEEEC 100%)"
          }}
        />
      )}

      {/* Animated canvas layer - fades in on top */}
      {mounted && (
        <div className="fixed inset-0 animate-fade-in">
          {isDark ? (
            <AnimatedMapBackgroundDark />
          ) : (
            <AnimatedMapBackgroundLight />
          )}
        </div>
      )}
    </>
  );
}
