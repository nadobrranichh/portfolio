import type { CSSProperties } from "react";

const themeColors = ["accent", "completion", "content"];

function resolveColor(color: string): string {
  if (themeColors.includes(color)) return `var(--${color})`;
  if (color.startsWith("--")) return `var(${color})`;
  return color;
}

export default function Badge({
  color,
  text,
}: {
  color: string;
  text: string;
}) {
  return (
    <span
      style={{ "--color-to-use": resolveColor(color) } as CSSProperties}
      className={`group inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border border-(--color-to-use) text-(--color-to-use)`}
    >
      {text}
    </span>
  );
}
