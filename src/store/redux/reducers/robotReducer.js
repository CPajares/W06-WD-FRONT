import actionTypes from "../../action/actionTypes";

const robotReducer = (robots = [], action) => {
  let newRobots = robots;
  switch (action.type) {
    case actionTypes.loadRobots:
      newRobots = [...action.robots];
      break;
    default:
  }
  return newRobots;
};

export default robotReducer;
