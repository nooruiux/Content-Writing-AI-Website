"use client";

import { useState } from "react";

export function BillingToggle() {
  const [yearly, setYearly] = useState(true);

  return (
    <div className="flex items-center gap-4 text-base font-medium text-white">
      <span>Pay monthly</span>
      <button
        type="button"
        role="switch"
        aria-checked={yearly}
        aria-label="Toggle yearly billing"
        onClick={() => setYearly((v) => !v)}
        className="flex h-6 w-11 items-center rounded-pill bg-accent p-0.5 transition-colors"
      >
        <span
          className={`size-5 rounded-full bg-white transition-transform ${
            yearly ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      <span className="flex items-center gap-2">
        Pay yearly
        <span className="rounded-sm bg-accent-soft px-1 py-0.5 text-accent">15% off</span>
      </span>
    </div>
  );
}
