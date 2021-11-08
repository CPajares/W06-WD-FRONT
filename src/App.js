import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Form from "./components/Form/Form";
import LoginForm from "./components/LoginForm";

import RobotList from "./components/RobotList/RobotList";
import useRobot from "./hooks/useRobot";

function App() {
  const { loadRobots, robots, user } = useRobot();
  const authorized = user.isAuth;
  console.log(authorized);

  useEffect(() => {
    loadRobots();
  }, [loadRobots]);
  return !authorized ? (
    <LoginForm />
  ) : (
    <>
      <div className="App">
        <RobotList robots={robots} />
      </div>
      <Form />
    </>
  );
}

export default App;
