import type { ElementType, ReactNode } from "react";

type GradientTextProps = {
  as?: ElementType;
  children: ReactNode;
  /** Tailwind background utilities describing the gradient, e.g. bg-[linear-gradient(...)] */
  gradient: string;
  className?: string;
};

export function GradientText({
  as: Tag = "span",
  children,
  gradient,
  className = "",
}: GradientTextProps) {
  return (
    <Tag className={`text-gradient inline-block w-fit ${gradient} ${className}`}>{children}</Tag>
  );
}
