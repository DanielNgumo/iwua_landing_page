'use client';

import { useEffect, useRef } from "react";
import Lenis from "lenis";

/**
 * Wraps the app and drives all scrolling (including anchor-link clicks like
 * <a href="#how-it-works">) through Lenis for a slow, well-defined easing
 * curve instead of the browser's instant/native jump.
 *
 * Tune the feel here:
 * - duration: total seconds the scroll animation takes (higher = slower)
 * - easing: the curve shape (this one starts fast, eases out smoothly)
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4, // seconds — raise to 1.8–2.2 for an even slower, more deliberate feel
      easing: (t: number) => 1 - Math.pow(1 - t, 3), // ease-out-cubic: quick start, gentle landing
      smoothWheel: true,
      touchMultiplier: 1.2,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Intercept clicks on in-page anchor links (#how-it-works, #download, etc.)
    // so they animate through Lenis instead of the browser's instant jump.
    function handleAnchorClick(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!target) return;

      const hash = target.getAttribute("href");
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;

      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, {
        offset: -72, // accounts for the fixed navbar height so the section isn't hidden behind it
        duration: 1.4,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    }

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}