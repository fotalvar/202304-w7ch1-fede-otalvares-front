import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store";

const RobotDetails = (): JSX.Element => {
  const robots = useAppSelector((state) => state.robots.robotsData);
  const { robotId } = useParams();

  const robot = robots.find((robot) => robot._id === robotId);

  if (!robot) {
    return <span>Robot not found</span>;
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
