import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadRobotsThunks } from "../redux/thunks/robotThunks";

const useRobot = () => {
  const dispatch = useDispatch();
  const robots = useSelector(({ robots }) => robots);

  const loadRobots = useCallback(() => {
    dispatch(loadRobotsThunks());
  }, [dispatch]);

  return {
    dispatch,
    robots,
    loadRobots,
  };
};

export default useRobot;
