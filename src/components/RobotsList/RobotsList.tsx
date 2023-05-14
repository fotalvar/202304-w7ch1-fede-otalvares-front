import RobotStructure from "../../store/robotsSlice/types";
import RobotCard from "../RobotCard/RobotCard";
import { Link } from "react-router-dom";

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
            <Link to={`/${robot._id}`}>
              <RobotCard robot={robot} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RobotsList;
