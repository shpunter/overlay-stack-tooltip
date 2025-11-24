import type { ReactNode } from "react";
import { useTooltipContext } from "../hook.ts";
import styles from "./tooltipContent.module.css"  with { type: "css" };

const TooltipContent: React.FC<ContentProps> = (
  { children, className, ...props },
) => {
  const { popoverRef } = useTooltipContext();

  return (
    <div
      className={`${styles.content} ${className || ""}`.trim()}
      ref={popoverRef}
      popover="auto"
      {...props}
    >
      {children}
    </div>
  );
};

export default TooltipContent;

export interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
