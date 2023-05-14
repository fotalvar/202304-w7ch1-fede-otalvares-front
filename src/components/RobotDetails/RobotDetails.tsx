import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect } from "react";
import { getRobotByIdActionCreator } from "../../store/robotsSlice/robotsSlice";
import useApi from "../../hooks/useApi";

const RobotDetails = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const params = useParams<{ idRobot: string }>();
  const { idRobot } = params;
  const { getRobot } = useApi();

  useEffect(() => {
    const getRobotOnce = async () => {
      (async () => {
        const response = await getRobot(idRobot);
        const data = response.data as unknown as string;
        dispatch(getRobotByIdActionCreator(data));
      })();
    };
    if (idRobot) {
      getRobotOnce();
    }
  }, [dispatch, getRobot, idRobot, params.idRobot]);

  const robot = useAppSelector((state) => state.robots.robotData);

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
