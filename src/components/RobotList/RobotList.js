import Robot from "../Robot/Robot";
import { useEffect } from "react";
import useRobot from "../../hooks/useRobot";

const RobotList = () => {
  const { robots, loadRobots } = useRobot();
  useEffect(() => {
    loadRobots();
  }, [loadRobots]);

  return robots.map((robot) => (
    <Robot
      key={robot._id}
      day={new Date(robot.features.date).getDate()}
      month={new Date(robot.features.date).getMonth()}
      year={new Date(robot.features.date).getFullYear()}
      robot={robot}
    />
  ));
};

export default RobotList;
