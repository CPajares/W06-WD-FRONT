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
  const robots = useSelector(({ robots }) => robots);

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
    loadRobots,
    deleteRobotById,
    createRobot,
    loginUser,
  };
};

export default useRobot;
