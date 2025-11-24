import Tooltip from "./Tooltip/Tooltip.tsx";
import styles from "./app.module.css" with { type: "css" };

function App() {
  return (
    <div className="wrapper">
      <Tooltip>
        <Tooltip.Trigger className={styles.target}>
          Hover to View Popover
        </Tooltip.Trigger>
        <Tooltip.Content className={styles.msg}>
          Some magic text.
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
}

export default App;
