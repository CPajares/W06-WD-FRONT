import {
  loadRobotByIdAction,
  loadRobotsAction,
} from "../../action/actionCreators";

export const loadRobotsThunks = () => {
  return async (dispatch) => {
    const response = await fetch(
      "https://robot-challange.herokuapp.com/robots/"
    );
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const loadRobotByIdThunks = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://robot-challange.herokuapp.com/robots/${id}`
    );
    const robot = await response.json();
    dispatch(loadRobotByIdAction(robot));
  };
};
