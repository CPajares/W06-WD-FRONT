import { useEffect } from "react";
import "./App.css";

import RobotList from "./components/RobotList/RobotList";
import useRobot from "./hooks/useRobot";

function App() {
  const { loadRobots, robots } = useRobot();
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);
  return (
    <div className="App">
      <RobotList robots={robots} />
    </div>
  );
}

export default App;
