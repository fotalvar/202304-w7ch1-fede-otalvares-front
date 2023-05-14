import { useCallback } from "react";
import axios, { AxiosResponse } from "axios";
import { getRobotByIdActionCreator } from "../store/robotsSlice/robotsSlice";
import { useDispatch } from "react-redux";

export const apiURL = import.meta.env.VITE_API_URL;
interface RobotApiResponse {
  data: unknown;
  status: number;
}

const useApi = () => {
  const dispatch = useDispatch();

  const getRobots = useCallback(async () => {
    const {
      data: { robots },
    } = await axios.get(`${apiURL}/robots`);
    return robots;
  }, []);

  const getRobot = async (
    idRobot: string
  ): Promise<AxiosResponse<RobotApiResponse>> => {
    const response = await axios.get(`${apiURL}/robots/${idRobot}`);
    dispatch(getRobotByIdActionCreator(idRobot));
    return response;
  };

  return { getRobots, getRobot };
};

export default useApi;
