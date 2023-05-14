import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store";
import { useEffect, useState } from "react";
import { getRobotByIdActionCreator } from "../../store/robotsSlice/robotsSlice";
import useApi from "../../hooks/useApi";

const RobotDetails = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const params = useParams<{ idRobot: string }>();
  const { idRobot } = params;
  const { getRobot } = useApi();

  const [isRobotLoading, setIsRobotLoading] = useState(true);

  const robot = useAppSelector((state) => state.robots.robotData);

  useEffect(() => {
    if (idRobot) {
      const getRobotOnce = async () => {
        async () => {
          const response = await getRobot(idRobot);
          const data = response.data as unknown as string;
          dispatch(getRobotByIdActionCreator(data));
          setIsRobotLoading(false);
        };
      };
      if (idRobot && isRobotLoading) {
        getRobotOnce();
      }
    }
  }, [dispatch, getRobot, idRobot, isRobotLoading, params.idRobot]);

  return (
    <>
      {!isRobotLoading && (
        <>
          {robot ? (
            <>
              {" "}
              <button className="robot__delete">✖</button>
              <article className="robot__card">
                <img
                  className="robot__image"
                  src={robot.image}
                  alt={`${robot.name}`}
                />
                <span className="robot__name">{robot.name}</span>
              </article>
            </>
          ) : (
            <span>Robot not found</span>
          )}
        </>
      )}
      {isRobotLoading && <span>Loading...</span>}
    </>
  );
};
export default RobotDetails;
