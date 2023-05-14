import RobotStructure from "../../store/robotsSlice/types";

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
