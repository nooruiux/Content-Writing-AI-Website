import type { ReactNode } from "react";

type SectionHeadingProps = {
  as?: "h1" | "h2";
  title: ReactNode;
  subtitle?: ReactNode;
  titleClassName?: string;
  subtitleClassName?: string;
  className?: string;
  balance?: boolean;
};

export function SectionHeading({
  as: Tag = "h2",
  title,
  subtitle,
  titleClassName = "text-h4",
  subtitleClassName = "text-base font-medium text-white/90",
  className = "",
  balance = true,
}: SectionHeadingProps) {
  return (
    <div className={`flex w-full flex-col items-center gap-6 text-center ${className}`}>
      <Tag
        className={`font-bold text-white ${balance ? "text-balance" : "text-pretty"} ${titleClassName}`}
      >
        {title}
      </Tag>
      {subtitle ? <p className={`text-pretty ${subtitleClassName}`}>{subtitle}</p> : null}
    </div>
  );
}
