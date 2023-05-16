import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { loadRobotsActionCreator } from "../../store/robotsSlice/robotsSlice";
import RobotsList from "../RobotsList/RobotsList";
import RobotDetails from "../RobotDetails/RobotDetails";
import LoginForm from "../Form/Form";

const App = (): JSX.Element => {
  const { getRobots } = useApi();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const robots = await getRobots();
      dispatch(loadRobotsActionCreator(robots));
    })();
  }, [dispatch, getRobots]);

  const robots = useAppSelector((state) => state.robots.robotsData);
  return (
    <>
      <header className="header">
        <img
          className="logo"
          src="/logo.svg"
          alt="Bits and chips logo"
          width="90"
          height="100"
        />
      </header>
      <LoginForm />
      <Router>
        <Routes>
          <Route path="/" element={<RobotsList robots={robots} />} />
          <Route path="/:idRobot" element={<RobotDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
