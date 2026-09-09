"use client";

import { useEffect, useState } from "react";

/** 0.09:32 total, matching the editor timeline. */
const TOTAL = 572;

function format(seconds: number, full: boolean) {
  const s = Math.max(0, Math.floor(seconds));
  const mm = String(Math.floor(s / 60)).padStart(2, "0");
  const ss = String(s % 60).padStart(2, "0");
  return full ? `0.${mm}:${ss}` : `${Math.floor(s / 60)}:${ss}`;
}

/** A playhead clock that ticks 0 → 9:32 on a loop, so the mock reads as
 *  actually playing. `full` renders the 0.MM:SS timeline format. */
export function PlayheadTime({ full = false }: { full?: boolean }) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const t = window.setTimeout(() => setSeconds(154), 0);
      return () => window.clearTimeout(t);
    }
    const start = performance.now();
    const id = window.setInterval(() => {
      setSeconds(((performance.now() - start) / 1000) % TOTAL);
    }, 250);
    return () => window.clearInterval(id);
  }, []);

  return <>{format(seconds, full)}</>;
}
