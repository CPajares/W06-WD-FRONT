import actionTypes from "../actions/actionTypes";

const robotReducer = (robots = [], action) => {
  let newRobots = robots;
  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    case actionTypes.loadRobotById:
      newRobots = robots.filter((robot) => robot._id === action.id);
      break;
    case actionTypes.deleteRobotById:
      newRobots = robots.filter((robot) => robot._id !== action.id);
      break;
    case actionTypes.createRobot:
      newRobots = [...robots, action.robot];
      break;
    default:
  }

  return newRobots;
};

export default robotReducer;
