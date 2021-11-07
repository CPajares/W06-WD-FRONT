import { useEffect } from "react";
import "./App.css";
import Form from "./components/Form/Form";

import RobotList from "./components/RobotList/RobotList";
import useRobot from "./hooks/useRobot";

function App() {
  const { loadRobots, robots } = useRobot();
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);
  return (
    <>
      <h1 className="title bg-warning">Roboces</h1>
      <div className="App">
        <RobotList robots={robots} />
      </div>
      <Form />
    </>
  );
}

export default App;
