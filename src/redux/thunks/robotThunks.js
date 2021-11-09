import {
  createRobotAction,
  deleteRobotByIdAction,
  loadRobotByIdAction,
  loadRobotsAction,
} from "../actions/actionCreators";

import axios from "axios";

const apiUrl = process.env.REACT_APP_URL_API_HEROKU;

export const loadRobotsThunks = () => {
  return async (dispatch) => {
    const response = await fetch(`robots`);
    const robots = await response.json();
    dispatch(loadRobotsAction(robots));
  };
};

export const loadRobotByIdThunks = (id) => {
  return async (dispatch) => {
    const response = await fetch(`${apiUrl}${id}`);
    const robot = await response.json();
    dispatch(loadRobotByIdAction(robot));
  };
};

export const deleteRobotByIdThunks = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(
      `${apiUrl}delete/${id}?token=${process.env.REACT_APP_TOKEN}`
    );

    dispatch(deleteRobotByIdAction(data.idRobot));
  };
};

export const createRobotThunk = (robot) => async (dispatch) => {
  const response = await fetch(
    `${apiUrl}create?token=${process.env.REACT_APP_TOKEN}`,
    {
      method: "POST",
      body: JSON.stringify(robot),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const newRobot = await response.json();

  dispatch(createRobotAction(newRobot));
};
