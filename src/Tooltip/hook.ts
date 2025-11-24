import { createContext, type RefObject, useContext } from "react";

export const TooltipContext = createContext<TooltipContextType | null>(null);

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error(
      "Tooltip compound components must be rendered within the Tooltip parent component.",
    );
  }

  return context;
};

export interface TooltipContextType {
  popoverRef: RefObject<PopoverElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export interface PopoverElement extends HTMLDivElement {
  showPopover: () => void;
  hidePopover: () => void;
}
