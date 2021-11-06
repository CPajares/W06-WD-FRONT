import { useEffect } from "react";
import "./App.css";
import Robot from "./components/Robot/Robot";
import useRobot from "./hooks/useRobot";

function App() {
  const { robots, loadRobots } = useRobot();
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);
  return (
    <div className="App">
      {robots.map((robot) => (
        <Robot key={robot._id} robot={robot} />
      ))}
    </div>
  );
}

export default App;
