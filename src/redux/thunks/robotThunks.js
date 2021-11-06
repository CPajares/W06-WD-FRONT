import {
  loadRobotByIdAction,
  loadRobotsAction,
} from "../actions/actionCreators";

export const loadRobotsThunks = () => {
  return async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_URL_API_HEROKU);
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const loadRobotByIdThunks = (id) => {
  return async (dispatch) => {
    const response = await fetch(process.env.REACT_APP_URL_API_HEROKU$`${id}`);
    const robot = await response.json();
    dispatch(loadRobotByIdAction(robot));
  };
};
