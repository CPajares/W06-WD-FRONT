import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteRobotByIdThunks,
  loadRobotsThunks,
} from "../redux/thunks/robotThunks";

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

  return {
    dispatch,
    robots,
    loadRobots,
    deleteRobotById,
  };
};

export default useRobot;
