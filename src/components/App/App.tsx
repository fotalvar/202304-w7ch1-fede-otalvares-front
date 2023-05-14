import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRobotsActionCreator } from "../../store/robotsSlice/robotsSlice";
import RobotsList from "../RobotsList/RobotsList";

const App = (): JSX.Element => {
  const { getRobots } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const robots = await getRobots();
      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [dispatch, getRobots]);

  const robots = useAppSelector((state) => state.robots.robotsData);
  return (
    <>
      <h1 className="title">Robots</h1>
      <RobotsList robots={robots} />
    </>
  );
};

export default App;
