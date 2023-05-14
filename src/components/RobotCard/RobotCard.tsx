import RobotStructure from "../../store/robotsSlice/types";

interface RobotCardProps {
  robot: RobotStructure;
}

const RobotCard = ({ robot }: RobotCardProps): JSX.Element => {
  return (
    <>
      <button className="robot__delete">✖</button>
      <article className="robot__card">
        <img className="robot__image" src={robot.image} alt={`${robot.name}`} />
        <h2 className="robot__name">{robot.name}</h2>
      </article>
    </>
  );
};

export default RobotCard;
