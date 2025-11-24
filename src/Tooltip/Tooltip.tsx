import { type ReactNode, useRef } from "react";
import { type PopoverElement, TooltipContext } from "./hook.ts";
import TooltipTrigger, {
  type TriggerProps,
} from "./TooltipTrigger/TooltipTrigger.tsx";
import TooltipContent, {
  type ContentProps,
} from "./TooltipContent/TooltipContent.tsx";

const Tooltip: React.FC<TooltipProps> & {
  Trigger: React.FC<TriggerProps>;
  Content: React.FC<ContentProps>;
} = ({ children }) => {
  const ref = useRef<PopoverElement>(null);

  const onMouseEnterFn = () => {
    if (ref.current) {
      ref.current.showPopover();
    }
  };

  const onMouseLeaveFn = () => {
    if (ref.current) {
      ref.current.hidePopover();
    }
  };

  const contextValue = {
    popoverRef: ref!,
    onMouseEnter: onMouseEnterFn,
    onMouseLeave: onMouseLeaveFn,
  };

  return (
    <TooltipContext.Provider value={contextValue}>
      {children}
    </TooltipContext.Provider>
  );
};

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;

export default Tooltip;

interface TooltipProps {
  children: ReactNode;
}
