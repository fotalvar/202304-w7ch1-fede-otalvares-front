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
      <ul className="robots">
        {robots.map((robot) => (
          <li className="robots__list" key={robot._id}>
            <button className="robot__delete">✖</button>
            <article className="robot__card">
              <img
                className="robot__image"
                src={robot.image}
                alt={`${robot.name}`}
              />
              <span className="robot__name">{robot.name}</span>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
