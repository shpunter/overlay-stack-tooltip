# 📦 @overlay-stack/tooltip

A **smart, generic React Tooltip component** designed to solve common issues
with z-index, viewport clipping, and component customization.

**No more tooltips cut off by the screen edge or stuck behind overlapping
elements!**

---

## ✨ Features

- **Smart Placement**: Automatically calculates the optimal side (top, bottom,
  left, right) to display the tooltip, ensuring it remains fully visible within
  the viewport bounds.

- **Edge-Awareness**: Intelligently checks for room around the target element to
  avoid clipping against the browser window and nearby elements, dynamically
  choosing the best spot.

- **Generic Content**: The tooltip body can be any valid React component or JSX,
  allowing for full customization of styles, content, and interactivity.

---

## 🚀 Installation

Install the package using npm or yarn:

```bash
npm install @overlay-stack/tooltip
# or
yarn add @overlay-stack/tooltip
```

## 📖 Usage Basic Example

```javascript
import { Tooltip } from "@overlay-stack/tooltip";

<Tooltip>
  <Tooltip.Trigger>
    Hover to View Popover
  </Tooltip.Trigger>
  <Tooltip.Content>
    Some magic text.
  </Tooltip.Content>
</Tooltip>;
```

```javascript
import { Tooltip } from "@overlay-stack/tooltip";

<Tooltip>
  <Tooltip.Trigger className="trigger">
    <span>Hover to View Popover</span>
  </Tooltip.Trigger>
  <Tooltip.Content className="content">
    <ul>
      <li>text</li>
      <li>text</li>
      <li>text</li>
    </ul>
  </Tooltip.Content>
</Tooltip>;
```
