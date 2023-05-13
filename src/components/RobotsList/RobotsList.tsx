import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRobotsActionCreator } from "../../store/robotsSlice/robotsSlice";

const RobotsList = () => {
  const { getRobots } = useApi();
  const dispatch = useAppDispatch();
  useEffect(() => {
    async () => {
      const robots = await getRobots();
      dispatch(loadRobotsActionCreator(robots));
    };
  }, [dispatch, getRobots]);

  const robots = useAppSelector((state) => {
    return state.robots;
  });

  return (
    <>
      <h2 className="robots__subtitle">Robots</h2>
      <ul className="robots__list">
        {robots.map((robot) => (
          <li className="robots__robot" key={robot._id}>
            <p>{robot.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
