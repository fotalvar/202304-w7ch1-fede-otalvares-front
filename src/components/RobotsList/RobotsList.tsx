import RobotStructure from "../../store/robotsSlice/types";
import RobotCard from "../RobotCard/RobotCard";

interface RobotsListProps {
  robots: RobotStructure[];
  id?: string | undefined;
}

const RobotsList = ({ robots }: RobotsListProps): JSX.Element => {
  return (
    <>
      <ul className="robots">
        {robots.map((robot) => (
          <li className="robots__list" key={robot._id}>
            <RobotCard robot={robot} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
