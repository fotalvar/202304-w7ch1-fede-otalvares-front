import RobotStructure from "../../store/robotsSlice/types";

interface RobotsListProps {
  robots: RobotStructure[];
  id?: string | undefined;
}

const RobotsList = ({ robots }: RobotsListProps): JSX.Element => {
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
