import type { FC, HTMLAttributes, ReactNode } from "react";

interface TriggerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface TooltipProps {
  children: ReactNode;
}

declare const TooltipTrigger: FC<TriggerProps>;
declare const TooltipContent: FC<ContentProps>;

type TooltipComponent = FC<TooltipProps> & {
  Trigger: typeof TooltipTrigger;
  Content: typeof TooltipContent;
};

export const Tooltip: TooltipComponent;
