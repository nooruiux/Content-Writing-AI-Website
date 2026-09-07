import type { ReactNode } from "react";

type Variant = "glass" | "outline" | "gradient";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  pill?: "md" | "lg";
  href?: string;
  type?: "button" | "submit";
  className?: string;
  "aria-label"?: string;
};

const base =
  "inline-flex h-12 items-center justify-center gap-2 px-6 text-base font-bold whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variants: Record<Variant, string> = {
  glass:
    "border border-white/[0.12] bg-white/[0.08] text-white shadow-[1px_1px_0.8px_0_rgb(255_255_255/0.04),inset_0_-1px_1px_1.5px_rgb(255_255_255/0.08)] transition-colors hover:bg-white/[0.14]",
  outline: "border border-white bg-transparent text-white transition-colors hover:bg-white/10",
  // gradient is used only by the Pro ("Popular") pricing CTA — hover enhances the
  // gradient (lift + intensify + coral/violet glow) instead of fading it.
  gradient:
    "text-black bg-[linear-gradient(-5deg,#e6220c_5%,#ffffff_55%,#6f3ada_114%)] transition-[scale,box-shadow,filter] duration-200 ease-out will-change-[scale] hover:scale-[1.02] hover:brightness-[1.08] hover:shadow-[0_0_28px_-2px_#e6220c8c,0_12px_30px_-6px_#6f3ada8c]",
};

export function Button({
  children,
  variant = "glass",
  pill = "md",
  href,
  type = "button",
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${
    pill === "lg" ? "rounded-pill-lg" : "rounded-pill"
  } ${className}`;

  return href ? (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  ) : (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
