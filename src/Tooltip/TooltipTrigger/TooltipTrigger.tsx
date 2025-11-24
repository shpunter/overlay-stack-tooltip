import type { ReactNode } from "react";
import { useTooltipContext } from "../hook.ts";
import styles from "./tooltipTrigger.module.css" with { type: "css" };

const TooltipTrigger: React.FC<TriggerProps> = (
  { children, className, ...props },
) => {
  const { onMouseEnter, onMouseLeave } = useTooltipContext();

  return (
    <div
      className={`${styles.trigger} ${className || ""}`.trim()}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
};

export default TooltipTrigger;

export interface TriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
