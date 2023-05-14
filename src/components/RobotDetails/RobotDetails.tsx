import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { getRobotActionCreator } from "../../store/robotsSlice/robotsSlice";
import useApi from "../../hooks/useApi";

const RobotDetails = (): JSX.Element => {
  const { getRobot } = useApi();
  const dispatch = useAppDispatch();
  const { robotId } = useParams();

  useEffect(() => {
    (async () => {
      if (!robotId) {
        return <span>Robot not Found</span>;
      }
      const robot = await getRobot(robotId);
      dispatch(getRobotActionCreator(robot.data));
    })();
  }, [dispatch, getRobot, robotId]);

  const robot = useAppSelector((state) =>
    state.robots.robotsData.find((robot) => robot._id === robotId)
  );

  if (!robot) {
    return <span>Robot not found meow</span>;
  }

  return (
    <>
      <button className="robot__delete">✖</button>
      <article className="robot__card">
        <img className="robot__image" src={robot.image} alt={`${robot.name}`} />
        <span className="robot__name">{robot.name}</span>
      </article>
    </>
  );
};
export default RobotDetails;
