import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  createRobotThunk,
  deleteRobotByIdThunks,
  loadRobotsThunks,
} from "../redux/thunks/robotThunks";
import { loginUserThunks } from "../redux/thunks/userThunks";

const useRobot = () => {
  const dispatch = useDispatch();
  const { robots, user } = useSelector(({ robots, user }) => ({
    robots,
    user,
  }));

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunks());
  }, [dispatch]);

  const deleteRobotById = useCallback(
    (id) => {
      dispatch(deleteRobotByIdThunks(id));
    },
    [dispatch]
  );

  const createRobot = (robot) => {
    dispatch(createRobotThunk(robot));
  };

  const loginUser = (user) => {
    dispatch(loginUserThunks(user));
  };

  return {
    dispatch,
    robots,
    user,
    loadRobots,
    deleteRobotById,
    createRobot,
    loginUser,
  };
};

export default useRobot;
